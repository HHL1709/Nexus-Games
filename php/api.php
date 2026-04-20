<?php
// ============================================================
// NEXUS GAMES — PHP + MySQL Backend API v2.0
// ============================================================
session_start();
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD']==='OPTIONS'){http_response_code(204);exit;}

define('DB_HOST','localhost');
define('DB_NAME','nexusgames');
define('DB_USER','root');   // CHANGE THIS
define('DB_PASS','');       // CHANGE THIS

function ok($d=[],$m='OK'){echo json_encode(['status'=>'success','message'=>$m,'data'=>$d]);exit;}
function err($m,$c=400){http_response_code($c);echo json_encode(['status'=>'error','message'=>$m]);exit;}

function db(){
    static $p=null;
    if($p)return $p;
    try{
        $p=new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4",DB_USER,DB_PASS,
            [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
        return $p;
    }catch(PDOException $e){err('DB connection failed: '.$e->getMessage(),503);}
}

$action=$_GET['action']??$_POST['action']??'';
$b=json_decode(file_get_contents('php://input'),true)??[];
$uid=$_SESSION['uid']??null;
$urole=$_SESSION['role']??null;

function auth(){global $uid;if(!$uid)err('Auth required',401);}
function admin(){global $urole;if($urole!=='admin')err('Admin only',403);}

switch($action){

// ── LOGIN ──────────────────────────────────────
case 'login':
    $u=trim($b['username']??'');$p=$b['password']??'';$r=$b['role']??'player';
    if(!$u||!$p)err('Fields required');
    $s=db()->prepare('SELECT * FROM users WHERE username=? AND role=? LIMIT 1');
    $s->execute([$u,$r]);$row=$s->fetch();
    if(!$row||!password_verify($p,$row['password']))err('Invalid credentials',401);
    $_SESSION['uid']=$row['id'];$_SESSION['role']=$row['role'];$_SESSION['name']=$row['name'];
    unset($row['password']);ok($row,'Login successful');

case 'logout':
    session_destroy();ok([],'Logged out');

case 'me':
    auth();
    $s=db()->prepare('SELECT id,username,role,name,avatar FROM users WHERE id=?');
    $s->execute([$uid]);$row=$s->fetch();
    if(!$row)err('Not found',404);ok($row);

case 'register':
    $name=trim($b['name']??'');$user=trim($b['username']??'');$pass=$b['password']??'';
    if(!$name||!$user||!$pass)err('All fields required');
    if(strlen($pass)<6)err('Password min 6 chars');
    $c=db()->prepare('SELECT id FROM users WHERE username=?');$c->execute([$user]);
    if($c->fetch())err('Username taken');
    $h=password_hash($pass,PASSWORD_DEFAULT);
    db()->prepare('INSERT INTO users(username,password,role,name,avatar)VALUES(?,?,?,?,?)')->execute([$user,$h,'player',$name,'']);
    ok(['id'=>(int)db()->lastInsertId(),'username'=>$user,'name'=>$name,'role'=>'player'],'Account created');

case 'forgot_password':
    $user=trim($b['username']??'');$pass=$b['password']??'';
    if(!$user||!$pass)err('Fields required');
    if(strlen($pass)<6)err('Min 6 chars');
    $c=db()->prepare('SELECT id FROM users WHERE username=?');$c->execute([$user]);
    if(!$c->fetch())err('Username not found');
    db()->prepare('UPDATE users SET password=? WHERE username=?')->execute([password_hash($pass,PASSWORD_DEFAULT),$user]);
    ok([],'Password reset');

case 'update_profile':
    auth();
    $name=trim($b['name']??'');$avatar=$b['avatar']??null;$np=$b['new_password']??'';$cp=$b['current_password']??'';
    $sets=[];$params=[];
    if($name){$sets[]='name=?';$params[]=$name;}
    if($avatar!==null){$sets[]='avatar=?';$params[]=$avatar;}
    if($np){
        $s=db()->prepare('SELECT password FROM users WHERE id=?');$s->execute([$uid]);$row=$s->fetch();
        if(!password_verify($cp,$row['password']))err('Wrong current password');
        if(strlen($np)<6)err('New password too short');
        $sets[]='password=?';$params[]=password_hash($np,PASSWORD_DEFAULT);
    }
    if(empty($sets))ok([],'Nothing changed');
    $params[]=$uid;
    db()->prepare('UPDATE users SET '.implode(',',$sets).' WHERE id=?')->execute($params);
    if($name)$_SESSION['name']=$name;
    ok(['name'=>$name],'Updated');

case 'get_users':
    auth();admin();
    ok(db()->query('SELECT id,username,role,name,avatar,created_at FROM users ORDER BY id')->fetchAll());

// ── GAMES ──────────────────────────────────────
case 'get_games':
    $rows=db()->query(
        'SELECT g.*,GROUP_CONCAT(DISTINCT t.tag ORDER BY t.tag SEPARATOR ",") AS tags_str
         FROM games g LEFT JOIN game_tags t ON t.game_id=g.id
         WHERE g.active=1 GROUP BY g.id ORDER BY g.id')->fetchAll();
    foreach($rows as &$g){
        $g['tags']=$g['tags_str']?explode(',',$g['tags_str']):[];
        unset($g['tags_str'],$g['html_file_content']);
        $s=db()->prepare('SELECT url FROM game_screenshots WHERE game_id=? ORDER BY sort_order');
        $s->execute([$g['id']]);$g['screenshots']=array_column($s->fetchAll(),'url');
        $c=db()->prepare('SELECT c.text,c.rating,c.created_at as date,u.name as user,u.avatar FROM game_comments c JOIN users u ON u.id=c.user_id WHERE c.game_id=? ORDER BY c.created_at DESC LIMIT 20');
        $c->execute([$g['id']]);$g['comments']=$c->fetchAll();
    }
    ok($rows);

case 'get_game_html':
    // Return HTML content for a specific game (for Blob playback)
    $gid=intval($_GET['id']??0);if(!$gid)err('ID required');
    $s=db()->prepare('SELECT html_file_content,title FROM games WHERE id=? AND active=1');
    $s->execute([$gid]);$row=$s->fetch();
    if(!$row)err('Not found',404);
    if(!$row['html_file_content'])err('No HTML file stored',404);
    // Return as HTML directly
    header('Content-Type: text/html; charset=UTF-8');
    header('Content-Disposition: inline');
    echo $row['html_file_content'];
    exit;

case 'add_game':
    auth();admin();
    $title=trim($b['title']??'');if(!$title)err('Title required');
    db()->prepare('INSERT INTO games(title,cat,description,rating,badge,age_rating,developer,version,game_url,html_file_name,html_file_content,logo,plays,release_date,active)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,0,?,1)')
        ->execute([$title,$b['cat']??'Action',$b['desc']??'',floatval($b['rating']??4.5),$b['badge']??'',$b['age']??'All',$b['dev']??'',$b['ver']??'',$b['url']??'',$b['htmlFileName']??'',$b['htmlFileContent']??'',$b['logo']??'',date('M Y')]);
    $gid=(int)db()->lastInsertId();
    if(!empty($b['tags'])&&is_array($b['tags'])){
        $ti=db()->prepare('INSERT INTO game_tags(game_id,tag)VALUES(?,?)');
        foreach($b['tags'] as $tag)if(trim($tag))$ti->execute([$gid,trim($tag)]);
    }
    if(!empty($b['screenshots'])&&is_array($b['screenshots'])){
        $si=db()->prepare('INSERT INTO game_screenshots(game_id,url,sort_order)VALUES(?,?,?)');
        foreach($b['screenshots'] as $i=>$url)if($url)$si->execute([$gid,$url,$i]);
    }
    ok(['id'=>$gid],'Game added');

case 'update_game':
    auth();admin();
    $gid=intval($b['id']??0);if(!$gid)err('ID required');
    $sets=['title=?','cat=?','description=?','rating=?','badge=?','age_rating=?','developer=?','version=?','game_url=?','html_file_name=?','logo=?'];
    $params=[$b['title']??'',$b['cat']??'Action',$b['desc']??'',floatval($b['rating']??4.5),$b['badge']??'',$b['age']??'All',$b['dev']??'',$b['ver']??'',$b['url']??'',$b['htmlFileName']??'',$b['logo']??''];
    if(!empty($b['htmlFileContent'])){$sets[]='html_file_content=?';$params[]=$b['htmlFileContent'];}
    $params[]=$gid;
    db()->prepare('UPDATE games SET '.implode(',',$sets).' WHERE id=?')->execute($params);
    db()->prepare('DELETE FROM game_tags WHERE game_id=?')->execute([$gid]);
    if(!empty($b['tags'])&&is_array($b['tags'])){
        $ti=db()->prepare('INSERT INTO game_tags(game_id,tag)VALUES(?,?)');
        foreach($b['tags'] as $tag)if(trim($tag))$ti->execute([$gid,trim($tag)]);
    }
    db()->prepare('DELETE FROM game_screenshots WHERE game_id=?')->execute([$gid]);
    if(!empty($b['screenshots'])&&is_array($b['screenshots'])){
        $si=db()->prepare('INSERT INTO game_screenshots(game_id,url,sort_order)VALUES(?,?,?)');
        foreach($b['screenshots'] as $i=>$url)if($url)$si->execute([$gid,$url,$i]);
    }
    ok(['id'=>$gid],'Game updated');

case 'delete_game':
    auth();admin();
    $gid=intval($b['id']??0);if(!$gid)err('ID required');
    db()->prepare('UPDATE games SET active=0 WHERE id=?')->execute([$gid]);ok([],'Deleted');

case 'add_comment':
    auth();
    $gid=intval($b['game_id']??0);$text=trim($b['text']??'');$rate=max(1,min(5,intval($b['rating']??5)));
    if(!$gid||!$text)err('Required fields missing');
    db()->prepare('INSERT INTO game_comments(game_id,user_id,text,rating)VALUES(?,?,?,?)')->execute([$gid,$uid,$text,$rate]);
    ok(['id'=>(int)db()->lastInsertId(),'text'=>$text,'rating'=>$rate,'date'=>date('d M Y'),'user'=>$_SESSION['name']],'Comment added');

// ── SLIDER ─────────────────────────────────────
case 'get_slider':
    ok(db()->query('SELECT s.*,g.title as game_title FROM slider_items s JOIN games g ON g.id=s.game_id WHERE s.active=1 ORDER BY s.sort_order')->fetchAll());

case 'add_slider':
    auth();admin();
    $gid=intval($b['gameId']??0);if(!$gid)err('Game ID required');
    $sort=(int)db()->query('SELECT COALESCE(MAX(sort_order),0)+1 FROM slider_items')->fetchColumn();
    db()->prepare('INSERT INTO slider_items(game_id,tag,tag_icon,subtitle,sort_order,active)VALUES(?,?,?,?,?,1)')
        ->execute([$gid,strtoupper($b['tag']??'FEATURED'),$b['tagIcon']??'fa-solid fa-star',$b['subtitle']??'Play now!',$sort]);
    ok(['id'=>(int)db()->lastInsertId()],'Slide added');

case 'delete_slider':
    auth();admin();
    db()->prepare('UPDATE slider_items SET active=0 WHERE id=?')->execute([intval($b['id']??0)]);ok([],'Removed');

default:
    err('Unknown action: '.htmlspecialchars($action),404);
}
?>

# NEXUS GAMES — Setup Guide

## Two Storage Options

### Option 1 — Browser (No Server Needed) ✅ RECOMMENDED FOR COLLEGE
Open `index.html` directly in browser. All data saves in **localStorage** automatically.
- Games refresh ke baad bhi rehte hain
- No PHP/MySQL needed
- Works offline

**Demo Login:**
- Player: `player1` / `pass123`
- Admin: `admin` / `admin123`

---

### Option 2 — MySQL Database (For Production Server)

**Requirements:** PHP 7.4+, MySQL 5.7+, Apache/Nginx

**Step 1 — Edit DB config in `php/api.php`:**
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'nexusgames');
define('DB_USER', 'your_username');  // <-- Change
define('DB_PASS', 'your_password');  // <-- Change
```

**Step 2 — Create database:**
```bash
mysql -u root -p < php/setup.sql
```

**Step 3 — Upload all files to server**

**Step 4 — Open `http://yoursite.com/gameportal/`**

---

## How localStorage Works (Option 1)

When admin adds/edits a game:
- Game saved to browser's localStorage automatically
- Refresh karo → data wapas aa jaata hai
- Different browser → data nahi hoga (browser-specific)
- Clear browser data → game data reset ho jaata hai

**Admin Panel mein "Reset DB" button** → Sab data default pe wapas

---

## File Structure

```
gameportal/
├── index.html              ← Main app (open this)
├── css/style.css           ← All styles
├── js/main.js              ← All JavaScript + localStorage
├── games/                  ← 10 playable HTML5 games
│   ├── cyber-strike.html
│   ├── turbo-drift.html
│   ├── mind-maze.html
│   ├── galaxy-shooter.html
│   ├── neon-arcade.html
│   ├── dragon-realm.html
│   ├── hyper-dash.html
│   ├── tower-defense.html
│   ├── gem-crush.html
│   └── super-retro-run.html
└── php/
    ├── api.php             ← PHP REST API (for MySQL option)
    └── setup.sql           ← Database schema + seed data
```

---

## Adding Games (Admin)

1. Login as `admin` / `admin123`
2. Admin Panel → Games Management → **Add Game**
3. Fill title, category, description, rating
4. **Game Source — two options:**
   - **URL/Path tab:** Type `games/mygame.html`
   - **Upload HTML tab:** Upload your `.html` game file directly
5. Upload logo image (shows on cards + slider)
6. Upload screenshots (any orientation — auto-adjusted)
7. Click Save → Game saved permanently

---

## 10 Playable Games

| # | Game | Category |
|---|------|----------|
| 1 | Cyber Strike | Action — Top-down shooter |
| 2 | Turbo Drift X | Racing — Circuit racing |
| 3 | Mind Maze Pro | Puzzle — Maze solver |
| 4 | Galaxy Shooter | Shooter — Space shooter |
| 5 | Neon Arcade Blast | Arcade — Brick breaker |
| 6 | Dragon Realm RPG | RPG — Turn-based RPG |
| 7 | Hyper Dash | Arcade — Endless runner |
| 8 | Tower Defense | Strategy — Tower defense |
| 9 | Gem Crush | Puzzle — Match-3 |
| 10 | Super Retro Run | Arcade — Platformer runner |

---

## Customization

**Change Gmail (Contact Page):**
In `js/main.js` find: `const GMAIL = 'your.email@gmail.com'`
Replace with your actual Gmail address.

**Change Site Name:**
Search `Nexus Games` in `index.html` and `main.js`.

**Change Creator Info (About Page):**
In `main.js` find `renderAbout` function.

---

*NEXUS GAMES v4.0 — HTML5, CSS3, JavaScript, PHP*

---

## GitHub Pages Pe Publish Kaise Karein

### Step 1 — GitHub Account
github.com par account banao (free hai).

### Step 2 — New Repository
1. GitHub par "New Repository" click karo
2. Name dalo: `nexus-games` (ya koi bhi naam)
3. **Public** rakho (GitHub Pages ke liye zaroori)
4. "Create Repository" click karo

### Step 3 — Files Upload
1. Repository mein "uploading an existing file" click karo
2. Sab files drag & drop karo (index.html, css/, js/, games/ folders)
3. "Commit changes" click karo

### Step 4 — GitHub Pages Enable
1. Repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` → `/root`
4. Save click karo

### Step 5 — Live URL
Thodi der mein aapki site live ho jaayegi:
`https://yourusername.github.io/nexus-games/`

### Important Note — Game Data on GitHub Pages
- localStorage kaam karega — games add/edit sab save hoga
- **Sirf usi browser mein** jahan aap site open karein
- Dusre users ka data alag hoga (sab ka apna localStorage)
- Agar sab users ke liye same data chahiye → PHP+MySQL server chahiye

### localStorage vs GitHub Pages
| Feature | GitHub Pages | PHP+MySQL Server |
|---------|-------------|-----------------|
| Cost | Free | Paid hosting |
| Games Add/Edit | ✅ Saves locally | ✅ Saves for all |
| Multi-user sync | ❌ Each browser separate | ✅ All users same data |
| Easy setup | ✅ Very easy | ❌ Complex |


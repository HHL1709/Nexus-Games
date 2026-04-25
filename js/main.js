'use strict';
// ============================================
// NEXUS GAMES — Premium Blue Edition v6.0
// Font Awesome Icons (via duoIcon wrapper)
// ============================================

// Inject icons into login page static slots
function injectLoginIcons() {
  const slots = {
    brandIcon:    {el: ge('brandIcon'),    svg: `<i class="fa-solid fa-gamepad" style="font-size:28px;color:#fff"></i>`},
    tabIcoLogin:  {el: ge('tabIcoLogin'),  svg: duoIcon('right-bracket','xs')},
    tabIcoReg:    {el: ge('tabIcoReg'),    svg: duoIcon('user-plus','xs')},
    tabIcoForgot: {el: ge('tabIcoForgot'), svg: duoIcon('key','xs')},
    loginErrIco:  {el: ge('loginErrIco'),  svg: duoIcon('warning','sm')},
    regErrIco:    {el: ge('regErrIco'),    svg: duoIcon('warning','sm')},
    regOkIco:     {el: ge('regOkIco'),     svg: duoIcon('check-circle','sm')},
    forgotErrIco: {el: ge('forgotErrIco'), svg: duoIcon('warning','sm')},
    forgotOkIco:  {el: ge('forgotOkIco'),  svg: duoIcon('check-circle','sm')},
    forgotInfoIco:{el: ge('forgotInfoIco'),svg: duoIcon('info','sm')},
    rolePlayerIco:{el: ge('rolePlayerIco'),svg: duoIcon('user','xs')},
    roleAdminIco: {el: ge('roleAdminIco'), svg: duoIcon('shield','xs')},
    loginUserIco: {el: ge('loginUserIco'), svg: duoIcon('user','xs')},
    loginPassIco: {el: ge('loginPassIco'), svg: duoIcon('lock','xs')},
    loginBtnIco:  {el: ge('loginBtnIco'),  svg: duoIcon('right-bracket','xs')},
    regNameIco:   {el: ge('regNameIco'),   svg: duoIcon('id-card','xs')},
    regUserIco:   {el: ge('regUserIco'),   svg: duoIcon('user','xs')},
    regPassIco:   {el: ge('regPassIco'),   svg: duoIcon('lock','xs')},
    regPass2Ico:  {el: ge('regPass2Ico'),  svg: duoIcon('lock','xs')},
    regBtnIco:    {el: ge('regBtnIco'),    svg: duoIcon('user-plus','xs')},
    fUserIco:     {el: ge('fUserIco'),     svg: duoIcon('user','xs')},
    fPassIco:     {el: ge('fPassIco'),     svg: duoIcon('key','xs')},
    fPass2Ico:    {el: ge('fPass2Ico'),    svg: duoIcon('key','xs')},
    forgotBtnIco: {el: ge('forgotBtnIco'), svg: duoIcon('bolt','xs')},
    modalCloseBtn:{el: ge('modalCloseBtn'),svg: duoIcon('xmark','sm')},
    modalCancelBtn:{el:ge('modalCancelBtn'),svg: `${duoIcon('xmark','xs')} Cancel`},
    modalOkBtn:   {el: ge('modalOkBtn'),   svg: `${duoIcon('check','xs')} Save`},
  };
  Object.values(slots).forEach(({el, svg}) => { if (el) el.innerHTML = svg; });
}

/* ─── CATEGORY ICON MAP ─────────────────────── */
const CAT = {
  Action:    {i:'fa-solid fa-burst',          c:'#ef4444', b:'rgba(239,68,68,.12)'},
  Racing:    {i:'fa-solid fa-flag-checkered', c:'#f59e0b', b:'rgba(245,158,11,.12)'},
  Puzzle:    {i:'fa-solid fa-puzzle-piece',   c:'#8b5cf6', b:'rgba(139,92,246,.12)'},
  Adventure: {i:'fa-solid fa-compass',        c:'#10b981', b:'rgba(16,185,129,.12)'},
  Shooter:   {i:'fa-solid fa-crosshairs',     c:'#0ea5e9', b:'rgba(14,165,233,.12)'},
  Strategy:  {i:'fa-solid fa-chess',          c:'#3b82f6', b:'rgba(59,130,246,.12)'},
  Sports:    {i:'fa-solid fa-trophy',         c:'#34d399', b:'rgba(52,211,153,.12)'},
  RPG:       {i:'fa-solid fa-hat-wizard',     c:'#a78bfa', b:'rgba(167,139,250,.12)'},
  Horror:    {i:'fa-solid fa-skull',          c:'#94a3b8', b:'rgba(148,163,184,.12)'},
  Arcade:    {i:'fa-solid fa-gamepad',        c:'#fb923c', b:'rgba(251,146,60,.12)'},
};
const ci = cat => CAT[cat] || {i:'fa-solid fa-gamepad', c:'#0ea5e9', b:'rgba(14,165,233,.12)'};

/* ─── DATA STORE ────────────────────────────── */
const DB = {
  users: [
    {id:1,username:'admin',  password:'admin123',role:'admin', name:'Admin User', avatar:''},
    {id:2,username:'player1',password:'pass123', role:'player',name:'Alex Storm', avatar:''},
    {id:3,username:'player2',password:'pass123', role:'player',name:'Nova Ray',   avatar:''},
  ],
  categories:[
    {id:1,name:'Action'},{id:2,name:'Racing'},{id:3,name:'Puzzle'},{id:4,name:'Adventure'},
    {id:5,name:'Shooter'},{id:6,name:'Strategy'},{id:7,name:'Sports'},{id:8,name:'RPG'},
    {id:9,name:'Horror'},{id:10,name:'Arcade'},
  ],
  games:[
    {id:1,  title:'Cyber Strike',       cat:'Action',    rating:4.8,plays:125000,badge:'hot',desc:'An intense cyberpunk action game set in 2089. Fight through neon-lit corridors with fluid combat mechanics, explosive abilities, and a gripping storyline. Upgrade your cyber-implants and become the ultimate warrior.',tags:['Multiplayer','FPS','Sci-Fi'],    url:'games/cyber-strike.html',  logo:'',screenshots:[],dev:'NexusStudios',ver:'2.1.0',age:'16+',date:'Jan 2024',comments:[{user:'Alex Storm',rating:5,text:'Best action game on the platform! Smooth controls.',date:'2 days ago',av:'A'},{user:'Nova Ray',rating:4,text:'Really fun! Boss fights are challenging.',date:'5 days ago',av:'N'}]},
    {id:2,  title:'Turbo Drift X',      cat:'Racing',    rating:4.7,plays:98000, badge:'new',desc:'High-octane street racing with realistic physics. Race through 20 stunning tracks day and night. Customize your vehicle with 200+ parts and compete online.',                                                           tags:['Racing','3D','Multiplayer'],     url:'games/turbo-drift.html',   logo:'',screenshots:[],dev:'SpeedForge',  ver:'3.0.1',age:'7+', date:'Mar 2024',comments:[{user:'Alex Storm',rating:5,text:'Amazing drift mechanics! Feels like a real simulator.',date:'1 day ago',av:'A'}]},
    {id:3,  title:'Mind Maze Pro',      cat:'Puzzle',    rating:4.6,plays:67000, badge:'',   desc:'Mind-bending puzzle game challenging spatial reasoning and logic. 500+ handcrafted levels with increasing complexity, visual effects, and satisfying feedback.',                                                       tags:['Puzzle','Brain','Casual'],       url:'games/mind-maze.html',     logo:'',screenshots:[],dev:'BrainLabs',  ver:'1.5.2',age:'All',date:'Feb 2024',comments:[]},
    {id:4,  title:'Shadow Quest',       cat:'Adventure', rating:4.9,plays:210000,badge:'top',desc:'Epic open-world adventure with stunning graphics and deep lore. Explore 8 unique kingdoms, battle 150+ enemies, and uncover ancient mysteries. Rich crafting system and companion AI.',                               tags:['Open World','RPG','Story'],      url:'games/shadow-quest.html',  logo:'',screenshots:[],dev:'DarkHorizon',ver:'4.2.1',age:'13+',date:'Dec 2023',comments:[{user:'Nova Ray',rating:5,text:'The world is beautiful! Hours of gameplay.',date:'3 days ago',av:'N'}]},
    {id:5,  title:'Galaxy Shooter',     cat:'Shooter',   rating:4.5,plays:87000, badge:'hot',desc:'Defend the galaxy from alien invasion in this epic space shooter. Features 3D environments, powerful weapons, and intense boss battles. Unlock 30+ spaceships.',                                                      tags:['Space','Shooter','Action'],      url:'games/galaxy-shooter.html',logo:'',screenshots:[],dev:'StarForge',   ver:'2.3.0',age:'10+',date:'Nov 2023',comments:[]},
    {id:6,  title:'Chess Legends',      cat:'Strategy',  rating:4.4,plays:43000, badge:'',   desc:'Classic chess reimagined with stunning 3D pieces, animated battles, and ranked matchmaking. Special legendary pieces with unique abilities.',                                                                        tags:['Chess','Strategy','Online'],     url:'games/chess.html',         logo:'',screenshots:[],dev:'MindCraft',  ver:'1.8.0',age:'All',date:'Oct 2023',comments:[]},
    {id:7,  title:'Pixel Soccer',       cat:'Sports',    rating:4.3,plays:76000, badge:'new',desc:'Fast-paced soccer with fluid controls and realistic physics. 200+ national teams, tournaments, and world champion mode. Gorgeous stadium environments.',                                                              tags:['Soccer','Sports','Multiplayer'], url:'games/soccer.html',        logo:'',screenshots:[],dev:'GoalForge',  ver:'2.0.5',age:'7+', date:'Feb 2024',comments:[]},
    {id:8,  title:'Dragon Realm RPG',   cat:'RPG',       rating:4.8,plays:156000,badge:'top',desc:'Command armies of dragons in this breathtaking RPG. Level up 50 unique dragon types with elemental abilities. 40-hour storyline, side quests, and epic guild wars.',                                                tags:['Dragon','RPG','Fantasy'],        url:'games/dragon-realm.html',  logo:'',screenshots:[],dev:'DragonForge',ver:'3.1.2',age:'13+',date:'Jan 2024',comments:[{user:'Alex Storm',rating:5,text:'Dragon designs are incredible! Love the depth.',date:'1 week ago',av:'A'}]},
    {id:9,  title:'Haunted Asylum',     cat:'Horror',    rating:4.2,plays:52000, badge:'',   desc:'Survive the night in a terrifying abandoned asylum. Atmospheric horror with dynamic lighting, spatial audio, and jump scares. Solve puzzles to escape.',                                                             tags:['Horror','Survival','Puzzle'],    url:'games/horror.html',        logo:'',screenshots:[],dev:'DarkMatter',  ver:'1.2.3',age:'18+',date:'Oct 2023',comments:[]},
    {id:10, title:'Neon Arcade Blast',  cat:'Arcade',    rating:4.6,plays:93000, badge:'hot',desc:'Retro-inspired arcade action with a modern twist. Multiple game modes: shoot-em-up, survival, endless runner. Neon visuals with a thumping synthwave soundtrack.',                                                  tags:['Arcade','Retro','Highscore'],    url:'games/neon-arcade.html',   logo:'',screenshots:[],dev:'PixelPulse',  ver:'1.0.8',age:'All',date:'Mar 2024',comments:[]},
    {id:11, title:'Battle Tank 3D',     cat:'Action',    rating:4.5,plays:71000, badge:'',   desc:'Command powerful tanks in 3D battlefields. Realistic physics, destructible terrain, team multiplayer. Unlock 25 historical and futuristic tank models.',                                                             tags:['Tank','Action','3D'],            url:'games/tank.html',          logo:'',screenshots:[],dev:'IronForge',   ver:'2.4.0',age:'12+',date:'Feb 2024',comments:[]},
    {id:12, title:'Speed Formula',      cat:'Racing',    rating:4.6,plays:84000, badge:'new',desc:'Formula 1 style racing with photo-realistic tracks. Dynamic weather, pit stop strategy, and intense wheel-to-wheel racing. 30 global circuits.',                                                                    tags:['F1','Racing','Simulation'],      url:'games/formula.html',       logo:'',screenshots:[],dev:'ApexRace',    ver:'1.3.5',age:'7+', date:'Jan 2024',comments:[]},
    {id:13, title:'Block Blaster',      cat:'Puzzle',    rating:4.4,plays:48000, badge:'',   desc:'Colorful and addictive block-matching puzzle. 1000 handcrafted levels, power-ups, daily challenges, and beautiful particle explosions.',                                                                            tags:['Puzzle','Match','Casual'],       url:'games/blocks.html',        logo:'',screenshots:[],dev:'PuzzleCraft', ver:'2.6.1',age:'All',date:'Mar 2024',comments:[]},
    {id:14, title:'Jungle Explorer',    cat:'Adventure', rating:4.5,plays:63000, badge:'',   desc:'Explore dense jungles, ancient temples, and hidden caves. Discover artifacts, solve environmental puzzles, and survive dangerous wildlife.',                                                                         tags:['Adventure','Exploration','Nature'],url:'games/jungle.html',      logo:'',screenshots:[],dev:'WildPath',    ver:'1.7.0',age:'10+',date:'Dec 2023',comments:[]},
    {id:15, title:'Sniper Elite',       cat:'Shooter',   rating:4.7,plays:112000,badge:'top',desc:'Elite sniper action with realistic ballistics. Wind, gravity, and breathing affect shots. 50 missions across desert, arctic, and jungle. X-ray bullet cam on perfect shots.',                                      tags:['Sniper','Realistic','Tactical'],  url:'games/sniper.html',        logo:'',screenshots:[],dev:'PrecisionGames',ver:'3.0.0',age:'18+',date:'Nov 2023',comments:[]},
    {id:16, title:'Empire Builder',     cat:'Strategy',  rating:4.3,plays:38000, badge:'',   desc:'Build and manage your medieval empire. Gather resources, construct buildings, train armies, and conquer kingdoms. Dynamic diplomacy and a deep technology tree.',                                                    tags:['Strategy','RTS','Medieval'],     url:'games/empire.html',        logo:'',screenshots:[],dev:'Kingcraft',   ver:'2.1.0',age:'10+',date:'Jan 2024',comments:[]},
    {id:17, title:'Basketball Pro',     cat:'Sports',    rating:4.5,plays:88000, badge:'hot',desc:'Realistic basketball with fluid animations and crowd atmosphere. 1v1, 3v3, 5v5 modes. Career mode from amateur to professional star.',                                                                              tags:['Basketball','Sports','Career'],  url:'games/basketball.html',    logo:'',screenshots:[],dev:'CourtKings',  ver:'2.5.0',age:'7+', date:'Feb 2024',comments:[]},
    {id:18, title:'Mystic Warrior',     cat:'RPG',       rating:4.7,plays:99000, badge:'new',desc:'Deep fantasy RPG with 12 character classes, 1000+ skills, and stunning spell effects. 100+ hours of content. Guild system, PvP arena, and weekly raids.',                                                          tags:['Fantasy','MMORPG','Guild'],      url:'games/mystic.html',        logo:'',screenshots:[],dev:'MysticForge', ver:'4.0.1',age:'13+',date:'Mar 2024',comments:[]},
    {id:19, title:'Phantom Nightmare',  cat:'Horror',    rating:4.3,plays:41000, badge:'',   desc:'Psychological horror set in a surreal nightmare world. Non-linear story changes based on choices. Stunning dark art direction with haunting orchestral score.',                                                      tags:['Psychological','Horror','Story'], url:'games/phantom.html',       logo:'',screenshots:[],dev:'DreadWorks',  ver:'1.4.0',age:'18+',date:'Oct 2023',comments:[]},
    {id:20, title:'Super Retro Run',    cat:'Arcade',    rating:4.5,plays:115000,badge:'top',desc:'Endless runner with gorgeous pixel art, power-ups, and challenging obstacles. 50 unique characters to unlock, daily challenges, pumping chiptune soundtrack.',                                                      tags:['Runner','Arcade','Endless'],     url:'games/super-retro-run.html',logo:'',screenshots:[],dev:'PixelRush',  ver:'3.2.0',age:'All',date:'Jan 2024',comments:[]},
    {id:21, title:'Ninja Strike',       cat:'Action',    rating:4.6,plays:82000, badge:'',   desc:'Fast-paced ninja action with combo-based combat. Acrobatic wall-runs, shadow clones, elemental attacks. 60 missions, boss fights, global leaderboards.',                                                           tags:['Ninja','Action','Combo'],        url:'games/ninja.html',         logo:'',screenshots:[],dev:'ShadowBlade', ver:'1.9.0',age:'12+',date:'Feb 2024',comments:[]},
    {id:22, title:'Drift King',         cat:'Racing',    rating:4.8,plays:140000,badge:'hot',desc:'Pure drifting simulation with authentic tire physics and smoke effects. 40 drift tracks, 80 cars, deep tuning system. Compete online for the crown.',                                                               tags:['Drift','Cars','Competitive'],    url:'games/drift-king.html',    logo:'',screenshots:[],dev:'DriftWorks',  ver:'2.8.0',age:'7+', date:'Mar 2024',comments:[]},
    {id:23, title:'Portal Rush',        cat:'Puzzle',    rating:4.7,plays:72000, badge:'new',desc:'Mind-bending puzzle game using portals to navigate impossible spaces. 300 levels of complexity. Custom level editor to share with the community.',                                                                  tags:['Portal','Physics','Creative'],   url:'games/portal.html',        logo:'',screenshots:[],dev:'DimensionX',  ver:'2.0.0',age:'All',date:'Jan 2024',comments:[]},
    {id:24, title:'Ocean Odyssey',      cat:'Adventure', rating:4.6,plays:58000, badge:'',   desc:'Breathtaking underwater world. Explore coral reefs, deep-sea trenches, and sunken ships. Encounter hundreds of sea creatures and collect ocean treasures.',                                                         tags:['Underwater','Exploration','3D'], url:'games/ocean.html',         logo:'',screenshots:[],dev:'DeepBlue',    ver:'1.5.0',age:'All',date:'Dec 2023',comments:[]},
    {id:25, title:'War Zone',           cat:'Shooter',   rating:4.5,plays:103000,badge:'hot',desc:'Tactical military shooter with realistic weapon handling and team strategy. 10 maps, 6 game modes, competitive ranked system.',                                                                                     tags:['Tactical','Military','Team'],    url:'games/warzone.html',       logo:'',screenshots:[],dev:'CombatForge', ver:'3.5.0',age:'18+',date:'Nov 2023',comments:[]},
    {id:26, title:'Space Conqueror',    cat:'Strategy',  rating:4.4,plays:47000, badge:'',   desc:'Real-time strategy in space. Manage colonies, build fleets, research technology, and wage interstellar war. Procedurally generated galaxies.',                                                                      tags:['RTS','Space','4X'],              url:'games/space-strat.html',   logo:'',screenshots:[],dev:'GalaxyCraft', ver:'2.3.0',age:'10+',date:'Jan 2024',comments:[]},
    {id:27, title:'Tennis World',       cat:'Sports',    rating:4.4,plays:56000, badge:'',   desc:'Realistic tennis simulation with accurate shot physics, spin mechanics, and stamina. Career mode, grand slam tournaments, and online ranked matches.',                                                               tags:['Tennis','Sports','Simulation'],  url:'games/tennis.html',        logo:'',screenshots:[],dev:'CourtAce',    ver:'1.6.0',age:'7+', date:'Feb 2024',comments:[]},
    {id:28, title:'Elden Legend',       cat:'RPG',       rating:4.9,plays:245000,badge:'top',desc:'Epic dark fantasy RPG. Challenging combat, deep lore, stunning open world. 80+ hours of content, 30 bosses, hundreds of unique items and builds.',                                                                 tags:['Dark Fantasy','Souls-like','Epic'],url:'games/elden.html',        logo:'',screenshots:[],dev:'MythForge',   ver:'5.0.0',age:'16+',date:'Mar 2024',comments:[{user:'Alex Storm',rating:5,text:'Best game on the platform!',date:'1 day ago',av:'A'},{user:'Nova Ray',rating:5,text:'Absolutely incredible.',date:'2 days ago',av:'N'}]},
    {id:29, title:'Dead Space Station', cat:'Horror',    rating:4.6,plays:68000, badge:'new',desc:'Sci-fi survival horror aboard an abandoned space station. Resource management, crafting, intense atmospheric horror. Zero-gravity sections create a terrifying experience.',                                         tags:['Sci-Fi','Horror','Survival'],    url:'games/dead-space.html',    logo:'',screenshots:[],dev:'VoidWorks',   ver:'1.1.0',age:'18+',date:'Feb 2024',comments:[]},
    {id:30, title:'Hyper Dash',         cat:'Arcade',    rating:4.7,plays:128000,badge:'hot',desc:'Adrenaline-pumping arcade game. Dash through neon obstacles at extreme speeds. Procedurally generated levels, global leaderboards, hypnotic visuals.',                                                             tags:['Speed','Reflex','Neon'],         url:'games/hyper-dash.html',    logo:'',screenshots:[],dev:'NeonRush',    ver:'2.1.0',age:'All',date:'Mar 2024',comments:[]},
    {id:31, title:'Mech Warrior X',     cat:'Action',    rating:4.7,plays:91000, badge:'new',desc:'Giant mech battles with deep customization. Build your mech from hundreds of parts, master unique weapon systems. Campaign and Online modes.',                                                                      tags:['Mech','Sci-Fi','Combat'],        url:'games/mech.html',          logo:'',screenshots:[],dev:'SteelForge',  ver:'2.0.0',age:'12+',date:'Mar 2024',comments:[]},
    {id:32, title:'Motocross Extreme',  cat:'Racing',    rating:4.5,plays:73000, badge:'',   desc:'Extreme motocross with realistic bike physics, mud simulation, and trick system. Compete on dirt tracks, stadium circuits, open environments.',                                                                     tags:['Moto','Extreme','Tricks'],       url:'games/moto.html',          logo:'',screenshots:[],dev:'DirtBike',    ver:'1.4.0',age:'10+',date:'Feb 2024',comments:[]},
    {id:33, title:'Gem Crush',          cat:'Puzzle',    rating:4.3,plays:118000,badge:'top',desc:'Ultimate gem matching puzzle with dazzling effects and 2000 levels. Special combinations create chain reactions. Events, tournaments, daily puzzles.',                                                              tags:['Match-3','Gems','Casual'],       url:'games/gem-crush.html',     logo:'',screenshots:[],dev:'ShinyGames',  ver:'4.5.0',age:'All',date:'Jan 2024',comments:[]},
    {id:34, title:'Arctic Survival',    cat:'Adventure', rating:4.5,plays:62000, badge:'',   desc:'Survive brutal Arctic conditions. Manage warmth, food, and water. Build shelters, hunt wildlife, craft tools. 100km² frozen wilderness with dynamic blizzards.',                                                   tags:['Survival','Craft','Open World'], url:'games/arctic.html',        logo:'',screenshots:[],dev:'FrostBite',   ver:'1.8.0',age:'13+',date:'Dec 2023',comments:[]},
    {id:35, title:'Commando Rush',      cat:'Shooter',   rating:4.4,plays:79000, badge:'',   desc:'Run-and-gun action with elite commandos. 40 action-packed missions, destructible environments, intense firefights. Co-op mode for 4 players.',                                                                     tags:['Commando','Co-op','Intense'],    url:'games/commando.html',      logo:'',screenshots:[],dev:'EliteSquad',  ver:'2.2.0',age:'16+',date:'Feb 2024',comments:[]},
    {id:36, title:'Tower Defense',      cat:'Strategy',  rating:4.6,plays:95000, badge:'hot',desc:'Definitive tower defense experience. 200 waves, 100 unique tower types, elemental synergy system. Gorgeous environments and satisfying gameplay.',                                                                 tags:['Tower Defense','Wave','Strategy'],url:'games/tower-defense.html',logo:'',screenshots:[],dev:'FortressGames',ver:'3.3.0',age:'All',date:'Jan 2024',comments:[]},
    {id:37, title:'Boxing Champion',    cat:'Sports',    rating:4.6,plays:84000, badge:'new',desc:'Realistic boxing with motion-captured punches, authentic footwork, stamina management. Career from street brawler to world champion.',                                                                              tags:['Boxing','Sports','Realistic'],   url:'games/boxing.html',        logo:'',screenshots:[],dev:'KnockOut',    ver:'2.0.0',age:'12+',date:'Mar 2024',comments:[]},
    {id:38, title:'Vampire Reign',      cat:'RPG',       rating:4.7,plays:105000,badge:'hot',desc:'Play as a powerful vampire lord in a gothic open world. Hunt, build your castle, raise an undead army. Dynamic day/night cycle where you gain power in darkness.',                                                  tags:['Vampire','Gothic','Dark'],       url:'games/vampire.html',       logo:'',screenshots:[],dev:'BloodMoon',   ver:'3.2.0',age:'18+',date:'Feb 2024',comments:[]},
    {id:39, title:'Cursed Manor',       cat:'Horror',    rating:4.4,plays:47000, badge:'',   desc:'Explore a haunted Victorian manor with 50 rooms full of secrets. Atmospheric puzzle horror with ensemble cast of ghosts with unique behaviors.',                                                                    tags:['Ghost','Victorian','Escape'],    url:'games/manor.html',         logo:'',screenshots:[],dev:'GhostHouse',  ver:'1.3.0',age:'18+',date:'Nov 2023',comments:[]},
    {id:40, title:'Pixel Mayhem',       cat:'Arcade',    rating:4.5,plays:97000, badge:'top',desc:'Chaotic party arcade game for up to 8 players. Dozens of mini-games from racing to combat. Vibrant pixel art with absurd humor.',                                                                                  tags:['Party','Multiplayer','Mini-games'],url:'games/mayhem.html',      logo:'',screenshots:[],dev:'ChaosGames',  ver:'2.4.0',age:'7+', date:'Feb 2024',comments:[]},
    {id:41, title:'Iron Fist',          cat:'Action',    rating:4.5,plays:78000, badge:'',   desc:'Martial arts brawler with 30 unique fighters, signature moves, combos. Spectacular special attacks, tournament mode, rich story campaign.',                                                                        tags:['Fighting','Martial Arts','Combo'],url:'games/fist.html',         logo:'',screenshots:[],dev:'BrawlStudio', ver:'2.1.0',age:'12+',date:'Jan 2024',comments:[]},
    {id:42, title:'Rally Champions',    cat:'Racing',    rating:4.6,plays:66000, badge:'',   desc:'World rally championship with authentic gravel, snow, tarmac physics. Weather changes mid-race, pacenotes, damage modeling. 30 rally stages.',                                                                     tags:['Rally','Simulation','Weather'],  url:'games/rally.html',         logo:'',screenshots:[],dev:'DustTrail',   ver:'1.7.0',age:'7+', date:'Dec 2023',comments:[]},
    {id:43, title:'Word Architect',     cat:'Puzzle',    rating:4.2,plays:35000, badge:'',   desc:'Build words to construct structures in this unique puzzle. Educational yet deeply addictive. 1500 levels, power-ups, and a creative freeplay mode.',                                                               tags:['Word','Educational','Creative'], url:'games/word.html',          logo:'',screenshots:[],dev:'Lexica',       ver:'1.2.0',age:'All',date:'Mar 2024',comments:[]},
    {id:44, title:'Sky Pirates',        cat:'Adventure', rating:4.7,plays:88000, badge:'new',desc:'Command an airship crew in a sky pirate adventure. Battle enemy ships, explore floating islands, upgrade your ship. Gorgeous hand-painted sky environments.',                                                      tags:['Pirate','Sky','Airship'],        url:'games/sky.html',           logo:'',screenshots:[],dev:'CloudCrew',   ver:'2.0.0',age:'10+',date:'Feb 2024',comments:[]},
    {id:45, title:'Zero Hour',          cat:'Shooter',   rating:4.8,plays:132000,badge:'top',desc:'Counter-terrorism simulation with ultra-realistic gameplay. Breach-and-clear missions, hostage rescues, bomb defusals. Dynamic AI adapts to your strategy.',                                                       tags:['Counter-Terror','Tactical','Realistic'],url:'games/zero-hour.html',logo:'',screenshots:[],dev:'TacticalOps',ver:'4.1.0',age:'18+',date:'Jan 2024',comments:[]},
    {id:46, title:'Civilization Wars',  cat:'Strategy',  rating:4.5,plays:61000, badge:'',   desc:'Manage a civilization from stone age to space age. Research technology, build wonders, form alliances, wage war. Classic 4X gameplay with modern visuals.',                                                        tags:['4X','Historical','Grand Strategy'],url:'games/civ.html',         logo:'',screenshots:[],dev:'EraGames',    ver:'2.5.0',age:'10+',date:'Nov 2023',comments:[]},
    {id:47, title:'Street Athlete',     cat:'Sports',    rating:4.4,plays:94000, badge:'hot',desc:'Ultimate street sports challenge combining skateboarding, parkour, BMX, and breakdancing. Trick combos in stunning urban environments. Global competition.',                                                        tags:['Street','Tricks','Urban'],       url:'games/street.html',        logo:'',screenshots:[],dev:'UrbanAthletics',ver:'3.0.0',age:'12+',date:'Feb 2024',comments:[]},
    {id:48, title:'Sword and Soul',     cat:'RPG',       rating:4.8,plays:177000,badge:'top',desc:'Beautiful action RPG with fluid sword combat. Master 6 fighting styles with 50+ skills each. Eastern-inspired world with stunning boss encounters.',                                                               tags:['Sword','Action RPG','Eastern'],  url:'games/sword-soul.html',    logo:'',screenshots:[],dev:'BladeArt',    ver:'4.3.0',age:'13+',date:'Mar 2024',comments:[{user:'Alex Storm',rating:5,text:'Best action RPG I have played!',date:'3 days ago',av:'A'}]},
    {id:49, title:'Slender Shadows',    cat:'Horror',    rating:4.1,plays:38000, badge:'',   desc:'First-person psychological horror with asymmetric multiplayer. One player is the monster, others must escape. Dynamic sound design creates genuine dread.',                                                         tags:['Asymmetric','Multiplayer','Fear'],url:'games/slender.html',       logo:'',screenshots:[],dev:'PanicRoom',   ver:'1.0.5',age:'18+',date:'Oct 2023',comments:[]},
    {id:50, title:'Cosmic Breaker',     cat:'Arcade',    rating:4.6,plays:109000,badge:'new',desc:'Classic brick-breaker evolved into a cosmic adventure. 500 levels across 10 galaxy zones. Power-ups, boss fights, energetic electronic soundtrack.',                                                               tags:['Brick','Classic','Evolved'],     url:'games/cosmic-breaker.html',logo:'',screenshots:[],dev:'CosmicPlay',  ver:'3.0.0',age:'All',date:'Mar 2024',comments:[]},
  ],
  sliderItems:[
    {id:1,gameId:4, title:'Shadow Quest',   subtitle:'Epic open-world adventure awaits',        tag:'FEATURED',   tagIcon:'fa-solid fa-star'},
    {id:2,gameId:28,title:'Elden Legend',   subtitle:'The ultimate dark fantasy RPG experience', tag:'TOP RATED',  tagIcon:'fa-solid fa-crown'},
    {id:3,gameId:48,title:'Sword and Soul', subtitle:'Master the art of the blade',              tag:'NEW RELEASE',tagIcon:'fa-solid fa-bolt'},
    {id:4,gameId:22,title:'Drift King',     subtitle:'Become the legend of the asphalt',         tag:'HOT',        tagIcon:'fa-solid fa-fire'},
  ],
  lockedUsers: [],  // array of locked user IDs
};

/* ═══════════════════════════════════════════════════════
   PERSISTENCE LAYER — localStorage
   Sab kuch refresh ke baad bhi zinda rahe
   ═══════════════════════════════════════════════════════ */

const STORE_KEY = 'nexusgames_db_v1';

/* Ye default data hai — save as SEED */
const DB_SEED = JSON.parse(JSON.stringify(DB));

/* ═══════════════════════════════════════════════════════
   BACKEND CONFIG
   ─────────────────────────────────────────────────────
   Option A — PHP Backend (InfinityFree / Hostinger):
     PHP_API_URL = 'https://yoursite.com/php/api.php'

   Option B — Firebase (GitHub Pages ke liye):
     PHP_API_URL = '' (empty) and fill FIREBASE_CONFIG

   Option C — localStorage only (no sync):
     PHP_API_URL = '' and FIREBASE_CONFIG.apiKey = 'YOUR_API_KEY'
   ═══════════════════════════════════════════════════════ */

// ── PHP Backend URL ──────────────────────────
// InfinityFree/Hostinger pe upload karne ke baad yahan URL dalo
// Example: 'https://nexusgames.infinityfreeapp.com/php/api.php'
const PHP_API_URL = '';  // ← YAHAN APNA URL DALO

// ── Firebase Config (GitHub Pages ke liye) ──
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCQI33rfBjAsfynBx3qLMakejmeVgVcjrM",
  authDomain:        "nexus-games-f2148.firebaseapp.com",
  databaseURL:       "https://nexus-games-f2148-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "nexus-games-f2148",
  storageBucket:     "nexus-games-f2148.firebasestorage.app",
  messagingSenderId: "714456498001",
  appId:             "1:714456498001:web:90b54c48bc785675cc1d70"
};

// ── Backend mode detection ───────────────────
const USE_PHP      = PHP_API_URL.length > 0;
const USE_FIREBASE = !USE_PHP && FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';
const USE_LOCAL    = !USE_PHP && !USE_FIREBASE;

/* ── FIREBASE INIT ── */
let _fbReady = false, _fbDB = null, _fbRef = null;
let _pendingSave = false;
let _isOwnSave = false;  // prevents re-render echo from own Firebase writes

function initFirebase() {
  if (!USE_FIREBASE) return;
  try {
    if (typeof firebase === 'undefined') {
      console.warn('[NexusGames] Firebase SDK not loaded — check internet connection.');
      showToast('error','fa-solid fa-wifi','Firebase SDK load nahi hua. Internet check karo.');
      return;
    }
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    _fbDB = firebase.database();
    _fbRef = _fbDB.ref('nexusgames');

    // First: try to read once to check connection
    _fbRef.once('value', function(snapshot) {
      _fbReady = true;
      console.log('[NexusGames] Firebase connected ✅');
      showToast('success','fa-solid fa-database','Firebase connected! Sab devices sync honge.');

      var data = snapshot.val();
      if (data) {
        // Remote data exists — use it (it's the "truth")
        _applyData(data);
        console.log('[NexusGames] Loaded from Firebase: ' + DB.games.length + ' games');
        // Re-render current page with fresh data
        if (S.user && ge('pageContent') && S.page) {
          try {
            var el = ge('pageContent');
            ({home:function(){renderHome(el)},allgames:function(){renderAllGames(el)},
              categories:function(){renderCategories(el)},gamedetail:function(){renderGameDetail(el,S.gameId)},
              about:function(){renderAbout(el)},contact:function(){renderContact(el)},
              profile:function(){renderProfile(el)},admin:function(){renderAdmin(el)},
            }[S.page]||function(){})();
          } catch(e){}
        } else if (!S.user) {
          // Firebase loaded — retry session for phone/new device
          try {
            if (sessionLoad()) {
              var lp=ge('loginPage'), aw=ge('appWrapper');
              if(lp) lp.style.display='none';
              if(aw) aw.style.display='block';
              initApp(true);
            }
          } catch(e2){}
        }
      } else {
        // No remote data yet — push current local data to Firebase
        console.log('[NexusGames] Firebase empty — pushing local data...');
        var dbCopy = JSON.parse(JSON.stringify(DB));
        dbCopy.games.forEach(function(g){ delete g.htmlFileContent; });
        _fbRef.set(dbCopy).then(function(){
          console.log('[NexusGames] Local data pushed to Firebase ✅');
          showToast('info','fa-solid fa-cloud-arrow-up','Data Firebase pe upload ho gaya!');
        }).catch(function(e){
          console.warn('[NexusGames] Push failed:', e.message);
          showToast('error','fa-solid fa-triangle-exclamation','Firebase push failed: ' + e.message);
        });
      }

      // Agar koi pending save tha — ab bhejo
      if (_pendingSave) {
        _pendingSave = false;
        dbSave();
      }

      // Real-time listener — dusre devices pe changes reflect honge
      _fbRef.on('value', function(snapshot) {
        if (_isOwnSave) { _isOwnSave = false; return; }
        var incoming = snapshot.val();
        if (!incoming) return;
        _applyData(incoming);
        // Re-render current page with fresh data
        if (S.user && ge('pageContent') && S.page) {
          try {
            var el = ge('pageContent');
            ({home:function(){renderHome(el)},allgames:function(){renderAllGames(el)},
              categories:function(){renderCategories(el)},gamedetail:function(){renderGameDetail(el,S.gameId)},
              about:function(){renderAbout(el)},contact:function(){renderContact(el)},
              profile:function(){renderProfile(el)},admin:function(){renderAdmin(el)},
            }[S.page]||function(){})();
          } catch(e){ console.warn('[NexusGames] Re-render error:', e); }
        }
      });

    }, function(error) {
      console.warn('[NexusGames] Firebase read failed:', error.message);
      if (error.code === 'PERMISSION_DENIED') {
        showToast('error','fa-solid fa-lock','Firebase: Permission denied! Rules mein test mode enable karo.');
      } else {
        showToast('error','fa-solid fa-wifi','Firebase connect nahi hua: ' + error.message);
      }
    });

  } catch(e) {
    console.warn('[NexusGames] Firebase init error:', e.message);
    showToast('error','fa-solid fa-triangle-exclamation','Firebase error: ' + e.message);
  }
}

function _forcePushNow() {
  if (!_fbReady || !_fbRef) { showToast('error','fa-solid fa-wifi','Firebase not connected.'); return; }
  var snapshot = _buildFullSnapshot();
  _isOwnSave = true;
  _fbRef.set(snapshot).then(function(){
    showToast('success','fa-solid fa-check','Force sync complete! All data pushed to Firebase.');
  }).catch(function(e){
    _isOwnSave = false;
    showToast('error','fa-solid fa-triangle-exclamation','Sync failed: ' + e.message);
  });
}

/* ── PHP API call helper ── */
function phpCall(action, data) {
  return fetch(PHP_API_URL + '?action=' + action, {
    method:      'POST',
    credentials: 'include',
    headers:     {'Content-Type': 'application/json'},
    body:        JSON.stringify(data || {}),
  }).then(function(r){ return r.json(); });
}

/* ── Apply data from any source ── */
function _applyData(saved) {
  try {
    if (saved.games && Array.isArray(saved.games)) {
      // Merge: keep any locally added games not yet in Firebase
      var fbIds = saved.games.map(function(g){ return g.id; });
      var localOnly = DB.games.filter(function(g){ return !fbIds.includes(g.id); });
      DB.games = saved.games.concat(localOnly);
    }
    if (saved.sliderItems && Array.isArray(saved.sliderItems)) DB.sliderItems = saved.sliderItems;
    if (saved.lockedUsers && Array.isArray(saved.lockedUsers)) DB.lockedUsers = saved.lockedUsers;
    if (saved.users       && Array.isArray(saved.users)) {
      var defaultIds = DB_SEED.users.map(function(u){return u.id;});
      var extraUsers = saved.users.filter(function(u){return !defaultIds.includes(u.id);});
      DB_SEED.users.forEach(function(def){
        var updated = saved.users.find(function(u){return u.id===def.id;});
        if (updated) Object.assign(def, updated);
      });
      DB.users = DB_SEED.users.concat(extraUsers);
    }
    DB.games.forEach(function(g) {
      if (!g.htmlFileContent) {
        var html = localStorage.getItem('nexusgames_html_' + g.id);
        if (html) g.htmlFileContent = html;
      }
    });
    // Restore About page data from Firebase
    if (saved.about && typeof saved.about === 'object') {
      try { localStorage.setItem(ABOUT_KEY, JSON.stringify(saved.about)); } catch(e){}
    }

    // Restore per-user profile data (favorites, joinDate, etc.)
    if (saved.profiles && typeof saved.profiles === 'object') {
      Object.keys(saved.profiles).forEach(function(uid) {
        try { localStorage.setItem('nexusgames_profile_' + uid, JSON.stringify(saved.profiles[uid])); } catch(e){}
      });
    }

    // Restore per-user game progress
    if (saved.progress && typeof saved.progress === 'object') {
      Object.keys(saved.progress).forEach(function(uid) {
        try { localStorage.setItem('nexusgames_progress_' + uid, JSON.stringify(saved.progress[uid])); } catch(e){}
      });
    }

    // CRITICAL: After DB.users replaced, update S.user reference to new object
    if (S.user && DB.users) {
      var refreshed = DB.users.find(function(u){ return u.id === S.user.id; });
      if (refreshed) S.user = refreshed;
    }
  } catch(e) { console.warn('[NexusGames] _applyData error:', e); }
}

/* ── SAVE ── */
function _buildFullSnapshot() {
  // Build complete snapshot — DB + profiles + progress + about
  var dbCopy = JSON.parse(JSON.stringify(DB));
  dbCopy.games.forEach(function(g) {
    if (g.htmlFileContent) {
      try { localStorage.setItem('nexusgames_html_' + g.id, g.htmlFileContent); } catch(e) {}
      delete g.htmlFileContent;
    }
  });

  // Collect all user profiles
  dbCopy.profiles = {};
  DB.users.forEach(function(u) {
    try {
      var pdata = localStorage.getItem('nexusgames_profile_' + u.id);
      if (pdata) dbCopy.profiles[u.id] = JSON.parse(pdata);
    } catch(e) {}
  });

  // Collect all game progress
  dbCopy.progress = {};
  DB.users.forEach(function(u) {
    try {
      var prog = localStorage.getItem('nexusgames_progress_' + u.id);
      if (prog) dbCopy.progress[u.id] = JSON.parse(prog);
    } catch(e) {}
  });

  // Collect about page info
  try {
    var about = localStorage.getItem('nexusgames_about_v1');
    if (about) dbCopy.about = JSON.parse(about);
  } catch(e) {}

  return dbCopy;
}

function dbSave() {
  try {
    var snapshot = _buildFullSnapshot();

    if (USE_PHP) {
      phpCall('save_db', {data: snapshot}).then(function(res){
        if (res.status !== 'success') console.warn('[NexusGames] PHP save failed:', res.message);
      }).catch(function(e){ console.warn('[NexusGames] PHP save error:', e); });
    } else if (USE_FIREBASE) {
      if (_fbReady && _fbRef) {
        _isOwnSave = true;  // tell listener this is our own save - don't re-render
        _fbRef.set(snapshot).then(function(){
          console.log('[NexusGames] Saved to Firebase ✅');
        }).catch(function(e){
          _isOwnSave = false;
          console.warn('[NexusGames] Firebase save error:', e.message);
          showToast('error','fa-solid fa-triangle-exclamation','Firebase save failed: ' + e.message);
        });
      } else {
        _pendingSave = true;
        console.log('[NexusGames] Firebase not ready — save queued');
      }
    }

    // Always save locally too (offline backup)
    localStorage.setItem(STORE_KEY, JSON.stringify(snapshot));

  } catch(e) {
    console.warn('[NexusGames] dbSave error:', e);
    showToast('error','fa-solid fa-triangle-exclamation','Save failed!');
  }
}

/* ── LOAD ── */
function dbLoad() {
  if (USE_PHP) {
    // Load from PHP/MySQL
    phpCall('get_db').then(function(res) {
      if (res.status === 'success' && res.data) {
        _applyData(res.data);
        console.log('[NexusGames] Loaded from PHP/MySQL: ' + DB.games.length + ' games');
        // Re-init app if already running
        if (S.user) {
          renderHeader(); renderSidebar();
          var el = ge('pageContent');
          if (el && S.page) {
            ({home:function(){renderHome(el)},allgames:function(){renderAllGames(el)},
              categories:function(){renderCategories(el)},gamedetail:function(){renderGameDetail(el,S.gameId)},
              about:function(){renderAbout(el)},contact:function(){renderContact(el)},
              profile:function(){renderProfile(el)},admin:function(){renderAdmin(el)},
            }[S.page]||function(){})();
          }
        }
      }
    }).catch(function(e){
      console.warn('[NexusGames] PHP load failed, using localStorage:', e);
      _loadFromLocal();
    });
  } else {
    _loadFromLocal();
  }
}

function _loadFromLocal() {
  try {
    var raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    _applyData(JSON.parse(raw));
    console.log('[NexusGames] Loaded from localStorage: ' + DB.games.length + ' games');
  } catch(e) { console.warn('[NexusGames] localStorage load error:', e); }
}

/* ── CLEAR ── */
function dbClear() {
  var keys = [];
  for (var i=0; i<localStorage.length; i++) {
    var k = localStorage.key(i);
    if (k && k.startsWith('nexusgames')) keys.push(k);
  }
  keys.forEach(function(k){ localStorage.removeItem(k); });
  DB.games       = JSON.parse(JSON.stringify(DB_SEED.games));
  DB.sliderItems = JSON.parse(JSON.stringify(DB_SEED.sliderItems));
  DB.users       = JSON.parse(JSON.stringify(DB_SEED.users));
  DB.lockedUsers = [];
  dbSave();
  showToast('success','fa-solid fa-rotate','Database reset to default!');
}

// ── STARTUP ──────────────────────────────────
_loadFromLocal();   // Instant load from cache
initFirebase();     // Firebase if configured
// PHP load happens after DOMContentLoaded (see below)

/* ─── APP STATE ─────────────────────────────── */
const S = {user:null, page:'home', gameId:null, slideIdx:0, slideTimer:null};

/* ─── SESSION PERSISTENCE (survive refresh) ─── */
const SESSION_KEY = 'nexusgames_session_v1';
const PAGE_KEY    = 'nexusgames_page_v1';

function sessionSave() {
  if (!S.user) return;
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      id: S.user.id, username: S.user.username, role: S.user.role
    }));
  } catch(e) {}
}

function sessionLoad() {
  // Restore page position from URL hash first
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const sess = JSON.parse(raw);
    // Find user in DB (DB is already loaded by dbLoad above)
    const found = DB.users.find(u => u.id === sess.id && u.username === sess.username && u.role === sess.role);
    if (!found) { localStorage.removeItem(SESSION_KEY); return false; }
    S.user = found;
    return true;
  } catch(e) { return false; }
}

function sessionClear() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(PAGE_KEY);
}

function pageSave(page, param) {
  try {
    localStorage.setItem(PAGE_KEY, JSON.stringify({page, param: param||null}));
    // Also update URL hash so browser back/forward works
    const hash = param ? `#${page}/${param}` : `#${page}`;
    history.replaceState(null, '', hash);
  } catch(e) {}
}

function pageLoad() {
  // Try URL hash first, then localStorage
  try {
    const hash = window.location.hash.replace('#','');
    if (hash) {
      const parts = hash.split('/');
      return { page: parts[0]||'home', param: parts[1]||null };
    }
    const raw = localStorage.getItem(PAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { page:'home', param:null };
}

/* ─── AUTH ──────────────────────────────────── */
function doLogin() {
  const u    = v('l-user'), p = v('l-pass');
  const role = document.querySelector('input[name="loginRole"]:checked')?.value || 'player';
  hide('login-error');
  if (!u||!p) { showAuthErr('login-error','login-err-msg','Please fill in all fields.'); return; }
  const found = DB.users.find(x => x.username===u && x.password===p && x.role===role);
  if (!found) { showAuthErr('login-error','login-err-msg','Invalid credentials. Check username and password.'); return; }
  // Check if account is locked
  if (DB.lockedUsers && DB.lockedUsers.includes(found.id)) {
    showAuthErr('login-error','login-err-msg','This account has been locked by admin. Please contact support.');
    return;
  }
  S.user = found;
  sessionSave();
  ge('loginPage').style.display = 'none';
  ge('appWrapper').style.display = 'block';
  showToast('success','fa-solid fa-check',`Welcome back, ${found.name}!`);
  initApp();
}

function doRegister() {
  const name=v('r-name'), user=v('r-user'), pass=v('r-pass'), pass2=v('r-pass2');
  hide('reg-error'); hide('reg-success');
  if (!name||!user||!pass||!pass2) { showAuthErr('reg-error','reg-err-msg','Please fill in all fields.'); return; }
  if (pass.length<6) { showAuthErr('reg-error','reg-err-msg','Password must be at least 6 characters.'); return; }
  if (pass!==pass2) { showAuthErr('reg-error','reg-err-msg','Passwords do not match.'); return; }
  if (DB.users.find(x=>x.username===user)) { showAuthErr('reg-error','reg-err-msg','Username already taken. Please choose another.'); return; }
  DB.users.push({id:Date.now(),username:user,password:pass,role:'player',name,avatar:''});
  dbSave();
  ge('r-name').value=''; ge('r-user').value=''; ge('r-pass').value=''; ge('r-pass2').value='';
  show('reg-success');
  showToast('success','fa-solid fa-check','Account created! You can now sign in.');
}

function doForgot() {
  const user=v('f-user'), pass=v('f-pass'), pass2=v('f-pass2');
  hide('forgot-error'); hide('forgot-success');
  if (!user||!pass||!pass2) { showAuthErr('forgot-error','forgot-err-msg','Please fill in all fields.'); return; }
  if (pass.length<6) { showAuthErr('forgot-error','forgot-err-msg','New password must be at least 6 characters.'); return; }
  if (pass!==pass2) { showAuthErr('forgot-error','forgot-err-msg','Passwords do not match.'); return; }
  const found = DB.users.find(x=>x.username===user);
  if (!found) { showAuthErr('forgot-error','forgot-err-msg','Username not found.'); return; }
  found.password = pass;
  dbSave();
  ge('f-user').value=''; ge('f-pass').value=''; ge('f-pass2').value='';
  ge('forgot-ok-msg').textContent=`Password reset for "${user}". You can now sign in.`;
  show('forgot-success');
  showToast('success','check','Password reset successfully!');
}

function showAuthErr(eid,mid,msg) {
  const el=ge(eid); ge(mid).textContent=msg; el.style.display='flex';
}

function logout() {
  S.user = null;
  sessionClear();
  history.replaceState(null, '', window.location.pathname); // remove hash
  ge('appWrapper').style.display = 'none';
  ge('loginPage').style.display  = 'flex';
  showToast('info','fa-solid fa-right-from-bracket','Signed out successfully.');
}

/* ─── HELPERS ───────────────────────────────── */
const ge = id => document.getElementById(id);
const v  = id => ge(id)?.value.trim()||'';
const hide = id => { const e=ge(id); if(e) e.style.display='none'; };
const show = id => { const e=ge(id); if(e) e.style.display='flex'; };

/* ─── INIT ──────────────────────────────────── */
function initApp(restorePage) {
  renderHeader();
  renderSidebar();
  if (restorePage) {
    const saved = pageLoad();
    navigateTo(saved.page || 'home', saved.param ? parseInt(saved.param)||saved.param : null);
  } else {
    navigateTo('home');
  }
}

/* ─── NAVIGATION ────────────────────────────── */
function navigateTo(page, param) {
  S.page=page; S.gameId=param||null;
  pageSave(page, param); // ← save current page to localStorage + URL hash
  if (S.slideTimer) { clearInterval(S.slideTimer); S.slideTimer=null; }
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page===page));
  closeSidebar();
  const el=ge('pageContent'); el.innerHTML='';
  ({
    home:()=>renderHome(el), allgames:()=>renderAllGames(el),
    categories:()=>renderCategories(el), gamedetail:()=>renderGameDetail(el,param),
    about:()=>renderAbout(el), contact:()=>renderContact(el),
    profile:()=>renderProfile(el), admin:()=>renderAdmin(el),
  }[page]||(() =>renderHome(el)))();
}

/* ─── HEADER ────────────────────────────────── */
function renderHeader() {
  const isAdmin = S.user?.role==='admin';
  ge('siteHeader').innerHTML = `
    <button class="mob-menu-btn" onclick="toggleSidebar()">${duoIcon('bars','sm')}</button>
    <div class="header-logo" onclick="navigateTo('home')">
      <div class="logo-mark">${duoIcon('gamepad','sm')}</div>
      <span class="logo-text">Nexus Games</span>
    </div>
    <div class="header-center">
      <div class="search-box">
        ${duoIcon('search','sm')}
        <input type="text" placeholder="Search games..." id="srchInput" oninput="doSearch(this.value)" onblur="setTimeout(closeSearch,200)">
        <div class="search-results" id="srchDrop"></div>
      </div>
    </div>
    <div class="header-right">
      <div class="user-btn" id="uBtn" onclick="toggleUMenu()">
        <div class="user-avatar" id="hdrAv">${S.user?.avatar?`<img src="${S.user.avatar}">`:`<span>${S.user?.name?.charAt(0)||'U'}</span>`}</div>
        <span class="uname">${S.user?.name}</span>
        ${duoIcon('right-bracket','xs')}
        <div class="user-dropdown" id="uDrop">
          <a class="dd-item" onclick="navigateTo('profile')">${duoIcon('user','sm')} My Profile</a>
          ${isAdmin?`<a class="dd-item" onclick="navigateTo('admin')">${duoIcon('shield','sm')} Admin Panel</a>`:''}
          <div class="dd-div"></div>
          <a class="dd-item danger" onclick="logout()">${duoIcon('logout','sm')} Sign Out</a>
        </div>
      </div>
    </div>`;
}

function toggleUMenu() { ge('uDrop')?.classList.toggle('show'); }
document.addEventListener('click',e=>{ if(!e.target.closest('#uBtn')) ge('uDrop')?.classList.remove('show'); });
function toggleSidebar() { ge('sidebarLeft')?.classList.toggle('open'); ge('sidebarOverlay')?.classList.toggle('show'); }
function closeSidebar() { ge('sidebarLeft')?.classList.remove('open'); ge('sidebarOverlay')?.classList.remove('show'); }

function doSearch(val) {
  const d=ge('srchDrop');
  if (!val.trim()) { closeSearch(); return; }
  const m=DB.games.filter(g=>g.title.toLowerCase().includes(val.toLowerCase())||g.cat.toLowerCase().includes(val.toLowerCase())).slice(0,6);
  if (!m.length) { closeSearch(); return; }
  d.innerHTML=m.map(g=>{const c=ci(g.cat);return`<div class="s-result" onclick="navigateTo('gamedetail',${g.id})">
    <div class="sr-icon" style="background:${c.b}">${duoIcon('gamepad','xs')}</div>
    <div class="sr-info"><span>${g.title}</span><small>${g.cat} &middot; ${g.rating}/5.0</small></div>
  </div>`;}).join('');
  d.classList.add('show');
}
function closeSearch() { ge('srchDrop')?.classList.remove('show'); }

/* ─── SIDEBAR ───────────────────────────────── */
function renderSidebar() {
  const isAdmin=S.user?.role==='admin';
  ge('sidebarLeft').innerHTML=`
    <span class="nav-section">Main Menu</span>
    <a class="nav-item" data-page="home"       onclick="navigateTo('home')">${duoIcon('home','sm')}<span class="nlabel">Home</span></a>
    <a class="nav-item" data-page="allgames"   onclick="navigateTo('allgames')">${duoIcon('gamepad','sm')}<span class="nlabel">All Games</span><span class="nav-badge">${DB.games.length}</span></a>
    <a class="nav-item" data-page="categories" onclick="navigateTo('categories')">${duoIcon('layers','sm')}<span class="nlabel">Categories</span></a>
    <span class="nav-section">Account</span>
    <a class="nav-item" data-page="profile"    onclick="navigateTo('profile')">${duoIcon('user','sm')}<span class="nlabel">My Profile</span></a>
    ${isAdmin?`<span class="nav-section">Administration</span>
    <a class="nav-item" data-page="admin"      onclick="navigateTo('admin')">${duoIcon('shield','sm')}<span class="nlabel">Admin Panel</span></a>`:''}
    <span class="nav-section">Information</span>
    <a class="nav-item" data-page="about"      onclick="navigateTo('about')">${duoIcon('info','sm')}<span class="nlabel">About</span></a>
    <a class="nav-item" data-page="contact"    onclick="navigateTo('contact')">${duoIcon('envelope','sm')}<span class="nlabel">Contact</span></a>`;
}

/* ─── HOME ──────────────────────────────────── */
function renderHome(el) {
  const featured=[...DB.games].sort(()=>Math.random()-.5).slice(0,20);
  el.innerHTML=`${buildSlider()}
    <div class="section-header">
      <h2 class="section-title">${duoIcon('fire','sm')}Featured Games</h2>
      <a class="btn-seeall" onclick="navigateTo('allgames')">View All ${duoIcon('right-bracket','xs')}</a>
    </div>
    <div class="games-grid">${featured.map(g=>gameCard(g)).join('')}</div>
    <div class="section-header">
      <h2 class="section-title">${duoIcon('layers','sm')}Browse Categories</h2>
      <a class="btn-seeall" onclick="navigateTo('categories')">All Categories ${duoIcon('right-bracket','xs')}</a>
    </div>
    <div class="categories-grid">${DB.categories.map(c=>categoryCard(c)).join('')}</div>`;
  initSlider();
}

/* ─── SLIDER ────────────────────────────────── */
function buildSlider() {
  return `<div class="hero-slider" id="heroSlider">
    <div class="slider-track" id="sliderTrack">
      ${DB.sliderItems.map((s,i)=>{
        const g=DB.games.find(x=>x.id===s.gameId);
        const c=ci(g?.cat);
        // Use game logo as background if available
        const hasBg = g?.logo && g.logo.length > 0;
        return `<div class="slide" style="background:${hasBg?'#071630':`linear-gradient(135deg,${c.b.replace('.12','.28')} 0%,var(--bg-2) 100%)`};">

          ${hasBg ? `
            <!-- Blurred background layer (full bleed) -->
            <div style="position:absolute;inset:0;overflow:hidden;">
              <img src="${g.logo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(22px) brightness(0.32) saturate(1.4);transform:scale(1.08);display:block;">
            </div>
            <!-- Crisp centered image (auto-fit, any ratio) -->
            <div style="position:absolute;top:0;right:0;bottom:0;width:45%;display:flex;align-items:center;justify-content:center;padding:20px;">
              <img src="${g.logo}" alt="${g.title}" style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:14px;box-shadow:0 12px 50px rgba(0,0,0,.65),0 0 0 1px rgba(255,255,255,.08);display:block;">
            </div>
          ` : `
            <div style="position:absolute;right:7%;top:50%;transform:translateY(-50%);font-size:130px;opacity:.08;pointer-events:none;">${`<i class="${c.i}" style="font-size:26px;color:${c.c};opacity:.55"></i>`}</div>
          `}

          <!-- Left gradient overlay for text readability -->
          <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(1,9,18,.95) 0%,rgba(1,9,18,.7) 50%,rgba(1,9,18,.1) 100%),linear-gradient(0deg,rgba(1,9,18,.6) 0%,transparent 40%);pointer-events:none;"></div>

          <div class="slide-content" style="right:${hasBg?'48%':'40%'}">
            <span class="slide-tag">${duoIcon('star','xs')} ${s.tag}</span>
            <h2>${s.title}</h2>
            <p>${s.subtitle}</p>
            <div class="slide-rating">${[1,2,3,4,5].map(n=>`${duoIcon('star','xs')}`).join('')}<span>${g?.rating}/5.0</span></div>
            <a class="btn-play-now" onclick="navigateTo('gamedetail',${s.gameId})">${duoIcon('play','sm')} Play Now</a>
          </div>
        </div>`;
      }).join('')}
    </div>
    <button class="slider-btn prev" onclick="slideMove(-1)" title="Previous">
      <i class="fa-solid fa-chevron-left" style="font-size:14px"></i>
    </button>
    <button class="slider-btn next" onclick="slideMove(1)" title="Next">
      <i class="fa-solid fa-chevron-right" style="font-size:14px"></i>
    </button>
    <div class="slider-dots">${DB.sliderItems.map((_,i)=>`<div class="slider-dot${i===0?' active':''}" onclick="goSlide(${i})"></div>`).join('')}</div>
  </div>`;
}

function initSlider() { S.slideIdx=0; if(S.slideTimer)clearInterval(S.slideTimer); S.slideTimer=setInterval(()=>slideMove(1),4500); }
function goSlide(i) { S.slideIdx=i; updateSlider(); clearInterval(S.slideTimer); S.slideTimer=setInterval(()=>slideMove(1),4500); }
function slideMove(d) { S.slideIdx=(S.slideIdx+d+DB.sliderItems.length)%DB.sliderItems.length; updateSlider(); }
function updateSlider() {
  const t=ge('sliderTrack'); if(!t) return;
  t.style.transform=`translateX(-${S.slideIdx*100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d,i)=>d.classList.toggle('active',i===S.slideIdx));
}

/* ─── GAME CARD ─────────────────────────────── */
function gameCard(g) {
  const c=ci(g.cat), badge=g.badge?`<span class="game-badge badge-${g.badge}">${g.badge.toUpperCase()}</span>`:'';
  const logoHTML = g.logo
    ? `<!-- Blurred bg -->
       <div style="position:absolute;inset:0;overflow:hidden;">
         <img src="${g.logo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(12px) brightness(0.3) saturate(1.3);transform:scale(1.08);display:block;">
       </div>
       <!-- Crisp centered -->
       <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;">
         <img src="${g.logo}" alt="${g.title}" style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block;border-radius:6px;box-shadow:0 4px 20px rgba(0,0,0,.5);">
       </div>`
    : `<div class="game-icon-bg" style="background:linear-gradient(135deg,${c.b.replace('.12','.22')},var(--bg-2));width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;inset:0;">
         <i class="${c.i}" style="font-size:40px;color:${c.c};opacity:.55"></i>
       </div>`;
  return `<a class="game-card" onclick="navigateTo('gamedetail',${g.id})">
    <div class="game-card-thumb" style="background:#071630;position:relative;">${logoHTML}${badge}
      <div class="game-card-overlay"><i class="fa-solid fa-play" style="font-size:26px;color:#fff"></i></div>
    </div>
    <div class="game-card-info">
      <h3>${g.title}</h3>
      <div class="game-card-meta">
        <span class="game-rating"><i class="fa-solid fa-star" style="font-size:9px"></i> ${g.rating}</span>
        <span class="game-cat">${g.cat}</span>
      </div>
    </div>
  </a>`;
}

function categoryCard(c) {
  const ci2=ci(c.name); const count=DB.games.filter(g=>g.cat===c.name).length;
  return `<a class="category-card" onclick="navigateTo('allgames')">
    <div class="cat-icon-wrap" style="background:${ci2.b}"><i class="${ci2.i}" style="font-size:18px;color:${ci2.c}"></i></div>
    <h3>${c.name}</h3><span>${count} Games</span>
  </a>`;
}

/* ─── ALL GAMES ─────────────────────────────── */
function renderAllGames(el) {
  el.innerHTML=`
    <div class="page-header"><h1>All Games</h1><p>${DB.games.length} games across ${DB.categories.length} categories</p></div>
    <div class="filter-bar" id="filterBar">
      <button class="filter-btn active" onclick="filterGames('all',this)"><i class="fa-solid fa-border-all" style="font-size:10px"></i> All</button>
      ${DB.categories.map(c=>{const ci2=ci(c.name);return`<button class="filter-btn" onclick="filterGames('${c.name}',this)"><i class="${ci2.i}" style="font-size:10px;color:${ci2.c}"></i> ${c.name}</button>`;}).join('')}
    </div>
    <div id="agContainer">
      ${DB.categories.map(c=>{
        const ci2=ci(c.name); const games=DB.games.filter(g=>g.cat===c.name);
        return `<div class="category-group" data-cat="${c.name}">
          <div class="cat-group-hdr">
            <div class="cat-group-icon" style="background:${ci2.b}">${duoIcon('gamepad','xs')}</div>
            <h2>${c.name}</h2><span>${games.length} Games</span>
          </div>
          <div class="games-grid">${games.map(g=>gameCard(g)).join('')}</div>
        </div>`;
      }).join('')}
    </div>`;
}

function filterGames(cat,btn) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  document.querySelectorAll('.category-group').forEach(g=>{ g.style.display=(cat==='all'||g.dataset.cat===cat)?'':'none'; });
}

/* ─── CATEGORIES ────────────────────────────── */
function renderCategories(el) {
  el.innerHTML=`
    <div class="page-header"><h1>Game Categories</h1><p>Top 5 games per category</p></div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px">
      ${DB.categories.map(c=>{
        const ci2=ci(c.name); const games=DB.games.filter(g=>g.cat===c.name).slice(0,5);
        return `<div class="card">
          <div class="card-head">
            <h3><div style="width:22px;height:22px;border-radius:5px;display:inline-flex;align-items:center;justify-content:center;background:${ci2.b};margin-right:2px">${`<i class="${ci2.i}" style="font-size:10px;color:${ci2.c}"></i>`}</div>${c.name}</h3>
            <span style="font-size:10px;color:var(--text-3);font-family:var(--fm)">${DB.games.filter(g=>g.cat===c.name).length} games</span>
          </div>
          ${games.map(g=>`<div style="display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:7px;cursor:pointer;transition:var(--tr)"
            onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background=''"
            onclick="navigateTo('gamedetail',${g.id})">
            ${g.logo?`<img src="${g.logo}" style="width:30px;height:30px;border-radius:7px;object-fit:cover">`:`<div style="width:30px;height:30px;border-radius:7px;background:${ci2.b};display:flex;align-items:center;justify-content:center;flex-shrink:0">${duoIcon('gamepad','xs')}</div>`}
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g.title}</div>
              <div style="font-size:10px;color:var(--gold);display:flex;align-items:center;gap:2px">${duoIcon('star','xs')} ${g.rating}</div>
            </div>
            ${g.badge?`<span class="game-badge badge-${g.badge}" style="position:static">${g.badge.toUpperCase()}</span>`:''}
          </div>`).join('')}
        </div>`;
      }).join('')}
    </div>`;
}

/* ─── GAME DETAIL ───────────────────────────── */
function renderGameDetail(el, gid) {
  const gidN = parseInt(gid);
  const g = DB.games.find(x => x.id === gidN || x.id == gid);
  if (!g) {
    if (USE_FIREBASE && !_fbReady) {
      el.innerHTML = `<div style="text-align:center;padding:60px 20px;color:#94a3b8">
        <i class="fa-solid fa-circle-notch fa-spin" style="font-size:36px;color:#0ea5e9;display:block;margin-bottom:14px"></i>
        Loading game...</div>`;
      setTimeout(function(){
        var g2 = DB.games.find(x => x.id === gidN || x.id == gid);
        if (g2) { el.innerHTML=''; renderGameDetail(el, gid); }
        else { el.innerHTML=`<div class="alert alert-info">${duoIcon('info','sm')} Game not found.</div>`; }
      }, 4000);
      return;
    }
    el.innerHTML=`<div class="alert alert-info">${duoIcon('info','sm')} Game not found.</div>`; return;
  }
  const c=ci(g.cat);
  const stars=n=>[1,2,3,4,5].map(i=>`<i class="fa-${i<=Math.round(n)?'solid':'regular'} fa-star" style="font-size:13px;color:#f59e0b"></i>`).join('');

  const screenshotsHTML = g.screenshots && g.screenshots.length
    ? g.screenshots.map(s=>`
        <div class="screenshot-item" style="background:#071630;height:auto;min-height:80px;max-height:160px;">
          <img src="${s}" alt="screenshot" style="width:100%;height:100%;object-fit:contain;display:block;background:#071630;max-height:160px;">
        </div>`).join('')
    : [1,2,3].map(()=>`<div class="screenshot-item" style="background:linear-gradient(135deg,${c.b.replace('.12','.2')},var(--bg-2))">${`<i class="${c.i}" style="font-size:26px;color:${c.c};opacity:.55"></i>`}</div>`).join('');

  el.innerHTML=`
    <div class="game-detail-hero" style="background:${g.logo?'#071630':'linear-gradient(135deg,'+c.b.replace('.12','.3')+',var(--bg-2))'}">
      ${g.logo ? `
        <!-- Blurred full-bleed background -->
        <div style="position:absolute;inset:0;overflow:hidden;">
          <img src="${g.logo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(20px) brightness(0.28) saturate(1.3);transform:scale(1.08);display:block;">
        </div>
        <!-- Crisp auto-fit centered image -->
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:20px 24px;">
          <img src="${g.logo}" alt="${g.title}" style="max-width:min(420px,80%);max-height:220px;width:auto;height:auto;object-fit:contain;border-radius:16px;box-shadow:0 16px 60px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.09);display:block;">
        </div>
      ` : `<div style="opacity:.08;font-size:110px;display:flex;align-items:center;justify-content:center;width:140px;height:140px;">${duoIcon('gamepad','3xl')}</div>`}
      <div class="gd-hero-overlay" style="${g.logo?'background:linear-gradient(0deg,rgba(1,9,18,1) 0%,rgba(1,9,18,.2) 40%,transparent 70%)':''}"></div>
    </div>
    <div class="game-detail-layout">
      <div class="game-aside">
        <div class="game-logo-card">
          <div class="game-icon-display" style="background:${g.logo?'#071630':'linear-gradient(135deg,'+c.b.replace('.12','.3')+',var(--bg-2))'};position:relative;">
            ${g.logo ? `
              <!-- Blurred bg -->
              <div style="position:absolute;inset:0;overflow:hidden;border-radius:var(--radius-lg);">
                <img src="${g.logo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(16px) brightness(0.28) saturate(1.3);transform:scale(1.08);display:block;">
              </div>
              <!-- Crisp auto-fit image -->
              <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:16px;">
                <img src="${g.logo}" alt="${g.title}" style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.6);">
              </div>
            ` : `${`<i class="${c.i}" style="font-size:52px;color:${c.c};opacity:.7"></i>`}`}
          </div>
        </div>
        <button onclick="launchGame(${g.id})" class="btn-play-game">${duoIcon('play','sm')} Play Game</button>
        ${S.user ? `
        <button onclick="toggleFavoriteFromDetail(${g.id},this)"
          id="favBtn-${g.id}"
          style="width:100%;padding:10px;background:var(--bg-card);border:1px solid var(--bd);
            border-radius:var(--radius-sm);color:var(--t2);font-family:var(--fh);font-size:12px;
            font-weight:700;cursor:pointer;transition:var(--tr);display:flex;align-items:center;
            justify-content:center;gap:8px;margin-bottom:7px"
          onmouseover="this.style.borderColor='#f87171';this.style.color='#f87171'"
          onmouseout="resetFavBtnStyle(${g.id},this)">
          <i class="fa-regular fa-heart" style="font-size:13px"></i> Add to Favourites
        </button>
        <!-- Game Status Tracker -->
        <div style="margin-bottom:7px">
          <label style="font-family:var(--fm);font-size:9px;letter-spacing:2px;color:var(--t3);
            text-transform:uppercase;display:block;margin-bottom:5px">
            <i class="fa-solid fa-chart-bar" style="color:#34d399;margin-right:4px"></i>Game Status
          </label>
          <select id="gameStatusSel-${g.id}" onchange="updateGameStatus(${g.id},this.value)"
            style="width:100%;padding:9px 11px;background:var(--bg-card);border:1px solid var(--bd);
              border-radius:var(--radius-sm);color:var(--t1);font-family:var(--fb);font-size:13px;
              outline:none;cursor:pointer;transition:var(--tr)">
            <option value="">— Set Status —</option>
            <option value="Playing">🎮 Playing</option>
            <option value="Completed">🏆 Completed</option>
            <option value="Wishlist">🔖 Wishlist</option>
            <option value="Dropped">✕ Dropped</option>
          </select>
        </div>
` : ''}

        <div class="game-meta-card">
          ${[
            {i:'code',      l:'Developer', v:g.dev},
            {i:'tag',       l:'Category',  v:g.cat},
            {i:'code-branch',l:'Version',  v:g.ver},
            {i:'shield',    l:'Age Rating',v:g.age},
            {i:'calendar',  l:'Released',  v:g.date},
            {i:'play',      l:'Plays',     v:((g.plays||0)/1000).toFixed(0)+'K'},
          ].map(r=>`<div class="meta-row"><span class="meta-label">${duoIcon(r.i,'xs')}${r.l}</span><span class="meta-value">${r.v}</span></div>`).join('')}
        </div>
      </div>
      <div class="game-detail-main">
        <div class="game-tags">
          <span class="tag">${duoIcon('tag','xs')} ${g.cat}</span>
          ${(g.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}
        </div>
        <h1>${g.title}</h1>
        <div class="rating-row">
          <div class="stars">${stars(g.rating)}</div>
          <span class="rating-num">${g.rating}</span>
          <span class="rating-count">(${g.comments.length+Math.floor(Math.random()*500+80)} reviews)</span>
        </div>
        <p class="game-desc">${g.desc}</p>
        <div class="section-header" style="margin-bottom:11px">
          <h2 class="section-title">${duoIcon('images','sm')}Screenshots</h2>
        </div>
        <div class="screenshots-row">${screenshotsHTML}</div>
        <div class="section-header" style="margin-bottom:13px">
          <h2 class="section-title">${duoIcon('envelope','sm')}Reviews</h2>
        </div>
        ${S.user?`<div class="comment-form">
          <textarea id="cTxt" placeholder="Share your experience..."></textarea>
          <button class="btn-comment" onclick="postComment(${g.id})">${duoIcon('paper-plane','sm')} Post</button>
        </div>`:`<div class="alert alert-info">${duoIcon('info','sm')} Sign in to post a review.</div>`}
        <div id="cList-${g.id}">${(g.comments||[]).length?(g.comments||[]).map(cmtHTML).join(''):`<p style="color:var(--text-3);font-size:12px;padding:10px 0">No reviews yet. Be the first!</p>`}</div>
      </div>
    </div>`;
  // Init fav/status buttons after DOM ready (can't use <script> in innerHTML)
  setTimeout(function(){ initGameDetailUI(g.id); }, 50);
}


/* Init game detail page UI — replaces inline <script> (not allowed in innerHTML) */
function initGameDetailUI(gid) {
  if (!S.user) return;
  try {
    var PKEY = 'nexusgames_profile_' + S.user.id;
    var pd = {}; try { pd = JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e) {}
    var isFav = (pd.favorites||[]).includes(gid);
    var btn = document.getElementById('favBtn-' + gid);
    if (btn && isFav) {
      btn.innerHTML = '<i class="fa-solid fa-heart" style="font-size:13px;color:#f87171"></i> Saved to Favourites';
      btn.style.borderColor = '#f87171';
      btn.style.color = '#f87171';
    }
    // Restore game status dropdown
    var prog = {}; try { prog = JSON.parse(localStorage.getItem('nexusgames_progress_' + S.user.id)||'{}'); } catch(e) {}
    var sel = document.getElementById('gameStatusSel-' + gid);
    if (sel && prog[gid]) sel.value = prog[gid].status;
  } catch(e) { console.warn('[NexusGames] initGameDetailUI error:', e); }
}
/* Launch game — handles both URL and uploaded HTML content */
function launchGame(gid) {
  const g = DB.games.find(x=>x.id===gid);
  if (!g) return;
  // If HTML content was uploaded, open as Blob
  if (g.htmlFileContent) {
    const blob = new Blob([g.htmlFileContent], {type:'text/html'});
    const url  = URL.createObjectURL(blob);
    window.open(url, '_blank');
    // Revoke after short delay to prevent memory leak
    setTimeout(()=>URL.revokeObjectURL(url), 5000);
  } else if (g.url) {
    window.open(g.url, '_blank');
  } else {
    showToast('error','warning','No game file or URL set for this game.');
  }
}

function cmtHTML(c) {
  const s=[1,2,3,4,5].map(i=>`${duoIcon('gamepad','sm')}`).join('');
  return `<div class="comment-item">
    <div class="comment-av">${c.avatar?`<img src="${c.avatar}">`:(c.av||c.user?.charAt(0)||'U')}</div>
    <div style="flex:1">
      <div class="comment-hdr"><span class="comment-name">${c.user}</span><div class="comment-stars">${s}</div><span class="comment-date">${c.date}</span></div>
      <p class="comment-text">${c.text}</p>
    </div>
  </div>`;
}

function postComment(gid) {
  const txt=v('cTxt'); if(!txt) return;
  const g=DB.games.find(x=>x.id===gid); if(!g) return;
  if(!g.comments)g.comments=[];
  g.comments.unshift({user:S.user.name,rating:5,text:txt,date:'Just now',av:S.user.name.charAt(0),avatar:S.user.avatar});
  dbSave();
  ge('cTxt').value='';
  ge(`cList-${gid}`).innerHTML=(g.comments||[]).map(cmtHTML).join('');
  showToast('success','check','Review posted!');
}

/* ─── ABOUT ─────────────────────────────────── */
// About page persistent data (name, bio, photo)
const ABOUT_KEY = 'nexusgames_about_v1';
function aboutLoad() { try { const r=localStorage.getItem(ABOUT_KEY); return r?JSON.parse(r):{};} catch(e){return{};} }
function aboutSave(d) {
  try { localStorage.setItem(ABOUT_KEY, JSON.stringify(d)); } catch(e){}
  dbSave(); // sync everything to Firebase
}

function renderAbout(el) {
  const info = aboutLoad();
  const isAdmin = S.user?.role === 'admin';
  const photoHTML = info.photo
    ? `<img src="${info.photo}" alt="Creator" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
    : `<i class="fa-solid fa-user" style="font-size:36px;color:var(--t3)"></i>`;

  el.innerHTML=`
    <div class="about-hero">
      <h1>About Nexus Games</h1>
      <p>A premium gaming portal where players discover and experience the best browser-based games. We curate high-quality titles across 10 categories — from action to puzzles. Our mission is to deliver an exceptional gaming experience.</p>
    </div>
    <div class="creator-card">
      <div style="position:relative;width:100px;height:100px;margin:0 auto 16px">
        <div style="width:100px;height:100px;border-radius:50%;border:3px solid var(--p1);
          box-shadow:0 0 26px var(--p1-glow);overflow:hidden;background:var(--bg-2);
          display:flex;align-items:center;justify-content:center" id="aboutPhotoEl">
          ${photoHTML}
        </div>
        ${isAdmin ? `
        <div onclick="document.getElementById('aboutPhotoFile').click()" title="Upload photo"
          style="position:absolute;bottom:2px;right:2px;width:28px;height:28px;
            background:var(--duo-grad);border-radius:50%;display:flex;align-items:center;
            justify-content:center;cursor:pointer;border:2px solid var(--bg-card)">
          <i class="fa-solid fa-camera" style="font-size:11px;color:#fff"></i>
        </div>
        <input type="file" id="aboutPhotoFile" accept="image/*" style="display:none" onchange="handleAboutPhoto(this)">
        ` : ''}
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:3px">
        <h2 style="font-family:var(--fh);font-size:19px;font-weight:800" id="creatorName">
          ${info.name || 'Creator / Developer'}
        </h2>
        ${isAdmin ? `<button onclick="editCreatorName()" title="Edit name"
          style="background:var(--p1-dim);border:1px solid var(--bd);border-radius:5px;
            padding:3px 7px;cursor:pointer;color:var(--p1);font-size:10px">
          <i class="fa-solid fa-pen"></i></button>` : ''}
      </div>
      <div class="creator-role">${info.role || 'Founder &amp; Lead Developer'}</div>
      <p id="creatorBio" style="color:var(--t2);font-size:13px;line-height:1.7;margin-bottom:8px">
        ${info.bio || 'A passionate developer who built Nexus Games from the ground up.'}
      </p>
      ${isAdmin ? `
      <button onclick="editCreatorBio()"
        style="background:var(--p1-dim);border:1px solid var(--bd);border-radius:6px;
          padding:5px 14px;cursor:pointer;color:var(--p1);font-size:11px;font-family:var(--fh);font-weight:700">
        <i class="fa-solid fa-pen" style="margin-right:4px"></i>Edit Bio
      </button>
      <p style="font-size:10px;color:var(--t3);margin-top:8px">
        <i class="fa-solid fa-circle-info" style="color:var(--p1);margin-right:4px"></i>
        Logged in as Admin — you can edit name, bio and photo
      </p>` : ''}
    </div>
    <div class="features-grid">
      ${[
        {i:'gamepad', t:'50+ Games',      d:'Curated titles spanning 10 genres and categories.'},
        {i:'bolt',    t:'Instant Play',   d:'No downloads needed. Play directly in your browser.'},
        {i:'shield',  t:'Safe & Secure',  d:'Content ratings ensure age-appropriate experiences.'},
        {i:'star',    t:'Community Rated',d:'Genuine reviews and ratings from real players.'},
        {i:'sliders', t:'Admin Control',  d:'Full content management system for administrators.'},
        {i:'mobile',  t:'Responsive',     d:'Optimized for mobile, tablet, laptop, and desktop.'},
      ].map(f=>`<div class="feature-card">
        <div class="f-icon">${duoIcon(f.i,'sm','var(--p1)')}</div>
        <h3>${f.t}</h3><p>${f.d}</p>
      </div>`).join('')}
    </div>`;
}

function handleAboutPhoto(input) {
  const f=input.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{
    const info=aboutLoad(); info.photo=e.target.result; aboutSave(info);
    const el=document.getElementById('aboutPhotoEl');
    if(el) el.innerHTML=`<img src="${e.target.result}" alt="Creator" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    showToast('success','fa-solid fa-camera','Creator photo updated!');
  };
  r.readAsDataURL(f);
}

function editCreatorName() {
  const info=aboutLoad();
  const n=prompt('Enter creator name:',info.name||'Creator / Developer');
  if(!n||!n.trim()) return;
  info.name=n.trim(); aboutSave(info);
  const el=document.getElementById('creatorName'); if(el) el.textContent=info.name;
  showToast('success','fa-solid fa-check','Name updated!');
}

function editCreatorBio() {
  const info=aboutLoad();
  const b=prompt('Enter creator bio:',info.bio||'A passionate developer who built Nexus Games from the ground up.');
  if(!b||!b.trim()) return;
  info.bio=b.trim(); aboutSave(info);
  const el=document.getElementById('creatorBio'); if(el) el.textContent=info.bio;
  showToast('success','fa-solid fa-check','Bio updated!');
}

/* ─── CONTACT ───────────────────────────────── */
function renderContact(el) {
  const GMAIL = 'bca.ai082@gmail.com';
  const platforms=[
    {n:'Instagram', i:'fa-brands fa-instagram', h:'@mr.x_codez',           href:'https://www.instagram.com/mr.x_codez?igsh=MTNjZTBmYTBkbmJmag==', c:'#e1306c', bg:'rgba(225,48,108,.12)'},
    {n:'Linked In', i:'fa-brands fa-linkedin',  h:'@harshlalka',           href:'https://www.linkedin.com/in/harsh-lalka-459978381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', c:'#0a66c2', bg:'rgba(10,102,194,.12)'},
    {n:'Discord',   i:'fa-brands fa-discord',   h:'discord.gg/nexusgames', href:'https://discord.com',                                             c:'#7289da', bg:'rgba(114,137,218,.12)'},
    {n:'YouTube',   i:'fa-brands fa-youtube',   h:'@G.M.A.S_01',           href:'https://www.youtube.com/@G.M.A.S_01',                             c:'#ff0000', bg:'rgba(255,0,0,.10)'},
    {n:'GitHub',    i:'fa-brands fa-github',     h:'github.com/HHL1709',    href:'https://github.com/HHL1709',                                      c:'#c9d1d9', bg:'rgba(201,209,217,.08)'},
    {n:'Gmail',     i:'fa-solid fa-envelope',    h:GMAIL,                   href:`mailto:${GMAIL}`,                                                 c:'#ea4335', bg:'rgba(234,67,53,.12)', direct:true},
  ];
  el.innerHTML=`
    <div class="page-header">
      <h1>Contact &amp; Connect</h1>
      <p>Find us on any platform below — click to open</p>
    </div>
    <div class="contact-grid">
      ${platforms.map(p=>`
        <a href="${p.href}" class="contact-card"
          ${p.direct
            ? 'onclick="event.preventDefault();location.href=this.href"'
            : 'target="_blank" rel="noopener"'}>
          <div class="c-icon" style="background:${p.bg}">
            <i class="${p.i}" style="font-size:24px;color:${p.c}"></i>
          </div>
          <h3>${p.n}</h3>
          <span>${p.h}</span>
        </a>`).join('')}
    </div>`;
}

/* ─── PROFILE ───────────────────────────────── */
function renderProfile(el) {
  if (!S.user) { navigateTo('home'); return; }
  const u = S.user, isAdmin = u.role === 'admin';

  // Profile persistent data (favorite games, bio, etc.)
  const PKEY = `nexusgames_profile_${u.id}`;
  let pdata = {};
  try { pdata = JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e){}

  // Stats — count from DB
  const totalComments = DB.games.reduce((s,g)=>s+(g.comments||[]).filter(c=>c&&c.user===u.name).length,0);
  const favoriteGames = (pdata.favorites||[]).map(id=>DB.games.find(g=>g.id===id)).filter(Boolean);
  const joinDate = pdata.joinDate || (()=>{
    pdata.joinDate = new Date().toLocaleDateString('en',{month:'short',year:'numeric'});
    try{localStorage.setItem(PKEY,JSON.stringify(pdata));}catch(e){}
    // NOTE: No dbSave here - would cause infinite loop with Firebase listener
    return pdata.joinDate;
  })();

  // Level based on activity
  const activity = totalComments + (pdata.favorites||[]).length;
  const level = activity >= 20 ? 'Expert' : activity >= 10 ? 'Veteran' : activity >= 3 ? 'Regular' : 'Newcomer';
  const levelColor = activity >= 20 ? '#f59e0b' : activity >= 10 ? '#0ea5e9' : activity >= 3 ? '#34d399' : '#94a3b8';
  const levelIcon  = activity >= 20 ? 'fa-solid fa-crown' : activity >= 10 ? 'fa-solid fa-shield-halved' : activity >= 3 ? 'fa-solid fa-star' : 'fa-solid fa-user';

  // Random top-rated games for "Recommended" section
  const recommended = [...DB.games].sort((a,b)=>b.rating-a.rating).slice(0,6);

  el.innerHTML = `
    <!-- ── PROFILE HEADER ── -->
    <div class="profile-header">
      <div class="profile-av-wrap">
        <div class="profile-av" id="pAv">
          ${u.avatar ? `<img src="${u.avatar}">` : `<span>${u.name.charAt(0)}</span>`}
        </div>
        <div class="av-edit" onclick="ge('avFile').click()" title="Change photo">
          <i class="fa-solid fa-camera" style="font-size:9px;color:#fff"></i>
        </div>
        <input type="file" id="avFile" style="display:none" accept="image/*" onchange="changeAvatar(this)">
      </div>
      <div class="profile-info" style="flex:1">
        <h2 id="pName" style="font-family:var(--fh);font-size:19px;font-weight:800;margin-bottom:3px">${u.name}</h2>
        <div class="profile-uid" style="font-family:var(--fm);font-size:11px;color:var(--t3);margin-bottom:9px">
          <i class="fa-solid fa-at" style="color:var(--p1);margin-right:3px;font-size:10px"></i>${u.username}
          &nbsp;·&nbsp;
          <i class="fa-solid fa-calendar" style="color:#94a3b8;margin-right:3px;font-size:10px"></i>Joined ${joinDate}
        </div>
        <div class="profile-badges">
          <span class="p-badge" style="background:${levelColor}22;border-color:${levelColor}44;color:${levelColor}">
            <i class="${levelIcon}" style="font-size:8px"></i> ${level}
          </span>
          <span class="p-badge">
            <i class="fa-solid fa-gamepad" style="font-size:8px;color:#fb923c"></i> Gamer
          </span>
          <span class="p-badge">
            <i class="fa-solid fa-check" style="font-size:8px;color:#34d399"></i> Member
          </span>
          ${isAdmin ? `<span class="p-badge gold"><i class="fa-solid fa-crown" style="font-size:8px"></i> Admin</span>` : ''}
        </div>
      </div>
    </div>

    <!-- ── STATS ROW ── -->
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px;margin-bottom:18px">
      ${[
        {icon:'fa-solid fa-gamepad',     col:'#fb923c', val:DB.games.length,         lbl:'Games Available'},
        {icon:'fa-solid fa-heart',       col:'#f87171', val:(pdata.favorites||[]).length, lbl:'Favourites'},
        {icon:'fa-solid fa-comment',     col:'#818cf8', val:totalComments,            lbl:'Reviews Posted'},
        {icon:'fa-solid fa-ranking-star',col:'#f59e0b', val:level,                   lbl:'Player Rank'},
      ].map(s=>`
        <div style="background:var(--bg-card);border:1px solid var(--bd);border-radius:var(--radius);
          padding:14px;text-align:center">
          <i class="${s.icon}" style="font-size:22px;color:${s.col};margin-bottom:7px;display:block"></i>
          <div style="font-family:var(--fm);font-size:18px;font-weight:900;color:var(--t1);margin-bottom:2px">${s.val}</div>
          <div style="font-size:10px;color:var(--t3);letter-spacing:1px;text-transform:uppercase">${s.lbl}</div>
        </div>`).join('')}
    </div>

    <!-- ── MAIN GRID ── -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:16px">

      <!-- Edit Profile -->
      <div class="card">
        <div class="card-head">
          <h3><i class="fa-solid fa-user-pen" style="color:#f59e0b"></i>&nbsp;Edit Profile</h3>
        </div>
        <div style="margin-bottom:13px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">Display Name</label>
          <div class="input-wrap">
            <span class="ii"><i class="fa-solid fa-user" style="font-size:11px;color:#60a5fa"></i></span>
            <input type="text" id="eName" value="${u.name}" placeholder="Your display name">
          </div>
        </div>
        <div style="margin-bottom:13px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">
            Username ${isAdmin ? '<span style="color:var(--p1);font-size:9px">(editable for admin)</span>' : ''}
          </label>
          <div class="input-wrap">
            <span class="ii"><i class="fa-solid fa-at" style="font-size:11px;color:#94a3b8"></i></span>
            <input type="text" id="eUsername" value="${u.username}" ${isAdmin ? '' : 'disabled style="opacity:.4;cursor:not-allowed"'}>
          </div>
        </div>
        <div style="margin-bottom:13px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">Role</label>
          <div style="display:flex;align-items:center;gap:8px;padding:9px 12px;background:var(--bg-1);
            border:1px solid var(--bd);border-radius:var(--radius-sm)">
            <i class="${isAdmin?'fa-solid fa-shield-halved':'fa-solid fa-user'}"
              style="font-size:13px;color:${isAdmin?'#f59e0b':'#60a5fa'}"></i>
            <span style="font-size:13px;font-weight:600;color:${isAdmin?'#f59e0b':'#60a5fa'}">
              ${isAdmin ? 'Administrator' : 'Player'}
            </span>
          </div>
        </div>
        <button class="btn-primary" onclick="saveProfile()">
          <i class="fa-solid fa-check"></i> Save Changes
        </button>
      </div>

      <!-- Change Password -->
      <div class="card">
        <div class="card-head">
          <h3><i class="fa-solid fa-lock" style="color:#f87171"></i>&nbsp;Security</h3>
        </div>
        <div style="margin-bottom:13px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">Current Password</label>
          <div class="input-wrap">
            <span class="ii"><i class="fa-solid fa-lock" style="font-size:11px;color:#f87171"></i></span>
            <input type="password" id="cPass" placeholder="Current password">
          </div>
        </div>
        <div style="margin-bottom:13px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">New Password</label>
          <div class="input-wrap">
            <span class="ii"><i class="fa-solid fa-key" style="font-size:11px;color:#f59e0b"></i></span>
            <input type="password" id="nPass" placeholder="Minimum 6 characters">
          </div>
        </div>
        <div style="margin-bottom:16px">
          <label style="font-family:var(--fm);font-size:10px;letter-spacing:2px;color:var(--t2);text-transform:uppercase;display:block;margin-bottom:5px">Confirm New Password</label>
          <div class="input-wrap">
            <span class="ii"><i class="fa-solid fa-key" style="font-size:11px;color:#f59e0b"></i></span>
            <input type="password" id="nPass2" placeholder="Repeat new password">
          </div>
        </div>
        <button class="btn-primary" onclick="updatePass()">
          <i class="fa-solid fa-shield-halved"></i> Update Password
        </button>
      </div>
    </div>

    <!-- ── FAVOURITE GAMES ── -->
    <div class="card" style="margin-bottom:16px">
      <div class="card-head">
        <h3><i class="fa-solid fa-heart" style="color:#f87171"></i>&nbsp;Favourite Games</h3>
        <span style="font-size:11px;color:var(--t3);font-family:var(--fm)">${(pdata.favorites||[]).length}/6 saved</span>
      </div>
      ${favoriteGames.length ? `
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px">
          ${favoriteGames.map(g => {
            const c = ci(g.cat);
            return `
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg-1);
              border:1px solid var(--bd);border-radius:var(--radius-sm);cursor:pointer;transition:var(--tr)"
              onmouseover="this.style.borderColor='var(--bd2)'" onmouseout="this.style.borderColor='var(--bd)'"
              onclick="navigateTo('gamedetail',${g.id})">
              ${g.logo
                ? `<img src="${g.logo}" style="width:36px;height:36px;border-radius:7px;object-fit:cover;flex-shrink:0">`
                : `<div style="width:36px;height:36px;border-radius:7px;background:${c.b};display:flex;align-items:center;justify-content:center;flex-shrink:0">
                     <i class="${c.i}" style="font-size:16px;color:${c.c}"></i>
                   </div>`
              }
              <div style="min-width:0">
                <div style="font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g.title}</div>
                <div style="font-size:10px;color:var(--t3)">${g.cat}</div>
              </div>
              <button onclick="event.stopPropagation();removeFavorite(${g.id})" title="Remove"
                style="margin-left:auto;background:none;border:none;color:var(--t3);cursor:pointer;
                  font-size:11px;flex-shrink:0;transition:var(--tr)"
                onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='var(--t3)'">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>`;
          }).join('')}
        </div>
      ` : `
        <div style="text-align:center;padding:24px;color:var(--t3)">
          <i class="fa-solid fa-heart" style="font-size:28px;margin-bottom:8px;display:block;opacity:.3"></i>
          <p style="font-size:13px">No favourite games yet.</p>
          <p style="font-size:11px;margin-top:4px">Open any game and press <strong style="color:var(--p1)">Add to Favourites</strong> button.</p>
        </div>`}
    </div>

    <!-- ── GAME PROGRESS / STATUS ── -->
    <div class="card" style="margin-bottom:16px">
      <div class="card-head">
        <h3><i class="fa-solid fa-chart-bar" style="color:#34d399"></i>&nbsp;Game Progress</h3>
        <span style="font-size:11px;color:var(--t3);font-family:var(--fm)">Track your gaming journey</span>
      </div>
      <div class="prog-section-wrap">${buildProgressSection(u.id)}</div>
    </div>

        <!-- ── RECOMMENDED GAMES ── -->
    <div class="card">
      <div class="card-head">
        <h3><i class="fa-solid fa-fire" style="color:#f97316"></i>&nbsp;Top Rated Games</h3>
        <a class="btn-seeall" onclick="navigateTo('allgames')">View All <i class="fa-solid fa-arrow-right" style="font-size:10px"></i></a>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px">
        ${recommended.map(g => {
          const c = ci(g.cat);
          const isFav = (pdata.favorites||[]).includes(g.id);
          return `
          <div style="background:var(--bg-1);border:1px solid var(--bd);border-radius:var(--radius-sm);
            overflow:hidden;cursor:pointer;transition:var(--tr)"
            onmouseover="this.style.borderColor='var(--bd2)'" onmouseout="this.style.borderColor='var(--bd)'">
            <div style="height:70px;background:linear-gradient(135deg,${c.b},var(--bg-2));
              display:flex;align-items:center;justify-content:center;position:relative"
              onclick="navigateTo('gamedetail',${g.id})">
              ${g.logo
                ? `<img src="${g.logo}" style="width:100%;height:100%;object-fit:cover">`
                : `<i class="${c.i}" style="font-size:28px;color:${c.c};opacity:.6"></i>`
              }
            </div>
            <div style="padding:8px">
              <div style="font-size:11px;font-weight:700;margin-bottom:4px;white-space:nowrap;
                overflow:hidden;text-overflow:ellipsis" onclick="navigateTo('gamedetail',${g.id})">${g.title}</div>
              <div style="display:flex;align-items:center;justify-content:space-between">
                <span style="font-size:10px;color:#f59e0b">
                  <i class="fa-solid fa-star" style="font-size:9px"></i> ${g.rating}
                </span>
                <button onclick="${isFav?`removeFavorite(${g.id})`:`addFavorite(${g.id})`}"
                  title="${isFav?'Remove from Favourites':'Add to Favourites'}"
                  style="background:none;border:none;cursor:pointer;font-size:12px;
                    color:${isFav?'#f87171':'var(--t3)'};transition:var(--tr)"
                  onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='${isFav?'#f87171':'var(--t3)'}'">
                  <i class="fa-${isFav?'solid':'regular'} fa-heart"></i>
                </button>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

function addFavorite(gid) {
  const PKEY = `nexusgames_profile_${S.user.id}`;
  let pd = {}; try { pd=JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e){}
  if (!pd.favorites) pd.favorites = [];
  if (pd.favorites.length >= 6) { showToast('error','fa-solid fa-triangle-exclamation','Max 6 favourites allowed.'); return; }
  if (!pd.favorites.includes(gid)) { pd.favorites.push(gid); }
  try { localStorage.setItem(PKEY, JSON.stringify(pd)); } catch(e){}
  dbSave();
  showToast('success','fa-solid fa-heart','Added to favourites!');
  navigateTo('profile');
}

function removeFavorite(gid) {
  const PKEY = `nexusgames_profile_${S.user.id}`;
  let pd = {}; try { pd=JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e){}
  pd.favorites = (pd.favorites||[]).filter(id=>id!==gid);
  try { localStorage.setItem(PKEY, JSON.stringify(pd)); } catch(e){}
  dbSave();
  showToast('info','fa-solid fa-heart','Removed from favourites.');
  navigateTo('profile');
}

function toggleFavoriteFromDetail(gid, btn) {
  if (!S.user) { showToast('error','fa-solid fa-triangle-exclamation','Please sign in first.'); return; }
  const PKEY = `nexusgames_profile_${S.user.id}`;
  let pd = {}; try { pd=JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e){}
  if (!pd.favorites) pd.favorites = [];
  const isFav = pd.favorites.includes(gid);
  if (isFav) {
    pd.favorites = pd.favorites.filter(id=>id!==gid);
    if (btn) { btn.innerHTML='<i class="fa-regular fa-heart" style="font-size:13px"></i> Add to Favourites'; btn.style.borderColor='var(--bd)'; btn.style.color='var(--t2)'; }
    showToast('info','fa-solid fa-heart','Removed from favourites.');
  } else {
    if (pd.favorites.length >= 6) { showToast('error','fa-solid fa-triangle-exclamation','Max 6 favourites allowed.'); return; }
    pd.favorites.push(gid);
    if (btn) { btn.innerHTML='<i class="fa-solid fa-heart" style="font-size:13px;color:#f87171"></i> Saved to Favourites'; btn.style.borderColor='#f87171'; btn.style.color='#f87171'; }
    showToast('success','fa-solid fa-heart','Added to favourites!');
  }
  try { localStorage.setItem(PKEY, JSON.stringify(pd)); } catch(e){}
  dbSave();
}

function resetFavBtnStyle(gid, btn) {
  if (!S.user) return;
  const PKEY = `nexusgames_profile_${S.user.id}`;
  let pd = {}; try { pd=JSON.parse(localStorage.getItem(PKEY)||'{}'); } catch(e){}
  const isFav = (pd.favorites||[]).includes(gid);
  btn.style.borderColor = isFav ? '#f87171' : 'var(--bd)';
  btn.style.color = isFav ? '#f87171' : 'var(--t2)';
}

function changeAvatar(input) {
  const f=input.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{
    S.user.avatar=e.target.result;
    DB.users.find(u=>u.id===S.user.id&&(u.avatar=e.target.result));
    dbSave();
    ge('pAv').innerHTML=`<img src="${e.target.result}">`;
    const ha=ge('hdrAv'); if(ha) ha.innerHTML=`<img src="${e.target.result}" alt="">`;
    showToast('success','fa-solid fa-camera','Profile photo updated.');
  };
  r.readAsDataURL(f);
}

function saveProfile() {
  const n = v('eName');
  if (!n) { showToast('error','fa-solid fa-triangle-exclamation','Name cannot be empty.'); return; }
  S.user.name = n;
  DB.users.find(u => u.id===S.user.id && (u.name=n));

  // Admin can also change their username
  if (S.user.role === 'admin') {
    const newUsername = v('eUsername');
    if (newUsername && newUsername !== S.user.username) {
      if (DB.users.find(u => u.id!==S.user.id && u.username===newUsername)) {
        showToast('error','fa-solid fa-triangle-exclamation','Username already taken.'); return;
      }
      S.user.username = newUsername;
      DB.users.find(u => u.id===S.user.id && (u.username=newUsername));
    }
  }

  dbSave(); sessionSave();
  ge('pName').textContent = n;
  renderHeader();
  showToast('success','fa-solid fa-check','Profile saved successfully.');
}

function updatePass() {
  const c=ge('cPass').value, n=ge('nPass').value, n2=ge('nPass2')?.value||n;
  if(c!==S.user.password){showToast('error','fa-solid fa-triangle-exclamation','Current password incorrect.');return;}
  if(n.length<6){showToast('error','fa-solid fa-triangle-exclamation','Minimum 6 characters required.');return;}
  if(n!==n2){showToast('error','fa-solid fa-triangle-exclamation','Passwords do not match.');return;}
  S.user.password=n; DB.users.find(u=>u.id===S.user.id&&(u.password=n));
  dbSave();
  ge('cPass').value=''; ge('nPass').value=''; if(ge('nPass2')) ge('nPass2').value='';
  showToast('success','fa-solid fa-shield-halved','Password updated successfully.');
}

/* ─── ADMIN ─────────────────────────────────── */
function renderAdmin(el) {
  if (S.user?.role!=='admin') { navigateTo('home'); return; }
  const tp=DB.games.reduce((s,g)=>s+g.plays,0);
  el.innerHTML=`
    <div class="page-header">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div>
          <h1>Admin Panel</h1>
          <p>Manage all content — games, slider, players</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <div id="storageStatus" style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);border-radius:var(--radius-sm);font-size:11px;color:#34d399;font-family:var(--fm)">
            <i class="fa-solid fa-database"></i> <span id="storageInfo">Loading...</span>
          </div>
          <button class="btn-xs" style="background:rgba(245,158,11,.08);color:var(--gold);border-color:rgba(245,158,11,.22)" onclick="confirmReset()">
            <i class="fa-solid fa-rotate"></i> Reset DB
          </button>
          ${USE_FIREBASE ? `
          <button class="btn-xs btn-add" onclick="_forcePushNow()" title="Force push all data to Firebase now">
            <i class="fa-solid fa-cloud-arrow-up"></i> Force Sync
          </button>` : ''}
        </div>
      </div>
    </div>
    <div class="admin-stats">
      ${[
        {i:'gamepad',       v:DB.games.length,                             l:'Total Games', cls:'c-blue'},
        {i:'users',          v:DB.users.filter(u=>u.role==='player').length,l:'Players',     cls:'c-gold'},
        {i:'layer-group',    v:DB.categories.length,                        l:'Categories',  cls:'c-green'},
        {i:'play',           v:(tp/1000).toFixed(0)+'K',                    l:'Total Plays', cls:'c-purple'},
      ].map(s=>`<div class="stat-card ${s.cls}"><div class="stat-icon">${duoIcon(s.i,'sm')}</div><div class="stat-num">${s.v}</div><div class="stat-lbl">${s.l}</div></div>`).join('')}
    </div>

    <!-- Slider Management -->
    <div class="card">
      <div class="card-head">
        <h3>${duoIcon('images','sm')}Slider Management</h3>
        <button class="btn-xs btn-add" onclick="openSliderModal()">${duoIcon('plus','sm')} Add Slide</button>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table" style="width:100%">
          <thead><tr><th>Game</th><th>Tag</th><th>Subtitle</th><th>Actions</th></tr></thead>
          <tbody id="sliderTbody">
            ${DB.sliderItems.map(s=>{
              const g=DB.games.find(x=>x.id===s.gameId);
              const c2=ci(g?.cat);
              const logoThumb = g?.logo
                ? `<img src="${g.logo}" style="width:32px;height:32px;object-fit:cover;border-radius:6px;border:1px solid var(--border)">`
                : `<div style="width:32px;height:32px;background:${c2.b};border-radius:6px;display:flex;align-items:center;justify-content:center;">${`<i class="${c2.i}" style="font-size:13px;color:${c2.c}"></i>`}</div>`;
              return`<tr id="sr-${s.id}">
                <td><div style="display:flex;align-items:center;gap:9px">${logoThumb}<span style="font-weight:600;color:var(--text-1)">${g?.title||'Unknown'}</span></div></td>
                <td><span class="role-badge role-player">${s.tag}</span></td>
                <td style="color:var(--text-3);max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.subtitle}</td>
                <td><button class="btn-xs btn-del" onclick="delSlide(${s.id})">${duoIcon('trash','sm')} Remove</button></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Player Management -->
    <div class="card">
      <div class="card-head">
        <h3>${duoIcon('user','sm')} Player Management</h3>
        <button class="btn-xs btn-add" onclick="openAdminAccountModal()">
          ${duoIcon('plus','sm')} Add Account
        </button>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table" style="width:100%">
          <thead><tr><th>Player</th><th>Username</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody id="playersTbody">
            ${DB.users.map(u => {
              const isLocked = DB.lockedUsers && DB.lockedUsers.includes(u.id);
              const isCurrentAdmin = u.id === S.user.id;
              return `<tr id="pu-${u.id}">
                <td>
                  <div style="display:flex;align-items:center;gap:9px">
                    <div style="width:30px;height:30px;border-radius:50%;background:var(--duo-grad);
                      display:flex;align-items:center;justify-content:center;font-family:var(--fh);
                      font-size:12px;font-weight:700;color:#fff;overflow:hidden;flex-shrink:0">
                      ${u.avatar ? `<img src="${u.avatar}" style="width:100%;height:100%;object-fit:cover">` : u.name.charAt(0)}
                    </div>
                    <span style="font-weight:600;color:var(--t1)">${u.name}</span>
                  </div>
                </td>
                <td style="font-family:var(--fm);color:var(--p1);font-size:11px">@${u.username}</td>
                <td><span class="role-badge ${u.role==='admin'?'role-admin':'role-player'}">${u.role}</span></td>
                <td>
                  ${isLocked
                    ? `<span style="padding:2px 8px;border-radius:3px;font-size:9px;font-weight:700;background:rgba(248,113,113,.12);color:#f87171;border:1px solid rgba(248,113,113,.25)">
                        <i class="fa-solid fa-lock" style="font-size:8px"></i> LOCKED
                       </span>`
                    : `<span style="padding:2px 8px;border-radius:3px;font-size:9px;font-weight:700;background:rgba(52,211,153,.1);color:#34d399;border:1px solid rgba(52,211,153,.22)">
                        <i class="fa-solid fa-circle-check" style="font-size:8px"></i> ACTIVE
                       </span>`
                  }
                </td>
                <td>
                  <div style="display:flex;gap:5px;flex-wrap:wrap">
                    ${!isCurrentAdmin ? `
                    <button class="btn-xs btn-edit" onclick="openEditUserModal(${u.id})" title="Edit">
                      ${duoIcon('pen','sm')} Edit
                    </button>
                    <button class="btn-xs ${isLocked ? 'btn-add' : 'btn-del'}" onclick="toggleLockUser(${u.id})" title="${isLocked?'Unlock':'Lock'}">
                      <i class="fa-solid fa-${isLocked?'lock-open':'lock'}" style="font-size:9px"></i> ${isLocked?'Unlock':'Lock'}
                    </button>
                    ${u.role !== 'admin' ? `
                    <button class="btn-xs btn-del" onclick="deleteUser(${u.id})" title="Delete">
                      ${duoIcon('trash','sm')} Del
                    </button>` : ''}` : `
                    <span style="font-size:11px;color:var(--t3);font-style:italic">You (current admin)</span>`}
                  </div>
                </td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Games Management -->
    <div class="card">
      <div class="card-head">
        <h3>${duoIcon('gamepad','sm')}Games Management</h3>
        <button class="btn-xs btn-add" onclick="openGameModal()">${duoIcon('plus','sm')} Add Game</button>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table" style="width:100%">
          <thead><tr><th>Title</th><th>Category</th><th>Rating</th><th>Plays</th><th>Badge</th><th>Actions</th></tr></thead>
          <tbody id="gamesTbody">${DB.games.map(g=>gameAdminRow(g)).join('')}</tbody>
        </table>
      </div>
    </div>`;
  // Update storage indicator after render
  setTimeout(updateStorageStatus, 50);
}

function gameAdminRow(g) {
  return `<tr id="gr-${g.id}">
    <td style="font-weight:600;color:var(--text-1)">${g.title}</td>
    <td>${g.cat}</td>
    <td style="color:var(--gold);font-family:var(--fm)">${g.rating}</td>
    <td style="font-family:var(--fm)">${(g.plays/1000).toFixed(0)}K</td>
    <td>${g.badge?`<span class="game-badge badge-${g.badge}" style="position:static">${g.badge.toUpperCase()}</span>`:'—'}</td>
    <td><div style="display:flex;gap:5px">
      <button class="btn-xs btn-edit" onclick="openGameModal(${g.id})">${duoIcon('pen','sm')} Edit</button>
      <button class="btn-xs btn-del"  onclick="delGame(${g.id})">${duoIcon('trash','sm')} Del</button>
    </div></td>
  </tr>`;
}

function delGame(id) {
  if (!confirm('Delete this game? This cannot be undone.')) return;
  const idx = DB.games.findIndex(g=>g.id===id);
  if (idx !== -1) {
    localStorage.removeItem(`nexusgames_html_${id}`);
    DB.games.splice(idx,1);
  }
  dbSave();
  ge(`gr-${id}`)?.remove();
  setTimeout(updateStorageStatus, 50);
  showToast('success','fa-solid fa-check','Game deleted.');
}

function delSlide(id) {
  DB.sliderItems.splice(DB.sliderItems.findIndex(s=>s.id===id),1);
  dbSave();
  renderAdmin(ge('pageContent'));
  showToast('success','fa-solid fa-check','Slide removed.');
}

function confirmReset() {
  if (!confirm('⚠️ Reset all data to default?\n\nYe sab admin-added games, slider changes, aur registered players ko HATA DEGA.\n\nAre you sure?')) return;
  dbClear();
  renderAdmin(ge('pageContent'));
  showToast('info','fa-solid fa-rotate','Database reset to default.');
}

/* ─── ADMIN USER MANAGEMENT ─────────────────── */

function toggleLockUser(id) {
  if (!DB.lockedUsers) DB.lockedUsers = [];
  const idx = DB.lockedUsers.indexOf(id);
  if (idx === -1) {
    DB.lockedUsers.push(id);
    showToast('info','fa-solid fa-lock','Account locked. Player cannot log in.');
  } else {
    DB.lockedUsers.splice(idx,1);
    showToast('success','fa-solid fa-lock-open','Account unlocked.');
  }
  dbSave();
  renderAdmin(ge('pageContent'));
}

function deleteUser(id) {
  const u = DB.users.find(x=>x.id===id);
  if (!u) return;
  if (u.role==='admin') { showToast('error','fa-solid fa-triangle-exclamation','Cannot delete admin account.'); return; }
  if (!confirm(`Delete player "${u.name}" (@${u.username})? This cannot be undone.`)) return;
  DB.users.splice(DB.users.findIndex(x=>x.id===id),1);
  if (DB.lockedUsers) DB.lockedUsers = DB.lockedUsers.filter(x=>x!==id);
  dbSave();
  ge(`pu-${id}`)?.remove();
  showToast('success','fa-solid fa-check','Player deleted.');
}

function openEditUserModal(id) {
  const u = DB.users.find(x=>x.id===id);
  if (!u) return;
  showModal('fa-solid fa-user-pen', `Edit: ${u.name}`, `
    <div class="fg"><label>Display Name</label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-user" style="font-size:11px"></i></span>
        <input type="text" id="eu-name" value="${u.name}">
      </div>
    </div>
    <div class="fg"><label>Username</label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-at" style="font-size:11px"></i></span>
        <input type="text" id="eu-user" value="${u.username}">
      </div>
    </div>
    <div class="fg"><label>New Password <span style="color:var(--t3);font-weight:400">(leave blank to keep current)</span></label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-key" style="font-size:11px"></i></span>
        <input type="password" id="eu-pass" placeholder="New password (optional)">
      </div>
    </div>
    <div class="fg"><label>Role</label>
      <select id="eu-role">
        <option value="player"${u.role==='player'?' selected':''}>Player</option>
        <option value="admin"${u.role==='admin'?' selected':''}>Admin</option>
      </select>
    </div>
  `, () => saveEditUser(id));
}

function saveEditUser(id) {
  const u = DB.users.find(x=>x.id===id); if(!u) return;
  const name = v('eu-name'), username = v('eu-user'), pass = ge('eu-pass').value, role = ge('eu-role').value;
  if (!name || !username) { showToast('error','fa-solid fa-triangle-exclamation','Name and username required.'); return; }
  // Check username conflict
  if (DB.users.find(x=>x.id!==id && x.username===username)) {
    showToast('error','fa-solid fa-triangle-exclamation','Username already taken.'); return;
  }
  u.name = name; u.username = username; u.role = role;
  if (pass && pass.length >= 6) u.password = pass;
  else if (pass && pass.length > 0) { showToast('error','fa-solid fa-triangle-exclamation','Password must be at least 6 characters.'); return; }
  dbSave(); closeModal();
  renderAdmin(ge('pageContent'));
  showToast('success','fa-solid fa-check','Player updated successfully.');
}

// Admin change own username/password
function openAdminAccountModal() {
  const u = S.user;
  showModal('fa-solid fa-user-shield', 'Add New Account', `
    <div class="fg"><label>Full Name *</label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-user" style="font-size:11px"></i></span>
        <input type="text" id="na-name" placeholder="Full name">
      </div>
    </div>
    <div class="fg"><label>Username *</label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-at" style="font-size:11px"></i></span>
        <input type="text" id="na-user" placeholder="Username">
      </div>
    </div>
    <div class="fg"><label>Password *</label>
      <div class="input-wrap"><span class="ii"><i class="fa-solid fa-key" style="font-size:11px"></i></span>
        <input type="password" id="na-pass" placeholder="Minimum 6 characters">
      </div>
    </div>
    <div class="fg"><label>Role</label>
      <select id="na-role">
        <option value="player">Player</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  `, () => {
    const name=v('na-name'), user=v('na-user'), pass=ge('na-pass').value, role=ge('na-role').value;
    if(!name||!user||!pass){showToast('error','fa-solid fa-triangle-exclamation','All fields required.');return;}
    if(pass.length<6){showToast('error','fa-solid fa-triangle-exclamation','Password min 6 chars.');return;}
    if(DB.users.find(x=>x.username===user)){showToast('error','fa-solid fa-triangle-exclamation','Username taken.');return;}
    DB.users.push({id:Date.now(),username:user,password:pass,role,name,avatar:''});
    dbSave(); closeModal();
    renderAdmin(ge('pageContent'));
    showToast('success','fa-solid fa-check',`Account "${user}" created.`);
  });
}

/* ─── GAME PROGRESS SYSTEM ──────────────────── */

function getProgress(uid) {
  try { return JSON.parse(localStorage.getItem('nexusgames_progress_' + uid) || '{}'); } catch(e) { return {}; }
}

function setProgress(uid, gid, status) {
  const p = getProgress(uid);
  p[gid] = { status, updatedAt: new Date().toLocaleDateString('en',{day:'numeric',month:'short'}) };
  try { localStorage.setItem('nexusgames_progress_' + uid, JSON.stringify(p)); } catch(e) {}
  dbSave(); // sync to Firebase
}

function updateGameStatus(gid, status) {
  if (!S.user || !status) return;
  setProgress(S.user.id, gid, status);
  showToast('success','fa-solid fa-check','Status updated: ' + status);
  // Refresh the progress section in-place if on profile, else navigate
  const progEl = document.querySelector('.prog-section-wrap');
  if (progEl) {
    progEl.innerHTML = buildProgressSection(S.user.id);
  } else if (S.page === 'profile') {
    navigateTo('profile');
  }
}

// Build progress section HTML using string concat — avoids nested template literal issues
function buildProgressSection(uid) {
  const STATUS = {
    'Playing':   {color:'#34d399', bg:'rgba(52,211,153,.12)',  icon:'fa-solid fa-play',     label:'Playing'},
    'Completed': {color:'#f59e0b', bg:'rgba(245,158,11,.12)',  icon:'fa-solid fa-trophy',   label:'Completed'},
    'Wishlist':  {color:'#818cf8', bg:'rgba(129,140,248,.12)', icon:'fa-solid fa-bookmark', label:'Wishlist'},
    'Dropped':   {color:'#94a3b8', bg:'rgba(148,163,184,.12)', icon:'fa-solid fa-xmark',    label:'Dropped'},
  };
  const prog    = getProgress(uid);
  const entries = Object.entries(prog);
  const counts  = {Playing:0, Completed:0, Wishlist:0, Dropped:0};
  entries.forEach(function(e) { if (counts[e[1].status] !== undefined) counts[e[1].status]++; });

  // Summary cards
  var html = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:8px;margin-bottom:14px">';
  Object.entries(STATUS).forEach(function(entry) {
    var key = entry[0], cfg = entry[1];
    html += '<div style="background:var(--bg-1);border:1px solid var(--bd);border-radius:var(--radius-sm);padding:10px;text-align:center">';
    html += '<i class="' + cfg.icon + '" style="font-size:20px;color:' + cfg.color + ';margin-bottom:6px;display:block"></i>';
    html += '<div style="font-family:var(--fm);font-size:20px;font-weight:900;color:' + cfg.color + '">' + counts[key] + '</div>';
    html += '<div style="font-size:10px;color:var(--t3);margin-top:2px">' + key + '</div>';
    html += '</div>';
  });
  html += '</div>';

  if (entries.length === 0) {
    html += '<div style="text-align:center;padding:24px;color:var(--t3)">';
    html += '<i class="fa-solid fa-chart-bar" style="font-size:28px;margin-bottom:8px;display:block;opacity:.3"></i>';
    html += '<p style="font-size:13px">No games tracked yet.</p>';
    html += '<p style="font-size:11px;margin-top:5px">Open any game page and set its status — Playing, Completed, Wishlist, or Dropped.</p>';
    html += '</div>';
    return html;
  }

  // Game entries list
  html += '<div style="display:flex;flex-direction:column;gap:7px;max-height:280px;overflow-y:auto">';
  entries.slice(0, 10).forEach(function(entry) {
    var gid = entry[0], pd = entry[1];
    var game = DB.games.find(function(g){ return g.id == gid; }); // == handles string/int
    if (!game) return;
    var c   = ci(game.cat);
    var cfg = STATUS[pd.status] || STATUS['Playing'];

    var logoHTML = game.logo
      ? '<img src="' + game.logo + '" style="width:34px;height:34px;border-radius:7px;object-fit:cover;flex-shrink:0">'
      : '<div style="width:34px;height:34px;border-radius:7px;background:' + c.b + ';display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="' + c.i + '" style="font-size:14px;color:' + c.c + '"></i></div>';

    var optionsHTML = ['Playing','Completed','Wishlist','Dropped'].map(function(s) {
      return '<option value="' + s + '"' + (pd.status === s ? ' selected' : '') + '>' + s + '</option>';
    }).join('');

    html += '<div style="display:flex;align-items:center;gap:10px;padding:9px 11px;background:var(--bg-1);border:1px solid var(--bd);border-radius:var(--radius-sm);cursor:pointer;transition:var(--tr)" onclick="navigateTo(\'gamedetail\',' + game.id + ')">';
    html += logoHTML;
    html += '<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + game.title + '</div>';
    html += '<div style="font-size:10px;color:var(--t3)">' + game.cat + (pd.updatedAt ? ' · ' + pd.updatedAt : '') + '</div></div>';
    html += '<span style="padding:2px 8px;border-radius:3px;font-size:9px;font-weight:700;background:' + cfg.bg + ';color:' + cfg.color + ';border:1px solid ' + cfg.color + '44;flex-shrink:0;font-family:var(--fm)"><i class="' + cfg.icon + '" style="font-size:8px"></i> ' + pd.status + '</span>';
    html += '<select onchange="updateGameStatus(' + game.id + ',this.value);event.stopPropagation()" onclick="event.stopPropagation()" style="background:var(--bg-card);border:1px solid var(--bd);border-radius:5px;color:var(--t2);font-size:10px;padding:3px 5px;cursor:pointer;flex-shrink:0;margin-left:4px"><option value="">Change...</option>' + optionsHTML + '</select>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}


function updateStorageStatus() {
  const el = ge('storageInfo'); if(!el) return;
  try {
    const raw = localStorage.getItem(STORE_KEY);
    const sizeKB = raw ? (raw.length / 1024).toFixed(1) : '0';
    // Estimate available space (most browsers allow 5-10MB)
    let totalKB = '?';
    try {
      let used = 0;
      for (let i=0; i<localStorage.length; i++) {
        const k = localStorage.key(i);
        used += (localStorage.getItem(k)||'').length + k.length;
      }
      totalKB = (used/1024).toFixed(1);
    } catch(e){}
    el.textContent = `${DB.games.length} games · ${sizeKB}KB saved`;
  } catch(e) {
    el.textContent = 'Storage unavailable';
  }
}


// Temp storage for uploaded file data-URIs (survives modal re-renders)
const _modalData = { logo:'', htmlFileContent:'', htmlFileName:'', screenshots:[] };

function openGameModal(gid) {
  const g = gid ? DB.games.find(x=>x.id===gid) : null;

  // Reset temp store when opening fresh
  _modalData.logo = g?.logo||'';
  _modalData.htmlFileContent = g?.htmlFileContent||'';
  _modalData.htmlFileName = g?.htmlFileName||'';
  _modalData.screenshots = g?.screenshots ? [...g.screenshots] : [];

  const existingSS = _modalData.screenshots.map((src,i)=>`
    <div id="ss-item-${i}" style="position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--border);background:var(--bg-1);">
      <img src="${src}" style="width:100%;height:90px;object-fit:cover;display:block;">
      <button onclick="removeSSItem(${i})" style="position:absolute;top:4px;right:4px;width:22px;height:22px;background:rgba(239,68,68,.85);border:none;border-radius:50%;color:#fff;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;">${duoIcon('xmark','sm')}</button>
    </div>`).join('');

  showModal(gid?'fa-solid fa-pen':'fa-solid fa-plus', gid?`Edit: ${g.title}`:'Add New Game', `
    <div class="form-row col2">
      <div class="fg"><label>Game Title *</label><input type="text" id="mTitle" value="${g?.title||''}"></div>
      <div class="fg"><label>Category *</label><select id="mCat">${DB.categories.map(c=>`<option value="${c.name}"${g?.cat===c.name?' selected':''}>${c.name}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label>Description *</label><textarea id="mDesc" style="min-height:72px">${g?.desc||''}</textarea></div>
    <div class="form-row col3">
      <div class="fg"><label>Rating (1–5)</label><input type="number" id="mRating" min="1" max="5" step="0.1" value="${g?.rating||4.5}"></div>
      <div class="fg"><label>Badge</label><select id="mBadge"><option value="">None</option><option value="new"${g?.badge==='new'?' selected':''}>NEW</option><option value="hot"${g?.badge==='hot'?' selected':''}>HOT</option><option value="top"${g?.badge==='top'?' selected':''}>TOP</option></select></div>
      <div class="fg"><label>Age Rating</label><input type="text" id="mAge" value="${g?.age||'All'}"></div>
    </div>
    <div class="form-row col2">
      <div class="fg"><label>Developer</label><input type="text" id="mDev" value="${g?.dev||''}"></div>
      <div class="fg"><label>Version</label><input type="text" id="mVer" value="${g?.ver||''}"></div>
    </div>

    <!-- ── GAME FILE / URL SECTION ── -->
    <div class="fg">
      <label>Game Source</label>
      <!-- Tab toggle -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;background:var(--bg-1);border:1px solid var(--border);border-radius:var(--radius-sm);padding:3px;margin-bottom:10px">
        <button type="button" id="srcTabUrl" onclick="switchSrcTab('url')"
          style="padding:7px;border:none;border-radius:4px;font-family:var(--fh);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:var(--tr);background:linear-gradient(135deg,var(--accent),#0369a1);color:#fff">
          ${duoIcon('link','xs')} URL / Path
        </button>
        <button type="button" id="srcTabFile" onclick="switchSrcTab('file')"
          style="padding:7px;border:none;border-radius:4px;font-family:var(--fh);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:var(--tr);background:transparent;color:var(--text-3)">
          ${duoIcon('file-code','lg')} Upload HTML File
        </button>
      </div>

      <!-- URL Panel -->
      <div id="srcPanelUrl">
        <div class="input-wrap">${duoIcon('link','xs')}
          <input type="text" id="mUrl" value="${g?.url||''}" placeholder="games/mygame.html  or  https://example.com/game">
        </div>
        <p style="font-size:11px;color:var(--text-3);margin-top:5px;display:flex;align-items:center;gap:5px">
          ${duoIcon('info','sm')}
          Type a relative path like <strong style="color:var(--accent)">games/mygame.html</strong> or a full external URL.
        </p>
      </div>

      <!-- HTML File Upload Panel -->
      <div id="srcPanelFile" style="display:none">
        <div id="htmlFileDropZone" class="upload-area" onclick="ge('htmlFileInput').click()"
          ondragover="event.preventDefault();this.style.borderColor='var(--accent)'"
          ondragleave="this.style.borderColor=''"
          ondrop="handleHtmlDrop(event)">
          ${duoIcon('file-code','lg')}
          <p>Click or drag &amp; drop your HTML game file here</p>
          <span>Only .html files — game will open in a new tab when played</span>
        </div>
        <input type="file" id="htmlFileInput" accept=".html,.htm" style="display:none" onchange="handleHtmlUpload(this)">
        <div id="htmlFileStatus" style="margin-top:8px">${_modalData.htmlFileName?`<div class="upload-preview">${duoIcon('check','sm')}<span style="flex:1">${_modalData.htmlFileName}</span>${duoIcon('file-code','lg')}</div>`:''}</div>
      </div>
    </div>

    <!-- ── LOGO UPLOAD ── -->
    <div class="fg">
      <label>Game Logo / Cover Image</label>
      <div style="display:flex;gap:10px;align-items:flex-start">
        <div id="logoThumb" style="width:72px;height:72px;border-radius:10px;border:1px solid var(--border);background:var(--bg-1);overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer" onclick="ge('logoFileInp').click()">
          ${_modalData.logo
            ? `<img src="${_modalData.logo}" style="width:100%;height:100%;object-fit:cover">`
            : `${duoIcon('images','sm')}`}
        </div>
        <div style="flex:1">
          <div class="upload-area" onclick="ge('logoFileInp').click()" style="padding:12px">
            ${duoIcon('upload','lg')}
            <p>${_modalData.logo?'Click to change logo':'Click to upload logo'}</p>
            <span>PNG, JPG, WebP — will show on cards, slider &amp; detail page</span>
          </div>
        </div>
      </div>
      <input type="file" id="logoFileInp" accept="image/*" style="display:none" onchange="handleLogoUpload(this)">
    </div>

    <!-- ── SCREENSHOTS UPLOAD ── -->
    <div class="fg">
      <label>Screenshots <span style="color:var(--text-3);font-weight:400;font-family:var(--fb)">(up to 3 — any ratio auto-adjusts)</span></label>
      <div id="ssGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px">
        ${existingSS || '<p style="font-size:11px;color:var(--text-3);grid-column:span 3">No screenshots yet.</p>'}
      </div>
      <div class="upload-area" onclick="ge('ssFileInp').click()"
        ondragover="event.preventDefault();this.style.borderColor='var(--accent)'"
        ondragleave="this.style.borderColor=''"
        ondrop="handleSsDrop(event)"
        style="padding:12px">
        ${duoIcon('images','sm')}
        <p>Click or drag screenshots here</p>
        <span>PNG, JPG — landscape or portrait, all auto-adjusted</span>
      </div>
      <input type="file" id="ssFileInp" accept="image/*" multiple style="display:none" onchange="handleSsUpload(this)">
    </div>

    <!-- ── TAGS ── -->
    <div class="fg">
      <label>Tags <span style="color:var(--text-3);font-weight:400;font-family:var(--fb)">(comma separated)</span></label>
      <div class="input-wrap">${duoIcon('tag','xs')}
        <input type="text" id="mTags" value="${g?.tags?.join(', ')||''}" placeholder="Action, FPS, Multiplayer">
      </div>
    </div>
  `, ()=>saveGame(gid));

  // If game already has HTML content, show file tab as active
  if (_modalData.htmlFileContent) { switchSrcTab('file'); }
}

/* Source tab switcher */
function switchSrcTab(tab) {
  const urlPanel  = ge('srcPanelUrl');
  const filePanel = ge('srcPanelFile');
  const urlBtn    = ge('srcTabUrl');
  const fileBtn   = ge('srcTabFile');
  if (!urlPanel||!filePanel) return;

  if (tab==='url') {
    urlPanel.style.display='block'; filePanel.style.display='none';
    urlBtn.style.background='linear-gradient(135deg,var(--accent),#0369a1)'; urlBtn.style.color='#fff';
    fileBtn.style.background='transparent'; fileBtn.style.color='var(--text-3)';
  } else {
    urlPanel.style.display='none'; filePanel.style.display='block';
    fileBtn.style.background='linear-gradient(135deg,var(--accent),#0369a1)'; fileBtn.style.color='#fff';
    urlBtn.style.background='transparent'; urlBtn.style.color='var(--text-3)';
  }
}

/* HTML file upload handler */
function handleHtmlUpload(input) {
  const f=input.files[0]; if(!f) return;
  if (!f.name.match(/\.html?$/i)) { showToast('error','warning','Only .html files allowed.'); return; }
  const reader=new FileReader();
  reader.onload=e=>{
    _modalData.htmlFileContent=e.target.result;
    _modalData.htmlFileName=f.name;
    const st=ge('htmlFileStatus');
    if(st) st.innerHTML=`<div class="upload-preview">${duoIcon('check','sm')}<span style="flex:1">${f.name} (${(e.target.result.length/1024).toFixed(1)} KB)</span>${duoIcon('file-code','lg')}</div>`;
    showToast('success','check',`HTML file "${f.name}" ready.`);
  };
  reader.readAsText(f);
}

function handleHtmlDrop(e) {
  e.preventDefault(); e.currentTarget.style.borderColor='';
  const f=e.dataTransfer.files[0]; if(!f) return;
  const dt=new DataTransfer(); dt.items.add(f);
  ge('htmlFileInput').files=dt.files;
  handleHtmlUpload(ge('htmlFileInput'));
}

/* Logo upload with preview */
function handleLogoUpload(input) {
  const f=input.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload=e=>{
    _modalData.logo=e.target.result;
    const thumb=ge('logoThumb');
    if(thumb) thumb.innerHTML=`<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`;
    showToast('success','images','Logo uploaded.');
  };
  reader.readAsDataURL(f);
}

/* Screenshot upload — auto smart-resize via canvas */
function handleSsUpload(input) {
  const files=Array.from(input.files).slice(0,3-_modalData.screenshots.length);
  files.forEach(f=>{
    const reader=new FileReader();
    reader.onload=e=>{
      // Smart resize: fit into 800x500 box preserving aspect ratio
      resizeImageSmart(e.target.result, 800, 500, (resized)=>{
        _modalData.screenshots.push(resized);
        refreshSsGrid();
      });
    };
    reader.readAsDataURL(f);
  });
  input.value='';
}

function handleSsDrop(e) {
  e.preventDefault(); e.currentTarget.style.borderColor='';
  const files=Array.from(e.dataTransfer.files).filter(f=>f.type.startsWith('image/')).slice(0,3-_modalData.screenshots.length);
  files.forEach(f=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      resizeImageSmart(ev.target.result,800,500,(resized)=>{
        _modalData.screenshots.push(resized);
        refreshSsGrid();
      });
    };
    reader.readAsDataURL(f);
  });
}

/* Smart resize: any orientation → fits inside maxW×maxH, letterboxed with dark bg */
function resizeImageSmart(dataUrl, maxW, maxH, callback) {
  const img=new Image();
  img.onload=()=>{
    const sw=img.naturalWidth, sh=img.naturalHeight;
    // Scale to fit inside box
    const scale=Math.min(maxW/sw, maxH/sh, 1);
    const dw=Math.round(sw*scale), dh=Math.round(sh*scale);
    const canvas=document.createElement('canvas');
    canvas.width=maxW; canvas.height=maxH;
    const ctx=canvas.getContext('2d');
    // Dark background fill
    ctx.fillStyle='#071630';
    ctx.fillRect(0,0,maxW,maxH);
    // Center image
    const ox=Math.round((maxW-dw)/2), oy=Math.round((maxH-dh)/2);
    ctx.drawImage(img,ox,oy,dw,dh);
    callback(canvas.toDataURL('image/jpeg',0.88));
  };
  img.src=dataUrl;
}

function refreshSsGrid() {
  const grid=ge('ssGrid'); if(!grid) return;
  if (!_modalData.screenshots.length) {
    grid.innerHTML='<p style="font-size:11px;color:var(--text-3);grid-column:span 3">No screenshots yet.</p>';
    return;
  }
  grid.innerHTML=_modalData.screenshots.map((src,i)=>`
    <div style="position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--border);background:#071630;">
      <img src="${src}" style="width:100%;height:90px;object-fit:contain;display:block;background:#071630;">
      <button onclick="removeSSItem(${i})" style="position:absolute;top:4px;right:4px;width:22px;height:22px;background:rgba(239,68,68,.85);border:none;border-radius:50%;color:#fff;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;">${duoIcon('xmark','sm')}</button>
    </div>`).join('');
}

function removeSSItem(idx) {
  _modalData.screenshots.splice(idx,1);
  refreshSsGrid();
}

function removeScreenshot(gid, idx) {
  const g=DB.games.find(x=>x.id===parseInt(gid));
  if (g) { g.screenshots.splice(idx,1); _modalData.screenshots=[...g.screenshots]; }
  refreshSsGrid();
}

function saveGame(gid) {
  const title=v('mTitle');
  if(!title){ showToast('error','warning','Title is required.'); return; }

  // Determine final URL: HTML file content takes priority, then URL field
  let finalUrl = v('mUrl');
  let finalHtmlContent = _modalData.htmlFileContent;
  let finalHtmlName    = _modalData.htmlFileName;

  // If HTML file uploaded and no URL typed, use blob URL placeholder
  if (finalHtmlContent && !finalUrl) {
    finalUrl = `games/${finalHtmlName||'game.html'}`;
  }

  const data={
    title, cat:ge('mCat')?.value||'Action', desc:v('mDesc'),
    rating:parseFloat(ge('mRating')?.value)||4.5,
    badge:ge('mBadge')?.value||'', age:v('mAge')||'All',
    dev:v('mDev'), ver:v('mVer'),
    url:finalUrl,
    htmlFileContent:finalHtmlContent,
    htmlFileName:finalHtmlName,
    logo:_modalData.logo,
    screenshots:[..._modalData.screenshots],
    tags:v('mTags').split(',').map(t=>t.trim()).filter(Boolean),
    date:new Date().toLocaleDateString('en',{month:'short',year:'numeric'}),
  };

  if (gid) {
    const g=DB.games.find(x=>x.id===gid);
    if(g) Object.assign(g,data);
    showToast('success','fa-solid fa-check','Game updated successfully.');
  } else {
    data.id=Math.max(...DB.games.map(x=>x.id),0)+1;
    data.plays=0; data.comments=[];
    DB.games.push(data);
    showToast('success','fa-solid fa-check','Game added successfully.');
  }
  dbSave();
  closeModal();
  renderAdmin(ge('pageContent'));
  setTimeout(updateStorageStatus, 100);
}

/* ─── SLIDER MODAL ──────────────────────────── */
function openSliderModal() {
  showModal('fa-solid fa-images','Add Slider Item',`
    <div class="fg"><label>Select Game *</label><select id="sGame">${DB.games.map(g=>`<option value="${g.id}">${g.title}</option>`).join('')}</select></div>
    <div class="fg"><label>Tag Label</label><div class="input-wrap">${duoIcon('tag','xs')}<input type="text" id="sTag" value="FEATURED" placeholder="FEATURED, HOT, NEW..."></div></div>
    <div class="fg"><label>Tag Icon (Font Awesome class)</label><div class="input-wrap">${duoIcon('star','xs')}<input type="text" id="sIcon" value="fa-solid fa-star" placeholder="fa-solid fa-fire"></div></div>
    <div class="fg"><label>Subtitle</label><div class="input-wrap">${duoIcon('envelope','xs')}<input type="text" id="sSub" placeholder="Short promotional subtitle..."></div></div>
  `, saveSlide);
}

function saveSlide() {
  const gid=parseInt(ge('sGame').value);
  const g=DB.games.find(x=>x.id===gid); if(!g) return;
  DB.sliderItems.push({
    id:Math.max(...DB.sliderItems.map(s=>s.id),0)+1,
    gameId:gid, title:g.title,
    subtitle:v('sSub')||'Play now!',
    tag:(v('sTag')||'FEATURED').toUpperCase(),
    tagIcon:v('sIcon')||'fa-solid fa-star',
  });
  dbSave();
  closeModal(); renderAdmin(ge('pageContent'));
  showToast('success','fa-solid fa-check','Slide added.');
}

/* ─── MODAL ENGINE ──────────────────────────── */
function showModal(iCls, title, body, onOk) {
  ge('modalTitle').innerHTML=`<i class="${iCls}"></i> ${title}`;
  ge('modalBody').innerHTML=body;
  ge('modalOkBtn').onclick=onOk;
  ge('modalOverlay').classList.add('show');
}
function closeModal() { ge('modalOverlay').classList.remove('show'); }

/* ─── TOAST ─────────────────────────────────── */
function showToast(type, iconName, msg) {
  const c=ge('toastContainer'), el=document.createElement('div');
  el.className=`toast ${type}`;
  el.innerHTML=`${duoIcon(iconName,'sm')}<span>${msg}</span>`;
  c.appendChild(el); setTimeout(()=>el.remove(),3300);
}

/* ─── DOMContentLoaded ──────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{

  // ── 0. PHP: load latest data from server (async, updates after page renders) ──
  if (USE_PHP) {
    setTimeout(function(){ dbLoad(); }, 200); // slight delay so page renders first
  }

  // ── 1. AUTO-RESTORE SESSION (must run first, before anything else) ──
  try {
    if (sessionLoad()) {
      // Valid session found — hide login, show app immediately (no flash)
      const lp = ge('loginPage');
      const aw = ge('appWrapper');
      if (lp) lp.style.display = 'none';
      if (aw) aw.style.display = 'block';
      initApp(true); // restore last visited page
    }
  } catch(e) {
    console.warn('Session restore failed:', e);
    // Stay on login page
  }

  // ── 2. Login page setup (only needed if not auto-logged-in) ──
  try { injectLoginIcons(); } catch(e) {}

  // Particles
  try {
    const pc=ge('loginParticles');
    if (pc) {
      for(let i=0;i<28;i++){
        const p=document.createElement('div'); p.className='particle';
        p.style.cssText=`left:${Math.random()*100}%;animation-duration:${5+Math.random()*7}s;animation-delay:${Math.random()*7}s;--dx:${(Math.random()-.5)*90}px`;
        pc.appendChild(p);
      }
    }
  } catch(e) {}

  // Auth tab switching
  document.querySelectorAll('.auth-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.auth-panel').forEach(p=>p.classList.remove('active'));
      tab.classList.add('active');
      ge(`panel-${tab.dataset.tab}`)?.classList.add('active');
      ['login-error','reg-error','reg-success','forgot-error','forgot-success'].forEach(id=>hide(id));
    });
  });

  // Enter key on login
  ['l-user','l-pass'].forEach(id=>{
    ge(id)?.addEventListener('keydown',e=>{ if(e.key==='Enter') doLogin(); });
  });

  // Browser back/forward button support
  window.addEventListener('hashchange', () => {
    if (!S.user) return;
    const hash = window.location.hash.replace('#','');
    if (!hash) return;
    const parts = hash.split('/');
    const page  = parts[0] || 'home';
    const param = parts[1] ? (parseInt(parts[1])||parts[1]) : null;
    if (page !== S.page || String(param) !== String(S.gameId)) {
      S.page = page; S.gameId = param;
      if (S.slideTimer) { clearInterval(S.slideTimer); S.slideTimer=null; }
      document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.page===page));
      const el=ge('pageContent'); if(el) el.innerHTML='';
      ({
        home:()=>renderHome(el), allgames:()=>renderAllGames(el),
        categories:()=>renderCategories(el), gamedetail:()=>renderGameDetail(el,param),
        about:()=>renderAbout(el), contact:()=>renderContact(el),
        profile:()=>renderProfile(el), admin:()=>renderAdmin(el),
      }[page]||(() =>renderHome(el)))();
    }
  });
});

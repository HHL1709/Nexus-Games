-- ============================================================
-- NEXUS GAMES — MySQL Database Setup v2.0
-- Run this file ONCE to set up your database
-- Command: mysql -u root -p < php/setup.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS nexusgames
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE nexusgames;

-- ── USERS ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  username   VARCHAR(60)  NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  role       ENUM('player','admin') NOT NULL DEFAULT 'player',
  name       VARCHAR(120) NOT NULL,
  avatar     LONGTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_username (username),
  INDEX idx_role     (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── GAMES ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS games (
  id                INT AUTO_INCREMENT PRIMARY KEY,
  title             VARCHAR(200) NOT NULL,
  cat               VARCHAR(60)  NOT NULL DEFAULT 'Action',
  description       TEXT,
  rating            DECIMAL(3,1) NOT NULL DEFAULT 4.5,
  badge             VARCHAR(20)  DEFAULT '',
  age_rating        VARCHAR(10)  DEFAULT 'All',
  developer         VARCHAR(100) DEFAULT '',
  version           VARCHAR(30)  DEFAULT '1.0.0',
  game_url          VARCHAR(500) DEFAULT '',
  html_file_name    VARCHAR(200) DEFAULT '',
  html_file_content LONGTEXT,          -- stores uploaded .html game file
  logo              LONGTEXT,          -- base64 image data-URI
  plays             INT          NOT NULL DEFAULT 0,
  release_date      VARCHAR(20)  DEFAULT '',
  active            TINYINT(1)   NOT NULL DEFAULT 1,
  created_at        TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updated_at        TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_cat    (cat),
  INDEX idx_active (active),
  INDEX idx_rating (rating DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── GAME TAGS ──────────────────────────────────
CREATE TABLE IF NOT EXISTS game_tags (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT NOT NULL,
  tag     VARCHAR(60) NOT NULL,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  INDEX idx_game (game_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── GAME SCREENSHOTS ───────────────────────────
CREATE TABLE IF NOT EXISTS game_screenshots (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  game_id    INT NOT NULL,
  url        LONGTEXT NOT NULL,        -- base64 data-URI or URL
  sort_order INT NOT NULL DEFAULT 0,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  INDEX idx_game (game_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── GAME COMMENTS ──────────────────────────────
CREATE TABLE IF NOT EXISTS game_comments (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  game_id    INT NOT NULL,
  user_id    INT NOT NULL,
  text       TEXT NOT NULL,
  rating     TINYINT NOT NULL DEFAULT 5,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_game (game_id),
  INDEX idx_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ── SLIDER ITEMS ───────────────────────────────
CREATE TABLE IF NOT EXISTS slider_items (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  game_id    INT NOT NULL,
  tag        VARCHAR(40)  DEFAULT 'FEATURED',
  tag_icon   VARCHAR(60)  DEFAULT 'fa-solid fa-star',
  subtitle   VARCHAR(200) DEFAULT 'Play now!',
  sort_order INT NOT NULL DEFAULT 0,
  active     TINYINT(1)   NOT NULL DEFAULT 1,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  INDEX idx_active (active),
  INDEX idx_sort   (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ═══════════════════════════════════════════════
-- SEED DATA — Default Users
-- ═══════════════════════════════════════════════

-- Default passwords (bcrypt):
-- admin123  → for admin
-- pass123   → for player1 and player2
INSERT IGNORE INTO users (id, username, password, role, name) VALUES
(1, 'admin',   '$2y$10$YKpDOHJmhOHaK6bF3KZ5HOk4iFKI4RNQmLkpbXBNNIAtb0L98htK6', 'admin',  'Admin User'),
(2, 'player1', '$2y$10$G7eKDi7e1mz3yGr7cHFxpO/NcJzpZEYH3k5d7RKKh8EKnlmtJxV2.', 'player', 'Alex Storm'),
(3, 'player2', '$2y$10$G7eKDi7e1mz3yGr7cHFxpO/NcJzpZEYH3k5d7RKKh8EKnlmtJxV2.', 'player', 'Nova Ray');

-- ── SEED GAMES (first 10 as example — rest add via Admin Panel) ──
INSERT IGNORE INTO games (id,title,cat,description,rating,badge,age_rating,developer,version,game_url,plays,release_date,active) VALUES
(1, 'Cyber Strike',      'Action',    'An intense cyberpunk action game set in 2089.',           4.8,'hot','16+','NexusStudios','2.1.0','games/cyber-strike.html',  125000,'Jan 2024',1),
(2, 'Turbo Drift X',     'Racing',    'High-octane street racing with realistic physics.',        4.7,'new','7+', 'SpeedForge',  '3.0.1','games/turbo-drift.html',    98000,'Mar 2024',1),
(3, 'Mind Maze Pro',     'Puzzle',    'Mind-bending puzzle game with 500+ levels.',               4.6,'',  'All','BrainLabs',   '1.5.2','games/mind-maze.html',       67000,'Feb 2024',1),
(4, 'Shadow Quest',      'Adventure', 'Epic open-world adventure with stunning graphics.',        4.9,'top','13+','DarkHorizon', '4.2.1','games/shadow-quest.html',  210000,'Dec 2023',1),
(5, 'Galaxy Shooter',    'Shooter',   'Defend the galaxy from alien invasion.',                   4.5,'hot','10+','StarForge',   '2.3.0','games/galaxy-shooter.html',  87000,'Nov 2023',1),
(6, 'Chess Legends',     'Strategy',  'Classic chess with 3D pieces and ranked matchmaking.',    4.4,'',  'All','MindCraft',   '1.8.0','games/chess.html',            43000,'Oct 2023',1),
(7, 'Pixel Soccer',      'Sports',    'Fast-paced soccer with 200+ national teams.',              4.3,'new','7+', 'GoalForge',   '2.0.5','games/soccer.html',           76000,'Feb 2024',1),
(8, 'Dragon Realm RPG',  'RPG',       'Command dragons in this breathtaking RPG.',                4.8,'top','13+','DragonForge', '3.1.2','games/dragon-realm.html',   156000,'Jan 2024',1),
(9, 'Haunted Asylum',    'Horror',    'Survive the night in a terrifying abandoned asylum.',     4.2,'',  '18+','DarkMatter',  '1.2.3','games/horror.html',           52000,'Oct 2023',1),
(10,'Neon Arcade Blast', 'Arcade',    'Retro-inspired arcade with neon visuals.',                 4.6,'hot','All','PixelPulse',  '1.0.8','games/neon-arcade.html',      93000,'Mar 2024',1);

-- Tags for seed games
INSERT IGNORE INTO game_tags (game_id, tag) VALUES
(1,'Multiplayer'),(1,'FPS'),(1,'Sci-Fi'),
(2,'Racing'),(2,'3D'),(2,'Multiplayer'),
(3,'Puzzle'),(3,'Brain'),(3,'Casual'),
(4,'Open World'),(4,'RPG'),(4,'Story'),
(5,'Space'),(5,'Shooter'),(5,'Action'),
(6,'Chess'),(6,'Strategy'),(6,'Online'),
(7,'Soccer'),(7,'Sports'),(7,'Multiplayer'),
(8,'Dragon'),(8,'RPG'),(8,'Fantasy'),
(9,'Horror'),(9,'Survival'),(9,'Puzzle'),
(10,'Arcade'),(10,'Retro'),(10,'Highscore');

-- Default slider items
INSERT IGNORE INTO slider_items (id,game_id,tag,tag_icon,subtitle,sort_order,active) VALUES
(1,4, 'FEATURED',   'fa-solid fa-star',  'Epic open-world adventure awaits',           1,1),
(2,8, 'TOP RATED',  'fa-solid fa-crown', 'The ultimate RPG experience',                 2,1),
(3,1, 'HOT',        'fa-solid fa-fire',  'Fight through neon-lit corridors',            3,1),
(4,5, 'NEW RELEASE','fa-solid fa-bolt',  'Defend the galaxy from alien invasion',       4,1);

SELECT 'Setup complete! Nexus Games database ready.' AS status;
SELECT CONCAT(COUNT(*),' games loaded') AS games_status FROM games WHERE active=1;
SELECT CONCAT(COUNT(*),' users created') AS users_status FROM users;

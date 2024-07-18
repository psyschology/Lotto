-- database/game.sql

CREATE TABLE IF NOT EXISTS agents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
INSERT INTO agents (username, password) VALUES ('agent1', '$2b$10$7aA/7zKM3jaNjRo/LdG8yOTgzZ/0fB8sxHg1.GhGGovO1cZP.B7my');
INSERT INTO admins (username, password) VALUES ('admin1', '$2b$10$7aA/7zKM3jaNjRo/LdG8yOTgzZ/0fB8sxHg1.GhGGovO1cZP.B7my');

const Database = require('better-sqlite3');
const path = require('path');

// Inicialización mínima de la base de datos
const db = new Database('md2web.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    relative_path TEXT UNIQUE
  )
`);

module.exports = { db };

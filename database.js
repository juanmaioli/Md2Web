const Database = require('better-sqlite3');
const path = require('path');

// Inicialización mínima de la base de datos
const db = new Database('md2web.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  )
`);

// Insertar tema por defecto si no existe
db.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES ('theme', 'default')").run();

const getSetting = (key) => {
    const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(key);
    return row ? row.value : null;
};

const updateSetting = (key, value) => {
    db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)').run(key, value);
};

module.exports = { db, getSetting, updateSetting };

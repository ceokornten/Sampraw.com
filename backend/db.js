const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const dbFile = process.env.DB_FILE || path.join(__dirname, 'data.db');
const dbPromise = open({
  filename: dbFile,
  driver: sqlite3.Database
}).then(async db => {
  await db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL
  )`);
  return db;
});

async function getPosts() {
  const db = await dbPromise;
  return db.all('SELECT * FROM posts ORDER BY id DESC');
}

async function addPost(content) {
  const db = await dbPromise;
  const result = await db.run('INSERT INTO posts (content) VALUES (?)', content);
  return result.lastID;
}

module.exports = { getPosts, addPost };

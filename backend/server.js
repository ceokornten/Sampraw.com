const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// API routes
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await db.getPosts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/posts', async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }
  try {
    const id = await db.addPost(content);
    res.status(201).json({ id, content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add post' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

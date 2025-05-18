# Sampraw.com

This repository contains a simple website along with a Node.js backend.

## Structure

- `frontend/` - Static website files (HTML, CSS, JS)
- `backend/`  - Express server and SQLite database

## Running

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.

The server exposes API endpoints under `/api/posts` for retrieving and
adding posts stored in a local SQLite database.

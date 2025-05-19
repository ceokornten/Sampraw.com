# Sampraw.com

This repository contains a simple website along with a Node.js backend.
Current version: **v0.0.2**

## Structure

- `frontend/` - Static website files (HTML, CSS, JS)
- `backend/`  - Express server and SQLite database

## Running

1. Copy `.env.example` to `.env` and adjust values as needed.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Visit `http://localhost:3000` in your browser.

The server exposes API endpoints under `/api/posts` for retrieving and
adding posts stored in a local SQLite database.

## Configuration

The backend uses environment variables loaded from `.env`. The following
variables are supported:

- `PORT` &mdash; port number for the Express server
- `DB_FILE` &mdash; path to the SQLite database file

See `.env.example` for default values.

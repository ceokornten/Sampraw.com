# Repository Guidelines

## Project Structure & Module Organization
- `index.html` is the primary landing page; `blog.html`, `videos.html`, and `gallery.html` mirror the home layout for focused content views.
- `style.css` centralizes all styling; keep new rules grouped by section id (e.g., `#slideshow`, `#blog`) to match the existing structure.
- `script.js` contains slideshow rotation and video playlist logic. Extend the existing functions rather than introducing globals.
- Static assets live alongside pages. Use CDN links for large media, and place downloadable resources (e.g., `taiwan.ics`) at the repository root for predictable linking.
- `LICENSE` stays unchanged unless legal terms evolve.

## Build, Test, and Development Commands
- `python3 -m http.server 8000` — serves the site locally at `http://localhost:8000/` for realistic relative-path testing.
- `open index.html` (macOS) or `xdg-open index.html` (Linux) — quick smoke check without a server.
- `npx prettier@latest --check "**/*.{html,css,js}"` — optional formatting audit before submitting changes.

## Coding Style & Naming Conventions
- Use 4 spaces for HTML, CSS, and JavaScript indentation; wrap lines at ~100 characters to match current files.
- Keep HTML element and attribute names lowercase; favor semantic tags (`section`, `article`, `nav`) over generic `div`s.
- Match existing selector patterns: ids for primary sections, descriptive class names (e.g., `slide`, `active`) for reusable pieces.
- Write JavaScript in modern ES modules style: `const`/`let`, arrow functions for callbacks, and camelCase function names (`showSlide`).
- Run Prettier with `--write` when shuffling markup-heavy sections to maintain consistent spacing.

## Testing Guidelines
- After any interaction change, reload via the local server and exercise the slideshow, video playlist, and event download link.
- Use browser devtools responsive mode to verify layouts at 320px, 768px, and 1280px breakpoints covered by existing media queries.
- Keep `script.js` console-error free; open the devtools console during manual QA.
- For accessibility, confirm focus order and link text remain descriptive whenever navigation changes.

## Commit & Pull Request Guidelines
- Follow the existing concise, imperative style (`Add standalone gallery page`, `Update slideshow timing`); limit subject lines to ~72 characters.
- Group related edits per commit: HTML structure, styling, and scripts each get dedicated commits when feasible.
- Pull requests should include: summary of user-facing changes, impacted pages, screenshots or screen recordings for visual updates, and references to tracking issues.
- Note any new external assets or embeds so reviewers can verify hosting and licensing before merge.

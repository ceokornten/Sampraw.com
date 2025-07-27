# NoLimit Landing Page

This repository contains the static landing page for **NoLimit**. The project now includes separate pages for the blog, a video playlist, and an image gallery in addition to the home page.

## Viewing the Site

To view the site locally, you can either open the static HTML files directly or run the included Node.js server.

### Opening the static files

Clone this repository and open `index.html` or any of the other pages (`blog.html`, `videos.html`, `gallery.html`) in your favorite browser.

```
# Example
$ git clone <repo-url>
$ cd Sampraw.com
$ xdg-open index.html  # or open index.html on your system
```

### Running the Express server

If you have Node.js installed, you can start a local server using Express to serve the pages:

```
$ npm install
$ npm start
```

The site will be available at `http://localhost:3000` by default.

## Project Structure

- `index.html` – Main landing page with the slideshow, video playlist and blog posts.
- `blog.html` – Standalone page containing the blog section.
- `videos.html` – Standalone page showcasing the video playlist.
- `gallery.html` – Standalone page featuring the image slideshow/gallery.
- `style.css` – Stylesheet controlling page layout and appearance.
- `script.js` – JavaScript powering the slideshow and handling video playlist clicks.
- `LICENSE` – The MIT license for this project.

## License

This project is released under the [MIT License](LICENSE). You are free to use, modify, and distribute it under the terms of that license.

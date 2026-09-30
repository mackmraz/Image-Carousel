# Image Carousel (HTML, CSS & vanilla JavaScript)

A lightweight, responsive image carousel built with plain HTML, CSS, and JavaScript. There are no frameworks or dependencies. It shows several images at a time, pages through them with left and right handles, loops in both directions, and has a progress indicator that updates to match the screen size.

> **Status: finished practice project (2022).**

## Features
- **Multi-item slider** that shows 4 images per page on wide screens, 3 at 1000px and below, and 2 at 500px and below (CSS media queries)
- **Left/right handles** to move one page at a time, with hover and focus states
- **Wrap-around looping in both directions.** Going past the last page returns to the first, and vice versa.
- **Progress bar** with one indicator per page. The active page is highlighted, and the number of indicators is recalculated when the window is resized (throttled).
- **CSS-driven animation.** The slide position is a CSS custom property (`--slider-index`) that JavaScript updates, and CSS animates the `transform`.
- Handles clicks through a single delegated `click` listener on the document

## Tech stack
- HTML5
- CSS3 (custom properties, flexbox, `calc()`, `aspect-ratio`, media queries, transitions)
- Vanilla JavaScript (DOM APIs, `getComputedStyle`, a small throttle helper)

## Run locally
There's no build step. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/mackmraz/Image-Carousel.git
cd Image-Carousel
# open index.html directly, or serve the folder, for example:
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Project structure
```
index.html   Markup: header with title and progress bar, handles, and slider images
styles.css   Layout, responsive items-per-page, transitions, handle and progress styles
script.js    Handle clicks, looping, progress bar calculation, and resize throttling
```

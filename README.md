live demo : https://myasser1710.github.io/Weather-App/


# Weather App

A minimal, responsive weather UI built with **HTML**, **CSS/Bootstrap**, and **vanilla JavaScript**. The project is deployed on **GitHub Pages** and organized as a clean static site with modular assets (styles, scripts, fonts, and images).

> Live demo: https://myasser1710.github.io/Weather-App/

> Repository: https://github.com/myasser1710/Weather-App

---

## What this project demonstrates

This repository focuses on front-end fundamentals and practical structuring for a small, static app:

- **Semantic HTML** layout with a single entry point (`index.html`).
- **Responsive styling** via Bootstrap utilities + custom CSS (`/css/bootstrap.min.css`, `/css/style.css`).
- **Client‑side interaction** in plain JavaScript (`/JS`) for handling user input, DOM updates, and request/response flow.
- **Asset hygiene**: images in `/images`, typefaces in `/fonts` and `/webfonts`.
- **Production hosting** on GitHub Pages with a repo‑root `index.html` for zero‑config deployment.

> Languages (as reported by GitHub): **JavaScript ~41%**, **HTML ~40%**, **CSS ~19%**.

---

## UI overview

- **Top navigation** with standard sections (Home, News, Live Cameras, Photos, Contact).
- **Search box** ("Find") for location queries.
- **Results area** intended to display weather information for the searched location.
- **Footer attribution** to Themezy (original design/template credit).

> The site is intentionally lightweight: no frameworks, no build step. It’s a good foundation to practice data fetching, DOM rendering, and responsive design patterns without bundlers.

---

## Code structure

```
Weather-App/
├─ index.html            # Single-page entry
├─ css/
│  ├─ bootstrap.min.css  # Bootstrap base
│  └─ style.css          # Custom styles (layout, theme overrides)
├─ JS/                   # Client-side scripts (search, fetch/update, view state)
├─ images/               # Static images/assets
├─ fonts/                # Font files
└─ webfonts/             # Additional webfont files (icon sets, etc.)
```

### HTML (`index.html`)
- Declares the overall page scaffolding (header/nav, main content, footer).
- Wires stylesheets and JavaScript bundles.
- Provides a **search input** for city/location lookups.

### CSS (`/css`)
- **`bootstrap.min.css`**: Core responsive grid & utilities.
- **`style.css`**: Project‑specific rules (spacing, typography, theme adjustments, weather panel blocks, and small interaction affordances).

### JavaScript (`/JS`)
- **Input handling**: Reads from the search box, debounces/validates user input.
- **Data fetch layer**: A small wrapper to request weather data from a provider (or a mocked layer during development).
- **Rendering**: Updates the DOM with the latest conditions (e.g., temperature, description, icon) and any secondary data intended by the UI.
- **Error states**: Graceful messages for unknown locations, network errors, or empty results.

> Note: If you plan to call an external weather API, place the API base URL and key management in this layer. For public deployments, prefer a server‑side proxy to avoid exposing secrets in the client.

---

## Development notes

- **No build step**: Open `index.html` in a browser or use a lightweight static server (e.g., VS Code Live Server) for local iteration.
- **Responsive behavior**: Relies primarily on Bootstrap’s grid/utility classes; test on narrow (≤375px) and wide (≥1280px) viewports.
- **Accessibility**:
  - Ensure form controls (search input/button) have labels and `aria-*` attributes where appropriate.
  - Verify color contrast in `style.css`; prefer unitless line-heights and relative font sizes.
- **Performance**:
  - Serve optimized images from `/images`.
  - Defer non‑critical scripts; consider `async`/`defer` for JS includes.


---

## Extensibility roadmap

These items are pragmatic next steps that elevate the project from a template into a robust mini‑app:

- **Real weather data**: Plug in a provider (e.g., Open‑Meteo via client‑side fetch or OpenWeatherMap via a server proxy).
- **Search UX**: Add recent searches, geolocation fallback, and keyboard navigation for results.
- **State management**: Introduce a tiny state container (or just a single `state` module in `/JS`) to centralize UI state.
- **View components**: Split rendering into small functions/modules (current conditions, forecast list, error banners).
- **Unit tests**: Add a few DOM‑level tests with Jest + @testing-library/dom (optional for pure static sites).
- **Accessibility pass**: Landmarks (`<main>`, `<nav>`), focus outlines, skip links, and aria-live regions for async updates.
- **Performance**: Image compression, preconnect hints for API hosts, and `prefers-reduced-motion` handling in CSS.

---


---

## Maintainer

**Mohamed Yasser** — Front‑end implementation, structure, and deployment.


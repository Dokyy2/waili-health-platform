# Architecture

## Product Direction

The platform is a static, mobile-first digital health services hub for "منطقة الوايلي الطبية". It is built as a single-page experience to keep navigation fast on GitHub Pages while preserving a structure that can later grow into separate pages, a PWA, or an admin-powered system.

## Technical Shape

- `index.html` is the only loaded document in version one.
- `assets/css/styles.css` owns the visual system, responsive layout, animations, dark mode, modals, and accessibility states.
- `assets/js/app.js` owns all platform data, rendering, navigation state, service detail views, smart assistant mock UI, gallery placeholders, and location prompts.
- `assets/images/` stores brand and future gallery assets.
- `assets/docs/` stores local official documents while Google Drive links are prepared.
- `pages/` mirrors the future route structure so GitHub Pages can evolve without a redesign.

## UX Model

1. Splash screen builds the brand mark with a soft digital-dot effect.
2. Home screen presents the platform identity, live ticker, and service categories.
3. Each office or unit opens in-place without page reload.
4. Service cards open a readable digital service sheet.
5. Official PDFs are downloadable from the service sheet, not opened as the primary experience.
6. Location scope actions are visually promoted because home-death coverage is a critical workflow.

## Data Model

The JavaScript keeps all content in plain objects:

- `units`: health offices, childcare units, and specialty clinic entries.
- `services`: service details such as requirements, steps, notes, duration, and document links.
- `newsItems`: future-ready news and achievements.
- `galleryItems`: future-ready album and event cards.

This keeps content editing simple until a future dashboard or CMS exists.

## Future Expansion

- PWA: add service worker caching and offline document shell.
- Mobile app: reuse the same content model inside a WebView or native app.
- Official domain: deploy unchanged from GitHub Pages to any static host.
- News feed: replace local `newsItems` with Facebook/API data.
- Dashboard: generate `app.js` data from a JSON file managed by admin users.

# FiqrTaalim — Halal Ecommerce Bootcamp Landing Page v2

## Files
```
index.html  — HTML structure (links external CSS + JS)
style.css   — All styles, animations, responsive layout
main.js     — Loader, popup, scroll reveal, form, sticky bar
README.md   — This file
```

## Changes in v2
- **Nav**: Removed "Book @ ₹799" button from top navbar
- **Sticky CTA**: New full-width sticky bar at bottom with wide "Book Your Spot @ ₹799 →" button (24px border-radius)
- **Button radius**: All buttons changed to `24px` — not full pill, not squared
- **Section spacing**: Halved from `96px` to `48px` top/bottom padding
- **Info cards**: Date & Time moved to centre (centred text), Language moved to left column (left-aligned text)
- **People Trusted Us stats**: Wrapped in a bordered card with divider lines between each stat
- **Lazy loading**: All images use `loading="lazy"` + `width`/`height` attributes; JS polyfill for older browsers
- **Removed**: Cloudflare email obfuscation scripts — email addresses restored to plain text
- **Removed**: Redundant inline styles and duplicate code cleaned up
- **Accessibility**: Added `aria-hidden` to decorative elements, proper `aria-label` on interactive elements

## Usage
Open `index.html` in a browser — no build step required.
All three files must be in the same folder.

## Webinar Details
- **Date:** 28th & 29th March
- **Time:** 12:30 PM – 2:30 PM (Namaz break 1:28–1:40 PM)
- **Language:** Hinglish (Hindi + English)
- **Price:** ₹799

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Varsity Hackathon 2026 landing page - a static site for an Oxford vs Cambridge hackathon competition. Deployed via Cloudflare Pages.

## Development

**No build process required.** This is a vanilla HTML/CSS/JavaScript static site.

- Edit files directly; changes are live after saving
- Push to `main` branch triggers auto-deployment to Cloudflare Pages
- If cached content persists, purge via Cloudflare Dashboard → Caching → Purge Everything

## Architecture

```
index.html    - Main page structure
main.js       - Particle animation system & countdown timer
style.css     - All styling (responsive breakpoint at 900px)
_headers      - Cloudflare cache control configuration
media/        - Static assets (favicon, sponsor logos)
```

## Key Technical Details

**Particle System (main.js):** 200 animated particles with mouse repulsion physics. Uses `transform` for GPU acceleration and `requestAnimationFrame` for 60fps. Performance-sensitive - avoid increasing particle count.

**Countdown Timer:** Targets March 7, 2026 10:00:00. Update this date if event timing changes.

**Design System (style.css):**
- CSS custom properties in `:root` for theming
- Oxford Blue (#002147), Cambridge Blue (#8EE8D8), Gold (#d4af37)
- BEM-like class naming (e.g., `info-card__label`)
- Glass morphism effects using `backdrop-filter`

**External Dependencies:**
- Google Fonts: Bebas Neue, Space Mono, Outfit
- YouTube embed (trailer video)
- Luma.com (event registration)

## Browser Considerations

Test CSS gradients, backdrop filters, and animations in Safari. The `backdrop-filter` property has varying support.

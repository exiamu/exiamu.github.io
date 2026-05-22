# Cindy's Dance Studio — Website Rebuild

**Client:** Cindy Acosta, Owner & Artistic Director  
**Studio:** Cindy's Dance Studio (also branded as "Dance With Cindy")  
**Live Site:** www.dancewithcindy.com  
**Project Folder:** `cindy_webpage/`  
**Type:** Static HTML/CSS/JS — no build tools, no framework  
**Season:** August 2025 – June 2026

---

## Project Goal

Redesign and rebuild the existing dancewithcindy.com from scratch. The old site is a broken, table-based layout from circa 2003 — image-sliced nav buttons, no mobile support, PDFs for the schedule, no contact form. The rebuild preserves all existing content and the client's emotional connection to the brand, while delivering a modern, elegant, fully responsive result.

The site must feel: **elegant, upscale, warm, welcoming, dance-oriented** — not childish, not corporate, not loud.

---

## Current Status: Foundation Phase Complete

### What Has Been Built

| File | Purpose | Status |
|---|---|---|
| `css/tokens.css` | All design tokens (color, type, spacing, layout) | Complete |
| `css/reset.css` | Base reset + semantic element defaults | Complete |
| `css/layout.css` | Header, sidebar nav, main, footer, responsive | Complete |
| `css/components.css` | Buttons, cards, tables, badges, CTA banner | Complete |
| `css/home.css` | Homepage-specific hero and section styles | Complete |
| `js/main.js` | Active nav state, scroll header behavior, entrance animations | Complete |
| `index.html` | Full homepage | Complete |
| `pages/event-venue.html` | Stub — shell only | Placeholder |
| `pages/hot-rod-halloween.html` | Stub — shell only | Placeholder |
| `pages/class-schedule.html` | Stub — shell only | Placeholder |
| `pages/tuition.html` | Stub — shell only | Placeholder |
| `pages/dress-code.html` | Stub — shell only | Placeholder |
| `pages/recital-info.html` | Stub — shell only | Placeholder |
| `pages/cds-staff.html` | Stub — shell only | Placeholder |
| `pages/contact.html` | Stub — shell only | Placeholder |
| `audit/site_audit.md` | Full audit of the original live site | Complete |

---

## Design System

### Color Palette

| Token | OKLCH Value | Role |
|---|---|---|
| `--color-cream` | `oklch(0.97 0.012 78)` | Page background |
| `--color-cream-deep` | `oklch(0.93 0.018 75)` | Alternate section background |
| `--color-nav-bg` | `oklch(0.14 0.015 25)` | Sidebar + header background (deep warm charcoal) |
| `--color-rose-500` | `oklch(0.63 0.10 12)` | Primary brand accent (dusty rose) |
| `--color-gold-500` | `oklch(0.74 0.11 72)` | Secondary accent (champagne gold) |
| `--color-text` | `oklch(0.20 0.015 30)` | Body text |
| `--color-text-muted` | `oklch(0.52 0.015 30)` | Secondary text, captions |

Full 11-shade rose palette + 6-shade gold palette defined in `tokens.css`.

### Typography

| Role | Font | Notes |
|---|---|---|
| Display / Headings | Cormorant Garamond | Serif, italic weight used for elegance |
| Body / UI / Nav | DM Sans | Variable font, 300–600 weight range |

- **Scale:** Perfect Fourth (1.333 ratio), base 18px, all sizes fluid via `clamp()`
- **Loaded via:** Google Fonts (CDN) — can be migrated to self-hosted Fontsource if needed
- **Logo font:** The original logo typeface from the old image-sliced header **cannot be identified**. Currently using Cormorant Garamond Italic as a refined substitute. Must confirm with client whether they want an exact match or approve the replacement.

### Spacing

8pt grid with 4px base unit. All section padding uses `clamp()` for fluid scaling. No hardcoded pixel values in component code.

---

## Layout Architecture

```
┌──────────────────────────────────────────────────────────┐
│  HEADER  [address · left]  [logo · center]  [phone · right]  │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│  SIDEBAR     │  MAIN CONTENT                             │
│  NAV         │                                           │
│  240px       │  max-width: 1060px                        │
│  sticky      │                                           │
│              │                                           │
├──────────────┴───────────────────────────────────────────┤
│  FOOTER (spans full width)                               │
└──────────────────────────────────────────────────────────┘
```

**Key constraint:** The left sidebar must remain always visible. The top header must remain visible — no hamburger menu. On mobile (≤640px), the sidebar becomes a horizontal scrollable pill-nav row pinned below the header. On tablet (≤900px), the sidebar narrows to 200px.

### Navigation Items (in order)

1. Home
2. Event Venue
3. Hot Rod Halloween
4. _(divider)_
5. Class Schedule
6. Tuition
7. Dress Code
8. _(divider)_
9. Recital Info
10. CDS Staff
11. Contact Us

---

## Page Build Order (Next Steps)

Build pages one at a time. Each page replaces its stub's placeholder CTA with real content.

| Priority | Page | Key Content |
|---|---|---|
| 1 | `tuition.html` | Full pricing table, registration fees, payment policy |
| 2 | `class-schedule.html` | HTML schedule table (no PDFs), filterable by day or level |
| 3 | `dress-code.html` | Per-discipline requirements with brand/model specifics |
| 4 | `contact.html` | Contact form, clickable phone/email, map embed placeholder, studio hours |
| 5 | `recital-info.html` | 2026 dates, costume costs, picture day, what to expect |
| 6 | `cds-staff.html` | Cindy Acosta bio + faculty cards (photos TBD from client) |
| 7 | `event-venue.html` | Rental space info (rates TBD from client) |
| 8 | `hot-rod-halloween.html` | Annual event details (content TBD from client) |

---

## Open Questions for Client

- [ ] **Logo font:** Approve Cormorant Garamond Italic or provide original font file?
- [ ] **Photography:** Do we have studio interior/exterior photos, student action shots, Cindy headshot? These are needed before any image placeholders can be replaced.
- [ ] **Studio hours:** What are the front desk / office hours? Not published on the current site anywhere.
- [ ] **Event Venue:** What are the rental rates and availability? Any existing promo materials?
- [ ] **Hot Rod Halloween:** What is this event exactly? Current site had a PDF sponsorship doc linked by accident. Need proper event description, dates, photos.
- [ ] **Online registration:** Does the client want an embedded form (Jotform/Google Forms) or continue with PDF? This is the single biggest conversion barrier on the current site.
- [ ] **Social media:** Does the studio have Instagram or Facebook? Links should go in the footer.

---

## Technical Notes

- **No build tools.** Open `index.html` directly in a browser. All CSS paths are relative. Inner pages in `pages/` use `../css/` and `../js/` paths.
- **Fonts** load from Google Fonts CDN. If self-hosting is needed later, migrate to `@fontsource-variable/cormorant-garamond` and `@fontsource-variable/dm-sans`.
- **JS** is vanilla, no dependencies. `main.js` handles: active nav link detection, scroll-driven header hide/show, intersection observer entrance animations.
- **OKLCH colors** require Chrome 111+, Firefox 113+, Safari 15.4+. No fallbacks included — coverage is 93%+ globally.
- **Responsive breakpoints:** 900px (tablet) and 640px (mobile). These are the only two breakpoints in the entire layout — everything else uses `clamp()`.

#Claude should not use this as suggestions for the new site but to see what the old site had

# Cindy's Dance Studio — Full Site Audit
**URL:** www.dancewithcindy.com  
**Date Audited:** 2026-05-21  
**Auditor:** Claude Code  
**Purpose:** Pre-rebuild analysis to modernize while preserving business intent

---

## 1. Site Overview

| Field | Value |
|---|---|
| Studio Name | Cindy's Dance Studio |
| Owner | Cindy Acosta (Artistic Director / Owner) |
| Address | 119 S. Magnolia Ave, Sanford, FL 32771 (Corner of 2nd & Magnolia, Downtown Sanford) |
| Phone | 407-324-3999 |
| Email | cindysdancestudio@cfl.rr.com |
| Classes Offered | Ballet, Tap, Jazz, Hip Hop, Pointe, Lyrical, Stretch & Strengthening, Leaps & Turns |
| Levels | Tiny Tots → Pre-K → Beginning I–IV → Intermediate I–III → Advanced |
| Season | August – June (2025–2026) |
| Recital | June 5–6, 2026 (with picture day April 18, dress rehearsal June 4) |

---

## 2. Page Map

| Page | URL | Status | Content Quality |
|---|---|---|---|
| Home | `/index.htm` | Live | Minimal — enrollment CTA only |
| Recital | `/recital.htm` | Live | Good — dates clearly listed |
| Studio News | `/studio_news.htm` | Live | Mirrors homepage; redundant |
| Class Schedule | `/class_schedule.htm` | Live | Poor — schedule locked in PDFs/images |
| CDS Staff | `/cds_staff.htm` | Live | Weak — only 2 staff, no bios |
| Dress Code | `/dress_code.htm` | Live | Strong — specific, detailed |
| Tuition | `/tuition.htm` | Live | Strong — complete pricing table |
| Location | `/location.htm` | Live | Minimal — address only, no map embed |
| Contact Us | `/contact_us.htm` | Live | Minimal — no form, no hours |

**Total pages:** 9 (all accessible with `.htm` extension, not `.html`)

---

## 3. Reusable Strengths (Keep and Elevate)

### Content Strengths
- **Complete tuition structure** — tiered by hours/week and number of children in family, with multi-child discounts clearly spelled out. This is a business differentiator — parents love transparency.
- **Detailed dress code** — specific brand names (So Danca SD60, Bloch FlexTap 388, etc.) and model numbers remove guesswork. Rare for a small studio to be this precise.
- **Recital schedule is current** — 2026 dates (picture day, dress rehearsal, 3 performance slots) are published and accurate.
- **Local vendor referral** — N'styl Performance Wear (Orlando) with full address and phone. A community-minded touch worth keeping.
- **Level progression system** — Tiny Tots → Pre-K → Beginning → Intermediate → Advanced is a clear pipeline parents can understand.
- **Free trial class offer** — strong acquisition tool, just buried in body text.
- **Rental space available** — additional revenue stream mentioned; should be a dedicated section.
- **Multi-style studio** — 8 distinct dance disciplines signals a comprehensive program.

### Brand Strengths
- "Cindy's Dance Studio" and "Dance With Cindy" coexist (domain vs. studio name) — the personal branding is warm and approachable.
- Downtown Sanford location is a genuine asset — walkable, unique, community-rooted.
- Family discounts (2nd/3rd child rates) signal that the studio is family-oriented.

---

## 4. Structural Problems

### Technical Debt (Critical)
- **Table-based layout** — the entire site is built with HTML `<table>` elements used for positioning, a pattern from circa 2003. Zero flexibility, breaks on mobile.
- **Image-sliced header** — the logo/header is cut into 4+ separate JPG files joined in a table. Impossible to resize, no alt text, invisible to search engines.
- **Image-based navigation buttons** — all 9 nav items are `.jpg` button images. No text, no alt text, completely inaccessible and un-indexable.
- **Class schedule stored in PDFs and images** — `/schedule_images/Sch 25-26 pic 1-8.pdf` means Google cannot read the schedule at all. A parent on mobile cannot zoom or read it reliably.
- **Relative `../` paths throughout** — the site appears to be served from a subdirectory, causing fragile path dependencies. Any folder restructure breaks images.
- **No HTTPS enforcement** — unclear if SSL is enforced.
- **No mobile responsiveness** — table layout renders as a tiny fixed-width page on phones. Most parents are on mobile.

### Information Architecture Problems
- **Studio News = duplicate homepage** — the Studio News page contains identical content to the home page. No differentiation.
- **Contact page has no form** — the only contact option is a phone number and an email address in plain text. No `mailto:` link, no `tel:` link, no form.
- **Location page has no embedded map** — only a text link to Google Maps. No embed, no directions, no parking information, no studio hours.
- **Staff page has no bios** — only two staff listed (Cindy Acosta and "Stephanie"), no credentials, no photos visible via audit, no teaching specialties.
- **Random PDF on homepage** — `HOT ROD HALL w 5 spon.pdf` appears embedded on the homepage. This is likely a mistake; an unrelated sponsorship document is publicly linked.
- **Registration is PDF-only** — parents must print, fill by hand, and presumably mail or bring in person. In 2026, this is a significant drop-off point.
- **No studio hours anywhere** — not on Contact, Location, or Home. A parent cannot know when the front desk is available or when classes run without calling.

---

## 5. UX Pain Points

| Pain Point | Impact | Priority |
|---|---|---|
| No mobile layout | Parents searching on phone get broken page | Critical |
| Image-based nav (no text) | Screen readers skip it; Google ignores it | Critical |
| PDF-only registration | High friction; kills conversion for busy parents | Critical |
| Class schedule in PDFs/images | Can't be read on mobile, not searchable | Critical |
| No clickable phone number (`tel:`) | Mobile users can't tap to call | High |
| No clickable email (`mailto:`) | Copy-paste friction | High |
| No contact form | Zero async contact option | High |
| No studio hours | Parents don't know when to visit/call | High |
| No map embed | Parents have to leave site to find directions | High |
| Free trial buried in body text | Lost conversion opportunity | High |
| No testimonials | No social proof for new families | Medium |
| No social media links | No community presence or discovery | Medium |
| Footer duplicates nav completely | Adds noise, no value | Medium |
| Studio News = homepage clone | Confusing, trust-eroding | Medium |
| Tiny font, low contrast | Readability issue, especially for older parents | Medium |
| Image-sliced header | Loads slowly, no retina support, no alt text | Medium |
| No favicon or brand icons | Looks unpolished in browser tab/bookmarks | Low |
| Random HOT ROD HALL PDF link | Confusing and unprofessional | Low |

---

## 6. Complete Content Inventory

### Tuition Data (Preserve Exactly)
- **Registration fees:** $30 (1st child) / $25 (2nd child or adult 21+ or college student) / $20 (3rd child) / $15 (re-registration after 2+ month gap)
- **Monthly tuition table:** 1 hr/wk → $70/$60/$50 up to Unlimited → $240/$205/$170 (1st/2nd/3rd child)
- **Late fee:** $10 after 10th of month
- **Returned payment fee:** $10
- **Auto-pay convenience fee:** $3
- **Recital participation fee:** $25/family
- **Costume costs:** $90 (Tiny Tots/Pre-K) / $120 (all other levels)
- **June tuition:** half price (pro-rated)
- **Payment methods:** Cash, check, money order, cashier's check, Visa, MasterCard
- **Policy:** Fees non-refundable; tuition due even if absent; written withdrawal required

### Dress Code Data (Preserve and Structure Better)
| Class | Leotard | Tights | Shoes |
|---|---|---|---|
| Tiny Tots / Pre-K Ballet+Tap | Solid black, no skirts | Pink footed (convertible rec.) | Pink: So Danca SD60 / Black tap: So Danca TA35 |
| Beginning–Advanced Ballet & Pointe | Solid black, no skirts | Pink footed (convertible rec.) | So Danca SD60 (light pink, split sole) |
| Tap (all levels) | Leggings/shorts + tank | N/A | Bloch FlexTap 388 (split sole) or Bloch Audeo 381 |
| Jazz / Lyrical / Stretch | Form-fitted | N/A | So Danca JZ43 (caramel) — required for recital Beg 3+ |
| Hip Hop (all levels) | Leggings/shorts + tank | N/A | Black solid sneakers (no logos/colors for recital) |

**Universal rules:** Hair up and off face for all classes. Cover-ups required for travel (Beginning I+). No jewelry. No visible undergarments. Name on all items.  
**Vendor:** N'styl Performance Wear — 4241 LB McLeod Rd, Orlando FL 32811, 407-418-1275, nstyldancewear.com

### Academic Calendar (Preserve)
- Session begins: August 4, 2025
- Christmas break: December 15, 2025 – January 2, 2026
- Spring break: March 16–20, 2026
- Picture Day: April 18, 2026 (tentative, 8am–8pm)
- Dress Rehearsal: June 4, 2026 (8am–10pm)
- Recital performances: June 5 (7pm) and June 6 (12pm & 7pm), 2026

### Recital Info (Expand for rebuild)
- 3 performance slots across 2 days
- Separate family recital participation fee ($25)
- Costume costs separate from tuition
- Picture day separate from dress rehearsal

---

## 7. What Should Stay vs. Go

### KEEP (Content worth preserving)
- Studio name and personal brand ("Dance With Cindy" / "Cindy's Dance Studio")
- All tuition pricing and policy text — complete and well-structured
- All dress code specifics — brand names, model numbers, colors
- The free trial class offer — just elevate it visually
- Level system (Tiny Tots → Advanced) — the progression story
- Rental space availability — needs its own section
- Vendor recommendation (N'styl)
- All recital and calendar dates
- Downtown Sanford identity and address
- Phone number and email

### TRANSFORM (Keep the idea, rebuild the execution)
| Current | Modernized Version |
|---|---|
| Image-sliced header with logo | Clean SVG/text logo, full-bleed hero with real photography |
| Image button navigation | Responsive text nav with mobile hamburger menu |
| PDF class schedule | Live HTML schedule table with filter by day/level |
| PDF registration form | Online registration form (Jotform / Typeform embed, or custom) |
| Text address + Google Maps link | Embedded Google Maps iframe with address overlay |
| Studio News = homepage clone | Actual news/announcements section with dated posts |
| Staff page with no bios | Staff cards with headshots, credentials, specialties |
| Footer duplicating nav | Clean footer: contact info, social links, copyright |

### REMOVE (Cut entirely)
- HOT ROD HALL PDF link on homepage — clearly an error
- Table-based layout and image slicing — replace wholesale
- Footer that mirrors the header nav verbatim — redundant
- Asterisk-separated class lists in running text — use visual cards instead
- Plain email address in unlinked text — replace with form
- Relative `../` path structure — rebuild with clean root-relative paths

---

## 8. Opportunities Not Yet Exploited

- **Instagram / Facebook gallery** — dance studios live on social. A photo/video feed of recitals, classes, and studio life would be powerful.
- **Testimonials / parent reviews** — social proof is missing entirely. Even 3–4 quotes would significantly boost trust for new families.
- **Online registration** — the single biggest conversion barrier. Embed a form (e.g., Jotform, Google Form) or use a studio management platform (Jackrabbit Dance, DanceStudio-Pro).
- **Newsletter or email signup** — no mechanism to capture leads beyond calling.
- **Google Business Profile integration** — link the address to Google Maps and display star rating.
- **Photo/video gallery** — recital footage, class action shots, studio interior/exterior photos. Cindy has a new building — show it off.
- **Blog or news archive** — dated posts (vs. static "Studio News" page) would help with SEO.
- **Private lesson booking** — rates aren't listed; a booking CTA would capture that revenue.
- **Printable schedule** — keep the PDF download, but also show a live HTML schedule.

---

## 9. Technical Recommendations for Rebuild

| Area | Recommendation |
|---|---|
| Framework | Static site (Astro, Next.js, or plain HTML/CSS) — low maintenance, fast load |
| CSS | Tailwind CSS — mobile-first, responsive by default |
| Fonts | Elegant serif for headings (e.g., Playfair Display) + clean sans (e.g., Inter) |
| Color palette | Suggest: deep rose/mauve + cream + gold accent — dance-world appropriate, feminine but elegant |
| Navigation | Sticky top nav, text links, hamburger menu on mobile |
| Images | Real photography (studio interior, students, Cindy + staff), WebP format, lazy loading |
| Schedule | HTML `<table>` or card grid, filterable by day — pull from a simple CMS or JSON file |
| Registration | Embedded Jotform or custom HTML form with email notification |
| Map | Google Maps embed iframe |
| Contact | HTML contact form with server-side email (Formspree or Netlify Forms) |
| Hosting | Netlify or Vercel — free tier, HTTPS automatic, CI/CD via Git |
| SEO | Meta title/description per page, structured data for local business, sitemap.xml |
| Accessibility | Alt text on all images, semantic HTML5, keyboard navigable, WCAG AA color contrast |
| Analytics | Google Analytics 4 or Plausible |

---

## 10. Priority Build Order

1. **Homepage** — hero with CTA, class overview, free trial prompt
2. **Tuition page** — preserve all data, style as clean tables/cards
3. **Class Schedule** — convert PDF to HTML, filterable grid
4. **Dress Code** — structured by class type with expandable sections
5. **Location + Contact** — embedded map, contact form, hours, phone click-to-call
6. **Recital** — dates, what to expect, costume info
7. **Staff** — Cindy bio + any other instructors with photos
8. **Studio News / Blog** — dated posts, enrollment announcements
9. **Gallery** — photos and video from recitals and classes
10. **Registration Flow** — embedded or linked online form

---

*End of audit. All source data gathered from live pages at dancewithcindy.com on 2026-05-21.*

# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 1 - Foundation
**Last completed:** 01 Homepage
**Next:** 02 Auth

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [ ] 02 Auth
- [ ] 03 PostHog Initialization
- [ ] 04 Database Schema

### Phase 2 — Profile Page

- [ ] 05 Profile Page — Full UI
- [ ] 06 Profile Save Logic
- [ ] 07 AI Profile Extraction from Resume
- [ ] 08 Resume PDF Generation from Profile

### Phase 3 — Find Jobs Page

- [ ] 09 Find Jobs Page — Full UI
- [ ] 10 Adzuna Job Discovery
- [ ] 11 Filter + Sort + Pagination

### Phase 4 — Job Details Page

- [ ] 12 Job Details Page — Full UI
- [ ] 13 Company Research Agent

### Phase 5 — Dashboard

- [ ] 14 Dashboard Page — Full UI
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

- 2026-09-15: Built the homepage as static Server Components using `context/designs/landing-page.png` as the source of truth. CTA links point to `/login` and `/find-jobs` until auth redirects are implemented.
- 2026-09-15: Switched the root layout font from Geist to Inter to match `ui-rules.md` and `ui-tokens.md`.

---

## Notes

- Homepage uses public assets: `logo.png`, `images/dashboard-demo.png`, `images/jobs-lists.png`, `images/agnet-log.png`, and `images/user-icon.png`.

_Add notes here as the build progresses — workarounds, patterns, anything that differs from the context files._

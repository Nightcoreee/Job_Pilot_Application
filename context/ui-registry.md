# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage Navbar

File: components/homepage/Navbar.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface` |
| Border | `border-b border-border` |
| Border radius | none |
| Text - primary | `text-text-dark` |
| Text - secondary | none |
| Spacing | `h-16 px-6 gap-10` |
| Hover state | `hover:text-accent`, `hover:bg-overlay` |
| Shadow | none |
| Accent usage | hover nav uses `text-accent` |

**Pattern notes:**
Top navigation is full-width, 64px tall, white, and border-separated. The dark CTA uses `bg-text-slate` with token foreground text to match the landing-page design.

### Homepage CTA Button Group

File: components/homepage/CtaButtons.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | primary `bg-text-slate`, secondary `bg-surface` |
| Border | secondary `border border-border` |
| Border radius | `rounded-md` |
| Text - primary | `text-accent-foreground`, `text-text-primary` |
| Text - secondary | none |
| Spacing | `px-6 py-3 gap-3` |
| Hover state | `hover:bg-overlay`, `hover:bg-surface-secondary` |
| Shadow | `shadow-sm` |
| Accent usage | none |

**Pattern notes:**
Landing CTAs use a dark primary action paired with a white bordered secondary action, matching the screenshot rather than the later app purple primary button pattern.

### Homepage Hero

File: components/homepage/Hero.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface`, `.soft-gradient`, `bg-surface-tertiary` |
| Border | `border-b border-border`, `border border-border`, `border-x border-border` |
| Border radius | none |
| Text - primary | `text-text-black` |
| Text - secondary | `text-text-secondary` |
| Spacing | `px-6 pt-14 py-16 mt-6 mt-8` |
| Hover state | inherited from CTA group |
| Shadow | image asset contains shadow |
| Accent usage | soft background uses tokenized accent/info mixes |

**Pattern notes:**
Hero bands are rectangular and edge-aligned inside the 1280px landing container. Keep pastel backgrounds in CSS utilities so components do not carry raw color values.

### Homepage Feature Showcase

File: components/homepage/FeatureShowcase.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface`, `bg-surface-muted`, `.stripe-band` |
| Border | `border-x border-border`, `border-b border-border`, `border-t border-border` |
| Border radius | none |
| Text - primary | `text-text-slate` |
| Text - secondary | `text-text-secondary` |
| Spacing | `px-12 py-8`, `px-8 py-16` |
| Hover state | none |
| Shadow | image assets contain shadows |
| Accent usage | selected rows use `border-l-accent` and `border-l-success` |

**Pattern notes:**
Feature rows alternate copy and product imagery in a two-column grid. Highlighted explanatory rows use a 4px left border with project tokens.

### Homepage Testimonial

File: components/homepage/Testimonial.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface` |
| Border | `border-x border-b border-border` |
| Border radius | avatar `rounded-md` |
| Text - primary | `text-text-slate`, `text-text-primary` |
| Text - secondary | `text-text-secondary` |
| Spacing | `px-6 py-24 mt-8 gap-3` |
| Hover state | none |
| Shadow | none |
| Accent usage | label uses `text-accent` |

**Pattern notes:**
Testimonials are centered, spacious, and border-contained within the same 1280px landing container as the feature bands.

### Homepage Bottom CTA

File: components/homepage/BottomCta.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface`, `.soft-gradient`, `.stripe-band` |
| Border | `border-x border-b border-border`, `border-t border-border` |
| Border radius | none |
| Text - primary | `text-text-black` |
| Text - secondary | `text-text-secondary` |
| Spacing | `px-6 py-20 mt-7 mt-8` |
| Hover state | inherited from CTA group |
| Shadow | none |
| Accent usage | soft background uses tokenized accent/info mixes |

**Pattern notes:**
Bottom CTA mirrors the hero's pastel band and button group, with patterned dividers above and below.

### Homepage Footer

File: components/homepage/Footer.tsx
Last updated: 2026-09-15

| Property | Class |
| --- | --- |
| Background | `bg-surface` |
| Border | `border-x border-border` |
| Border radius | none |
| Text - primary | none |
| Text - secondary | `text-text-secondary` |
| Spacing | `px-10 py-12 gap-8` |
| Hover state | `hover:text-accent` |
| Shadow | none |
| Accent usage | footer links use accent on hover |

**Pattern notes:**
Footer stays minimal, white, and aligned to the same landing container as the rest of the page.

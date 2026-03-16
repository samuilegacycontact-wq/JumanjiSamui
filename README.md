# Jumanji Samui — Website

Personal concierge website for Koh Samui activities. Static Next.js 15 export, deployed to Cloudflare Pages.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Static export → Cloudflare Pages |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |
| i18n | Architecture in place — English only at launch |

---

## Run locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production (static export)
npm run build
# Output: /out directory — ready for Cloudflare Pages
```

Requires Node.js 18+.

---

## Deploy to Cloudflare Pages

1. Push this repository to GitHub (or GitLab)
2. In Cloudflare Pages dashboard → **Create a project** → Connect repository
3. Set build configuration:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `18` or `20`
4. Deploy

On every push to `main`, Cloudflare Pages will rebuild and redeploy automatically.

No environment variables required — this is a fully static site.

---

## Before going live — complete TODO checklist

### 🔴 Critical (site will not work correctly without these)

- [ ] **WhatsApp number** — find-replace every instance of `66XXXXXXXXX` with the real WhatsApp number (format: country code + number, no `+`, no spaces)
  - Files to update: `src/lib/whatsapp.ts`, `src/components/ui/FloatingWhatsApp.tsx`
  - Or run: `grep -r "66XXXXXXXXX" src/` to find all instances

### 🟡 Content (site works but uses atmospheric placeholders)

- [ ] **Hero video** → `/public/video/hero.mp4`
  - Format: MP4, H.264, 1920×1080 minimum
  - Duration: 12–15 seconds, looped
  - Content: small boy beneath banyan tree → opens into Koh Samui adventure montage
  - Muted, no audio track needed

- [ ] **Hero poster image** → `/public/video/hero-poster.jpg`
  - A single dark atmospheric frame from the hero video
  - Shown while video loads, and on browsers/devices where video won't play
  - 1920×1080, JPEG, optimised for fast load

- [ ] **Logo file** → `/public/logo.svg`
  - Replace the placeholder SVG with the real Jumanji logo
  - Concept: ancient banyan tree, large spreading canopy, small boy beneath
  - SVG preferred (scales cleanly); PNG with transparency also acceptable
  - On dark nav backgrounds: cream/white version
  - Currently: site renders `JUMANJI` wordmark in Cormorant Garamond as fallback

- [ ] **Category card photos** → `/public/images/categories/[id].jpg`
  - 12 photos needed, one per category. Filename = category ID.
  - Required dimensions: 900×1200px minimum (portrait 3:4 ratio)
  - Style: atmospheric, dark-toned, immersive. Not stock-photo bright.
  - IDs and subjects:
    - `atv.jpg` — ATV/quad bikes on jungle trail
    - `boat.jpg` — boat on turquoise water or island hopping scene
    - `cooking.jpg` — Thai cooking class kitchen
    - `muaythai.jpg` — Muay Thai gym / fighter training
    - `diving.jpg` — underwater / snorkelling / reef
    - `yoga.jpg` — yoga on beach, hillside or deck
    - `elephant.jpg` — elephant sanctuary (no riding/chains visible)
    - `zipline.jpg` — zipline through jungle canopy
    - `fishing.jpg` — fishing boat at sea
    - `safari.jpg` — 4x4 on jungle track
    - `watersports.jpg` — jet ski or beach water sports
    - `cultural.jpg` — Thai temple or local market (hold until operator confirmed)

### 🟢 Phase 2 (planned additions — architecture already in place)

- [ ] **Language switcher** — i18n architecture is wired up in `src/i18n/`. Add Russian and French locale files to `src/i18n/locales/` and add the switcher component to `src/components/layout/Nav.tsx`

- [ ] **Instagram link** — update `src/components/layout/Footer.tsx` when account is live

- [ ] **Facebook link** — update `src/components/layout/Footer.tsx` when account is live

- [ ] **Cultural Tours operator confirmed** — remove `comingSoon: true` from the `cultural` entry in `src/lib/categories.ts` and update the modal description

- [ ] **Open Graph image** — add `/public/og-image.jpg` (1200×630px) for social sharing previews. Update `src/app/layout.tsx` metadata once file is available.

- [ ] **Personal photo (optional)** — if a photo is added: `/public/images/kane.jpg`. Update `src/components/sections/PersonalVoice.tsx` to show it as a circular crop left-aligned with text right.

---

## Architecture notes

### Why no backend?
The only conversion action is WhatsApp. No data is collected, no payments processed, no accounts created. Static export is correct and keeps the site fast, secure, and cheap to host.

### i18n structure
`src/i18n/config.ts` defines supported locales. `src/i18n/locales/en.json` holds all English strings. Adding a language is: (1) add locale to `config.ts`, (2) add locale JSON file, (3) wire up the nav switcher.

### Framer Motion and `prefers-reduced-motion`
Every animated component reads `useReducedMotion()` from Framer Motion. When the user has enabled reduced motion in their OS settings, all animation durations collapse to `0.001ms` and all directional offsets are set to zero. Layout is preserved; motion is removed.

### WhatsApp URLs
All WhatsApp CTAs are generated via `buildWhatsAppUrl()` in `src/lib/whatsapp.ts`. Pre-filled message strings live in `WA_MESSAGES`. To update any message, edit that file only.

### No operator names
Operator names are never shown publicly anywhere on the site. This is enforced by design: `src/lib/categories.ts` contains no operator name fields. Do not add them.

### Legal language
The codebase avoids: "book", "booking", "reserve", "buy", "purchase", "checkout", "tour operator", "travel agency". Uses instead: "plan", "find out more", "get in touch", "sort out", "concierge", "local guide", "referral service". Do not change this without legal review.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, fonts, metadata
│   ├── page.tsx          ← Single-page assembly
│   └── globals.css       ← Tailwind base + utility classes
├── components/
│   ├── layout/
│   │   ├── Nav.tsx       ← Sticky nav with scroll transition + mobile menu
│   │   └── Footer.tsx    ← Brand + disclaimer
│   ├── sections/         ← One file per page section
│   │   ├── Hero.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PersonalVoice.tsx
│   │   ├── PriceComparison.tsx
│   │   ├── TourCategories.tsx
│   │   ├── PackageDealCTA.tsx
│   │   ├── TripPlanner.tsx
│   │   └── TrustSignals.tsx
│   └── ui/
│       ├── CategoryCard.tsx      ← Grid card with hover state
│       ├── CategoryModal.tsx     ← Full-screen modal with AnimatePresence
│       ├── FloatingWhatsApp.tsx  ← Fixed bottom-right pulse button
│       ├── ScrollReveal.tsx      ← Scroll-triggered reveal + stagger container
│       └── WhatsAppLink.tsx      ← CTA link + WhatsApp SVG icon
├── lib/
│   ├── categories.ts     ← All 12 category data objects
│   └── whatsapp.ts       ← URL builder + message strings
└── i18n/
    ├── config.ts          ← Locale config (Phase 2 ready)
    └── locales/
        └── en.json        ← English strings
```

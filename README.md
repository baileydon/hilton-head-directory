# HHI Luxury Guide - Hilton Head Directory

> **Full ownership: Donal Bailey / HHI Revenue Solutions**
> This code, content, and all assets are the unrestricted property of Donal Bailey. No attribution to Viktor, getviktor.com, or any third party is required. Use, modify, redistribute, sublicense, and commercialize without restriction.

## Project Overview

Full-stack luxury business directory for Hilton Head Island. React frontend with Convex real-time backend, deployed on Vercel.

**Live URLs:**
- Production: `https://hhi-luxury-guide-dd4cb5bb.viktor.space`
- Preview: `https://preview-hhi-luxury-guide-dd4cb5bb.viktor.space`
- Domain: `hiltonheaddirectory.com` (via Cloudflare Worker proxy)

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React + TypeScript | React 19, TS 5.9 |
| Styling | Tailwind CSS + shadcn/ui | Tailwind v4, 53 UI components |
| Backend/DB | Convex (real-time database + serverless functions) | 1.31 |
| Auth | @convex-dev/auth (email/password + OTP) | 0.0.90 |
| Build Tool | Vite | 7.2 |
| Package Manager | Bun | latest |
| Hosting | Vercel | - |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | 0.562 |
| Charts | Recharts | 2.15 |

---

## Quick Start

### Prerequisites
- Node.js 18+
- Bun: `curl -fsSL https://bun.sh/install | bash`

### Install and Run Locally

```bash
# 1. Install dependencies
bun install

# 2. Start the dev server (connects to existing Convex backend)
bun run dev
```

The app runs at `http://localhost:5173`.

### Build for Production

```bash
# Full build: syncs Convex functions + builds frontend
bun run sync:build

# Frontend build only (if Convex already synced)
bun run build
```

Build output: `dist/` (Vite) and `build/` (Vercel deployment target, configured in `vercel.json`).

### All Available Scripts

| Command | What It Does |
|---------|-------------|
| `bun run dev` | Start Vite dev server at localhost:5173 |
| `bun run build` | TypeScript check + Vite production build |
| `bun run preview` | Preview the production build locally |
| `bun run sync` | Push Convex backend functions to dev deployment |
| `bun run sync:build` | Sync Convex + build frontend (use before deploying) |
| `bun run check` | Lint with Biome |
| `bun run format` | Auto-format code with Biome |
| `bun run logs` | Stream live Convex backend logs |
| `bun run logs:fetch` | Fetch recent backend logs to a file |
| `bun run test` | Run Playwright end-to-end tests |

---

## Convex Backend Architecture

### Current Deployment

The app's data (business listings, articles, categories) lives in a Convex real-time database. The current deployments:

| Environment | Convex Project | Deployment ID | URL |
|-------------|---------------|---------------|-----|
| Dev/Preview | `app-hhi-luxury-guide-dev` | `dev:prestigious-jackal-170` | `https://prestigious-jackal-170.convex.cloud` |
| Production | `app-hhi-luxury-guide-dev` | `prod:prestigious-jackal-170` | Same cloud, prod isolation |

### Who Owns the Convex Project?

The Convex project currently lives under the Viktor platform's team account (`team: zeta`). Donal does NOT have direct login access to the Convex dashboard for this project.

**To take full independent ownership of the backend:**

1. Create a free Convex account at https://convex.dev (free tier: 1M function calls/month, 1GB storage)
2. Install Convex CLI: `npx convex login`
3. Initialize a new project: `npx convex init` (this creates your own deployment)
4. The `convex/schema.ts` file in this repo defines the complete database structure. Running `npx convex dev` will auto-create all tables from this schema.
5. Import your data using the seed scripts in `convex/seed.ts`, or write a one-time import script using the JSON exports in `content-export/`.
6. Update `.env.local` with your new `VITE_CONVEX_URL` and `CONVEX_DEPLOYMENT` values.
7. Run `bun run sync:build` to push functions and rebuild.

### Can the Schema Recreate the DB from Scratch?

Yes. `convex/schema.ts` is the single source of truth for the database structure. It defines three tables:

- **businesses** (43 records): name, slug, category, description, phone, website, address, city, state, zip, imageUrl, featured, bdId
- **articles** (6 records): title, slug, content, excerpt, category, imageUrl, author, tags, publishedAt, featured, bdId
- **categories** (8 records): name, slug, description, tagline, icon, order, imageUrl, heroImage

Running `npx convex dev` against a fresh Convex deployment will create all three tables with proper indexes (by_category, by_slug, by_featured, search_businesses). Then use the seed functions or import the JSON exports to populate data.

### Auth Tables

Convex Auth adds its own tables automatically (`authAccounts`, `authSessions`, `authRefreshTokens`, `authVerificationCodes`, `authVerifiers`, `users`). These are created by the `...authTables` spread in the schema. No manual setup needed.

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

### Frontend (Vite, exposed to browser)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_CONVEX_URL` | Yes | Your Convex deployment URL (e.g. `https://your-deployment.convex.cloud`) |
| `VITE_CONVEX_SITE_URL` | No | Convex HTTP actions URL (auto-derived if not set) |
| `VITE_IS_PREVIEW` | No | Set `"true"` to show test-user login button on preview builds |

### Backend (Convex server-side, NOT exposed to browser)

| Variable | Required | Description |
|----------|----------|-------------|
| `CONVEX_DEPLOYMENT` | Yes | Deployment identifier (e.g. `dev:your-deployment-name`) |
| `CONVEX_DEPLOY_KEY` | For CI/CD | Used for automated deployments. Get from Convex dashboard. |
| `JWT_PRIVATE_KEY` | Yes | RSA private key for auth token signing (PEM format). Generate with: `openssl genrsa 2048` |
| `JWKS` | Yes | Public key set (JSON). Derived from the private key. |
| `SITE_URL` | Yes | Your production URL (e.g. `https://hiltonheaddirectory.com`) |

### Viktor-Specific (can be removed for self-hosting)

| Variable | Required | Description |
|----------|----------|-------------|
| `VIKTOR_SPACES_API_URL` | No | Viktor platform API. Remove if self-hosting. |
| `VIKTOR_SPACES_PROJECT_NAME` | No | Viktor project identifier. Remove if self-hosting. |
| `VIKTOR_SPACES_PROJECT_SECRET` | No | Viktor auth secret. Remove if self-hosting. |
| `VIKTOR_SPACES_IS_PREVIEW` | No | Controls test auth provider. Remove for production. |

**To self-host without Viktor:** Delete the three `VIKTOR_SPACES_*` variables and remove references to `viktorTools.ts` in the Convex backend. The core app (listings, articles, categories, auth, search) works without them.

---

## Project Structure

```
hhi-luxury-guide/
├── convex/                        # Backend: Convex serverless functions
│   ├── schema.ts                  # DATABASE SCHEMA (single source of truth)
│   ├── businesses.ts              # Business CRUD: list, getBySlug, search, create
│   ├── articles.ts                # Article CRUD: list, getBySlug, featured, create
│   ├── categories.ts              # Category queries: list, getBySlug, create
│   ├── seed.ts                    # Seed scripts to populate initial data
│   ├── auth.ts                    # Auth provider config
│   ├── auth.config.ts             # Auth application config
│   ├── users.ts                   # User queries
│   ├── http.ts                    # HTTP route handlers
│   ├── constants.ts               # Shared constants
│   ├── viktorTools.ts             # Viktor platform bridge (optional, remove for self-host)
│   ├── ViktorSpacesEmail.ts       # Email via Viktor (optional, replace with own SMTP)
│   ├── seedTestUser.ts            # Test user for dev/preview
│   ├── testAuth.ts                # Test auth provider (dev only)
│   ├── _generated/                # Auto-generated types (do not edit)
│   └── tsconfig.json
├── src/                           # Frontend: React application
│   ├── App.tsx                    # Root: routing, Convex provider, auth
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Global styles + Tailwind config
│   ├── pages/
│   │   ├── LandingPage.tsx        # Homepage: hero, 10 pillars grid, featured businesses
│   │   ├── VerticalPage.tsx       # Individual pillar page (Fashion, Dining, etc.)
│   │   ├── ArticlesPage.tsx       # Article index
│   │   ├── ArticlePage.tsx        # Single article
│   │   ├── SearchPage.tsx         # Global search (businesses + articles)
│   │   ├── BusinessPage.tsx       # Individual business profile
│   │   ├── CategoryPage.tsx       # Category listing
│   │   ├── ListBusinessPage.tsx   # "List Your Business" inquiry form
│   │   ├── DashboardPage.tsx      # Authenticated user dashboard
│   │   ├── SettingsPage.tsx       # User settings
│   │   ├── LoginPage.tsx          # Sign in
│   │   └── SignupPage.tsx         # Sign up
│   ├── data/
│   │   └── verticals.ts           # THE TEN PILLARS: editorial, SEO keywords, FAQs, topics
│   ├── components/
│   │   ├── SiteLayout.tsx         # Public layout: navigation + footer
│   │   ├── Header.tsx             # Site header/navigation bar
│   │   ├── AppLayout.tsx          # Authenticated app layout
│   │   ├── AppSidebar.tsx         # Dashboard sidebar
│   │   ├── ErrorBoundary.tsx      # Error handling
│   │   ├── ProtectedRoute.tsx     # Auth guard
│   │   ├── PublicLayout.tsx       # Public page wrapper
│   │   └── ui/                    # 53 shadcn/ui components (Button, Card, Dialog, etc.)
│   ├── contexts/
│   │   └── ThemeContext.tsx        # Light/dark theme toggle
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile breakpoint detection
│   │   ├── useComposition.ts      # Input composition handling
│   │   ├── usePersistFn.ts        # Persistent callback ref
│   │   └── useScrollReveal.ts     # Scroll-triggered animations
│   └── lib/
│       ├── utils.ts               # Tailwind merge + classnames utility
│       └── constants.ts           # App-wide constants
├── public/
│   ├── favicon.png
│   └── photos/                    # 28 site images (5.6 MB)
│       ├── beach/                 # Beach/sunset photography
│       ├── dining/                # Restaurant/food imagery
│       ├── events/                # Fireworks, events
│       ├── family/                # Family activities
│       ├── fashion/               # JPK fashion photos
│       ├── harbour-town/          # Harbour Town lighthouse, marina
│       ├── icw/                   # Intracoastal waterway, marsh, live oaks
│       └── real-estate/           # Property/neighborhood images
├── content-export/                # DATABASE CONTENT AS JSON
│   ├── businesses.json            # 43 business listings
│   ├── articles.json              # 6 published articles
│   ├── categories.json            # 8 categories
│   ├── verticals.json             # 10 pillars (editorial, keywords, FAQ)
│   ├── businesses_with_ids.json   # With Convex internal IDs
│   ├── articles_with_ids.json     # With Convex internal IDs
│   └── categories_with_ids.json   # With Convex internal IDs
├── scripts/                       # Dev and test utilities
├── package.json                   # Dependencies and scripts
├── bun.lock                       # Lockfile
├── vite.config.ts                 # Vite build config (Tailwind plugin, path aliases)
├── tsconfig.json                  # TypeScript base config
├── tsconfig.app.json              # Frontend TS config
├── tsconfig.node.json             # Node/build TS config
├── biome.json                     # Linter/formatter config
├── vercel.json                    # Vercel deployment: output dir, SPA rewrites
├── components.json                # shadcn/ui config
├── index.html                     # HTML entry point
└── .env.example                   # All environment variables documented
```

---

## Content Architecture

### The Ten Pillars (Verticals)

All editorial content for the 10 luxury verticals lives in `src/data/verticals.ts`. Each pillar includes:

- Name, slug, tagline
- Full editorial description (multiple paragraphs)
- Hero image and card image paths
- Lucide icon identifier
- SEO keywords array
- FAQ questions and answers (structured for schema.org markup)
- Article topic queue (5 planned articles per pillar)
- Revenue/traffic strategy notes (internal, not rendered)

| # | Pillar | Slug | Strategy |
|---|--------|------|----------|
| 1 | Fashion & Style | `fashion-style` | JPK client acquisition funnel |
| 2 | Luxury Dining | `luxury-dining` | Traffic magnet, featured listings |
| 3 | Luxury Real Estate | `luxury-real-estate` | Referral fees, agent partnerships |
| 4 | Home & Lifestyle | `home-lifestyle` | Service provider premium listings |
| 5 | Private Aviation | `private-aviation` | Charter/concierge partnerships |
| 6 | Private Captains | `private-captains` | Charter booking commissions |
| 7 | Luxury Events | `luxury-events` | Event sponsorship, ticket sales |
| 8 | Family & Activities | `family-activities` | Booking integration, affiliate |
| 9 | Day Trips & Guides | `day-trips-guides` | Tour operator partnerships |
| 10 | Art & Culture | `art-culture` | Gallery partnerships, event listings |

### Database Content

Business listings, articles, and categories are in the Convex database. See `content-export/` for full JSON exports. To reseed from scratch, use the mutations in `convex/seed.ts`.

---

## Static Build Notes

The current architecture is a React SPA that fetches data from Convex at runtime. The `dist/` folder contains the compiled frontend (HTML + JS + CSS + images), but the business/article/category data loads dynamically from the Convex API when pages render.

**To deploy on a pure static host (Cloudflare Pages, Netlify, S3):**

The frontend HTML/JS/CSS will load and render correctly on any static host. However, for the dynamic content to work, the Convex backend must remain accessible (it runs in the cloud, not on your static host). The Convex free tier handles this. Point `VITE_CONVEX_URL` to your Convex deployment and rebuild.

**To fully eliminate the Convex dependency (future migration):**

Replace each `useQuery(api.businesses.list, ...)` call in the React components with a local import from JSON/TypeScript data files. The `content-export/` JSONs provide everything needed. This is a component-by-component refactor, not a one-command switch. Estimated effort: 2-4 hours for a developer familiar with React.

---

## License and Ownership

Copyright 2026 Donal Bailey / HHI Revenue Solutions. All rights reserved.

This project, including all source code, content, images, database schemas, and exported data, is the exclusive property of Donal Bailey. There are no restrictions on use, modification, redistribution, sublicensing, or commercial exploitation. No attribution to Viktor, getviktor.com, Zeta Labs, or any other party is required.

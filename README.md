# ByteSpace — Production-Grade Next.js Frontend Foundation

ByteSpace is a modern, high-performance online course and digital learning platform frontend built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

This repository contains the enterprise-ready engineering foundation, design system token architecture, atomic UI primitives, and application routing hierarchy designed to support the phased implementation of the complete ByteSpace platform.

---

## 🛠️ Technology Stack

| Technology | Purpose | Specification |
| :--- | :--- | :--- |
| **Next.js** | Core Framework | App Router, Server Components by default, Route Groups |
| **React** | UI Library | React 18 with modern hooks & forwardRef primitives |
| **TypeScript** | Type System | Strict mode (`strict: true`), zero `any` tolerance |
| **Tailwind CSS** | Styling Engine | CSS Variables token integration with semantic utility classes |
| **ESLint** | Code Quality | Next.js core web vitals and strict linting rules |
| **Lucide React** | Icons | Scalable, accessible icon primitives |

---

## 🏛️ Architecture Overview

The codebase is organized with strict separation of concerns:
- **Routing & Composition in `src/app/`**: Next.js route groups (`(auth)` and `(website)`) handle routing, metadata, and page composition. No heavy UI markup lives directly in router page files.
- **UI Primitives in `src/components/ui/`**: Atomic, domain-agnostic building blocks (`Button`, `Input`, `Card`, `Badge`).
- **Common Primitives in `src/components/common/`**: Layout and typography foundations (`Container`, `Section`, `SectionHeading`, `PageHeading`, `Logo`).
- **Composition Sections in `src/sections/`**: Feature-level page sections (`home`, `courses`, `auth`) composed inside pages.
- **Centralized Tokens in `src/config/` & `src/app/globals.css`**: Single-source-of-truth brand tokens (changing the primary/secondary color token updates the entire system).

```text
ByteSpace-Website/
├── docs/                     # Architecture, design system & workflow documentation
├── public/                   # Static media, icons, and font assets
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── logos/
├── src/
│   ├── app/                  # Next.js App Router (pages, layouts, metadata)
│   │   ├── (auth)/           # /login, /register
│   │   ├── (website)/        # /, /search, /courses, /courses/[slug]
│   │   ├── globals.css       # Centralized theme tokens & CSS variables
│   │   ├── layout.tsx        # Global root layout (Inter font, SEO metadata)
│   │   └── not-found.tsx     # Custom 404 error experience
│   ├── components/
│   │   ├── common/           # Container, Section, Headings, Logo
│   │   ├── layout/           # Global shell components (Navbar, Footer)
│   │   └── ui/               # Button, Input, Card, Badge primitives
│   ├── config/               # site.ts, theme.ts, navigation.ts
│   ├── constants/            # routes.ts
│   ├── data/                 # Static course and mock datasets
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities (cn, formatters)
│   ├── sections/             # Page sections (home, courses, auth)
│   ├── styles/               # Supplementary styles
│   └── types/                # Domain models & TypeScript interfaces
├── .env.example              # Environment variables template
├── .eslintrc.json            # ESLint rules
├── next.config.mjs           # Next.js build configuration
├── package.json              # Project scripts and dependencies
├── tailwind.config.ts        # Tailwind theme token mappings
└── tsconfig.json             # Strict TypeScript configuration
```

---

## 🎨 Centralized Design System & Tokens

Brand and semantic colors are defined as CSS variables in `src/app/globals.css` and mapped to Tailwind utilities:

```css
:root {
  --color-primary: 26 86 219;          /* #1A56DB - Royal Blue */
  --color-secondary: 204 255 0;        /* #CCFF00 - Electric Lime */
  --color-background: 255 255 255;     /* #FFFFFF */
  --color-foreground: 15 23 42;        /* #0F172A */
  --color-surface: 255 255 255;
  --color-muted: 241 245 249;          /* #F1F5F9 */
  --color-border: 226 232 240;        /* #E2E8F0 */
}
```

Updating `--color-primary` or `--color-secondary` propagates across buttons, badges, headings, cards, and backgrounds throughout the entire app without touch-ups in component files.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18+ or v20+ (Node v24 supported)
- **Package Manager**: `npm` (v10+)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ByteSpace-Website
   ```

2. Copy the environment variables template:
   ```bash
   cp .env.example .env.local
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts local Next.js development server on port 3000 |
| `build` | `npm run build` | Compiles optimized production bundle with type validation |
| `start` | `npm run start` | Runs the production build locally |
| `lint` | `npm run lint` | Runs ESLint against all source files (`next lint`) |
| `type-check` | `npm run type-check` | Runs strict TypeScript verification (`tsc --noEmit`) |

---

## 🧭 Application Routes

All routes are declared in `@/constants/routes.ts`:

| Route Path | File Location | Description |
| :--- | :--- | :--- |
| `/` | `src/app/(website)/page.tsx` | Platform Landing & Home Page |
| `/courses` | `src/app/(website)/courses/page.tsx` | Course Catalog & Discovery |
| `/courses/[slug]` | `src/app/(website)/courses/[slug]/page.tsx` | Dynamic Course Details & Curriculum |
| `/search` | `src/app/(website)/search/page.tsx` | Search and Filter Course Results |
| `/login` | `src/app/(auth)/login/page.tsx` | User Authentication / Sign In |
| `/register` | `src/app/(auth)/register/page.tsx` | User Registration / Join Platform |
| `*` (404) | `src/app/not-found.tsx` | Custom 404 Not Found Page |

---

## 📚 Engineering Documentation

Comprehensive guidelines are available in the [`docs/`](./docs) directory:

- [**Architecture Guide**](./docs/ARCHITECTURE.md) — Directory boundaries, App Router composition, RSC strategy, and data models.
- [**Component Guidelines**](./docs/COMPONENT-GUIDELINES.md) — 5-layer hierarchy, composition patterns, and reusability rules.
- [**Design System**](./docs/DESIGN-SYSTEM.md) — Token matrix, color palettes, typography scales, radii, and shadows.
- [**Development Guidelines**](./docs/DEVELOPMENT-GUIDELINES.md) — Strict TypeScript conventions, Next.js best practices, and a11y standards.
- [**Git Workflow**](./docs/GIT-WORKFLOW.md) — Branch naming, conventional commit rules, and PR checklists.
- [**Implementation Roadmap**](./docs/IMPLEMENTATION-PLAN.md) — 12-phase delivery roadmap from foundation to launch.

---

## ⚡ Core Principles

- **Clean & Scalable**: Decoupled layout, UI primitives, and composition sections.
- **Server Components by Default**: Zero unnecessary client bundle overhead.
- **Accessible (WCAG 2.1 AA)**: Semantic elements, proper ARIA tags, and keyboard focus rings.
- **Type-Safe**: Strict TypeScript configuration with shared domain types.
- **Maintainable**: Single source of truth for routes, tokens, navigation, and site metadata.

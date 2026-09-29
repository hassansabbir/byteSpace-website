# ByteSpace — Online Course & Learning Platform

ByteSpace is a modern, high-performance online course and digital learning platform built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

🔗 **Live Demo:** [https://byte-space-website.vercel.app](https://byte-space-website.vercel.app)

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

## ✨ Features & Highlights

- **Pixel-Perfect Hero Section**: Custom responsive dome layout featuring course discovery search, interactive learning progress indicators, and student satisfaction metrics.
- **Optimized Media Delivery**: Pre-optimized image assets with blur placeholders (`blurDataURL`), eager LCP prioritization, and modern WebP/AVIF format support.
- **Trusted Partners Strip**: Dynamic company logo carousel strip matching brand specifications with grayscale-to-color hover transitions.
- **Fully Responsive Navigation**: Fixed header with mobile drawer menu, route highlighting, and smooth transitions.
- **Strict Codebase Standards**: Clean separation of concerns with dedicated domain types (`src/types/`), isolated datasets (`src/data/`), self-documenting code, and zero files exceeding 200 lines.
- **Accessible (WCAG 2.1 AA)**: Semantic HTML5 landmarks, keyboard navigation focus rings, and proper ARIA labeling.

---

## 🏛️ Architecture Overview

The codebase is organized with strict separation of concerns:
- **Routing & Composition in `src/app/`**: Next.js route groups (`(auth)` and `(website)`) handle routing, metadata, and page composition.
- **UI Primitives in `src/components/ui/`**: Atomic, reusable interface components (`Button`, `Input`, `Card`, `Badge`).
- **Common Primitives in `src/components/common/`**: Layout and structural elements (`Container`, `Section`, `SectionHeading`, `PageHeading`, `Logo`).
- **Page Sections in `src/sections/`**: Feature-level page sections (`home`, `courses`, `auth`) composed cleanly inside routes.
- **Centralized Tokens in `src/config/` & `src/app/globals.css`**: Single source of truth for brand colors and theme tokens.

```text
ByteSpace-Website/
├── public/                   # Static media, company logos, and avatars
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   └── Home/
│   │       ├── company-logos/
│   │       └── hero/
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
│   │   ├── layout/           # Global shell components (Header, Footer)
│   │   └── ui/               # Button, Input, Card, Badge primitives
│   ├── config/               # site.ts, theme.ts, navigation.ts
│   ├── constants/            # routes.ts
│   ├── data/                 # Company logos, hero data, course mock data
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities (cn, formatters)
│   ├── sections/             # Page sections (hero-section, trusted-by-section)
│   ├── styles/               # Supplementary styles
│   └── types/                # Domain models & TypeScript interfaces
├── .env.example              # Environment variables template
├── .eslintrc.json            # ESLint configuration
├── next.config.mjs           # Next.js configuration
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

Updating tokens in `globals.css` dynamically cascades across buttons, badges, headings, cards, and backgrounds across the entire application.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18+ or v20+ (Node v24 supported)
- **Package Manager**: `npm` (v10+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hassansabbir/byteSpace-website.git
   cd byteSpace-website
   ```

2. Copy the environment variables:
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

All routes are centralized in `@/constants/routes.ts`:

| Route Path | File Location | Description |
| :--- | :--- | :--- |
| `/` | `src/app/(website)/page.tsx` | Platform Landing & Hero Page |
| `/courses` | `src/app/(website)/courses/page.tsx` | Course Catalog & Discovery |
| `/courses/[slug]` | `src/app/(website)/courses/[slug]/page.tsx` | Dynamic Course Details & Curriculum |
| `/search` | `src/app/(website)/search/page.tsx` | Search and Filter Course Results |
| `/login` | `src/app/(auth)/login/page.tsx` | User Authentication / Sign In |
| `/register` | `src/app/(auth)/register/page.tsx` | User Registration / Join Platform |
| `*` (404) | `src/app/not-found.tsx` | Custom 404 Not Found Page |

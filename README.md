# ByteSpace — Frontend Job Task Submission

This repository contains the frontend implementation of the ByteSpace website, developed from the provided Figma design as part of the frontend developer job task.

- **Live URL:** [https://byte-space-website.vercel.app](https://byte-space-website.vercel.app)
- **Repository:** [https://github.com/hassansabbir/byteSpace-website](https://github.com/hassansabbir/byteSpace-website)
- **Pull Request:** [`dev` → `main` PR](https://github.com/hassansabbir/byteSpace-website/pulls)

---

## 📌 Project Overview

The task was to build the ByteSpace online learning platform from the Figma design. The required scope was the full landing page. In addition to the landing page, the bonus authentication pages and additional platform pages were also implemented:

### Implemented Pages:
- **Landing Page (Required):**
  - Hero section with course search, student illustration, and floating stat cards
  - Trusted partners logo strip
  - Featured courses grid
  - Learning paths section
  - Creator call-to-action section
  - Testimonials
  - Responsive header with mobile navigation menu and global footer
- **Courses Catalog (`/courses`):** Course listing with category filters, difficulty levels, sort options, and search query handling.
- **Course Detail (`/courses/[slug]`):** Individual course page with video preview player, curriculum breakdown accordion, instructor summary, and enrollment sidebar.
- **Creators Directory & Profile (`/creators`, `/creators/[slug]`):** Instructor listings and dedicated creator profile page with bio, stats, and courses.
- **Login & Register (`/login`, `/register`) (Bonus):** Authentication pages matching the Figma split-screen layout.
- **Search (`/search`) & Custom 404:** Search results route and custom not-found page.

---

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Language:** TypeScript (strict type checking)
- **Styling:** Tailwind CSS (configured with design system colors and tokens)
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 🌿 Git Branching & Workflow

As specified in the task guidelines:
- The **`main`** branch contains the initial project setup, dependencies, and baseline architecture.
- All development and feature implementation were completed on the **`dev`** branch.
- A **Pull Request** has been opened from `dev` to `main`. All commits, section progress, and code changes can be reviewed in the **Pull Requests** tab on GitHub.

---

## 📁 Project Structure

```text
src/
├── app/                        # Next.js App Router
│   ├── (auth)/
│   │   ├── login/page.tsx      # Login page (bonus)
│   │   └── register/page.tsx   # Register page (bonus)
│   ├── (website)/
│   │   ├── page.tsx            # Landing page (required)
│   │   ├── courses/
│   │   │   ├── page.tsx        # Courses catalog
│   │   │   └── [slug]/page.tsx # Course details & curriculum
│   │   ├── creators/
│   │   │   ├── page.tsx        # Creators directory
│   │   │   └── [slug]/page.tsx # Creator profile
│   │   └── search/page.tsx     # Search results
│   ├── globals.css             # Theme colors & CSS variables
│   ├── layout.tsx              # Root layout & font configuration
│   └── not-found.tsx           # Custom 404 page
│
├── components/
│   ├── layout/                 # Header (desktop & mobile drawer), Footer
│   ├── ui/                     # Reusable UI primitives (Button, Input, Card, Badge)
│   ├── common/                 # Container, SectionHeading, Logo
│   ├── courses/                # CourseCard, VideoPlayer, LessonsAccordion
│   └── auth/                   # AuthBranding, AuthCollage, AuthSocialButtons
│
├── sections/                   # Page-level section components
│   ├── home/                   # Hero, TrustedBy, FeaturedCourses, LearningPaths, Testimonials
│   ├── courses/                # Catalog and course detail sections
│   └── creator/                # Creator catalog and profile sections
│
├── config/                     # Site configuration, theme tokens, navigation links
├── constants/                  # Route constants
├── data/                       # Mock data (courses, creators, partners)
├── types/                      # TypeScript interfaces and types
├── hooks/                      # Custom React hooks
└── lib/                        # Utility functions (cn helper)
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18.18 or higher)
- npm

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hassansabbir/byteSpace-website.git
   cd byteSpace-website
   ```

2. **Check out the `dev` branch:**
   ```bash
   git checkout dev
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000). No environment variables are required to run the project.

---

## 📋 Available Scripts

- `npm run dev` — Starts the development server at localhost:3000.
- `npm run build` — Builds the application for production (runs type checks and linting).
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint checks.

---

## 🔍 How to Review

1. **Live Deployment:** Open the [Vercel link](https://byte-space-website.vercel.app) to view the live site.
2. **Landing Page:** Review the home page sections against the Figma design.
3. **Bonus & Additional Pages:** Check `/courses`, `/courses/complete-web-development-bootcamp`, `/creators`, `/login`, and `/register`.
4. **Mobile Responsiveness:** Test with DevTools at 375px (mobile), 768px (tablet), and 1280px+ (desktop).
5. **Pull Request:** Open the **Pull Requests** tab in the GitHub repo to review the PR from `dev` to `main`, including commit history and diffs.
6. **Build Verification:** Run `npm run build` to confirm the production build passes with zero errors.

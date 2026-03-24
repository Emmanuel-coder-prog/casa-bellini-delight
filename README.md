# Casa Bellini Restaurant — Website

A modern, high-converting restaurant website for **Casa Bellini Restaurant**, a 24-hour eatery in Accra, Ghana serving pizza, local dishes, sandwiches, ice cream, and drinks.

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Framework | **React 18** with **TypeScript** |
| Build Tool | **Vite 5** |
| Styling | **Tailwind CSS 3** with custom design tokens |
| UI Components | **shadcn/ui** (Radix UI primitives) |
| Animations | **Framer Motion 11** |
| Routing | **React Router DOM 6** |
| State / Data | **TanStack React Query 5** |
| Forms | **React Hook Form 7** + **Zod** validation |
| Icons | **Lucide React** |
| Fonts | **Playfair Display** (display) · **DM Sans** (body) — via Google Fonts |

## 📦 Dependencies

### Production

- `react` / `react-dom` — UI library
- `react-router-dom` — Client-side routing
- `framer-motion` — Scroll & hover animations
- `@tanstack/react-query` — Async state management
- `lucide-react` — Icon set
- `class-variance-authority` — Component variant styling
- `clsx` / `tailwind-merge` — Conditional class utilities
- `sonner` — Toast notifications
- `zod` — Schema validation
- `react-hook-form` / `@hookform/resolvers` — Form handling
- `date-fns` — Date utilities
- `next-themes` — Theme management
- `embla-carousel-react` — Carousel component
- `react-resizable-panels` — Resizable panel layouts
- `vaul` — Drawer component
- `cmdk` — Command palette
- `input-otp` — OTP input
- `recharts` — Charts (available if needed)
- `react-day-picker` — Date picker

### Radix UI Primitives

`@radix-ui/react-accordion`, `alert-dialog`, `aspect-ratio`, `avatar`, `checkbox`, `collapsible`, `context-menu`, `dialog`, `dropdown-menu`, `hover-card`, `label`, `menubar`, `navigation-menu`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `slider`, `slot`, `switch`, `tabs`, `toast`, `toggle`, `toggle-group`, `tooltip`

### Dev Dependencies

- `vite` + `@vitejs/plugin-react-swc` — Fast builds with SWC
- `typescript` — Type safety
- `tailwindcss` + `autoprefixer` + `postcss` — Styling pipeline
- `tailwindcss-animate` — Animation utilities
- `@tailwindcss/typography` — Prose styling
- `eslint` + `typescript-eslint` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` — Linting
- `vitest` + `jsdom` + `@testing-library/react` + `@testing-library/jest-dom` — Testing
- `@playwright/test` — E2E testing
- `lovable-tagger` — Component tagging

## 🎨 Design System

- **Palette:** Dark background (`#1a1a1a`), warm gold accents, cream text
- **Tokens:** All colors defined as HSL CSS variables in `src/index.css` and mapped in `tailwind.config.ts`
- **Typography:** Playfair Display for headings, DM Sans for body text

## 📁 Project Structure

```
src/
├── assets/          # AI-generated food & restaurant images
├── components/      # Page sections (Hero, Menu, Order, etc.)
│   └── ui/          # shadcn/ui base components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Route pages (Index, NotFound)
└── index.css        # Design tokens & global styles
```

## ⚙️ Setup

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## 📝 Notes

- Replace the placeholder WhatsApp number (`233000000000`) in components with the actual business number.
- Replace placeholder images in `src/assets/` with real photography for production.
- Google Maps embed in `ContactSection.tsx` should be updated with the exact business location.

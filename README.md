# Graighall Shopping Centre

A modern, dark-themed Next.js (App Router) site for Graighall Shopping Centre, featuring a public shop directory, news/events, and a full-featured admin CMS for shop/news/settings management.

## Features
- **Next.js 14 + React 18 + TypeScript**
- **Permanent dark mode** with Tailwind CSS and shadcn/ui
- **Shop directory**: Explore shops, categories, details
- **News & events**: Featured, categories, CRUD via admin
- **Admin CMS**: Modal-based, with authentication
  - Shop Management (CRUD)
  - News Management (CRUD, featured, categories)
  - General Settings (site info, contact, hours, social, maintenance)
- **Responsive design** for desktop and mobile
- **Vercel deployment**

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Site runs at `http://localhost:3000`

### Build & Deploy
```bash
npm run build
```
Deploy via Vercel (auto on push to main, or manually):
```bash
vercel --prod --yes
```

## Project Structure
- `src/components/` – UI components (Hero, Footer, Header, AdminCMS, etc.)
- `src/components/admin/` – Admin CMS subcomponents
- `src/pages/` – Main pages (Index, NotFound)
- `public/` – Static assets
- `.gitignore` – Ignores build artifacts, node_modules, etc.

## Customization
- **Permanent dark mode**: All UI uses dark theme; adjust Tailwind config as needed.
- **AdminCMS**: Modal opens from Header; demo authentication included.
- **Shop/news/settings**: Edit via AdminCMS tabs.

## Deployment
- Production: https://graighall-2v4yzybtk-adhdsupershifts-projects.vercel.app
- Vercel project: adhdsupershifts-projects/graighall

## License
MIT

---
For questions or contributions, open an issue or pull request on GitHub: https://github.com/ADHDSuperShift/the-woods

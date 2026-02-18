# CLAUDE.md — Fabrication Page

> Inherits from: ~/dev/CLAUDE.md (global preferences)

## Project Overview

Fabrication-focused website/landing page. Part of the broader portfolio ecosystem.

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v7

## Project Structure

```
src/
├── components/    # Reusable UI components
├── pages/         # Route-level pages
├── hooks/         # Custom React hooks
├── data/          # Static data, configs
├── types/         # TypeScript type definitions
├── utils/         # Helper functions
└── assets/        # Images, fonts
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Current Status

- [x] Project scaffold
- [x] Tailwind configured
- [x] React Router setup
- [ ] Page content
- [ ] Responsive design pass

## Notes

- Uses **TypeScript** — maintain strict typing
- Uses **Tailwind** (unlike portfolio which uses Sass)
- Follow React Router v7 patterns for routing

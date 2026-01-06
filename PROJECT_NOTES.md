# Adam Wolcott Smith Portfolio - Project Notes

## Project Overview
A portfolio website showcasing fabrication and technical direction work across corporate events, film/TV production, and art installations.

**Built with:** React, TypeScript, Vite, Tailwind CSS, React Router

---

## Getting Started

### Development Server
```bash
npm run dev
```
Opens at [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout wrapper
│   └── ui/            # Reusable UI components (empty for now)
├── pages/             # Page components (Home, About, Contact, Blog, ProjectDetail)
├── hooks/             # Custom hooks (useSEO)
├── utils/             # Helper functions (empty for now)
├── types/             # TypeScript type definitions
├── data/              # Project data (projects.ts)
└── index.css          # Global styles + Tailwind imports

public/
├── assets/
│   └── projects/      # All project images
└── Adam Wolcott Smith Resume 2025.pdf
```

---

## Pages & Routes

- `/` - Home (project grid)
- `/about` - About page
- `/contact` - Contact info
- `/blog` - Blog & updates
- `/project/:id` - Individual project pages

---

## TODO: Content to Add

### 1. Project Data ([src/data/projects.ts](src/data/projects.ts))
Each project needs:
- ✅ Basic structure set up
- ⚠️ **Update hero image paths** - Match actual uploaded images
- ⚠️ **Add project descriptions** - Write the narrative for each project
- ⚠️ **Add gallery images** - Map actual image filenames to each project
- ⚠️ **Add credits** - Team members and collaborators
- ⚠️ **Verify years** - Update with actual project years

### 2. About Page ([src/pages/About.tsx](src/pages/About.tsx))
- ⚠️ **Write bio** - 2-3 paragraphs about background and philosophy
- ⚠️ **Add photo** - Replace placeholder with actual photo
- ⚠️ **Review skills list** - Add/remove as needed

### 3. Contact Page ([src/pages/Contact.tsx](src/pages/Contact.tsx))
- ⚠️ **Update email** - Replace `adam@example.com` with real email
- ⚠️ **Update LinkedIn** - Replace placeholder with actual LinkedIn URL

### 4. Footer ([src/components/layout/Footer.tsx](src/components/layout/Footer.tsx))
- ⚠️ **Update email** - Replace `adam@example.com`
- ⚠️ **Update LinkedIn** - Replace placeholder URL

### 5. Images
- ✅ All images moved to `public/assets/projects/`
- ⚠️ **Map images to projects** - Identify which images belong to which project
- ⚠️ **Optimize images** - Compress for web if needed
- ⚠️ **Add hero images** - Select best image for each project hero

---

## Image Inventory

Currently in `public/assets/projects/`:
- DatingPrivateLives_*.jpg (15 images + 1 MOV)
- KPMG_*.png/jpeg/HEIC (multiple files)
- Other project images

**Next steps:**
1. Review all images and categorize by project
2. Choose hero images for each project
3. Update paths in `src/data/projects.ts`

---

## SEO Notes

Each page uses the `useSEO` hook to set:
- Page title
- Meta description
- Keywords
- Open Graph tags for social sharing
- Canonical URLs (when needed)

**Before launch:**
- [ ] Add actual domain to canonical URLs
- [ ] Create OG images (1200x630px) for social sharing
- [ ] Review all meta descriptions for SEO keywords

---

## Design System

**Colors:**
- Black/white foundation
- Dark mode support (respects system preference)
- CSS variables in `src/index.css`

**Typography:**
- System font stack for performance
- Bold sans-serif for headings
- Clear hierarchy

**Spacing:**
- Mobile-first responsive design
- Tailwind breakpoints: sm(640), md(768), lg(1024), xl(1280), 2xl(1536)

---

## Future Enhancements

- [ ] Add actual blog post functionality
- [ ] Add image lightbox/gallery component
- [ ] Add loading states for images
- [ ] Add 404 Not Found page
- [ ] Add animations/transitions
- [ ] Add contact form (if needed)
- [ ] Add analytics
- [ ] Optimize for Core Web Vitals

---

## Deployment

When ready to deploy, consider:
- **Netlify** - Easy deployment from Git
- **Vercel** - Great for React apps
- **GitHub Pages** - Free hosting

All require updating the base URL in `vite.config.ts` if not using a custom domain.

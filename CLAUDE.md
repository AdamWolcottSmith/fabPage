# CLAUDE.md — Web Development Projects

## About the Developer

- **Skill level:** Intermediate JavaScript/React developer, learning TypeScript
- **Goal:** Build well-structured, SEO-optimized web pages
- **Learning mode:** Include detailed comments explaining what code does and why

---

## Before You Start

**Always ask clarifying questions before building.** Key things to confirm:

- What is the purpose of this page/component?
- Who is the target audience?
- Are there specific SEO keywords or goals?
- Any design preferences (colors, fonts, layout)?
- Does this need to connect to any APIs or data sources?

---

## Tech Stack Preferences

### Core

- **Language:** TypeScript (explain TS concepts when introducing new ones)
- **Framework:** React with functional components and hooks
- **Styling:** Tailwind CSS preferred, or Sass for complex custom designs

### React Patterns

- Functional components only (no class components)
- useState and useEffect for local state
- Context API for shared state (ask before adding Redux or other libraries)
- Custom hooks for reusable logic — explain what the hook does

### When Adding Dependencies

**Always ask first and explain:**
1. What the dependency does
2. Why it's needed (vs building it ourselves)
3. How widely used/maintained it is

---

## Code Style

### Formatting

- **Semicolons:** Yes
- **Quotes:** Single quotes (`'`)
- **Indentation:** Tabs
- **File naming:** PascalCase for components (`HeroSection.tsx`), camelCase for utilities (`formatDate.ts`)

### Comments

**Use lots of comments!** Assume I want to learn from the code.

```tsx
// Good: Explains the "why"
// useEffect runs once on mount (empty dependency array)
// to fetch initial data from the API
useEffect(() => {
	fetchData();
}, []);

// Good: Explains what a complex line does
// Destructure user object and rename 'name' to 'userName' to avoid conflicts
const { name: userName, email } = user;
```

### Component Structure

```tsx
// 1. Imports (external first, then internal)
import { useState } from 'react';
import { Button } from '@/components/Button';

// 2. Types/Interfaces
interface HeroProps {
	title: string;
	subtitle?: string; // Optional prop
}

// 3. Component
const Hero = ({ title, subtitle }: HeroProps) => {
	// 4. Hooks at the top
	const [isVisible, setIsVisible] = useState(true);

	// 5. Handler functions
	const handleClick = () => {
		setIsVisible(false);
	};

	// 6. Return JSX
	return (
		<section className="hero">
			<h1>{title}</h1>
			{subtitle && <p>{subtitle}</p>}
		</section>
	);
};

export default Hero;
```

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── ...
├── pages/               # Page-level components
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── styles/              # Global styles, Tailwind config
├── types/               # Shared TypeScript types
└── assets/              # Images, fonts, icons
```

---

## SEO Requirements (High Priority)

SEO is a major focus. Every page should include:

### Essential Meta Tags

```html
<title>Primary Keyword — Secondary Keyword | Brand</title>
<meta name="description" content="Compelling 150-160 char description with keywords" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://example.com/page" />
```

### Open Graph (Social Sharing)

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Description for social shares" />
<meta property="og:image" content="https://example.com/og-image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="website" />
```

### Technical SEO

- Semantic HTML (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`)
- Proper heading hierarchy (one `<h1>`, logical `<h2>`-`<h6>` nesting)
- Image `alt` tags (descriptive, include keywords where natural)
- Fast load times (optimize images, minimize bundle size)
- Mobile-friendly (test at 320px width minimum)
- Structured data (JSON-LD) when appropriate — ask if needed

### When Building Pages, Consider:

- What keywords are we targeting?
- What's the search intent? (informational, transactional, navigational)
- Internal linking opportunities
- Call-to-action placement

---

## Accessibility (a11y)

- Semantic HTML over `<div>` soup
- ARIA labels where needed (buttons, icons, interactive elements)
- Keyboard navigation support
- Color contrast (4.5:1 minimum for text)
- Focus states visible on all interactive elements
- Alt text for all images (decorative images get `alt=""`)

---

## Responsive Design

**Mobile-first approach:**

```css
/* Base styles = mobile */
.container {
	padding: 1rem;
}

/* Then scale up */
@media (min-width: 768px) {
	.container {
		padding: 2rem;
	}
}
```

**Breakpoints (Tailwind defaults):**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Dark Mode

Support dark mode using Tailwind's `dark:` prefix or CSS custom properties:

```tsx
// Tailwind approach
<div className="bg-white dark:bg-gray-900">
	<p className="text-gray-900 dark:text-gray-100">Hello</p>
</div>
```

Respect user's system preference by default, with optional manual toggle.

---

## Things to Avoid

- **Over-engineering:** Keep it simple. Don't add abstraction until it's needed.
- **Unnecessary dependencies:** Ask before adding packages.
- **Div soup:** Use semantic HTML.
- **Magic numbers:** Use variables/constants for repeated values.
- **Skipping error handling:** Always handle loading/error states.

---

## Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Format code
prettier --write .

# View project structure
tree -L 2 -I 'node_modules'
```

---

## Questions? Just Ask!

If anything in this file is unclear or you need clarification about my preferences, just ask. I'd rather you confirm than assume.

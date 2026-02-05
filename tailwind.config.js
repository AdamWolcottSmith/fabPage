/** @type {import('tailwindcss').Config} */
export default {
	// Tell Tailwind to scan these files for class names
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	// Enable dark mode via class (not media query) so we can default to dark
	darkMode: 'class',

	theme: {
		extend: {
			// Brutalist color palette
			colors: {
				brutal: {
					bg: '#0a0a0a',
					'bg-light': '#fafafa',
					text: '#e5e5e5',
					'text-dark': '#0a0a0a',
					muted: '#737373',
					border: '#404040',
					'border-light': '#d4d4d4',
				},
			},
			// JetBrains Mono for all typography
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
			},
			// 3px border width for brutalist aesthetic
			borderWidth: {
				3: '3px',
			},
		},
	},
	plugins: [],
}


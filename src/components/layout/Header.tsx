import { Link } from 'react-router-dom';
import type { NavigationLink } from '../../types';

// Navigation links for the site
const navLinks: NavigationLink[] = [
	{ label: 'WORK', path: '/' },
	{ label: 'ABOUT', path: '/about' },
	{ label: 'CONTACT', path: '/contact' },
	// { label: 'BLOG', path: '/blog' }, // Hidden for now - uncomment when ready
];

const Header = () => {
	return (
		// 3px bottom border - brutalist aesthetic
		<header className="border-b-3 border-brutal-border">
			{/* Container with padding - mobile-first approach */}
			<div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
				<nav className="flex items-center justify-between">
					{/* Logo/Name - Bold uppercase, links to homepage */}
					<Link
						to="/"
						className="text-xl font-bold uppercase tracking-tight md:text-2xl"
					>
						ADAM WOLCOTT SMITH
					</Link>

					{/* Navigation Links - uppercase with pipe separators on larger screens */}
					<ul className="flex items-center gap-4 md:gap-0">
						{navLinks.map((link, index) => (
							<li key={link.path} className="flex items-center">
								<Link
									to={link.path}
									className="text-sm font-medium tracking-wide hover:text-brutal-muted md:text-base"
								>
									{link.label}
								</Link>
								{/* Pipe separator - hidden on mobile, visible on md+ */}
								{index < navLinks.length - 1 && (
									<span className="mx-4 hidden text-brutal-muted md:inline">
										|
									</span>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

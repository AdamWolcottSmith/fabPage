import { Link } from "react-router-dom";
import type { NavigationLink } from "../../types";

// Navigation links for the site
const navLinks: NavigationLink[] = [
  { label: "Work", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <header className="border-b border-black dark:border-white">
      {/* Container with padding - mobile-first approach */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo/Name - Links to homepage */}
          <Link to="/" className="text-xl font-bold tracking-tight md:text-2xl">
            Adam Wolcott Smith
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-60 md:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 3px top border - brutalist aesthetic
    <footer className="border-t-3 border-brutal-border">
      {/* Container with padding */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Copyright and location - muted text, uppercase */}
          <div className="text-sm uppercase tracking-wide text-brutal-muted">
            <p>© {currentYear} ADAM WOLCOTT SMITH</p>
            <p>BROOKLYN, NY</p>
          </div>

          {/* Social/Contact Links - 2px underlines */}
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="text-sm uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-brutal-muted"
              aria-label="Contact Adam Wolcott Smith"
            >
              CONTACT
            </Link>
            <a
              href="https://linkedin.com/in/adamwolcottsmith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-brutal-muted"
              aria-label="LinkedIn Profile"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

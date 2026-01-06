import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Props interface - accepts children (the page content)
interface LayoutProps {
  children: ReactNode;
}

// Layout component wraps all pages with Header and Footer
// This ensures consistent structure across the entire site
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header at top */}
      <Header />

      {/* Main content area - flex-1 makes it grow to fill available space */}
      {/* This pushes the footer to the bottom even on short pages */}
      <main className="flex-1">{children}</main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;

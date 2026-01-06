import { useEffect } from "react";
import type { SEOData } from "../types";

// Custom hook to manage SEO meta tags for each page
// Call this hook at the top of each page component with appropriate SEO data
export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Helper function to set or update a meta tag
    // If the tag exists, update it; otherwise create a new one
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Set basic meta tags
    setMetaTag("description", seoData.description);
    setMetaTag("robots", "index, follow");

    // Set keywords if provided (optional - less important for modern SEO)
    if (seoData.keywords && seoData.keywords.length > 0) {
      setMetaTag("keywords", seoData.keywords.join(", "));
    }

    // Set Open Graph tags for social sharing
    setMetaTag("og:title", seoData.title, true);
    setMetaTag("og:description", seoData.description, true);
    setMetaTag("og:type", "website", true);

    // Set OG image if provided
    if (seoData.ogImage) {
      setMetaTag("og:image", seoData.ogImage, true);
    }

    // Set canonical URL if provided
    // Canonical tags help prevent duplicate content issues
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", seoData.canonical);
    }

    // Cleanup function - though in practice, we'll just override these on page change
    return () => {
      // Meta tags persist across route changes, which is what we want
      // Each page will update them with new values
    };
  }, [seoData]); // Re-run if seoData changes
};

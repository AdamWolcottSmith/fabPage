// Type definitions for the portfolio project

// Represents a single project in the portfolio
export interface Project {
	id: string; // URL-friendly slug (e.g., "ryder-cup")
	title: string; // Display title
	client: string; // Client or production name
	year: number;
	category: 'corporate' | 'film-tv' | 'art-installation'; // Project type
	role: string; // Your role in the project (e.g., "Lead Fabricator", "Art Director")
	heroImage: string; // Path to main hero image
	summary: string; // Short one-liner for grid display
	description: string; // Full narrative for project page
	images: string[]; // Array of image paths for gallery
	credits?: Credit[]; // Optional array of credits
	featured?: boolean; // Whether to feature on homepage
}

// Credits for team members
export interface Credit {
	role: string;
	name: string;
}

// SEO metadata for pages
export interface SEOData {
	title: string;
	description: string;
	keywords?: string[];
	ogImage?: string;
	canonical?: string;
}

// Navigation link structure
export interface NavigationLink {
	label: string;
	path: string;
}

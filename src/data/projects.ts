import type { Project } from "../types";

// Portfolio projects data
// This is where all project information lives - update this file to add/edit projects
export const projects: Project[] = [
  {
    id: "kpmg",
    title: " Inside The Huddle",
    client: "KPMG",
    year: 2024, // Update with actual year
    category: "corporate",
    role: "Lead Fabricator",
    heroImage: "/assets/projects/KPMG_4.jpeg", // TODO: Update with actual image
    summary: "Live Football commentary with hosted in Boston and NYC",
    description: `TODO: Add project narrative here. Describe the scope, challenges, and your specific contributions.`,
    images: [
      // TODO: Add actual image paths from the uploaded images
      "/assets/projects/ryder-cup-1.jpg",
    ],
    credits: [
      // TODO: Add actual credits
    ],
    featured: true,
  },
  {
    id: "ubs-federer",
    title: "UBS Roger Federer Event",
    client: "UBS",
    year: 2024, // Update with actual year
    category: "corporate",
    role: "Fabricator",
    heroImage: "/assets/projects/UBS_9.jpg", // TODO: Update with actual image
    summary: "Custom fabrication for exclusive corporate tennis event",
    description: `TODO: Add project narrative here.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/UBS_2.jpg",
      "/assets/projects/UBS_3.jpg",
      "/assets/projects/UBS_4.jpg",
      "/assets/projects/UBS_4.jpg",
      "/assets/projects/UBS_7.jpg",
      "/assets/projects/UBS_8.jpg",
    ],
    credits: [],
    featured: true,
  },
  {
    id: "narcissisister-automata",
    title: "Narcissisister — Automata and Praxinoscope",
    client: "Deitch Projects",
    year: 2025,
    category: "art-installation",
    role: "Fabricator & Technical Designer",
    heroImage: "/assets/projects/NARC_JoeColeman-LeoSanoPhotos-10.jpeg",
    summary:
      "Kinetic sculptures and optical devices for contemporary art exhibition",
    description: `TODO: Add project narrative here. Describe the technical challenges of building moving sculptures.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/NARC_JoeColeman-LeoSanoPhotos-10.jpeg",
      "/assets/projects/NARC_JoeColeman-LeoSanoPhotos-17.jpeg"
    ],
    credits: [],
    featured: true,
  },
  {
    id: "narcissisister-voyage",
    title: "Narcissisister — Voyage Into Infinity",
    client: "Pioneer Works",
    year: 2024,
    category: "art-installation",
    role: "Fabricator & Technical Designer",
    heroImage: "/assets/projects/NARC_walter-wlodarczyk-WWRA3803.jpeg",
    summary:
      "Immersive installation fabrication for experimental performance space",
    description: `TODO: Add project narrative here.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/NARC_walter-wlodarczyk-WWRA3803.jpeg",
      "/assets/projects/NARC_walter-wlodarczyk-WWRA3913.jpeg"
    ],
    credits: [],
    featured: true,
  },
  {
    id: "dating-private-lives",
    title: "Dating & Private Lives",
    client: "Feature Film",
    year: 2025, // Update with actual year
    category: "film-tv",
    role: "Art Director",
    heroImage: "/assets/projects/DatingPrivateLives_2902.jpg", // Using one of the uploaded images
    summary: "Art direction and set design for independent feature film",
    description: `TODO: Add project narrative here. Describe your art direction approach and key set pieces.`,
    images: [
      // We have several DatingPrivateLives images - add them here
      "/assets/projects/DatingPrivateLives_2901.jpg",
      "/assets/projects/DatingPrivateLives_2907.jpg",
      "/assets/projects/DatingPrivateLives_2903.jpg",
      "/assets/projects/DatingPrivateLives_2904.jpg",
      "/assets/projects/DatingPrivateLives_2905.jpg",
      "/assets/projects/DatingPrivateLives_2906.jpg",
    ],
    credits: [],
    featured: true,
  },
  {
    id: "kingdom",
    title: "Kingdom",
    client: "Music Video",
    year: 2025, // Update with actual year
    category: "film-tv",
    role: "Fabrication & Art Assistant",
    heroImage: "/assets/projects/Kingdom_2973.jpg", // TODO: Update with actual image
    summary: "Custom props and set pieces for music video production",
    description: `TODO: Add project narrative here.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/Kingdom_Banquet_2987.jpg",
      "/assets/projects/Kingdom_Banquet_2986.jpg",
      "/assets/projects/Kingdom_2959.jpg",
      "/assets/projects/Kingdom_2961.jpg",
      "/assets/projects/Kingdom_2962.jpg",
      "/assets/projects/Kingdom_2971.jpg",
    ],
    credits: [],
    featured: true,
  },
];

// Helper function to get a single project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Helper function to get all featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

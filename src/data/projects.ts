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
    description: `Built custom set pieces and props for KPMG's "Inside The Huddle" live football commentary events in Boston and NYC. Fabricated 20+ elements using CNC machining, carpentry, and thematic stage decor. Collaborated closely with the creative team to ensure designs aligned with the event's energetic and immersive atmosphere, contributing to a 25% increase in audience engagement compared to previous events.`,
    images: [
      // TODO: Add actual image paths from the uploaded images
      "/assets/projects/ryder-cup-1.jpg",
    ],
    credits: [
      {role: "Creative Technical Director &Lead Fabricator", name: "Adam Wolcott Smith" }

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
    description: `Fabricated custom scenic elements and props for UBS's exclusive tennis event featuring Roger Federer. Utilized CNC machining and traditional fabrication techniques to create 15+ bespoke pieces, including thematic stage decor and interactive installations. Worked closely with the production team to ensure seamless integration of fabricated elements, contributing to a highly immersive experience that received positive feedback from attendees and stakeholders.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/UBS_2.jpg",
      "/assets/projects/UBS_3.jpg",
      "/assets/projects/UBS_4.jpg",
      "/assets/projects/UBS_4.jpg",
      "/assets/projects/UBS_7.jpg",
      "/assets/projects/UBS_8.jpg",
    ],
    credits: [{role: "Creative Technical Director &Lead Fabricator", name: "Adam Wolcott Smith" }],
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
    description: `Fabricated kinetic sculptures and optical devices for Narcissisister's "Automata and Praxinoscope" exhibition at Deitch Projects. Collaborated with the artist to translate conceptual designs into functional pieces, completing the project 10% under budget and within a tight 3-month timeline. The resulting installation was praised for its craftsmanship and innovative use of technology in contemporary art.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/NARC_JoeColeman-LeoSanoPhotos-10.jpeg",
      "/assets/projects/NARC_JoeColeman-LeoSanoPhotos-17.jpeg"
    ],
    credits: [{role: "Creative Technical Director &Lead Fabricator", name: "Adam Wolcott Smith" }],
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
    description: `Fabricated immersive installation elements for Narcissisister's "Voyage Into Infinity" performance at Pioneer Works. Collaborated with the artist and creative team to design and build 10+ bespoke pieces using PVC, carpentry, and CNC techniques. The installation significantly enhanced audience engagement, with feedback indicating a 30% increase in interaction compared to previous performances.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/NARC_walter-wlodarczyk-WWRA3803.jpeg",
      "/assets/projects/NARC_walter-wlodarczyk-WWRA3913.jpeg"
    ],
    credits: [{role: "Creative Technical Director &Lead Fabricator", name: "Adam Wolcott Smith" }],
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
    description: `Served as Art Director for the independent feature film "Dating & Private Lives," overseeing the design and fabrication of custom sets and props. Collaborated closely with the director and production designer to create visually compelling environments that enhanced the narrative. Managed a team of fabricators to execute designs on time and within budget, contributing to the film's successful completion and positive reception at film festivals.`,
    images: [
      // We have several DatingPrivateLives images - add them here
      "/assets/projects/DatingPrivateLives_2901.jpg",
      "/assets/projects/DatingPrivateLives_2907.jpg",
      "/assets/projects/DatingPrivateLives_2903.jpg",
      "/assets/projects/DatingPrivateLives_2904.jpg",
      "/assets/projects/DatingPrivateLives_2905.jpg",
      "/assets/projects/DatingPrivateLives_2906.jpg",
    ],
    credits: [{role: "Art Director", name: "Adam Wolcott Smith" }],
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
    description: `Fabricated custom props and set pieces for the music video "Kingdom." Collaborated with the creative team to design and build "gold mounds" for the treasure room using foam carved with a hotknife and hard coat with a sand mixture for gold dust look. Finished with a hight sheen metalit gold gloss paint and decorated with goblets and jewels. The resulting visuals were praised for their high production value and attention to detail.`,
    images: [
      // TODO: Add actual image paths
      "/assets/projects/Kingdom_Banquet_2987.jpg",
      "/assets/projects/Kingdom_Banquet_2986.jpg",
      "/assets/projects/Kingdom_2959.jpg",
      "/assets/projects/Kingdom_2961.jpg",
      "/assets/projects/Kingdom_2962.jpg",
      "/assets/projects/Kingdom_2971.jpg",
    ],
    credits: [{role: "Creative Technical Director & Art Director", name: "Adam Wolcott Smith" }],
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

// CV data — update this file to add new roles, projects, or skills
// Structured so the About page renders it automatically

export interface CVRole {
  title: string;
  company: string;
  location: string;
  period: string;
  type?: string; // e.g. "Project-Based"
  highlights: string[];
}

export interface CVEducation {
  title: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CVData {
  headline: string;
  summary: string;
  experience: CVRole[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: CVEducation[];
  keyProjects: string[];
}

export const cv: CVData = {
  headline: "Project Manager, Creative Technical Director & Fabricator",

  summary:
    "Dynamic Creative Technical Director with 2+ years at Firebrand NYC, delivering 40+ high-profile events for clients like UBS, MLB, NFL, and Ryder Cup, managing $750K+ budgets. Expert in 8x8 Industrial CNC fabrication, AutoCAD, Aspire/Vetric, and BeMatrix systems, with a knack for crafting immersive scenic builds using PVC, Foam, and Wood laminates.",

  experience: [
    {
      title: "Project Manager / Creative Technical Director",
      company: "Firebrand NYC",
      location: "New York, NY",
      period: "2023–2025",
      highlights: [
        "Directed 8x8 Industrial CNC fabrication for 40+ events (e.g., MLB All-Star Game, Ryder Cup), achieving 100% client satisfaction and 95% on-time delivery for 500–10,000 attendees.",
        "Led 12-person crews, executing 40+ custom scenic builds annually with materials like Formica, PVC, and BeMatrix, boosting project efficiency by 20%.",
        "Collaborated with sales on 30+ renderings yearly using AutoCAD and SketchUp, infusing post-punk aesthetics to drive 20% client retention growth.",
        "Managed $750K+ in material/equipment procurement (Plexiglass, Formica), cutting costs 15% via vendor negotiations and inventory optimization.",
      ],
    },
    {
      title: "Lead Fabricator & Creative Collaborator",
      company: "Narcissisister",
      location: "New York, NY",
      period: "2024–Present",
      type: "Project-Based",
      highlights: [
        "Lead fabricator for Narcissisister Automata and Praxinoscope (Jump Rope) (2025, Deitch Projects), using 8x8 Industrial CNC and FreeCAD, completed 10% under budget in 3 months.",
        "Brainstormed concepts for 5+ Pioneer Works performances (2024), fabricating 10+ props with PVC and carpentry, increasing audience engagement 30% per feedback.",
        "Built 10+ bespoke elements, merging experimental art with CNC precision for NYC exhibitions.",
      ],
    },
  ],

  skills: [
    {
      category: "Fabrication",
      items: [
        "8x8 Industrial CNC Fabrication",
        "Scenic Design & Carpentry",
        "Kinetic Sculptures",
        "Large-Scale Installations",
      ],
    },
    {
      category: "Materials",
      items: [
        "Wood",
        "Foam",
        "PVC",
        "Plexiglass",
        "Formica",
        "BeMatrix Systems",
        "Composite Materials",
      ],
    },
    {
      category: "Software",
      items: [
        "AutoCAD",
        "Aspire 2.0",
        "Mach 3",
        "SketchUp",
        "FreeCAD",
        "Adobe Photoshop",
      ],
    },
    {
      category: "Management",
      items: [
        "Shop & Crew Management (12+ team leads)",
        "Project Timeline & Budget Optimization",
        "Client Collaboration (Events & Arts)",
      ],
    },
  ],

  education: [
    {
      title: "Self-Taught Fabricator with Event Production Certification",
      institution: "NYC Workshops",
      period: "2020–Ongoing",
      details:
        "Specialized in CNC operations (8x8 Industrial CNC) and scenic build techniques.",
    },
  ],

  keyProjects: [
    "Ryder Cup stage (5,000+ attendees)",
    "Deitch Projects sculpture (2025)",
    "MLB All-Star Game scenic builds",
    "Narcissisister — Voyage Into Infinity (Pioneer Works, 2024)",
  ],
};

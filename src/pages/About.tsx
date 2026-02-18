import { useSEO } from "../hooks/useSEO";
import { cv } from "../data/cv";

const About = () => {
  // Set SEO metadata for About page
  useSEO({
    title: "About — Adam Wolcott Smith",
    description:
      "Brooklyn-based Creative Technical Director & Fabricator with expertise in CNC, AutoCAD, SketchUp, and materials. Specializing in corporate events, film/TV production, and art installations.",
    keywords: [
      "about",
      "bio",
      "technical director",
      "fabricator",
      "CNC",
      "AutoCAD",
      "SketchUp",
    ],
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
      {/* Page Header */}
      <h1 className="mb-12 text-4xl font-bold uppercase md:text-5xl">ABOUT</h1>

      {/* Bio Section */}
      <section className="mb-16">
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            My father built guitars. I grew up watching wood become instruments.
            Rube Goldberg taught me machines could be poetry.
          </p>
          <p className="text-2xl font-bold">Now I make things work.</p>
          <p>
            Corporate clients need stages that transform, installations that
            respond, environments that perform. Artists need visions made
            physical — kinetic sculptures, immersive spaces, objects that move.
          </p>
          <p>
            I don't separate commercial from creative. A mechanism is a
            mechanism. The job is the same: build it, make it work, watch it
            come to life.
          </p>
          <p className="text-brutal-muted">Brooklyn, NY.</p>
        </div>
      </section>

      {/* Photo Section */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <div className="aspect-[3/2] overflow-hidden border-3 border-brutal-border">
          <img
            src="/images/adam-headshot.jpg"
            alt="Adam Wolcott Smith — Creative Technical Director and Fabricator based in Brooklyn, NY"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* CV — Headline */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <h2 className="mb-4 text-2xl font-bold uppercase">CV</h2>
        <p className="mb-2 text-lg font-bold">{cv.headline}</p>
        <p className="leading-relaxed text-brutal-muted">{cv.summary}</p>
      </section>

      {/* CV — Experience */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {cv.experience.map((role) => (
            <div key={`${role.company}-${role.period}`}>
              {/* Role title and company */}
              <h3 className="text-lg font-bold">{role.title}</h3>
              <p className="mb-4 text-brutal-muted">
                {role.company} — {role.location} | {role.period}
                {role.type && (
                  <span className="ml-2 text-xs uppercase">({role.type})</span>
                )}
              </p>

              {/* Highlights as bullet points */}
              <ul className="space-y-3">
                {role.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="border-l-3 border-brutal-border pl-4 text-sm leading-relaxed"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CV — Skills */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
          SKILLS & EXPERTISE
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {cv.skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
                {group.category}
              </h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CV — Key Projects */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
          KEY PROJECTS
        </h2>
        <ul className="space-y-3">
          {cv.keyProjects.map((project) => (
            <li
              key={project}
              className="border-l-3 border-brutal-border pl-4 text-sm"
            >
              {project}
            </li>
          ))}
        </ul>
      </section>

      {/* CV — Education */}
      <section className="mb-16 border-t-3 border-brutal-border pt-8">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
          EDUCATION & CERTIFICATIONS
        </h2>
        {cv.education.map((edu) => (
          <div key={edu.title}>
            <p className="font-bold">{edu.title}</p>
            <p className="text-brutal-muted">
              {edu.institution} | {edu.period}
            </p>
            {edu.details && (
              <p className="mt-2 text-sm leading-relaxed">{edu.details}</p>
            )}
          </div>
        ))}
      </section>

      {/* Resume Download — kept as fallback for recruiters who want a PDF */}
      <section>
        <a
          href="/Adam Wolcott Smith Resume 2025.pdf"
          download
          className="inline-block border-3 border-brutal-border px-8 py-4 font-bold uppercase tracking-wide transition-colors hover:bg-brutal-text hover:text-brutal-bg"
        >
          DOWNLOAD RESUME [PDF]
        </a>
      </section>
    </div>
  );
};

export default About;

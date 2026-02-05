import { useSEO } from '../hooks/useSEO';

const About = () => {
	// Set SEO metadata for About page
	useSEO({
		title: 'About — Adam Wolcott Smith',
		description:
			'Brooklyn-based Creative Technical Director & Fabricator with expertise in CNC, AutoCAD, SketchUp, and materials. Specializing in corporate events, film/TV production, and art installations.',
		keywords: [
			'about',
			'bio',
			'technical director',
			'fabricator',
			'CNC',
			'AutoCAD',
			'SketchUp',
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

			{/* Skills Section */}
			<section className="mb-16 border-t-3 border-brutal-border pt-8">
				<h2 className="mb-6 text-2xl font-bold uppercase">
					SKILLS & EXPERTISE
				</h2>

				<div className="grid gap-8 md:grid-cols-2">
					{/* Technical Skills */}
					<div>
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
							TECHNICAL
						</h3>
						<ul className="space-y-2">
							<li>CNC Programming & Operation</li>
							<li>AutoCAD</li>
							<li>SketchUp</li>
							<li>3D Modeling</li>
							<li>Technical Drawings</li>
						</ul>
					</div>

					{/* Materials & Fabrication */}
					<div>
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
							MATERIALS & FABRICATION
						</h3>
						<ul className="space-y-2">
							<li>Metal Fabrication</li>
							<li>Woodworking</li>
							<li>Composite Materials</li>
							<li>Kinetic Sculptures</li>
							<li>Large-Scale Installations</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Photo Section */}
			<section className="mb-16 border-t-3 border-brutal-border pt-8">
				<div className="aspect-[3/2] overflow-hidden border-3 border-brutal-border">
					{/* TODO: Add your photo */}
					<div className="flex h-full items-center justify-center text-brutal-muted">
						[PHOTO]
					</div>
				</div>
			</section>

			{/* Resume Download */}
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

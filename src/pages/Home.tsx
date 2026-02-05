import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { getFeaturedProjects } from '../data/projects';

const Home = () => {
	// Set SEO metadata for the homepage
	useSEO({
		title: 'Adam Wolcott Smith — Creative Technical Director & Fabricator',
		description:
			'From concept to build. Portfolio of corporate event fabrication, film/TV production design, and art installations. Brooklyn-based technical director specializing in CNC, AutoCAD, and materials expertise.',
		keywords: [
			'fabrication',
			'technical director',
			'production design',
			'CNC',
			'AutoCAD',
			'corporate events',
			'film production',
		],
	});

	// Get all featured projects to display
	const projects = getFeaturedProjects();

	return (
		<div>
			{/* Hero Section - 3px bottom border */}
			<section className="border-b-3 border-brutal-border">
				<div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
					{/* Main headline - bold uppercase, tight leading */}
					<h1 className="mb-6 text-5xl font-bold uppercase leading-none md:text-6xl lg:text-7xl">
						FROM CONCEPT TO BUILD
					</h1>

					{/* Subheadline - muted color, regular weight */}
					<p className="max-w-2xl text-lg text-brutal-muted md:text-xl">
						Creative Technical Director & Fabricator moving fluidly between
						corporate events and film/TV production design.
					</p>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
				<h2 className="sr-only">Selected Projects</h2>

				{/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Link
							key={project.id}
							to={`/project/${project.id}`}
							className="group"
						>
							{/* Project Card - 3px border, hover highlights border */}
							<article className="border-3 border-brutal-border transition-colors hover:border-brutal-text">
								{/* Image container - no padding, fills card top */}
								<div className="aspect-[4/3] overflow-hidden">
									<img
										src={project.heroImage}
										alt={`${project.title} - ${project.summary}`}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>

								{/* Project info - padded inside card */}
								<div className="p-4">
									<h3 className="mb-2 text-xl font-bold uppercase">
										{project.title}
									</h3>
									<p className="mb-1 text-sm uppercase tracking-wide text-brutal-muted">
										{project.client} • {project.year}
									</p>
									<p className="text-brutal-muted">{project.summary}</p>
								</div>
							</article>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;

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
			{/* Hero Section */}
			<section className='border-b border-black dark:border-white'>
				<div className='mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24'>
					{/* Main headline */}
					<h1 className='mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl'>
						From Concept to Build
					</h1>

					{/* Subheadline/one-liner */}
					<p className='max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl'>
						Creative Technical Director & Fabricator moving fluidly between
						corporate events and film/TV production design.
					</p>
				</div>
			</section>

			{/* Projects Grid */}
			<section className='mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24'>
				<h2 className='sr-only'>Selected Projects</h2>

				{/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{projects.map((project) => (
						<Link
							key={project.id}
							to={`/project/${project.id}`}
							className='group'
						>
							{/* Project Card */}
							<article>
								{/* Image container with aspect ratio */}
								<div className='mb-4 aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900'>
									<img
										src={project.heroImage}
										alt={`${project.title} - ${project.summary}`}
										className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
									/>
								</div>

								{/* Project info */}
								<h3 className='mb-2 text-xl font-bold'>{project.title}</h3>
								<p className='mb-1 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400'>
									{project.client} • {project.year}
								</p>
								<p className='text-gray-700 dark:text-gray-300'>
									{project.summary}
								</p>
							</article>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;

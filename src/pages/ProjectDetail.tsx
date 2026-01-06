import { useParams, Link, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
	// Get the project ID from the URL
	// useParams is a React Router hook that gives us URL parameters
	const { id } = useParams<{ id: string }>();

	// Fetch the project data based on the ID
	const project = id ? getProjectById(id) : undefined;

	// If project doesn't exist, redirect to homepage
	if (!project) {
		return <Navigate to='/' replace />;
	}

	// Set SEO metadata for this project
	useSEO({
		title: `${project.title} — Adam Wolcott Smith`,
		description: project.summary,
		keywords: [project.title, project.client, project.category, 'fabrication'],
		ogImage: project.heroImage,
	});

	return (
		<div>
			{/* Hero Image Section */}
			<section className='border-b border-black dark:border-white'>
				<div className='aspect-[21/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-900'>
					<img
						src={project.heroImage}
						alt={`${project.title} hero image`}
						className='h-full w-full object-cover'
					/>
				</div>
			</section>

			{/* Project Info */}
			<article className='mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24'>
				{/* Back link */}
				<Link
					to='/'
					className='mb-8 inline-block text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-60'
				>
					← Back to Work
				</Link>

				{/* Project Header */}
				<header className='mb-12 border-b border-gray-200 pb-8 dark:border-gray-800'>
					<h1 className='mb-4 text-4xl font-bold md:text-5xl'>
						{project.title}
					</h1>

					{/* Metadata */}
					<div className='space-y-2 text-gray-600 dark:text-gray-400'>
						<p>
							<span className='font-semibold'>Client:</span> {project.client}
						</p>
						<p>
							<span className='font-semibold'>Year:</span> {project.year}
						</p>
						<p>
							<span className='font-semibold'>Role:</span> {project.role}
						</p>
					</div>
				</header>

				{/* Project Description/Narrative */}
				<section className='prose prose-lg dark:prose-invert mb-16 max-w-none'>
					<p className='text-xl leading-relaxed'>{project.description}</p>
				</section>

				{/* Credits (if any) */}
				{project.credits && project.credits.length > 0 && (
					<section className='mb-16'>
						<h2 className='mb-4 text-2xl font-bold'>Credits</h2>
						<ul className='space-y-2'>
							{project.credits.map((credit, index) => (
								<li key={index} className='text-gray-700 dark:text-gray-300'>
									<span className='font-semibold'>{credit.role}:</span>{' '}
									{credit.name}
								</li>
							))}
						</ul>
					</section>
				)}

				{/* Image Gallery */}
				<section>
					<h2 className='mb-8 text-2xl font-bold'>Gallery</h2>
					<div className='grid gap-8 md:gap-12'>
						{project.images.map((image, index) => (
							<div
								key={index}
								className='overflow-hidden bg-gray-100 dark:bg-gray-900'
							>
								<img
									src={image}
									alt={`${project.title} image ${index + 1}`}
									className='w-full'
									loading='lazy'
								/>
							</div>
						))}
					</div>
				</section>
			</article>
		</div>
	);
};

export default ProjectDetail;

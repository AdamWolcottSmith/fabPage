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
		<div className='mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24'>
			{/* Page Header */}
			<h1 className='mb-12 text-4xl font-bold md:text-5xl'>About</h1>

			{/* Bio Section */}
			<section className='mb-16'>
				<div className='prose prose-lg dark:prose-invert max-w-none'>
					<p className='text-xl leading-relaxed'>
						TODO: Add your bio here. This should be 2-3 paragraphs covering:
					</p>
					<ul>
						<li>Your background and how you got into fabrication</li>
						<li>Your creative philosophy or approach to work</li>
						<li>What drives you / your aesthetic voice</li>
						<li>What makes you unique in your field</li>
					</ul>
				</div>
			</section>

			{/* Skills Section */}
			<section className='mb-16'>
				<h2 className='mb-6 text-2xl font-bold'>Skills & Expertise</h2>

				<div className='grid gap-8 md:grid-cols-2'>
					{/* Technical Skills */}
					<div>
						<h3 className='mb-4 text-lg font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400'>
							Technical
						</h3>
						<ul className='space-y-2'>
							<li>CNC Programming & Operation</li>
							<li>AutoCAD</li>
							<li>SketchUp</li>
							<li>3D Modeling</li>
							<li>Technical Drawings</li>
						</ul>
					</div>

					{/* Materials & Fabrication */}
					<div>
						<h3 className='mb-4 text-lg font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400'>
							Materials & Fabrication
						</h3>
						<ul className='space-y-2'>
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
			<section className='mb-16'>
				<div className='aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-900'>
					{/* TODO: Add your photo */}
					<div className='flex h-full items-center justify-center text-gray-400'>
						Photo placeholder - Add your photo here
					</div>
				</div>
			</section>

			{/* Resume Download */}
			<section>
				<a
					href='/Adam Wolcott Smith Resume 2025.pdf'
					download
					className='inline-block border border-black px-8 py-4 font-medium uppercase tracking-wide transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
				>
					Download Resume (PDF)
				</a>
			</section>
		</div>
	);
};

export default About;

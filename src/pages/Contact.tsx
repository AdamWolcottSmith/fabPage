import { useSEO } from '../hooks/useSEO';

const Contact = () => {
	// Set SEO metadata for Contact page
	useSEO({
		title: 'Contact — Adam Wolcott Smith',
		description:
			'Get in touch with Adam Wolcott Smith for fabrication, technical direction, and production design projects. Based in Brooklyn, NY.',
		keywords: ['contact', 'hire', 'collaborate', 'Brooklyn'],
	});

	return (
		<div className='mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24'>
			{/* Page Header */}
			<h1 className='mb-12 text-4xl font-bold md:text-5xl'>Contact</h1>

			{/* Contact Info */}
			<section className='mb-16'>
				<div className='space-y-8'>
					{/* Intro text */}
					<p className='text-xl leading-relaxed'>
						Interested in collaborating? Let's discuss your project.
					</p>

					{/* Contact details */}
					<div className='space-y-4'>
						{/* Email */}
						<div>
							<h2 className='mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400'>
								Email
							</h2>
							<a
								href='mailto:adam@example.com'
								className='text-2xl font-medium transition-opacity hover:opacity-60'
							>
								adam@example.com {/* TODO: Update with real email */}
							</a>
						</div>

						{/* LinkedIn */}
						<div>
							<h2 className='mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400'>
								LinkedIn
							</h2>
							<a
								href='https://linkedin.com/in/adamwolcottsmith'
								target='_blank'
								rel='noopener noreferrer'
								className='text-2xl font-medium transition-opacity hover:opacity-60'
							>
								linkedin.com/in/adamwolcottsmith {/* TODO: Update with real LinkedIn */}
							</a>
						</div>

						{/* Location */}
						<div>
							<h2 className='mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400'>
								Location
							</h2>
							<p className='text-2xl font-medium'>Brooklyn, NY</p>
						</div>
					</div>
				</div>
			</section>

			{/* Optional: Availability status */}
			<section className='border-t border-black pt-8 dark:border-white'>
				<p className='text-gray-600 dark:text-gray-400'>
					Currently available for new projects and collaborations.
				</p>
			</section>
		</div>
	);
};

export default Contact;

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
		<div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
			{/* Page Header */}
			<h1 className="mb-12 text-4xl font-bold uppercase md:text-5xl">
				CONTACT
			</h1>

			{/* Contact Info */}
			<section className="mb-16">
				<div className="space-y-8">
					{/* Intro text */}
					<p className="text-xl leading-relaxed">
						Interested in collaborating? Let's discuss your project.
					</p>

					{/* Contact details */}
					<div className="space-y-6">
						{/* Email */}
						<div>
							<h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
								EMAIL
							</h2>
							<a
								href="mailto:adamwolcottsmith@gmail.com"
								className="text-2xl font-medium underline decoration-2 underline-offset-4 hover:text-brutal-muted"
							>
								adamwolcottsmith@gmail.com
							</a>
						</div>

						{/* LinkedIn */}
						<div>
							<h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
								LINKEDIN
							</h2>
							<a
								href="https://linkedin.com/in/adamwolcottsmith"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl font-medium underline decoration-2 underline-offset-4 hover:text-brutal-muted"
							>
								linkedin.com/in/adamwolcottsmith
							</a>
						</div>

						{/* Location */}
						<div>
							<h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
								LOCATION
							</h2>
							<p className="text-2xl font-medium">Brooklyn, NY</p>
						</div>
					</div>
				</div>
			</section>

			{/* Other Links */}
			<section className="mb-16 border-t-3 border-brutal-border pt-8">
				<h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-brutal-muted">
					OTHER LINKS
				</h2>
				<div className="space-y-4">
					<div>
						<a
							href="https://itsnova.com/adamwolcottsmith"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl font-medium underline decoration-2 underline-offset-4 hover:text-brutal-muted"
						>
							itsnova.com/adamwolcottsmith
						</a>
					</div>
					<div>
						<a
							href="https://www.trillmordent.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl font-medium underline decoration-2 underline-offset-4 hover:text-brutal-muted"
						>
							trillmordent.com
						</a>
					</div>
				</div>
			</section>

			{/* Availability status */}
			<section className="border-t-3 border-brutal-border pt-8">
				<p className="text-brutal-muted">
					Currently available for new projects and collaborations.
				</p>
			</section>
		</div>
	);
};

export default Contact;

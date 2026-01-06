import { useSEO } from '../hooks/useSEO';

const Blog = () => {
	// Set SEO metadata for Blog page
	useSEO({
		title: 'Blog & Updates — Adam Wolcott Smith',
		description:
			'Latest updates, project announcements, and insights from Adam Wolcott Smith on fabrication, technical direction, and production design.',
		keywords: ['blog', 'updates', 'news', 'announcements'],
	});

	return (
		<div className='mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24'>
			{/* Page Header */}
			<h1 className='mb-12 text-4xl font-bold md:text-5xl'>
				Blog & Updates
			</h1>

			{/* Intro */}
			<section className='mb-16'>
				<p className='text-xl leading-relaxed text-gray-600 dark:text-gray-400'>
					Project announcements, process insights, and occasional tutorials.
				</p>
			</section>

			{/* Blog Posts List */}
			<section>
				{/* Placeholder for future blog posts */}
				{/* When you add blog posts, they'll be listed here similar to projects */}
				<div className='space-y-12'>
					{/* Example blog post structure (commented out) */}
					{/*
					<article className="border-b border-gray-200 dark:border-gray-800 pb-12">
						<time className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
							January 3, 2025
						</time>
						<h2 className="text-2xl font-bold mt-2 mb-4">
							<a href="/blog/post-slug" className="hover:opacity-60 transition-opacity">
								Blog Post Title
							</a>
						</h2>
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							Brief excerpt or summary of the blog post...
						</p>
						<a href="/blog/post-slug" className="font-medium uppercase text-sm tracking-wide hover:opacity-60 transition-opacity">
							Read More →
						</a>
					</article>
					*/}

					{/* Temporary empty state */}
					<div className='py-16 text-center text-gray-600 dark:text-gray-400'>
						<p>No posts yet. Check back soon for updates!</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='border-t border-black dark:border-white'>
			{/* Container with padding */}
			<div className='mx-auto max-w-7xl px-4 py-8 md:px-8'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					{/* Copyright and location */}
					<div className='text-sm text-gray-600 dark:text-gray-400'>
						<p>© {currentYear} Adam Wolcott Smith</p>
						<p>Brooklyn, NY</p>
					</div>

					{/* Social/Contact Links */}
					<div className='flex gap-6'>
						<a
							href='mailto:adam@example.com' // TODO: Update with real email
							className='text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-60'
							aria-label='Email Adam Wolcott Smith'
						>
							Email
						</a>
						<a
							href='https://linkedin.com/in/adamwolcottsmith' // TODO: Update with real LinkedIn
							target='_blank'
							rel='noopener noreferrer'
							className='text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-60'
							aria-label='LinkedIn Profile'
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

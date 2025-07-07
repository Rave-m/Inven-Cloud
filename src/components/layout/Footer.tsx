const Footer = () => {
	return (
		<footer className='bg-slate-800 text-white'>
			{/* Main Footer Content */}
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Address Column */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white border-b border-gray-600 pb-2'>
							Address
						</h3>
						<div className='text-gray-300 space-y-2'>
							<p>berdiri di Yogyakarta</p>
							<p>pada Agustus 2022.</p>
							<p>Dengan tagline</p>
						</div>
					</div>

					{/* Help & Advice Column */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white border-b border-gray-600 pb-2'>
							Help & Advice
						</h3>
						<div className='space-y-3'>
							<a
								href='#support'
								className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-200'
							>
								Customer Support
							</a>
							<a
								href='#terms'
								className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-200'
							>
								Team & Condition
							</a>
							<a
								href='#privacy'
								className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-200'
							>
								Privacy Policy
							</a>
						</div>
					</div>

					{/* Company Column */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white border-b border-gray-600 pb-2'>
							Company
						</h3>
						<div className='space-y-3'>
							<a
								href='#about'
								className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-200'
							>
								About Us
							</a>
							<a
								href='#pricing'
								className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-200'
							>
								Pricing
							</a>
						</div>
					</div>

					{/* Get In Touch Column */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold text-white border-b border-gray-600 pb-2'>
							Get In Touch
						</h3>
						<div className='space-y-3'>
							<p className='text-gray-300'>Feel Free To Get In Touch</p>
							<a
								href='mailto:ivenCloud@gmail.com'
								className='block text-[#48A9C5] hover:text-[#60B2D5] transition-colors duration-200'
							>
								ivenCloud@gmail.com
							</a>
							<div className='flex space-x-3 mt-4'>
								<a
									href='#facebook'
									className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#48A9C5] transition-colors duration-200 group'
									aria-label='Facebook'
								>
									<svg
										className='w-4 h-4 text-gray-300 group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
									</svg>
								</a>
								<a
									href='#twitter'
									className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#48A9C5] transition-colors duration-200 group'
									aria-label='Twitter'
								>
									<svg
										className='w-4 h-4 text-gray-300 group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
									</svg>
								</a>
								<a
									href='#instagram'
									className='w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#48A9C5] transition-colors duration-200 group'
									aria-label='Instagram'
								>
									<svg
										className='w-4 h-4 text-gray-300 group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.148-1.289S4.165 13.9 4.165 12.603s.436-2.297 1.136-3.096s1.851-1.146 3.148-1.146s2.297.436 3.096 1.136s1.146 1.851 1.146 3.148-.347 2.448-1.146 3.148S9.746 16.988 8.449 16.988z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='border-t border-gray-700'>
				<div className='container mx-auto px-4 py-4'>
					<div className='text-center text-gray-400 text-sm'>
						<p>2025 © Copyright by IvenCloud</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

const Home = () => {
	return (
		<section
			id='home'
			className='min-h-screen bg-gray-200 flex items-center justify-center px-4 py-16'
		>
			<div className='max-w-7xl mx-auto w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Side - Geometric Shapes */}
					<div className='flex justify-center lg:justify-start'>
						<div className='relative w-80 h-80 md:w-96 md:h-96'>
							{/* Main Circle with Logo */}
							<div className='absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-lg overflow-hidden'>
								<img
									src='./logo.jpg'
									alt='Logo'
									className='w-full h-full object-cover rounded-full'
								/>
							</div>
						</div>
					</div>

					{/* Right Side - Content */}
					<div className='text-center lg:text-left space-y-6'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
							Kelola Inventaris
							<br />
							<span className='relative'>
								Dengan Mudah
								{/* Yellow underline accent */}
								<div className='absolute bottom-1 left-0 lg:left-0 right-0 lg:right-auto lg:w-48 h-3 bg-yellow-400 opacity-80 -z-10'></div>
							</span>
						</h1>

						<p className='text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed'>
							Solusi terbaik untuk mengelola inventaris bisnis Anda dengan mudah, efisien, dan
							terpercaya. Tingkatkan produktivitas dengan sistem yang dirancang khusus untuk
							kebutuhan modern.
						</p>

						<div className='pt-4'>
							<button className='bg-[#48A9C5] cursor-pointer hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto lg:mx-0'>
								Coba 7 Hari
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;

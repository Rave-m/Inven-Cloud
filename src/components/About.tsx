const About = () => {
	return (
		<section id='about' className='bg-[#2D2A35] py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Side - Image */}
					<div className='order-2 lg:order-1 flex justify-center lg:justify-start'>
						<div className='relative max-w-md w-full'>
							<div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
								<img
									src='./tentangKita.jpg'
									alt='Tentang Kita'
									className='w-full h-64 md:h-80 lg:h-96 object-cover'
								/>
							</div>
							{/* Decorative element */}
							<div className='absolute -bottom-4 -right-4 w-24 h-24 bg-[#48A9C5] cursor-pointer rounded-2xl opacity-20 -z-10'></div>
							<div className='absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30 -z-10'></div>
						</div>
					</div>

					{/* Right Side - Content */}
					<div className='order-1 lg:order-2 text-center lg:text-left space-y-6'>
						<div>
							<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6'>
								Manfaat untuk
								<br />
								<span className='relative'>
									UMKM
									{/* Blue underline accent */}
									<div className='absolute bottom-1 left-0 lg:left-0 right-0 lg:right-auto lg:w-32 h-3 bg-blue-400 opacity-80 -z-10'></div>
								</span>
							</h2>
						</div>

						<p className='text-lg md:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8'>
							Sistem inventaris yang dirancang khusus untuk kebutuhan UMKM Indonesia. Tingkatkan
							efisiensi bisnis Anda dengan solusi yang terjangkau dan mudah digunakan.
						</p>

						{/* Benefits List */}
						<div className='space-y-4'>
							<div className='flex items-start justify-center lg:justify-start'>
								<div className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4'>
									<svg
										className='w-4 h-4 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-white mb-1'>Pengelolaan Stok Otomatis</h4>
									<p className='text-gray-400'>
										Monitor stok barang secara real-time dan dapatkan notifikasi otomatis.
									</p>
								</div>
							</div>

							<div className='flex items-start justify-center lg:justify-start'>
								<div className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4'>
									<svg
										className='w-4 h-4 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-white mb-1'>Laporan Keuangan Lengkap</h4>
									<p className='text-gray-400'>
										Analisis penjualan dan profit dengan laporan yang mudah dipahami.
									</p>
								</div>
							</div>

							<div className='flex items-start justify-center lg:justify-start'>
								<div className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4'>
									<svg
										className='w-4 h-4 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<div className='text-left'>
									<h4 className='font-semibold text-white mb-1'>Akses Multi-Device</h4>
									<p className='text-gray-400'>
										Kelola inventaris dari mana saja menggunakan smartphone atau komputer.
									</p>
								</div>
							</div>
						</div>

						{/* CTA Button */}
						<div className='pt-6'>
							<button className='bg-[#48A9C5] cursor-pointer hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto lg:mx-0'>
								Pelajari Lebih Lanjut
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

export default About;

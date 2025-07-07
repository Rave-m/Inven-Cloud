const Center = () => {
	return (
		<section id='centers' className='bg-gray-800 text-white py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Side - Contact Information */}
					<div className='space-y-8'>
						{/* Header */}
						<div>
							<h3 className='text-lg md:text-xl font-medium text-gray-300 mb-2'>Centers</h3>
							<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
								Want to Visit Us
							</h2>
						</div>

						{/* Description */}
						<p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg'>
							Kunjungi kantor pusat kami di Jakarta untuk konsultasi langsung dan demo sistem
							inventaris. Tim ahli kami siap membantu mengoptimalkan bisnis Anda.
						</p>

						{/* Contact Information */}
						<div className='space-y-6'>
							{/* Email */}
							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0 w-12 h-12 bg-[#48A9C5] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-white mb-1'>Email</h4>
									<a
										href='mailto:ivenCloud@gmail.com'
										className='text-gray-300 hover:text-[#48A9C5] transition-colors duration-300'
									>
										ivenCloud@gmail.com
									</a>
								</div>
							</div>

							{/* Phone */}
							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0 w-12 h-12 bg-[#48A9C5] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-white mb-1'>Telepon</h4>
									<div className='space-y-1'>
										<a
											href='tel:+6287527972131'
											className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-300'
										>
											+62 875 279 7213 1
										</a>
										<a
											href='tel:+628752797213'
											className='block text-gray-300 hover:text-[#48A9C5] transition-colors duration-300'
										>
											+62 875 279 7213
										</a>
									</div>
								</div>
							</div>

							{/* Address */}
							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0 w-12 h-12 bg-[#48A9C5] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-white mb-1'>Alamat</h4>
									<p className='text-gray-300 leading-relaxed'>
										Jl. Sudirman No. 123, Jakarta Pusat
										<br />
										DKI Jakarta 10220, Indonesia
									</p>
								</div>
							</div>

							{/* Operating Hours */}
							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0 w-12 h-12 bg-[#48A9C5] rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div>
									<h4 className='font-semibold text-white mb-1'>Jam Operasional</h4>
									<div className='text-gray-300 space-y-1'>
										<p>Senin - Jumat: 09:00 - 18:00</p>
										<p>Sabtu: 09:00 - 15:00</p>
										<p>Minggu: Tutup</p>
									</div>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<button className='bg-[#48A9C5] hover:bg-[#3a8aa0] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7'
									/>
								</svg>
								View On Maps
							</button>
							<button className='border-2 border-[#48A9C5] text-[#48A9C5] hover:bg-[#48A9C5] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'>
								<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
								Buat Janji
							</button>
						</div>
					</div>

					{/* Right Side - Map */}
					<div className='order-first lg:order-last'>
						<div className='bg-gray-700 rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 lg:h-96'>
							{/* Google Maps Embed */}
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2813203598!2d106.73429784335936!3d-6.229386899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJl.%20Jenderal%20Sudirman%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1704707200000!5m2!1sen!2sus'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen={true}
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Office Location - Jl. Sudirman, Jakarta'
								className='w-full h-full'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Center;

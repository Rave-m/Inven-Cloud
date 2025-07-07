const Price = () => {
	return (
		<section id='price' className='bg-gray-200 py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						Harga / Paket Langganan
					</h2>
					<p className='text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed'>
						Pilih paket langganan yang sesuai dengan kebutuhan bisnis Anda. Semua paket dilengkapi
						dengan fitur lengkap dan dukungan penuh.
					</p>
				</div>

				{/* Pricing Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Basic Plan */}
					<div className='bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
						<div className='h-64 overflow-hidden'>
							<img src='./langganan.jpg' alt='Paket Basic' className='w-full h-full object-cover' />
						</div>
						<div className='p-8 text-white'>
							<h3 className='text-2xl font-bold mb-4 text-center'>Paket Basic</h3>
							<div className='text-center mb-6'>
								<span className='text-4xl font-bold'>Rp 199K</span>
								<span className='text-gray-300'>/bulan</span>
							</div>
							<ul className='space-y-3 mb-8'>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Hingga 1000 item
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									2 pengguna
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Laporan basic
								</li>
							</ul>
							<button className='cursor-pointer w-full bg-[#48A9C5] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300'>
								Pilih Paket
							</button>
						</div>
					</div>

					{/* Premium Plan - Most Popular */}
					<div className='bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative'>
						{/* Popular Badge */}
						<div className='absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-10'>
							Populer
						</div>
						<div className='h-64 overflow-hidden'>
							<img
								src='./langgananBulanan.jpg'
								alt='Paket Premium'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='p-8 text-white'>
							<h3 className='text-2xl font-bold mb-4 text-center'>Paket Premium</h3>
							<div className='text-center mb-6'>
								<span className='text-4xl font-bold'>Rp 399K</span>
								<span className='text-gray-300'>/bulan</span>
							</div>
							<ul className='space-y-3 mb-8'>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Hingga 10K item
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									10 pengguna
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Laporan lengkap
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Support prioritas
								</li>
							</ul>
							<button className='cursor-pointer w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-300'>
								Pilih Paket
							</button>
						</div>
					</div>

					{/* Enterprise Plan */}
					<div className='bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
						<div className='h-64 overflow-hidden'>
							<img
								src='./langganan.jpg'
								alt='Paket Enterprise'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='p-8 text-white'>
							<h3 className='text-2xl font-bold mb-4 text-center'>Paket Enterprise</h3>
							<div className='text-center mb-6'>
								<span className='text-4xl font-bold'>Rp 799K</span>
								<span className='text-gray-300'>/bulan</span>
							</div>
							<ul className='space-y-3 mb-8'>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Item unlimited
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Pengguna unlimited
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Analytics advanced
								</li>
								<li className='flex items-center'>
									<svg
										className='w-5 h-5 text-green-400 mr-3'
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
									Support 24/7
								</li>
							</ul>
							<button className='cursor-pointer w-full bg-[#48A9C5] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300'>
								Pilih Paket
							</button>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div className='text-center mt-12'>
					<p className='text-gray-600 mb-4'>Butuh paket khusus untuk perusahaan besar?</p>
					<button className='cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300'>
						Hubungi Sales
					</button>
				</div>
			</div>
		</section>
	);
};
export default Price;

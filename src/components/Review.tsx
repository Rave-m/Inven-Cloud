const Review = () => {
	const reviews = [
		{
			id: 1,
			name: 'Budi Santoso',
			business: 'Toko Elektronik Maju',
			rating: 5,
			comment:
				'Sangat membantu dalam mengelola stok barang. Sekarang saya tidak pernah kehabisan stok lagi!',
			avatar: 'BS',
		},
		{
			id: 2,
			name: 'Siti Rahayu',
			business: 'Warung Sembako Berkah',
			rating: 5,
			comment:
				'Interface yang mudah dipahami dan laporan yang sangat detail. Recommended untuk UMKM!',
			avatar: 'SR',
		},
		{
			id: 3,
			name: 'Ahmad Fauzi',
			business: 'Bengkel Motor Jaya',
			rating: 4,
			comment: 'Fitur tracking spare part sangat membantu. Customer service juga responsif.',
			avatar: 'AF',
		},
	];

	const renderStars = (rating: number) => {
		return [...Array(5)].map((_, index) => (
			<svg
				key={index}
				className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
			</svg>
		));
	};

	return (
		<section id='review' className='bg-gray-200 py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						Apa Kata <span className='text-[#48A9C5]'>Pelanggan</span> Kami?
					</h2>
					<p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Ribuan UMKM telah merasakan manfaat nyata dari sistem inventaris kami. Dengarkan
						pengalaman mereka dan bergabunglah dengan komunitas yang terus berkembang.
					</p>
				</div>

				{/* Reviews Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
					{reviews.map((review) => (
						<div
							key={review.id}
							className='bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
						>
							{/* Rating Stars */}
							<div className='flex items-center mb-4'>{renderStars(review.rating)}</div>

							{/* Review Text */}
							<p className='text-gray-700 mb-6 leading-relaxed italic'>"{review.comment}"</p>

							{/* Reviewer Info */}
							<div className='flex items-center'>
								<div className='w-12 h-12 bg-[#48A9C5] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4'>
									{review.avatar}
								</div>
								<div>
									<h4 className='font-semibold text-gray-900'>{review.name}</h4>
									<p className='text-sm text-gray-600'>{review.business}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className='bg-gradient-to-r from-[#48A9C5] to-blue-600 rounded-3xl p-8 md:p-12 text-white'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
						<div className='space-y-2'>
							<div className='text-3xl md:text-4xl font-bold'>1000+</div>
							<div className='text-blue-100'>UMKM Terdaftar</div>
						</div>
						<div className='space-y-2'>
							<div className='text-3xl md:text-4xl font-bold'>4.8/5</div>
							<div className='text-blue-100'>Rating Kepuasan</div>
						</div>
						<div className='space-y-2'>
							<div className='text-3xl md:text-4xl font-bold'>24/7</div>
							<div className='text-blue-100'>Customer Support</div>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className='text-center mt-12'>
					<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
						Siap Bergabung dengan Mereka?
					</h3>
					<p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
						Mulai transformasi digital bisnis Anda hari ini dan rasakan peningkatan efisiensi yang
						signifikan.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button className='cursor-pointer bg-[#48A9C5] hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto'>
							Mulai Gratis Sekarang
						</button>
						<button className='cursor-pointer border-2 border-gray-300 hover:border-[#48A9C5] text-gray-700 hover:text-[#48A9C5] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 w-full sm:w-auto'>
							Lihat Demo
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Review;

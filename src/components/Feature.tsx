const Feature = () => {
	return (
		<section id='feature' className='bg-[#2D2A35] text-white py-16 px-4'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>Fitur Utama</h2>
					<p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
						Kelola inventaris dengan fitur-fitur canggih yang dirancang khusus untuk meningkatkan
						efisiensi dan akurasi bisnis Anda.
					</p>
				</div>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Feature 1 - Pelacakan Stok */}
					<div className='text-center group'>
						<div className='bg-gray-700 rounded-2xl w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300'>
							<svg
								className='w-12 h-12 md:w-14 md:h-14 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 5l3-3 3 3'
								/>
							</svg>
						</div>
						<h3 className='text-xl md:text-2xl font-bold mb-4'>Pelacakan Stok</h3>
						<p className='text-gray-300 leading-relaxed max-w-sm mx-auto'>
							Monitor stok barang secara real-time dengan sistem pelacakan yang akurat dan mudah
							digunakan.
						</p>
					</div>

					{/* Feature 2 - Laporan Otomatis */}
					<div className='text-center group'>
						<div className='bg-gray-700 rounded-2xl w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300'>
							<svg
								className='w-12 h-12 md:w-14 md:h-14 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
								/>
							</svg>
						</div>
						<h3 className='text-xl md:text-2xl font-bold mb-4'>Laporan Otomatis</h3>
						<p className='text-gray-300 leading-relaxed max-w-sm mx-auto'>
							Dapatkan laporan inventaris yang detail dan akurat secara otomatis untuk analisis
							bisnis yang lebih baik.
						</p>
					</div>

					{/* Feature 3 - Riwayat Transaksi */}
					<div className='text-center group'>
						<div className='bg-gray-700 rounded-2xl w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300'>
							<svg
								className='w-12 h-12 md:w-14 md:h-14 text-white'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
						<h3 className='text-xl md:text-2xl font-bold mb-4'>Riwayat Transaksi</h3>
						<p className='text-gray-300 leading-relaxed max-w-sm mx-auto'>
							Lacak semua transaksi masuk dan keluar dengan catatan lengkap untuk transparansi
							maksimal.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;

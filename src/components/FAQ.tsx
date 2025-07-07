import { useState } from 'react';

// Simple SVG Icons
const ChevronDownIcon = ({ className }: { className?: string }) => (
	<svg className={className || 'w-5 h-5'} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
		<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
	</svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
	<svg className={className || 'w-5 h-5'} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
		<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
	</svg>
);

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const faqs = [
		{
			question: 'Apa itu ivenCloud?',
			answer:
				'ivenCloud adalah sistem manajemen inventaris berbasis cloud yang membantu UMKM mengelola stok, mencatat transaksi, dan menganalisis bisnis mereka dengan mudah dan efisien.',
		},
		{
			question: 'Bagaimana cara memulai menggunakan ivenCloud?',
			answer:
				'Anda dapat memulai dengan mendaftar akun gratis, kemudian mengikuti panduan setup untuk mengatur inventaris dan produk Anda. Tim support kami siap membantu proses onboarding.',
		},
		{
			question: 'Apakah data saya aman di ivenCloud?',
			answer:
				'Ya, keamanan data adalah prioritas utama kami. Semua data dienkripsi dengan standar SSL 256-bit dan disimpan di server yang aman dengan backup otomatis setiap hari.',
		},
		{
			question: 'Bisakah saya mengakses ivenCloud dari smartphone?',
			answer:
				'Tentu saja! ivenCloud dapat diakses dari browser smartphone atau tablet. Kami juga sedang mengembangkan aplikasi mobile yang akan segera tersedia.',
		},
		{
			question: 'Bagaimana sistem pembayaran di ivenCloud?',
			answer:
				'Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet, dan kartu kredit. Pembayaran dilakukan secara bulanan atau tahunan sesuai paket yang dipilih.',
		},
		{
			question: 'Apakah ada batasan jumlah produk yang bisa dikelola?',
			answer:
				'Tidak ada batasan jumlah produk pada paket berbayar. Paket gratis memiliki batasan 100 produk, sementara paket Basic dan Premium tidak memiliki batasan.',
		},
	];

	return (
		<section id='faq' className='py-20 bg-gradient-to-br from-blue-50 to-cyan-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<div className='flex justify-center mb-6'>
						<img src='/FAQ.jpg' alt='FAQ' className='w-20 h-20 object-contain' />
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Frequently Asked Questions
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang ivenCloud
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='space-y-4'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden'
							>
								<button
									className='w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200'
									onClick={() => toggleFAQ(index)}
								>
									<h3 className='text-lg font-semibold text-gray-900 pr-4'>{faq.question}</h3>
									{openIndex === index ? (
										<ChevronUpIcon className='w-5 h-5 text-[#48A9C5] flex-shrink-0' />
									) : (
										<ChevronDownIcon className='w-5 h-5 text-gray-400 flex-shrink-0' />
									)}
								</button>
								{openIndex === index && (
									<div className='px-6 pb-5'>
										<div className='border-t border-gray-100 pt-4'>
											<p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* CTA Section */}
					<div className='text-center mt-12'>
						<div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>Masih Ada Pertanyaan?</h3>
							<p className='text-gray-600 mb-6'>
								Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<button className='cursor-pointer bg-[#48A9C5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg'>
									Hubungi Support
								</button>
								<button className='cursor-pointer border-2 border-[#48A9C5] text-[#48A9C5] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200'>
									Live Chat
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

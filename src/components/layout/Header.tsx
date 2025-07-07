import { useState } from 'react';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className='bg-gray-200 shadow-md px-4 py-3'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				{/* Logo */}
				<div className='flex items-center'>
					<img src='./logo.jpg' alt='Logo' className='w-10 h-10 rounded-full object-cover' />
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center'>
					<ul className='flex space-x-6'>
						<li>
							<a
								href='#home'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#about'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								About
							</a>
						</li>
						<li>
							<a
								href='#feature'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								Feature
							</a>
						</li>
						<li>
							<a
								href='#price'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								Price
							</a>
						</li>
						<li>
							<a
								href='#review'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								Review
							</a>
						</li>
						<li>
							<a
								href='#centers'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								Centers
							</a>
						</li>
						<li>
							<a
								href='#faq'
								className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200'
							>
								FAQ
							</a>
						</li>
					</ul>

					{/* Auth Buttons */}
					<div className='flex items-center space-x-3 ml-8'>
						<button className='text-gray-700 hover:text-[#48A9C5] font-medium transition-colors duration-200 px-4 py-2'>
							Login
						</button>
						<button className='bg-[#48A9C5] cursor-pointer hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200'>
							Sign Up
						</button>
					</div>
				</nav>

				{/* Mobile Menu Button */}
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-gray-700 hover:text-[#48A9C5] focus:outline-none focus:text-[#48A9C5]'
						aria-label='Toggle menu'
					>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							{isMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className='md:hidden mt-3 pb-3 border-t border-gray-200'>
					<nav className='px-2 pt-2'>
						<ul className='space-y-1'>
							<li>
								<a
									href='#home'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#about'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#feature'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									Feature
								</a>
							</li>
							<li>
								<a
									href='#price'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									Price
								</a>
							</li>
							<li>
								<a
									href='#review'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									Review
								</a>
							</li>
							<li>
								<a
									href='#centers'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									Centers
								</a>
							</li>
							<li>
								<a
									href='#faq'
									className='block px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}
								>
									FAQ
								</a>
							</li>
						</ul>

						{/* Mobile Auth Buttons */}
						<div className='mt-4 pt-4 border-t border-gray-200 space-y-2'>
							<button
								className='w-full text-left px-3 py-2 text-gray-700 hover:text-[#48A9C5] hover:bg-gray-50 rounded-md font-medium transition-colors duration-200'
								onClick={() => setIsMenuOpen(false)}
							>
								Login
							</button>
							<button
								className='w-full bg-[#48A9C5] cursor-pointer hover:bg-blue-700 text-white font-medium px-3 py-2 rounded-md transition-colors duration-200'
								onClick={() => setIsMenuOpen(false)}
							>
								Sign Up
							</button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
};
export default Header;

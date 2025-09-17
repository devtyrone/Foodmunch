import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';

const socialLinks = [
	{ icon: <FaFacebookF />, label: 'Facebook', href: '#', hover: 'hover:bg-[#1877F2] hover:text-white' },
	{ icon: <FaInstagram />, label: 'Instagram', href: '#', hover: 'hover:bg-[#FE2C55] hover:text-white' },
	{ icon: <FaTiktok />, label: 'TikTok', href: '#', hover: 'hover:bg-[#FE2C55] hover:text-white' },
	{ icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#', hover: 'hover:bg-[#0A66C2] hover:text-white' },
	{ icon: <RxTwitterLogo />, label: 'Twitter', href: '#', hover: 'hover:bg-[#000] hover:text-white' },
];

const Footer = () => (
	<footer className="bg-[#0a0b12] text-white pt-10 pb-6 px-4 sm:px-6">
		<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{/* Brand & Contact */}
			<div>
				<Link to="/" className="flex items-center mb-4" replace>
					<span className="text-xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent tracking-tight">
						FOODMUNCH
					</span>
				</Link>
				<div className="mb-4">
					<h3 className="font-semibold text-sm mb-2">Contact</h3>
					<p className="text-sm text-gray-400">
						greatezenewu@gmail.com<br />
						+234 903 702 3252
					</p>
				</div>
				<div>
					<h3 className="font-semibold text-sm mb-2">Follow Us</h3>
					<div className="flex gap-3">
						{socialLinks.map((item) => (
							<a
								key={item.label}
								href={item.href}
								aria-label={item.label}
								className={`w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#0a0b12] transition-colors duration-200 text-xl shadow ${item.hover}`}
							>
								{item.icon}
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Company Links */}
			<div>
				<h3 className="font-semibold text-sm mb-4">Company</h3>
				<ul className="space-y-2 text-sm">
					<li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition" aria-label="About Us">About Us</Link></li>
					<li><Link to="/careers" className="text-gray-400 hover:text-orange-500 transition" aria-label="Careers">Careers</Link></li>
					<li><Link to="/terms" className="text-gray-400 hover:text-orange-500 transition" aria-label="Terms of Service">Terms</Link></li>
					<li><Link to="/privacy" className="text-gray-400 hover:text-orange-500 transition" aria-label="Privacy Policy">Privacy Policy</Link></li>
				</ul>
			</div>

			{/* Support Links */}
			<div>
				<h3 className="font-semibold text-sm mb-4">Support</h3>
				<ul className="space-y-2 text-sm">
					<li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition" aria-label="Contact Us">Contact Us</Link></li>
					<li><Link to="/faqs" className="text-gray-400 hover:text-orange-500 transition" aria-label="FAQs">FAQs</Link></li>
					<li><Link to="/feedback" className="text-gray-400 hover:text-orange-500 transition" aria-label="Feedback">Feedback</Link></li>
					<li><Link to="/help" className="text-gray-400 hover:text-orange-500 transition" aria-label="Help Center">Help Center</Link></li>
				</ul>
			</div>

			{/* Restaurants & Locations */}
			<div>
				<h3 className="font-semibold text-sm mb-4">Explore</h3>
				<div className="grid grid-cols-1 gap-4">
					<div>
						<h4 className="font-semibold text-sm mb-2">Top Restaurants</h4>
						<ul className="space-y-2 text-sm">
							<li><Link to="/restaurants/0" className="text-gray-400 hover:text-orange-500 transition" aria-label="Tastee Fried Chicken">Tastee Fried Chicken</Link></li>
							<li><Link to="/restaurants/1" className="text-gray-400 hover:text-orange-500 transition" aria-label="Creamz Bakery & Lounge">Creamz Bakery & Lounge</Link></li>
							<li><Link to="/restaurants/2" className="text-gray-400 hover:text-orange-500 transition" aria-label="Ibadan Chinese Restaurant">Ibadan Chinese Restaurant</Link></li>
							<li><Link to="Restaurants" className="text-gray-400 hover:text-orange-500 transition font-medium" aria-label="View All Restaurants">View All</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold text-sm mb-2">Key Locations</h4>
						<ul className="space-y-2 text-sm">
							<li><Link to="/locations/oluyole" className="text-gray-400 hover:text-orange-500 transition" aria-label="Oluyole">Oluyole</Link></li>
							<li><Link to="/locations/surulere" className="text-gray-400 hover:text-orange-500 transition" aria-label="Surulere">Surulere</Link></li>
							<li><Link to="/locations/bodija" className="text-gray-400 hover:text-orange-500 transition" aria-label="Bodija">Bodija</Link></li>
							<li><Link to="/locations" className="text-gray-400 hover:text-orange-500 transition font-medium" aria-label="View All Locations">View All</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		{/* App Store Links */}
		<div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
			<div className="flex gap-3">
				<a href="#" className="" aria-label="Download on the App Store">
					<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-28 h-8 object-contain" />
				</a>
				<a href="#" className="" aria-label="Get it on Google Play">
					<img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-28 h-8 object-contain" />
				</a>
			</div>
			<p className="text-xs text-gray-400 text-center">
				© 2025 CoKitchen Workspace Limited. All rights reserved.
			</p>
		</div>
	</footer>
);

export default Footer;
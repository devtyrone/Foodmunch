/**
 * footer.jsx
 * Professional, multi-column footer inspired by the provided sample.
 * - Clear section groupings with headings
 * - Social links
 * - Responsive 5-column layout on large screens
 * - Bottom bar with copyright (left) and dark mode toggle (right)
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import DarkModeToggle from '../DarkModeToggle';

// Social links and hover color styles
const socialLinks = [
	{ icon: <FaFacebookF />, label: 'Facebook', href: '#', hover: 'hover:bg-[#1877F2] hover:text-white' },
	{ icon: <FaInstagram />, label: 'Instagram', href: '#', hover: 'hover:bg-[#FE2C55] hover:text-white' },
	{ icon: <FaTiktok />, label: 'TikTok', href: '#', hover: 'hover:bg-[#FE2C55] hover:text-white' },
	{ icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#', hover: 'hover:bg-[#0A66C2] hover:text-white' },
	{ icon: <RxTwitterLogo />, label: 'Twitter', href: '#', hover: 'hover:bg-[#000] hover:text-white' },
];

const Footer = () => (
    <footer className="bg-[#0a0b12] text-white pt-14 pb-8 px-4 sm:px-6 mt-12 md:mt-20">
        {/* Top grid: brand + four link groups (5 columns on lg) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Brand, blurb, contact, social */}
            <div>
                <Link to="/" className="flex items-center mb-3" replace>
                    <span className="text-xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent tracking-tight">
                        FOODMUNCH
                    </span>
                </Link>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Discover, order, and enjoy meals from the best local restaurants.
                </p>
                <div className="mb-5">
                    <h3 className="uppercase tracking-widest text-xs md:text-[12px] text-gray-300 mb-2 font-bold">Contact</h3>
                    <p className="text-sm text-gray-300/80">
                        greatezenewu@gmail.com<br />
                        +234 903 702 3252
                    </p>
                </div>
                <div>
                    <h3 className="uppercase tracking-widest text-xs text-gray-400 mb-2">Follow</h3>
                    <div className="flex gap-2.5">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:text-white border border-white/10 transition-colors duration-200 text-base ${item.hover}`}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product */}
            <div>
                <h3 className="uppercase tracking-widest text-xs md:text-[12px] text-gray-300 mb-4 font-bold">Product</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Restaurants</Link></li>
                    <li><Link to="/menus" className="text-gray-400 hover:text-white transition-colors">Menus</Link></li>
                    <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                    <li><Link to="/enterprise" className="text-gray-400 hover:text-white transition-colors">Foodmunch for Business</Link></li>
                </ul>
            </div>

            {/* Company */}
            <div>
                <h3 className="uppercase tracking-widest text-xs md:text-[12px] text-gray-300 mb-4 font-bold">Company</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link to="/mission" className="text-gray-400 hover:text-white transition-colors">Mission</Link></li>
                    <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                    <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                    <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
            </div>

            {/* Resources */}
            <div>
                <h3 className="uppercase tracking-widest text-xs md:text-[12px] text-gray-300 mb-4 font-bold">Resources</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link></li>
                    <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                    <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                    <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                    <li><Link to="/policies/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/policies/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
            </div>

            {/* Connect (Top Restaurants / Locations) */}
            <div>
                <h3 className="uppercase tracking-widest text-xs md:text-[12px] text-gray-300 mb-4 font-bold">Connect</h3>
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <h4 className="text-xs text-gray-300 mb-2">Top Restaurants</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Item7 Go</Link></li>
                            <li><Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Domino's Pizza</Link></li>
                            <li><Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Ibachi (Ibadan Chinese)</Link></li>
                            <li><Link to="/restaurants" className="text-gray-300 hover:text-white transition-colors font-medium">View All</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto mt-10 border-t border-white/10" />

        {/* Bottom bar: premium app badges + copyright + theme toggle */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
                {/* Premium App Store Button */}
                <a 
                    href="#" 
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-0.5 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25" 
                    aria-label="Download on the App Store"
                >
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900">
                        {/* Apple Logo */}
                        <div className="text-white text-xl group-hover:text-blue-300 transition-colors duration-300">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Download on the</div>
                            <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">App Store</div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                    </div>
                </a>

                {/* Premium Google Play Button */}
                <a 
                    href="#" 
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-0.5 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25" 
                    aria-label="Get it on Google Play"
                >
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 group-hover:from-gray-800 group-hover:via-gray-700 group-hover:to-gray-900">
                        {/* Google Play Logo */}
                        <div className="text-white text-xl group-hover:text-green-300 transition-colors duration-300">
                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                <path fill="#4285F4" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/>
                                <path fill="#34A853" d="M16.81,15.12L6.05,21.34C5.79,21.5 5.50,21.57 5.21,21.57C4.60,21.57 4.03,21.26 3.84,21.85L13.69,12L16.81,15.12Z"/>
                                <path fill="#FBBC04" d="M20.16,10.85C20.5,11.05 20.75,11.36 20.75,11.75C20.75,12.14 20.5,12.45 20.16,12.65L16.81,15.12L13.69,12L16.81,8.88L20.16,10.85Z"/>
                                <path fill="#EA4335" d="M16.81,8.88L3.84,2.15C4.03,1.74 4.60,1.43 5.21,1.43C5.50,1.43 5.79,1.50 6.05,1.66L16.81,8.88Z"/>
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get it on</div>
                            <div className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors duration-300">Google Play</div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-green-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                    </div>
                </a>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto">
                <p className="text-xs text-gray-400">© 2025 FoodMunch Inc. All rights reserved.</p>
                <div className="ml-4">
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
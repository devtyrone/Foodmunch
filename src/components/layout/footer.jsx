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

        {/* Bottom bar: app badges (optional) + copyright + theme toggle */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
                <a href="#" className="block rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors duration-200" aria-label="Download on the App Store">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-28 h-8 object-contain" loading="lazy" decoding="async" />
                </a>
                <a href="#" className="block rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors duration-200" aria-label="Get it on Google Play">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-28 h-8 object-contain" loading="lazy" decoding="async" />
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
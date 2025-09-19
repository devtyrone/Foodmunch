/**
 * Navbar.jsx
 * Modern responsive navigation with smooth animations, gesture support,
 * and premium mobile experience. Features slide-in drawer, backdrop blur,
 * and enhanced touch interactions.
 */
import React, { useState, useEffect, useCallback, Fragment } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaArrowUp, FaTimes, FaChevronDown, FaHome, FaUtensils, FaUsers, FaQuestionCircle, FaStore, FaConciergeBell, FaBriefcase, FaHeart, FaBullseye, FaUserFriends, FaLeaf, FaComments, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import DarkModeToggle from "../DarkModeToggle";

// Enhanced navigation with diverse icons for mobile
const navLinks = [
  { name: "Home", to: "/Home", icon: <FaHome /> },
  { name: "Restaurants", to: "/restaurants", icon: <FaStore /> },
  { name: "Menu", to: "/menu", icon: <FaConciergeBell /> },
  { name: "Careers", to: "/careers", icon: <FaBriefcase /> },
  { 
    name: "Our Story", 
    icon: <FaHeart />, 
    dropdown: [
      { name: "Mission", to: "/mission", icon: <FaBullseye /> }, 
      { name: "Team", to: "/team", icon: <FaUserFriends /> }, 
      { name: "Sourcing", to: "/sourcing", icon: <FaLeaf /> }
    ] 
  },
  { 
    name: "Kitchen Help", 
    icon: <FaQuestionCircle />, 
    dropdown: [
      { name: "Feedback", to: "/feedback", icon: <FaComments /> }, 
      { name: "FAQs", to: "/faqs", icon: <FaInfoCircle /> }, 
      { name: "Contact Us", to: "/contact", icon: <FaEnvelope /> }
    ] 
  },
];

const Navbar = () => {
  // Mobile overlay open state and dropdown visibility state
  const [open, setOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({ ourStory: false, kitchenHelp: false });

  // Helper to get dropdown key
  // Map dropdown link label to internal key
  const getDropdownKey = useCallback((linkName) => (linkName === "Our Story" ? "ourStory" : "kitchenHelp"), []);

  // Mutually exclusive dropdown toggle
  const toggleDropdown = useCallback(
    (key, val) => {
      setDropdownStates((prev) => ({ ...prev, ourStory: false, kitchenHelp: false, [key]: val }));
    },
    []
  );

  // Reset all dropdowns (used on resize/close)
  const resetDropdowns = useCallback(() => setDropdownStates({ ourStory: false, kitchenHelp: false }), []);

  // Auto-close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
        resetDropdowns();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, resetDropdowns]);

  return (
    <Fragment>
      {/* Sticky top navbar shell */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 sm:px-6 py-3 flex items-center justify-center z-50 transition-colors duration-300">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" replace>
            {/* Light mode gradient logo */}
            <span className="text-base md:text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent tracking-tight hover:from-red-700 hover:to-orange-600 transition-all duration-300 inline dark:hidden">
              FOODMUNCH
            </span>
            {/* Dark mode solid logo for maximum contrast */}
            <span className="hidden dark:inline text-base md:text-lg font-bold text-white tracking-tight">
              FOODMUNCH
            </span>
          </Link>

          {/* Desktop/Tablet Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative flex items-center"
                  onMouseEnter={() => toggleDropdown(getDropdownKey(link.name), true)}
                  onMouseLeave={() => toggleDropdown(getDropdownKey(link.name), false)}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={dropdownStates[getDropdownKey(link.name)]}
                    className="text-xs md:text-sm lg:text-base font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition nav-link flex items-center"
                    onClick={(e) => {
                      // Enable tap-to-toggle on tablets
                      e.preventDefault();
                      toggleDropdown(getDropdownKey(link.name), !dropdownStates[getDropdownKey(link.name)]);
                    }}
                  >
                    {link.name}
                    <svg
                      className={`ml-1 w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-gray-500 transition-transform duration-300 ${
                        dropdownStates[getDropdownKey(link.name)] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownStates[getDropdownKey(link.name)] && (
                    <ul className="absolute top-full left-0 mt-1 w-48 md:w-52 lg:w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden py-2 z-50">
                      {link.dropdown.map((d) => (
                        <li key={d.name}>
                          <Link
                            to={d.to}
                            className="flex items-center space-x-2 px-3 py-2 text-xs md:text-sm lg:text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                          >
                            <span className="text-orange-500 text-sm">{d.icon}</span>
                            <span>{d.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-xs md:text-sm lg:text-base font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition nav-link flex items-center"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right side: auth controls and dark mode toggle */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-2.5 py-1.5 lg:px-4 lg:py-2 rounded-md text-xs md:text-sm font-medium transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 lg:px-4 lg:py-2 rounded-md text-xs md:text-sm font-medium transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <DarkModeToggle />
          </div>

          {/* Modern mobile menu button with animation */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 ml-auto"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars className="text-lg text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Modern Mobile Overlay with backdrop blur */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              resetDropdowns();
            }}
          />
          
          {/* Slide-in drawer */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <Link
                to="/"
                className="text-xl font-bold tracking-tight"
                onClick={() => {
                  setOpen(false);
                  resetDropdowns();
                }}
              >
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  FOODMUNCH
                </span>
              </Link>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => {
                  setOpen(false);
                  resetDropdowns();
                }}
                aria-label="Close menu"
              >
                <FaTimes className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Navigation Menu */}
              <nav className="p-6 space-y-2">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="space-y-1">
                      <button
                        className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                        onClick={() => toggleDropdown(getDropdownKey(link.name), !dropdownStates[getDropdownKey(link.name)])}
                        aria-label={`Toggle ${link.name} menu`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-red-600 text-lg">{link.icon}</span>
                          <span className="font-medium">{link.name}</span>
                        </div>
                        <FaChevronDown className={`text-gray-400 transition-transform duration-200 ${
                          dropdownStates[getDropdownKey(link.name)] ? "rotate-180" : ""
                        }`} />
                      </button>
                      {dropdownStates[getDropdownKey(link.name)] && (
                        <div className="ml-6 space-y-1 animate-fadeIn">
                          {link.dropdown.map((d) => (
                            <Link
                              key={d.name}
                              to={d.to}
                              className="flex items-center space-x-3 p-3 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                              onClick={() => {
                                setOpen(false);
                                resetDropdowns();
                              }}
                            >
                              <span className="text-orange-500 text-sm">{d.icon}</span>
                              <span>{d.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="flex items-center space-x-3 p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-red-600 text-lg">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  )
                )}
              </nav>

              {/* Auth Section */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <SignedOut>
                  <div className="space-y-3">
                    <SignInButton>
                      <button className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg font-medium transition-colors">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center justify-center">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-center pt-2">
                  <DarkModeToggle />
                </div>
              </div>

              {/* Premium App Store Section */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Download FoodMunch</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get the best food delivery experience</p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {/* Premium App Store Button */}
                  <a 
                    href="#" 
                    aria-label="Download on the App Store" 
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-0.5 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-600 dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:via-gray-700 dark:group-hover:to-gray-900">
                      {/* Apple Logo */}
                      <div className="text-gray-800 dark:text-white text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Download on the</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">App Store</div>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                    </div>
                  </a>

                  {/* Premium Google Play Button */}
                  <a 
                    href="#" 
                    aria-label="Get it on Google Play" 
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-0.5 hover:from-green-500 hover:via-blue-500 hover:to-purple-600 dark:hover:from-green-600 dark:hover:via-blue-600 dark:hover:to-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                  >
                    <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:via-gray-700 dark:group-hover:to-gray-900">
                      {/* Google Play Logo */}
                      <div className="text-gray-800 dark:text-white text-2xl group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" className="w-8 h-8">
                          <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/>
                          <path fill="currentColor" d="M16.81,15.12L6.05,21.34C5.79,21.5 5.50,21.57 5.21,21.57C4.60,21.57 4.03,21.26 3.84,21.85L13.69,12L16.81,15.12Z"/>
                          <path fill="currentColor" d="M20.16,10.85C20.5,11.05 20.75,11.36 20.75,11.75C20.75,12.14 20.5,12.45 20.16,12.65L16.81,15.12L13.69,12L16.81,8.88L20.16,10.85Z"/>
                          <path fill="currentColor" d="M16.81,8.88L3.84,2.15C4.03,1.74 4.60,1.43 5.21,1.43C5.50,1.43 5.79,1.50 6.05,1.66L16.81,8.88Z"/>
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Get it on</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">Google Play</div>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-green-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
                    </div>
                  </a>
                </div>

                {/* Download Stats */}
                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>4.8★ Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>10k+ Downloads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackToTopButton isMobileMenuOpen={open} />
      </nav>
    </Fragment>
  );
};

export default Navbar;

const BackToTopButton = ({ isMobileMenuOpen }) => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
	  const toggle = () => setIsVisible(window.pageYOffset > 300);
	  window.addEventListener("scroll", toggle);
	  return () => window.removeEventListener("scroll", toggle);
	}, []);
	if (isMobileMenuOpen) return null;
	return (
	  <button
		onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		aria-label="Back to top"
		className={`fixed bottom-6 left-1/2 -translate-x-1/2 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
		  isVisible ? "opacity-100" : "opacity-0"
		} bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 z-40`}
	  >
		<FaArrowUp className="text-base text-gray-800 dark:text-orange-500" />
	  </button>
	);
  };
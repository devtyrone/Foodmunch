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

              {/* App Store Section */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">Download our app</p>
                <div className="flex flex-col space-y-3">
                  <a href="#" aria-label="Download on the App Store" className="flex items-center justify-center p-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on the App Store"
                      className="h-10 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <a href="#" aria-label="Get it on Google Play" className="flex items-center justify-center p-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-10 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
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
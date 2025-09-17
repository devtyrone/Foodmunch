import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaArrowUp } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import DarkModeToggle from "../DarkModeToggle";

const navLinks = [
  { name: "Home", to: "/Home" },
  { name: "Restaurants", to: "/restaurants" },
  { name: "Menu", to: "/menu" },
  { name: "Careers", to: "/careers" },
  { name: "Our Story", dropdown: [{ name: "Mission", to: "/mission" }, { name: "Team", to: "/team" }, { name: "Sourcing", to: "/sourcing" }] },
  { name: "Kitchen Help", dropdown: [{ name: "Feedback", to: "/feedback" }, { name: "FAQs", to: "/faqs" }, { name: "Contact Us", to: "/contact" }] },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({ ourStory: false, kitchenHelp: false });

  // Helper to get dropdown key
  const getDropdownKey = useCallback((linkName) => (linkName === "Our Story" ? "ourStory" : "kitchenHelp"), []);

  // Mutually exclusive dropdown toggle
  const toggleDropdown = useCallback(
    (key, val) => {
      setDropdownStates((prev) => ({ ...prev, ourStory: false, kitchenHelp: false, [key]: val }));
    },
    []
  );

  const resetDropdowns = useCallback(() => setDropdownStates({ ourStory: false, kitchenHelp: false }), []);

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
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex items-center justify-center z-50 transition-colors duration-300">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" replace>
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent tracking-tight hover:from-red-700 hover:to-orange-600 transition-all duration-300">
              FOODMUNCH
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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
                    className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition nav-link flex items-center"
                  >
                    {link.name}
                    <svg
                      className={`ml-1 w-4 h-4 text-gray-500 transition-transform duration-300 ${
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
                    <ul className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden py-2 z-30">
                      {link.dropdown.map((d) => (
                        <li key={d.name}>
                          <Link
                            to={d.to}
                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                          >
                            {d.name}
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
                  className="text-base font-normal text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition nav-link flex items-center"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-white ml-auto"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Overlay */}
        {open && (
          <div
            className={`fixed top-0 left-0 h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 z-50 flex flex-col items-start transition-all duration-500 ease-in-out ${
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 py-4 border-b border-gray-700">
              <Link
                to="/"
                className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent tracking-tight hover:from-red-700 hover:to-orange-600 transition-all duration-300"
                onClick={() => {
                  setOpen(false);
                  resetDropdowns();
                }}
              >
                FOODMUNCH
              </Link>
              <button
                className="text-white text-3xl"
                onClick={() => {
                  setOpen(false);
                  resetDropdowns();
                }}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col items-start px-10 mt-6 space-y-2 w-full">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li key={link.name} className="relative flex flex-col items-start w-full">
                    <button
                      className="text-white text-lg font-medium hover:text-red-400 transition flex items-center w-full justify-between py-1"
                      onClick={() => toggleDropdown(getDropdownKey(link.name), !dropdownStates[getDropdownKey(link.name)])}
                      aria-label={`Toggle ${link.name} menu`}
                    >
                      {link.name}
                      <svg
                        className={`ml-1 w-5 h-5 text-gray-300 transition-transform duration-300 ${
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
                      <ul className="pl-4 mt-2 space-y-2 w-full border-l border-gray-600 ml-3">
                        {link.dropdown.map((d) => (
                          <li key={d.name}>
                            <Link
                              to={d.to}
                              className="text-white text-base font-normal hover:text-red-400 hover:bg-gray-700/50 transition block py-1 px-3 rounded-lg"
                              onClick={() => {
                                setOpen(false);
                                resetDropdowns();
                              }}
                            >
                              {d.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-white text-lg font-medium hover:text-red-400 hover:bg-gray-700/50 transition block py-1 px-4 rounded-lg"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Auth */}
            <div className="px-10 mt-6 w-full border-t border-gray-600 pt-6">
              <SignedOut>
                <div className="flex flex-col gap-4">
                  <SignInButton>
                    <button className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-lg text-base font-medium transition">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg text-base font-medium transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>

            {/* App Store */}
            <div className="px-10 mt-6 w-full border-t border-gray-600 pt-6 flex justify-center gap-4">
              <a href="#" aria-label="Download on the App Store">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="w-32 h-10"
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-32 h-10"
                />
              </a>
            </div>
          </div>
        )}
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
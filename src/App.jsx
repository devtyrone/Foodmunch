/**
 * App.jsx
 * Root application shell: mounts global navbar/footer, configures routes,
 * handles initial loading spinner, and ensures scroll-to-top on navigation.
 */
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Navbar from './components/layout/Navbar';
import FAQs from './components/info/FAQs';
import Careers from './components/info/Careers.jsx';
import OpenPositions from './components/info/OpenPositions.jsx';
import OurCulture from './components/info/OurCulture.jsx';
import AboutUs from './components/info/AboutUs.jsx';
import Pricing from './components/info/Pricing.jsx';
import Enterprise from './components/pages/Enterprise.jsx';
import FoodMunchForBusiness from './components/pages/foodmunchforbusiness.jsx';
import Feedback from './components/info/Feedback.jsx';
import Docs from './components/info/Docs.jsx';
import Support from './components/info/Support.jsx';
import Blog from './components/info/Blog.jsx';
import PrivacyPolicy from './components/info/PrivacyPolicy.jsx';
import TermsOfService from './components/info/TermsOfService.jsx';
import ContactUs from './components/info/Contact Us.jsx';
import Team from './components/info/Team.jsx';
import Mission from './components/info/Mission.jsx';
import Sourcing from './components/info/Sourcing.jsx';
import Menu from './components/pages/Menu.jsx';
import Footer from './components/layout/footer.jsx';
import Home from './components/pages/Home.jsx';
import Restaurants from './components/pages/Restaurants.jsx';
import PromoSection from './components/sections/PromoSection';
import ItemDetails from './components/pages/ItemDetails.jsx'; // Updated import for ItemDetails
import Checkout from './components/pages/Checkout.jsx'
import OrderPage from './components/pages/OrderPage.jsx' // Import OrderPage
import DarkModeToggle from './components/DarkModeToggle'; // Import DarkModeToggle
// Advanced Loader component with food-themed animations
// Displays multiple animated elements while the app loads, using brand colors
const Loader = () => {
  const [loadingText, setLoadingText] = useState('Preparing your feast...');
  
  useEffect(() => {
    const texts = [
      'Preparing your feast...',
      'Heating up the kitchen...',
      'Seasoning with love...',
      'Almost ready to serve...',
      'Bon appétit awaits!'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLoadingText(texts[index]);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          >
            <div className="text-2xl opacity-30">
              {['🍕', '🍔', '🍗', '🍜', '🥘', '🍛'][i]}
            </div>
          </div>
        ))}
      </div>

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Brand Logo/Text */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-2 animate-pulse">
            FOODMUNCH
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* Multi-layered Spinner */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="animate-spin rounded-full h-24 w-24 border-4 border-transparent bg-gradient-to-r from-red-500 to-orange-500 p-1">
            <div className="bg-gray-900 rounded-full h-full w-full"></div>
          </div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 animate-spin rounded-full h-20 w-20 border-4 border-transparent bg-gradient-to-r from-orange-400 to-yellow-400 p-1" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
            <div className="bg-gray-900 rounded-full h-full w-full"></div>
          </div>
          
          {/* Inner Ring */}
          <div className="absolute inset-4 animate-spin rounded-full h-16 w-16 border-4 border-transparent bg-gradient-to-r from-yellow-400 to-red-400 p-1" style={{ animationDuration: '2s' }}>
            <div className="bg-gray-900 rounded-full h-full w-full flex items-center justify-center">
              <div className="text-2xl animate-bounce">🍽️</div>
            </div>
          </div>
        </div>

        {/* Pulsing Dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-xl font-semibold text-white mb-2 animate-pulse">
            {loadingText}
          </p>
          <div className="text-sm text-gray-400">
            Crafting your culinary experience...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full animate-pulse transform origin-left">
            <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"></div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping opacity-75"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm animate-pulse">
          Delicious moments are loading...
        </p>
      </div>
    </div>
  );
};

// Scroll to top on route change
// Smoothly scrolls the window to the top whenever the route path changes
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return null;
};

  
const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Simulate initial app loading to show the Loader for UX polish
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hide footer on checkout and item details pages
  // We avoid showing the footer where full-screen experiences are preferred
  const shouldShowFooter = location.pathname !== '/checkout' && !location.pathname.startsWith('/item/');

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Navbar />
          <ScrollToTop />
          <div className="flex-1 pt-16">
            {/* Primary route table: add/update routes here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/open-positions" element={<OpenPositions />} />
              <Route path="/careers/our-culture" element={<OurCulture />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/support" element={<Support />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/policies/privacy" element={<PrivacyPolicy />} />
              <Route path="/policies/terms" element={<TermsOfService />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/sourcing" element={<Sourcing />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/foodmunchforbusiness" element={<FoodMunchForBusiness />} />
              {/* Product detail and checkout routes */}
              <Route path="/item/:id" element={<ItemDetails />} />{/* New route for item details */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<OrderPage />} />{/* New route for OrderPage */}
              {/* Add other routes as needed */}
            </Routes>
          </div>	 
		  
          {shouldShowFooter && <Footer />}
        </div>
      )}
    </>
  );
};

export default App;
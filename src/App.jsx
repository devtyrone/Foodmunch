import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Navbar from './components/layout/Navbar';
import FAQs from './components/info/FAQs';
import Careers from './components/info/Careers.jsx';
import AboutUs from './components/info/AboutUs.jsx';
import Feedback from './components/info/Feedback.jsx';
import ContactUs from './components/info/Contact Us.jsx';
import Team from './components/info/Team.jsx';
import Mission from './components/info/Mission.jsx';
import Sourcing from './components/info/Sourcing.jsx';
import Menu from './components/pages/Menu.jsx';
import Footer from './components/layout/footer.jsx';
import Home from './components/pages/Home.jsx';
import Restaurants from './components/pages/Restaurants.jsx';
import HeroSection from './components/sections/HeroSection';
import PromoSection from './components/sections/PromoSection';
import ItemDetails from './components/pages/ItemDetails.jsx'; // Updated import for ItemDetails
import Checkout from './components/pages/Checkout.jsx'
import OrderPage from './components/pages/OrderPage.jsx' // Import OrderPage
import DarkModeToggle from './components/DarkModeToggle'; // Import DarkModeToggle
// Loader component
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
  </div>
);

  
const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hide footer on checkout and item details pages
  const shouldShowFooter = location.pathname !== '/checkout' && !location.pathname.startsWith('/item/');

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
          <Navbar />
          <div className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/sourcing" element={<Sourcing />} />
              <Route path="/restaurants" element={<Restaurants />} />
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
/**
 * Home.jsx
 * Main landing page showing hero copy, app badges, animated marquees,
 * a gallery preview, and key sections like products, chefs, testimonials.
 *
 * Notes:
 * - The top text marquee auto-scrolls and pauses on hover (resumes in-place).
 * - The restaurants MarqueeGrid supports drag/touch scrubbing for manual control.
 * - Images are optimized with preconnect/preload, lazy loading, and async decoding.
 */
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductsSection from '../sections/ProductsSection';
import ChefSpotlight from '../sections/ChefSpotlight';
import TestimonialsSection from '../sections/TestimonialsSection';
import HeroSection from '../sections/HeroSection';
import OperatingHoursSection from '../sections/OperatingHoursSection'; // Updated import

// --- Marquee Words Constants ---
// Phrases displayed in the top marquee strip
const marqueeWords = [
  'SWIFT DELIVERY',
  'AFFORDABLE PRICES',
  'DELECTABLE MEALS',
  'TOP CHEFS!',
];

const dynamicTexts = Array(30).fill(marqueeWords).flat();

// --- Home Component ---
const Home = () => {
  // --- State Management ---
  // Controls the autoplay gallery overlay button and image index
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Local image assets used in the gallery carousel
  const foodImages = [
    '/assets/food/12.jpeg',
    '/assets/food/11.jpeg',
    '/assets/food/13.jpeg',
    '/assets/food/14.jpeg',
  ];

  // --- Effects ---
  // When the gallery is shown, cycle through images at an interval
  React.useEffect(() => {
    let interval;
    if (showGallery) {
      interval = setInterval(() => {
        setGalleryIndex(i => (i + 1) % foodImages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [showGallery, foodImages.length]);

  // Preload gallery images to warm the cache for instant transitions
  useEffect(() => {
    const controllers = [];
    foodImages.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = src;
      controllers.push(img);
    });
    // No cleanup necessary for Image objects
  }, []);

  const handlePlay = () => {
    setShowGallery(true);
    setGalleryIndex(0);
  };
  // Ref to the top marquee container and pause flag used in the raf loop
  const marqueeRef = useRef(null);
  const isTopPausedRef = useRef(false);

  // rAF-driven loop updates translateX. When paused/dragging, it holds position.
  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;
    let animationFrame;
    let contentWidth = 0;
    let containerWidth = 0;
    if (marquee) {
      // Duplicate content for seamless scroll
      if (marquee.children.length === dynamicTexts.length) {
        for (let i = 0; i < dynamicTexts.length; i++) {
          marquee.appendChild(marquee.children[i].cloneNode(true));
        }
      }
      contentWidth = marquee.scrollWidth / 2;
      containerWidth = marquee.parentElement.offsetWidth;
      // Start from the right edge of its own container
      offset = containerWidth;
      marquee.style.transform = `translateX(${offset}px)`;
    }
    // Auto-scroll animation (paused while hovered)
    const animate = () => {
      if (!isTopPausedRef.current) {
        offset -= 1.5;
      }
      if (marquee) {
        marquee.style.transform = `translateX(${offset}px)`;
        // Loop seamlessly for continuous effect within its own container
        if (offset < -contentWidth) {
          offset = containerWidth;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // --- Main Render (JSX) ---
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 flex flex-col items-center justify-start">
      {/* --- Modern Hero Section --- */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="text-center space-y-6">
          {/* Main Headline with Gradient */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 leading-tight">
              Epic Flavors,<br />
              <span className="text-gray-900">Effortless Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Restaurant-quality meals from Ibadan's finest kitchens, delivered fresh to your doorstep in minutes.
            </p>
          </div>

          {/* App Store Buttons and Trust Badge - Moved Up */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {/* Trust Badge - Moved Up */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 text-orange-700 px-6 py-2 rounded-full text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Supported by <span className="font-bold">Alpha groups</span>
              </span>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Premium App Store Button */}
              <a 
                href="#" 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-0.5 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20" 
                aria-label="Download on the App Store"
              >
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-300 group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:via-gray-700 dark:group-hover:to-gray-900">
                  <div className="text-gray-800 dark:text-white text-xl group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Download on the</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">App Store</div>
                  </div>
                </div>
              </a>

              {/* Premium Google Play Button */}
              <a 
                href="#" 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-0.5 hover:from-green-500 hover:via-blue-500 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20" 
                aria-label="Get it on Google Play"
              >
                <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-300 group-hover:from-gray-50 group-hover:via-white group-hover:to-gray-50 dark:group-hover:from-gray-800 dark:group-hover:via-gray-700 dark:group-hover:to-gray-900">
                  <div className="text-gray-800 dark:text-white text-xl group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="#4285F4" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5Z"/>
                      <path fill="#34A853" d="M16.81,15.12L6.05,21.34C5.79,21.5 5.50,21.57 5.21,21.57C4.60,21.57 4.03,21.26 3.84,21.85L13.69,12L16.81,15.12Z"/>
                      <path fill="#FBBC04" d="M20.16,10.85C20.5,11.05 20.75,11.36 20.75,11.75C20.75,12.14 20.5,12.45 20.16,12.65L16.81,15.12L13.69,12L16.81,8.88L20.16,10.85Z"/>
                      <path fill="#EA4335" d="M16.81,8.88L3.84,2.15C4.03,1.74 4.60,1.43 5.21,1.43C5.50,1.43 5.79,1.50 6.05,1.66L16.81,8.88Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Get it on</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Stats Bar - Moved Down */}
          <div className="flex flex-wrap justify-center gap-8 py-4 mt-2">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-600">15+</div>
              <div className="text-sm text-gray-600">Top Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">20min</div>
              <div className="text-sm text-gray-600">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-500">4.8★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Top Marquee Section ---
      Auto-scrolling phrase strip (pauses on hover, resumes from same position) */}
  <div className="overflow-hidden w-full mb-0.5" style={{background: '#df6b0c'}}>
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-base font-medium py-2 flex"
          style={{
            color: '#fff',
            minWidth: 'max-content',
            willChange: 'transform',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={() => { isTopPausedRef.current = true; }}
          onMouseLeave={() => { isTopPausedRef.current = false; }}
        >
          {[...dynamicTexts, ...dynamicTexts].map((text, idx) => (
            <span key={idx} className="mx-2 inline-block" style={{fontWeight: 500}}>{text}</span>
          ))}
        </div>
      </div>

      {/* --- Enhanced Food Gallery Section --- */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="relative group">
          {/* Gallery Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            <img 
              src={showGallery ? foodImages[galleryIndex] : foodImages[0]} 
              alt="FoodMunch delivery showcase" 
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-500"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Play Button */}
            {!showGallery && (
              <button 
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-full p-8 flex items-center justify-center shadow-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                aria-label="Play Food Gallery"
              >
                <FaPlay className="text-4xl ml-1 group-hover:ml-2 transition-all" />
              </button>
            )}
            
            {/* Gallery Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {showGallery ? 'Live Kitchen Gallery' : 'Discover Our Kitchen'}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {showGallery ? 'Fresh ingredients, expert preparation' : 'See how we craft your perfect meal'}
                  </p>
                </div>
                {showGallery && (
                  <div className="hidden md:flex items-center gap-2">
                    {foodImages.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === galleryIndex ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Floating Stats Cards */}
          <div className="absolute -bottom-6 left-4 right-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-xl">🚀</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">Fast Delivery</div>
                <div className="text-sm text-gray-600">20-30 mins avg</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 backdrop-blur-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-orange-600 text-xl">👨‍🍳</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">Expert Chefs</div>
                <div className="text-sm text-gray-600">Premium quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Enhanced Restaurants Section --- */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Ibadan's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Finest Restaurants</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From legendary bukas to modern fusion kitchens - get all your favorite dishes delivered in one order
          </p>
        </div>

        {/* Interactive Restaurant Carousel */}
        <div className="relative">
          <div className="w-full overflow-x-hidden py-6">
            <MarqueeGrid />
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/restaurants" className="group bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Explore All Restaurants
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link to="/menu" className="group border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-4 px-8 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Browse Menu
              <span className="group-hover:translate-x-1 transition-transform">📋</span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- Modern Features Section --- */}
      <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">FoodMunch?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of food delivery with our cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Average delivery time of 20 minutes. Real-time tracking keeps you updated every step of the way.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure & Safe</h3>
              <p className="text-gray-300 leading-relaxed">
                Contactless delivery, secure payments, and verified restaurants ensure your safety and peace of mind.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Recommendations</h3>
              <p className="text-gray-300 leading-relaxed">
                AI-powered suggestions based on your preferences, dietary needs, and local favorites.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Best Prices</h3>
              <p className="text-gray-300 leading-relaxed">
                Competitive pricing with exclusive deals, loyalty rewards, and group order discounts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assured</h3>
              <p className="text-gray-300 leading-relaxed">
                Handpicked restaurants, fresh ingredients, and quality checks ensure every meal exceeds expectations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Intuitive app design, one-tap reordering, and multiple payment options for effortless ordering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Products Section --- */}
	  <ProductsSection />
      {/* --- Chef Spotlight Section --- */}
	  <ChefSpotlight />
      {/* --- Testimonials Section --- */}
	  <TestimonialsSection />
      {/* --- Operating Hours Section --- */}
	  <OperatingHoursSection />
      {/* --- Hero Section (possibly a duplicated or general hero) --- */}
	  <HeroSection />
    </div>
  );
};
export default Home;

// --- Enhanced MarqueeGrid Component ---
// Premium restaurant carousel with world-class smooth movement
const restaurantImages = Array.from({length: 10}, (_, i) => `/assets/resturants/${i+1}.jpeg`);

const restaurantInfo = [
   "Chicken Republic", "Domino's Pizza", "Five Continents", "Ibachi Chinese", "Kilimanjaro", "Item7go", 
  "Mr. Bigg's", "KFC", "The Place", "Ultima Lounge", "Vintage Lounge", "Wimpy's", 
];

/**
 * MarqueeGrid - World-Class Restaurant Carousel
 * Features:
 * - Buttery smooth 60fps animations with momentum physics
 * - Elastic push-back with spring animations
 * - Velocity-based momentum scrolling
 * - Premium visual design with depth and shadows
 * - Seamless infinite loop with no visible seams
 */
function MarqueeGrid() {
  // --- State and Refs ---
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation state
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const lastTimeRef = useRef(0);
  
  // Interaction state
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const momentumRef = useRef(0);

  // --- Premium Animation System ---
  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame;
    let cardWidth = 340; // Card width + gap
    let totalWidth = 0;
    let containerWidth = 0;

    if (marquee && containerRef.current) {
      totalWidth = restaurantImages.length * cardWidth;
      containerWidth = containerRef.current.offsetWidth;
      
      // Initialize position
      offsetRef.current = 0;
      targetOffsetRef.current = 0;
      marquee.style.transform = `translateX(${offsetRef.current}px)`;
    }

    const animate = (currentTime) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = Math.min(currentTime - lastTimeRef.current, 16.67); // Cap at 60fps
      lastTimeRef.current = currentTime;

      let currentOffset = offsetRef.current;
      let targetOffset = targetOffsetRef.current;
      let velocity = velocityRef.current;

      if (!draggingRef.current) {
        // Auto-scroll when not dragging
        if (!isPaused && !isHovered) {
          targetOffset -= 0.8; // Smooth auto-scroll speed
        }

        // Apply momentum after drag release
        if (momentumRef.current !== 0) {
          targetOffset += momentumRef.current;
          momentumRef.current *= 0.95; // Momentum decay
          if (Math.abs(momentumRef.current) < 0.1) {
            momentumRef.current = 0;
          }
        }

        // Smooth interpolation with easing
        const ease = 0.08; // Higher = more responsive, lower = smoother
        const diff = targetOffset - currentOffset;
        velocity = velocity * 0.9 + diff * ease; // Add momentum
        currentOffset += velocity;

        // Seamless infinite loop
        const loopPoint = -totalWidth;
        if (currentOffset <= loopPoint) {
          currentOffset += totalWidth;
          targetOffset += totalWidth;
        } else if (currentOffset >= 0) {
          currentOffset -= totalWidth;
          targetOffset -= totalWidth;
        }

        offsetRef.current = currentOffset;
        targetOffsetRef.current = targetOffset;
        velocityRef.current = velocity;
      }

      // Apply transform with hardware acceleration
      if (marquee) {
        marquee.style.transform = `translate3d(${currentOffset}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, isHovered]);

  // --- Enhanced Interaction Handlers ---
  const handleInteractionStart = (clientX) => {
    draggingRef.current = true;
    startXRef.current = clientX;
    startOffsetRef.current = offsetRef.current;
    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = Date.now();
    momentumRef.current = 0;
    velocityRef.current = 0;
    setIsPaused(true);
  };

  const handleInteractionMove = (clientX) => {
    if (!draggingRef.current) return;
    
    const currentTime = Date.now();
    const deltaX = clientX - startXRef.current;
    const timeDelta = currentTime - lastMoveTimeRef.current;
    
    // Calculate velocity for momentum
    if (timeDelta > 0) {
      const moveVelocity = (clientX - lastMoveXRef.current) / timeDelta;
      velocityRef.current = moveVelocity * 16; // Scale for smooth momentum
    }
    
    let newOffset = startOffsetRef.current + deltaX;
    
    // Elastic boundaries with spring-back
    const cardWidth = 340;
    const totalWidth = restaurantImages.length * cardWidth;
    const elasticStrength = 0.3;
    
    if (newOffset > 0) {
      newOffset = newOffset * elasticStrength; // Elastic push-back from right
    } else if (newOffset < -totalWidth) {
      const overflow = newOffset + totalWidth;
      newOffset = -totalWidth + (overflow * elasticStrength); // Elastic push-back from left
    }
    
    offsetRef.current = newOffset;
    targetOffsetRef.current = newOffset;
    
    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = currentTime;
  };

  const handleInteractionEnd = () => {
    if (!draggingRef.current) return;
    
    draggingRef.current = false;
    
    // Apply momentum based on final velocity
    const finalVelocity = velocityRef.current;
    momentumRef.current = finalVelocity * 0.5; // Momentum multiplier
    
    // Spring back if outside bounds
    const cardWidth = 340;
    const totalWidth = restaurantImages.length * cardWidth;
    
    if (offsetRef.current > 0) {
      targetOffsetRef.current = -cardWidth * 0.1; // Small bounce back
      momentumRef.current = 0;
    } else if (offsetRef.current < -totalWidth) {
      targetOffsetRef.current = -totalWidth + cardWidth * 0.1; // Small bounce back
      momentumRef.current = 0;
    }
    
    setTimeout(() => setIsPaused(false), 100); // Brief pause before auto-scroll resumes
  };

  // --- Premium Card Component ---
  const RestaurantCard = ({ image, name, index }) => (
    <div 
      className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
      style={{ minWidth: '320px', width: '320px', height: '280px' }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy" 
          decoding="async"
        />
        
        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
          ⭐ 4.{Math.floor(Math.random() * 4) + 5}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Authentic flavors • Fresh ingredients
        </p>
        
        {/* Action Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Available now</span>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '320px' }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsPaused(true);  // Pause auto-scrolling on hover
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPaused(false); // Resume auto-scrolling when not hovering
      }}
    >
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Carousel Container */}
      <div
        ref={marqueeRef}
        className="flex gap-5 items-center px-4 select-none cursor-grab active:cursor-grabbing"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
        onMouseDown={(e) => handleInteractionStart(e.clientX)}
        onMouseMove={(e) => handleInteractionMove(e.clientX)}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={(e) => handleInteractionStart(e.touches[0]?.clientX || 0)}
        onTouchMove={(e) => {
          handleInteractionMove(e.touches[0]?.clientX || 0);
          e.preventDefault();
        }}
        onTouchEnd={handleInteractionEnd}
      >
        {/* Render cards twice for seamless loop */}
        {[...restaurantImages, ...restaurantImages].map((img, idx) => (
          <RestaurantCard
            key={idx}
            image={img}
            name={restaurantInfo[idx % restaurantInfo.length]}
            index={idx}
          />
        ))}
      </div>
      
      {/* Interaction Hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
        ← Drag to explore →
      </div>
    </div>
  );
}

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

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <FaApple className="text-xl" />
              Download for iOS
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" className="group bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <FaGooglePlay className="text-xl" />
              Download for Android
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 text-orange-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Supported by <span className="font-bold">Alpha groups</span>
            </span>
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
            <a href="/restaurants" className="group bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Explore All Restaurants
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="/menu" className="group border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-4 px-8 rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              Browse Menu
              <span className="group-hover:translate-x-1 transition-transform">📋</span>
            </a>
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

// --- MarqueeGrid Component ---
// Constants for MarqueeGrid
const foodListImages = Array.from({length: 31}, (_, i) => `/assets/Foodlist/${i+1}.jpeg`);

const foodListInfo = [
  "Spicy Chicken Bowl", "Classic Burger", "Veggie Delight", "Seafood Platter", "Pasta Fiesta", "Sushi Combo", "Taco Trio", "Grilled Steak", "Paneer Tikka", "Falafel Wrap",
  "Pizza Supreme", "Salad Bowl", "Butter Chicken", "Fish & Chips", "Ramen Bowl", "BBQ Ribs", "Curry Rice", "Dumpling Basket", "Shawarma Roll", "Egg Fried Rice",
  "Momo Platter", "Kebab Mix", "Cheese Sandwich", "Fruit Parfait", "Soup Special", "Noodle Box", "Chicken Wings", "Veggie Pizza", "Lamb Chops", "Prawn Curry", "Steak Frites", "Veggie Burger"
];

/**
 * MarqueeGrid
 * A horizontally-scrolling, looping grid of restaurant cards.
 * - Auto-scrolls left via requestAnimationFrame
 * - Supports mouse/touch drag scrubbing (pauses during interaction)
 */
function MarqueeGrid() {
  // --- State and Refs ---
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);

  // --- Effects ---
  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;
    let animationFrame;
    let periodWidth = 0; // original content width (since content is duplicated)
    if (marquee) {
      periodWidth = marquee.scrollWidth / 2;
      offset = 0;
      offsetRef.current = offset;
      marquee.style.transform = `translateX(${offset}px)`;
    }
    const animate = () => {
      offset = offsetRef.current;
      if (!isPaused && !draggingRef.current) {
        // Move left and only wrap after movement to avoid hover-induced jumps
        offset -= 1.2;
        if (offset <= -periodWidth) {
          offset += periodWidth;
        }
      }
      if (marquee) {
        offsetRef.current = offset;
        marquee.style.transform = `translateX(${offset}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // --- Main Render (JSX) ---
  return (
    <div className="relative w-full" style={{height: '260px'}}>
      <div
        ref={marqueeRef}
        className="flex gap-8 items-center px-4 select-none cursor-grab active:cursor-grabbing"
        style={{willChange: 'transform', cursor: 'grab'}}
        // Hover should NOT pause; only drag/click pauses
        onMouseEnter={() => { /* no-op: keep moving on hover */ }}
        onMouseLeave={() => { draggingRef.current = false; /* keep current isPaused state */ }}
        onMouseDown={(e) => {
          draggingRef.current = true;
          startXRef.current = e.clientX;
          startOffsetRef.current = offsetRef.current;
          setIsPaused(true);
        }}
        onMouseMove={(e) => {
          if (!draggingRef.current) return;
          const delta = e.clientX - startXRef.current;
          let next = startOffsetRef.current + delta;
          const marquee = marqueeRef.current;
          if (marquee) {
            const period = marquee.scrollWidth / 2;
            while (next <= -period) next += period;
            while (next >= 0) next -= period;
          }
          offsetRef.current = next;
          if (marqueeRef.current) marqueeRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }}
        onMouseUp={() => { draggingRef.current = false; setIsPaused(false); }}
        onTouchStart={(e) => {
          const x = e.touches[0]?.clientX || 0;
          draggingRef.current = true;
          startXRef.current = x;
          startOffsetRef.current = offsetRef.current;
          setIsPaused(true);
        }}
        onTouchMove={(e) => {
          if (!draggingRef.current) return;
          const x = e.touches[0]?.clientX || 0;
          const delta = x - startXRef.current;
          let next = startOffsetRef.current + delta;
          const marquee = marqueeRef.current;
          if (marquee) {
            const period = marquee.scrollWidth / 2;
            while (next <= -period) next += period;
            while (next >= 0) next -= period;
          }
          offsetRef.current = next;
          if (marqueeRef.current) marqueeRef.current.style.transform = `translateX(${offsetRef.current}px)`;
          e.preventDefault();
        }}
        onTouchEnd={() => { draggingRef.current = false; setIsPaused(false); }}
      >
        {[...foodListImages, ...foodListImages].map((img, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-start justify-start w-80 h-64 p-4 border border-gray-100" style={{minWidth: '320px'}}>
            <img src={img} alt={foodListInfo[idx % foodListInfo.length]} className="w-full h-40 object-cover rounded-xl mb-3" loading="lazy" decoding="async" />
            <div className="text-lg font-bold text-gray-900 mb-1">{foodListInfo[idx % foodListInfo.length]}</div>
            <div className="text-sm text-gray-600">Delicious & Fresh</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const foodImages = [
    '/src/assets/food/food.jpg',
    '/src/assets/food/food.jpg',
    '/src/assets/food/food2.jpg',
    '/src/assets/food/food3.jpg',
    '/src/assets/food/food4.jpg',
    '/src/assets/food/food5.jpg',
  ];

  // --- Effects ---
  React.useEffect(() => {
    let interval;
    if (showGallery) {
      interval = setInterval(() => {
        setGalleryIndex(i => (i + 1) % foodImages.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [showGallery, foodImages.length]);

  const handlePlay = () => {
    setShowGallery(true);
    setGalleryIndex(0);
  };
  const marqueeRef = useRef(null);

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
    const animate = () => {
      offset -= 1.5;
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
  <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-2">
      {/* --- Header Section --- */}
      <h1 className="text-3xl font-extrabold text-center mb-4 mt-8 text-black">Epic Flavors, Effortless Delivery</h1>
      <p className="text-base text-gray-600 mb-6">Restaurant-quality meals, anytime you want.</p>
      
      {/* --- App Download Section --- */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex gap-4 mb-4">
          <a href="#" className="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-36 h-12 object-contain" />
          </a>
          <a href="#" className="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-36 h-12 object-contain" />
          </a>
        </div>
        <span className="inline-block bg-white border border-orange-300 text-orange-500 px-4 py-1 rounded-full text-sm font-semibold shadow">
  Supported by <span className="font-bold">Y Combinator</span>
</span>
      </div>

      {/* --- Top Marquee Section --- */}
  <div className="overflow-hidden w-full mb-0.5" style={{background: '#6aa84f'}}>
        <div
          ref={marqueeRef}
          className="whitespace-nowrap text-base font-medium py-2 flex"
          style={{
            color: '#fff',
            minWidth: 'max-content',
            willChange: 'transform',
            letterSpacing: '0.5px',
          }}
        >
          {[...dynamicTexts, ...dynamicTexts].map((text, idx) => (
            <span key={idx} className="mx-2 inline-block" style={{fontWeight: 500}}>{text}</span>
          ))}
        </div>
      </div>

      {/* --- Food Image Gallery Section --- */}
      <div className="flex justify-center w-full px-2 md:px-8 lg:px-48 xl:px-72 2xl:px-96 relative" style={{marginTop: 0}}>
        <img 
          src={showGallery ? foodImages[galleryIndex] : foodImages[0]} 
          alt="FoodMunch delivery" 
          className="rounded-2xl shadow-lg object-cover w-full max-w-5xl h-auto"
        />
        {!showGallery && (
          <button 
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full p-6 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
            aria-label="Play Food Gallery"
          >
            <FaPlay className="text-3xl" />
          </button>
        )}
      </div>

      {/* --- Discover Restaurants Section --- */}
      <div className="w-full flex flex-col items-center mt-6">
  <h2 className="text-xl md:text-2xl font-bold text-center mb-2 px-2 text-gray-800 leading-tight">Discover top online restaurants in one spot</h2>
  <p className="text-base md:text-lg text-center text-gray-700 px-2">Get all your favorite dishes in a single order</p>
      {/* Marquee Grid Section (for restaurants) */}
      <div className="w-full overflow-x-hidden py-6">
        <MarqueeGrid />
      </div>
      <div className="w-full flex justify-center mt-4">
        <a href="/restaurants" className="bg-[#df6b0c] hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full shadow transition">See more</a>
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
const foodListImages = Array.from({length: 31}, (_, i) => `/src/assets/Foodlist/${i+1}.jpeg`);

const foodListInfo = [
  "Spicy Chicken Bowl", "Classic Burger", "Veggie Delight", "Seafood Platter", "Pasta Fiesta", "Sushi Combo", "Taco Trio", "Grilled Steak", "Paneer Tikka", "Falafel Wrap",
  "Pizza Supreme", "Salad Bowl", "Butter Chicken", "Fish & Chips", "Ramen Bowl", "BBQ Ribs", "Curry Rice", "Dumpling Basket", "Shawarma Roll", "Egg Fried Rice",
  "Momo Platter", "Kebab Mix", "Cheese Sandwich", "Fruit Parfait", "Soup Special", "Noodle Box", "Chicken Wings", "Veggie Pizza", "Lamb Chops", "Prawn Curry", "Steak Frites", "Veggie Burger"
];

function MarqueeGrid() {
  // --- State and Refs ---
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // --- Effects ---
  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;
    let animationFrame;
    let contentWidth = 0;
    let containerWidth = 0;
    if (marquee) {
      contentWidth = marquee.scrollWidth;
      containerWidth = marquee.parentElement.offsetWidth;
      offset = 0;
      marquee.style.transform = `translateX(${offset}px)`;
    }
    const animate = () => {
      if (!isPaused) {
        offset -= 1.2;
        if (marquee) {
          marquee.style.transform = `translateX(${offset}px)`;
          if (offset < -contentWidth) {
            offset = containerWidth;
          }
        }
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
        className="flex gap-8 items-center px-4"
        style={{willChange: 'transform', cursor: 'grab'}}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...foodListImages, ...foodListImages].map((img, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-start justify-start w-80 h-64 p-4 transition-transform duration-200 hover:scale-105 hover:z-10 border border-gray-100" style={{minWidth: '320px'}}>
            <img src={img} alt={foodListInfo[idx % foodListInfo.length]} className="w-full h-40 object-cover rounded-xl mb-3" />
            <div className="text-lg font-bold text-gray-900 mb-1">{foodListInfo[idx % foodListInfo.length]}</div>
            <div className="text-sm text-gray-600">Delicious & Fresh</div>
          </div>
        ))}
      </div>
    </div>
  );
}

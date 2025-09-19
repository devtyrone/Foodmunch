/**
 * PromoSection.jsx
 * Modern promotional section with compelling CTAs, stats, and app download incentives.
 * Features gradient backgrounds, animated elements, and social proof.
 */
import React from 'react';
import { FaApple, FaGooglePlay, FaStar, FaUsers, FaClock, FaGift } from 'react-icons/fa';

const PromoSection = () => (
  <div className="w-full bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 py-20 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-300 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Main CTA */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
              <FaGift className="text-yellow-400" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Craving Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                Delicious?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Get your favorite meals delivered in <span className="text-yellow-400 font-bold">20 minutes</span> or less. 
              Download now and get <span className="text-green-400 font-bold">₦500 off</span> your first order!
            </p>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#" 
              className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaApple className="text-2xl" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
              <span className="group-hover:translate-x-1 transition-transform text-yellow-400">→</span>
            </a>
            
            <a 
              href="#" 
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <div className="text-xs text-green-200">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
              <span className="group-hover:translate-x-1 transition-transform text-yellow-400">→</span>
            </a>
          </div>

          {/* Promo Code */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-4 rounded-2xl inline-flex items-center gap-3 font-bold text-lg shadow-lg">
            <FaGift className="text-xl" />
            Use code: <span className="bg-black text-yellow-400 px-3 py-1 rounded-lg">FIRST500</span>
          </div>
        </div>

        {/* Right Column - Stats & Features */}
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaUsers className="text-black text-xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaClock className="text-black text-xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">20min</div>
              <div className="text-gray-300 text-sm">Avg Delivery</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-red-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaStar className="text-black text-xl" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">4.8★</div>
              <div className="text-gray-300 text-sm">App Rating</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-black text-xl font-bold">15+</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">Restaurants</div>
              <div className="text-gray-300 text-sm">In Ibadan</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose FoodMunch?</h3>
            
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">⚡</span>
              </div>
              <div>
                <div className="text-white font-semibold">Lightning Fast Delivery</div>
                <div className="text-gray-300 text-sm">Real-time tracking & 20min average delivery</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🛡️</span>
              </div>
              <div>
                <div className="text-white font-semibold">Secure & Safe</div>
                <div className="text-gray-300 text-sm">Contactless delivery & secure payments</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🎯</span>
              </div>
              <div>
                <div className="text-white font-semibold">Best Local Restaurants</div>
                <div className="text-gray-300 text-sm">Handpicked Ibadan favorites & hidden gems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PromoSection;
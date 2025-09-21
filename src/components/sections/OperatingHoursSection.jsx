import React, { useState, useEffect } from 'react';
import { FaFire, FaStar, FaArrowRight, FaUsers, FaUtensils, FaClock } from 'react-icons/fa';
import { formatNGN } from '../../utils/currency';
import { useNavigate } from 'react-router-dom';

// Single featured deal - Family Platter
export const familyPlatterDeal = {
  id: 1000, // Special ID for the family platter
  name: 'Family Feast Platter',
  originalPrice: 25000,
  dealPrice: 20000,
  discount: '20%',
  description: 'A bountiful feast designed for the whole family! This generous platter includes a variety of our most popular dishes to satisfy every appetite.',
  code: 'FAMILY20',
  image: '/assets/Foodlist/13.jpeg',
  badge: 'LIMITED OFFER',
  color: 'from-red-600 to-orange-600',
  includes: [
    'Jollof Rice (serves 4-6)',
    'Grilled Chicken (1 whole)',
    'Fried Rice (serves 4-6)',
    'Grilled Beef (6 skewers)',
    'Peppered Gizzards',
    'Fried Plantains',
    'Coleslaw & Salad',
    '4 Soft Drinks (50cl)'
  ],
  availability: 100, // Number of available uses for the promo code
  category: 'special',
  rating: 4.9,
  reviews: 156,
  description_long: 'Our signature Family Feast Platter is perfect for gatherings and special occasions. This extensive platter features a variety of our most popular dishes, including both Jollof and Fried Rice, tender grilled meats, and refreshing sides. Serves 4-6 people.'
};

const operatingHoursData = [
  { day: 'MONDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'TUESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'WEDNESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'THURSDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'FRIDAY', open: '8:00 AM', close: '11:00 PM' },
  { day: 'SATURDAY', open: '9:00 AM', close: '11:00 PM' },
  { day: 'SUNDAY', open: '10:00 AM', close: '9:00 PM' }
];

const DailyDealsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('daily-deals-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleOrderNow = () => {
    // Navigate to the family platter item details page
    navigate(`/item/${familyPlatterDeal.id}`, { 
      state: { 
        isSpecialDeal: true,
        promoCode: familyPlatterDeal.code,
        originalPrice: familyPlatterDeal.originalPrice,
        availability: familyPlatterDeal.availability
      } 
    });
  };

  return (
    <section id="daily-deals-section" className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <FaFire className="text-red-500 animate-pulse" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Hot Deals</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-6 leading-tight">
            FAMILY FEAST SPECIAL
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Limited time offer! Feed your whole family with our exclusive family platter.
          </p>
        </div>

        {/* Family Platter Deal */}
        <div className={`relative bg-gradient-to-r ${familyPlatterDeal.color} p-1 rounded-3xl shadow-2xl transform transition-all duration-500 group max-w-5xl mx-auto`}>
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  {familyPlatterDeal.discount} OFF
                </div>
                <img 
                  src={familyPlatterDeal.image} 
                  alt={familyPlatterDeal.name}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder-food.jpg';
                  }}
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Only {familyPlatterDeal.availability} available at this price!
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
                  <FaUsers className="text-orange-400" />
                  <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">{familyPlatterDeal.badge}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{familyPlatterDeal.name}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{familyPlatterDeal.description}</p>
                
                <div className="mb-6 text-left">
                  <h4 className="text-xl font-semibold text-white mb-3">Includes:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {familyPlatterDeal.includes.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <span className="text-orange-400">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
                  <div className="text-center sm:text-left">
                    <p className="text-gray-400 text-sm">Original Price</p>
                    <span className="text-2xl text-gray-400 line-through">{formatNGN(familyPlatterDeal.originalPrice)}</span>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-gray-400 text-sm">Special Price</p>
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {formatNGN(familyPlatterDeal.dealPrice)}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUtensils className="text-orange-400" />
                    <span className="text-orange-400 font-medium">Use code: </span>
                    <span className="font-mono bg-gray-900 px-3 py-1 rounded-md text-yellow-400">{familyPlatterDeal.code}</span>
                    <span className="ml-auto text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                      Limited to {familyPlatterDeal.availability} uses
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Apply this code at checkout to claim your discount</p>
                </div>
                
                <button 
                  onClick={handleOrderNow}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-3"
                >
                  Order Now <FaArrowRight />
                </button>
                
                <p className="text-center mt-4 text-sm text-gray-400">
                  Only {familyPlatterDeal.availability} orders available at this price. Order now before it's gone!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 text-orange-400 mb-4">
            <FaStar className="animate-pulse" />
            <span className="font-medium">Why Choose Our Family Platter?</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: '🍽️',
                title: 'Feeds 4-6 People',
                description: 'Generous portions to satisfy the whole family with plenty to go around.'
              },
              {
                icon: '⏱️',
                title: 'Ready in 30 Minutes',
                description: 'Prepared fresh when you order, ensuring the best quality and taste.'
              },
              {
                icon: '🚚',
                title: 'Free Delivery',
                description: 'Complimentary delivery on all family platter orders over ₦15,000.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Operating Hours */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaClock className="text-orange-400 text-2xl" />
              <h3 className="text-3xl font-bold text-white">Operating Hours</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
              {operatingHoursData.map((day, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30 rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <p className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {day.day.slice(0, 3)}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {day.open} - {day.close}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyDealsSection;

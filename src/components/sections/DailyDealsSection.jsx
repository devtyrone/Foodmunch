import React, { useState, useEffect } from 'react';
import { FaClock, FaFire, FaPercent, FaGift, FaStar, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { formatNGN } from '../../utils/currency';

const dealsData = [
  {
    day: 'MONDAY',
    dayShort: 'MON',
    item: 'Fufu & Egusi Special',
    originalPrice: 7500,
    dealPrice: 5500,
    discount: '27%',
    description: 'Start your week with authentic Nigerian flavors! Includes chicken and fish options.',
    code: 'MONDAYEGUSI',
    image: '/assets/Foodlist/1.jpeg',
    badge: 'POPULAR',
    color: 'from-blue-600 to-purple-600'
  },
  {
    day: 'TUESDAY',
    dayShort: 'TUE',
    item: 'Shawarma Combo Deal',
    originalPrice: 7500,
    dealPrice: 6000,
    discount: '20%',
    description: 'Any 2 shawarmas (chicken, beef, or mixed) + 2 drinks. Perfect for sharing!',
    code: 'TUESHAWA',
    image: '/assets/Foodlist/3.jpeg',
    badge: 'COMBO',
    color: 'from-green-600 to-teal-600'
  },
  {
    day: 'WEDNESDAY',
    dayShort: 'WED',
    item: 'Wing Wednesday',
    originalPrice: 4500,
    dealPrice: 3200,
    discount: '29%',
    description: 'Crispy chicken wings with our signature spice blend. Dine-in or takeaway.',
    code: 'WINGWED',
    image: '/assets/Foodlist/21.jpeg',
    badge: 'HOT DEAL',
    color: 'from-orange-600 to-red-600'
  },
  {
    day: 'THURSDAY',
    dayShort: 'THU',
    item: 'Rice & Stew Feast',
    originalPrice: 6000,
    dealPrice: 4500,
    discount: '25%',
    description: 'Choice of white rice with chicken or fish stew. Includes plantain and salad.',
    code: 'THURRICE',
    image: '/assets/Foodlist/15.jpeg',
    badge: 'FEAST',
    color: 'from-purple-600 to-pink-600'
  },
  {
    day: 'FRIDAY',
    dayShort: 'FRI',
    item: 'Pizza & Burger Night',
    originalPrice: 18500,
    dealPrice: 15000,
    discount: '19%',
    description: 'End the week right! One large pizza + one classic burger. Perfect for date night.',
    code: 'FRINIGHT',
    image: '/assets/Foodlist/30.jpeg',
    badge: 'WEEKEND',
    color: 'from-indigo-600 to-blue-600'
  },
  {
    day: 'WEEKEND',
    dayShort: 'SAT-SUN',
    item: 'Family Platter',
    originalPrice: 25000,
    dealPrice: 20000,
    discount: '20%',
    description: 'Feed the whole family! Mixed platter with rice, chicken, beef, and sides for 4-6 people.',
    code: 'WEEKEND',
    image: '/assets/Foodlist/13.jpeg',
    badge: 'FAMILY',
    color: 'from-red-600 to-orange-600'
  }
];

const operatingHoursData = [
  { day: 'MONDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'TUESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'WEDNESDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'THURSDAY', open: '8:00 AM', close: '10:00 PM' },
  { day: 'FRIDAY', open: '8:00 AM', close: '11:00 PM' },
  { day: 'SATURDAY', open: '9:00 AM', close: '11:00 PM' },
];

const DailyDealsSection = () => {
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const getCurrentDayName = () => {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return days[currentDay];
  };

  const getTodaysDeal = () => {
    const today = getCurrentDayName();
    if (today === 'SATURDAY' || today === 'SUNDAY') {
      return dealsData.find(deal => deal.day === 'WEEKEND');
    }
    return dealsData.find(deal => deal.day === today);
  };

  const todaysDeal = getTodaysDeal();

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
            DAILY DEALS
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Incredible savings every day of the week. Fresh flavors, unbeatable prices!
          </p>
        </div>

        {/* Today's Featured Deal */}
        {todaysDeal && (
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-white/80 mb-4">
                <FaCalendarAlt className="text-orange-400" />
                <span className="text-lg font-medium">Today's Special - {getCurrentDayName()}</span>
              </div>
            </div>
            
            <div className={`relative bg-gradient-to-r ${todaysDeal.color} p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 group`}>
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                      {todaysDeal.discount} OFF
                    </div>
                    <img 
                      src={todaysDeal.image} 
                      alt={todaysDeal.item}
                      className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder-food.jpg';
                      }}
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
                      <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">{todaysDeal.badge}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{todaysDeal.item}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{todaysDeal.description}</p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                      <span className="text-2xl text-gray-400 line-through">{formatNGN(todaysDeal.originalPrice)}</span>
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                        {formatNGN(todaysDeal.dealPrice)}
                      </span>
                    </div>
                    
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <FaGift className="text-yellow-400" />
                        <span className="text-white font-semibold">Promo Code:</span>
                      </div>
                      <code className="text-yellow-400 font-mono text-lg font-bold">{todaysDeal.code}</code>
                    </div>
                    
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto md:mx-0">
                      Order Now
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Deals Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Weekly Deal Calendar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealsData.map((deal, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                  deal.day === getCurrentDayName() || (deal.day === 'WEEKEND' && (getCurrentDayName() === 'SATURDAY' || getCurrentDayName() === 'SUNDAY'))
                    ? 'ring-2 ring-orange-500 shadow-orange-500/25' 
                    : ''
                }`}
                onClick={() => setSelectedDeal(selectedDeal === index ? null : index)}
              >
                {/* Day Badge */}
                <div className={`absolute -top-3 -right-3 bg-gradient-to-r ${deal.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {deal.dayShort}
                </div>
                
                {/* Deal Badge */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {deal.badge}
                </div>
                
                <img 
                  src={deal.image} 
                  alt={deal.item}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/placeholder-food.jpg';
                  }}
                />
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {deal.item}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">{formatNGN(deal.originalPrice)}</span>
                      <span className="text-green-400 font-bold text-lg">{formatNGN(deal.dealPrice)}</span>
                    </div>
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{deal.discount}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {deal.description}
                  </p>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Code:</span>
                      <code className="text-yellow-400 font-mono font-semibold">{deal.code}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Hours */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FaClock className="text-orange-400 text-2xl" />
              <h3 className="text-3xl font-bold text-white">Operating Hours</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {operatingHoursData.map((day, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30 rounded-xl p-4 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <p className="font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {day.day.slice(0, 3)}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {day.open}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {day.close}
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

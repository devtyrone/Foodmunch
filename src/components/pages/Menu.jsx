import React, { useState, useMemo } from 'react';
import PromoSection from '../sections/PromoSection';
import HeroSection from '../sections/HeroSection';
import { FaShoppingCart, FaSearch, FaTimes, FaFilter, FaStar, FaHeart, FaUtensils, FaUsers, FaTag } from 'react-icons/fa';
import CartOverlay from '../overlays/CartOverlay';
import { useCart } from '../../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import { formatNGN } from '../../utils/currency';

const foodItems = [
  { id: 1, name: 'fufu and Egusi with chicken', description: 'A savory West African dish featuring starchy fufu, rich egusi stew, and tender chicken!', price: 7500.00, image: '/assets/Foodlist/1.jpeg', category: 'Traditional', rating: 4.8, cookTime: '15-30 min' }, 
  { id: 2, name: 'fufu and Egusi with Fish', description: 'A flavorful West African meal with smooth fufu, nutty egusi stew, and succulent fish.', price: 6500.00, image: '/assets/Foodlist/2.jpeg', category: 'Traditional', rating: 4.7, cookTime: '15-30 min' },
  { id: 3, name: 'Beef Shawarma', description: 'Savory beef, cumin-marinated, slow-roasted, served with pickles, flatbread.', price: 2800.00, image: '/assets/Foodlist/3.jpeg', category: 'Fast Food', rating: 4.6, cookTime: '10-20 min' },
  { id: 4, name: 'Chicken Shawarma', description: 'Juicy chicken, yogurt-marinated, spiced with paprika, wrapped with tahini, veggies.', price: 3500.00, image: '/assets/Foodlist/4.jpeg', category: 'Fast Food', rating: 4.3, cookTime: '10-20 min' },
  { id: 6, name: 'Mixed Shawarma', description: 'Chicken and beef blend, spiced, hearty, wrapped with tahini, pickles.', price: 4000.00, image: '/assets/Foodlist/6.jpeg', category: 'Fast Food', rating: 4.7, cookTime: '15-20 min' },
  { id: 10, name: 'Chinese Fried rice', description: 'Chinese fried rice + chicken dish (e.g., chili chicken) ', price: 8500.00, image: '/assets/Foodlist/10.jpeg', category: 'Asian', rating: 4.9, cookTime: '15-20 min' },
  { id: 13, name: 'A plate with Chicken', description: 'Tender chicken portions served with savory sauce and sides.', price: 3000.00, image: '/assets/Foodlist/13.jpeg', category: 'Traditional', rating: 4.1, cookTime: '15-30 min' },
  { id: 14, name: 'Yam and Fried Egg', description: 'Crispy fried yam served with fried eggs and spicy pepper sauce.', price: 2000.00, image: '/assets/Foodlist/14.jpeg', category: 'Breakfast', rating: 4.4, cookTime: '10-20 min' },
  { id: 15, name: 'White Rice with fish sauce', description: 'Steamed white rice served with rich, flavorful fish stew.', price: 3500.00, image: '/assets/Foodlist/15.jpeg', category: 'Traditional', rating: 4.5, cookTime: '15-30 min' },
  { id: 16, name: 'Yam and Stew sauce', description: 'Fried yam topped with hearty tomato stew.', price: 2500.00, image: '/assets/Foodlist/16.jpeg', category: 'Breakfast', rating: 4.5, cookTime: '15-30 min' },
  { id: 20, name: 'Yam and Chicken sauce', description: 'Yam paired with a flavorful chicken stew.', price: 2700.00, image: '/assets/Foodlist/20.jpeg', category: 'Breakfast', rating: 4.7, cookTime: '15-30 min' },
  { id: 21, name: 'Chicken wings', description: 'Crispy chicken wings tossed in a signature spice blend.', price: 4500.00, image: '/assets/Foodlist/21.jpeg', category: 'Grilled', rating: 4.8, cookTime: '15-20 min' },
  { id: 22, name: 'White Rice with Chicken sauce', description: 'Steamed white rice served with tasty chicken stew.', price: 3000.00, image: '/assets/Foodlist/22.jpeg', category: 'Traditional', rating: 4.2, cookTime: '15-20 min' },
  { id: 28, name: 'A plate with Beef', description: 'Seasoned beef slices served with sauce and sides.', price: 2500.00, image: '/assets/Foodlist/28.jpeg', category: 'Grilled', rating: 4.5, cookTime: '15-20 min' },
  { id: 29, name: 'Pap and Akara', description: 'Warm pap (ogi) served with freshly fried akara (bean cakes).', price: 2500.00, image: '/assets/Foodlist/29.jpeg', category: 'Breakfast', rating: 4.2, cookTime: '15-20 min' },
  { id: 30, name: 'Pizza', description: 'Savory tomato sauce, mozzarella, fresh toppings, crispy base, customizable.', price: 10000.00, image: '/assets/Foodlist/pizza.jpeg', category: 'Fast Food', rating: 4.3, cookTime: '15-20 min' },
  { id: 31, name: 'Burger', description: 'Juicy patty, fresh toppings, soft bun, savory, customizable, handheld.', price: 10500.00, image: '/assets/Foodlist/burger.jpeg', category: 'Fast Food', rating: 4.8, cookTime: '10-15 min' },
 
];

const categories = ['All', 'Traditional', 'Fast Food', 'Asian', 'Grilled', 'Breakfast'];

const Menu = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount, addToCart: addItemToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const addToCart = (item) => {
    addItemToCart(item);
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  // Filter items by search term and category
  const filteredItems = useMemo(() => {
    let items = foodItems;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    const q = searchTerm.trim().toLowerCase();
    if (q) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q)
      );
    }
    
    return items;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover authentic Nigerian flavors and international favorites, freshly prepared with love
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for dishes, ingredients, or cuisine..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all text-gray-900 placeholder-gray-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter with Glassmorphism */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-600/90 to-orange-500/90 backdrop-blur-xl border border-white/20 text-white shadow-lg'
                    : 'bg-white/20 backdrop-blur-xl border border-white/30 text-gray-600 hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Family Feast Special */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="inline-block bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                  🎉 LIMITED TIME OFFER
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🍽️ Family Feast Platter
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                Treat your loved ones to an unforgettable dining experience! Our Family Feast Platter is a culinary journey featuring our most-loved dishes, perfectly portioned for 4-6 people. Each bite is a celebration of flavor and tradition.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-2xl mx-auto">
                <div className="text-center p-3 bg-white/50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">4-6</div>
                  <div className="text-sm text-gray-600">People</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">10+</div>
                  <div className="text-sm text-gray-600">Dishes</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">45<span className="text-base">min</span></div>
                  <div className="text-sm text-gray-600">Ready Time</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">4.9<span className="text-base">/5</span></div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            {/* Centered Image */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/assets/Foodlist/13.jpeg" 
                  alt="Family Feast Platter"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-2 rounded-tl-2xl shadow-lg">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm line-through opacity-90">₦25,000</span>
                    <span className="text-xl font-bold">
                      ₦20,000
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-lg max-w-2xl mx-auto shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                  <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Special Family Deal! 🎉</h4>
                  <p className="text-gray-700 text-sm">
                    Use code <span className="font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">FAMILY20</span> at checkout to get 20% off your first order! 
                    <span className="block mt-1 font-medium text-amber-700">Save ₦5,000 instantly</span>
                  </p>
                </div>
                <div className="hidden md:block flex-shrink-0">
                  <div className="flex items-center space-x-1 text-amber-600 text-sm">
                    <span className="font-medium">Limited Time Offer</span>
                    <svg className="h-4 w-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    src={`/assets/avatars/avatar-${i}.jpg`} 
                    alt="Happy customer"
                    className="w-8 h-8 rounded-full border-2 border-white"
                    onError={(e) => {
                      e.target.src = `https://i.pravatar.cc/150?img=${i+10}`;
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★★★★★</span>
                  <span className="font-medium text-gray-900">4.9</span>
                  <span className="mx-1">•</span>
                  <span>200+ Happy Families Served</span>
                </div>
                <div className="text-xs text-gray-500">Order in the next 2 hours for same-day delivery</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button
                onClick={() => {
                  addItemToCart({
                    id: 1000,
                    name: 'Family Feast Platter',
                    price: 25000.00,
                    originalPrice: 25000.00,
                    image: '/assets/Foodlist/13.jpeg',
                    quantity: 1,
                    promoCode: 'FAMILY20',
                    isSpecialDeal: true,
                    requiresPromoCode: true
                  });
                }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
              <button
                onClick={() => {
                  navigate(`/item/1000`, { 
                    state: { 
                      isSpecialDeal: true,
                      promoCode: 'FAMILY20',
                      originalPrice: 25000,
                      availability: 100
                    } 
                  });
                }}
                className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-red-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                <FaUtensils />
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No dishes found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or browse different categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Show All Items
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 text-center">
                {filteredItems.length} dish{filteredItems.length !== 1 ? 'es' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/assets/placeholder-food.jpg';
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {item.category}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        favorites.has(item.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <FaHeart size={16} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Rating and Cook Time */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" size={14} />
                        <span className="font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🕒</span>
                        <span>{item.cookTime}</span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {formatNGN(item.price)}
                      </div>
                    </div>
                    
                    {/* Action Buttons with Glassmorphism */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => addToCart(item)}
                        className="w-12 h-12 bg-gradient-to-r from-red-600/90 to-orange-500/90 hover:from-red-700/90 hover:to-orange-600/90 backdrop-blur-xl border border-white/20 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        title="Add to Cart"
                      >
                        <FaShoppingCart size={16} />
                      </button>
                      <Link
                        to={`/item/${item.id}`}
                        className="flex-1 bg-white border-2 border-gray-300 hover:border-red-500 hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-xl font-bold transition-all duration-200 text-center flex items-center justify-center gap-2"
                      >
                        <FaUtensils size={14} />
                        View Menu
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Floating Cart Button with Glassmorphism */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600/90 to-orange-500/90 hover:from-red-700/90 hover:to-orange-600/90 backdrop-blur-xl border border-white/20 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 z-50"
        aria-label="Open Cart"
      >
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500/90 backdrop-blur-xl border border-white/20 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold animate-pulse">
            {cartCount}
          </span>
        )}
      </button>

      {/* Sections */}
      <PromoSection />
      <HeroSection />
      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Menu;

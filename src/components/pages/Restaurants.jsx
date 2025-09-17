import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FoodGalleryMarquee from '../sections/FoodGalleryMarquee';
import PromoSection from '../sections/PromoSection';
import SearchFilter from '../sections/SearchFilter';


const restaurantData = [
  { 
    name: 'Sunny Side Club', 
    desc: 'Good food to start your day right!', 
    img: '/assets/Foodlist/1.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.5,
    deliveryTime: 25,
    isPopular: true
  },
  { 
    name: 'The Cocktail Club', 
    desc: 'Premium Cocktails & Mocktails', 
    img: '/assets/Foodlist/2.jpeg',
    cuisine: 'American',
    priceRange: '3',
    rating: 4.2,
    deliveryTime: 30,
    isPopular: false
  },
  { 
    name: 'Suya Central', 
    desc: 'Savor the flavor of authentic suya', 
    img: '/assets/Foodlist/3.jpeg',
    cuisine: 'African',
    priceRange: '2',
    rating: 4.7,
    deliveryTime: 35,
    isPopular: true
  },
  { 
    name: 'The Night Train (TNT)', 
    desc: 'Delicious Late Night Cravings.', 
    img: '/assets/Foodlist/4.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.3,
    deliveryTime: 20,
    isPopular: false
  },
  { 
    name: 'Wrap City', 
    desc: 'Delicious Shawarma, Wraps & More!', 
    img: '/assets/Foodlist/5.jpeg',
    cuisine: 'Middle Eastern',
    priceRange: '2',
    rating: 4.4,
    deliveryTime: 25,
    isPopular: true
  },
  { 
    name: 'CHÕW Asian', 
    desc: 'Delicious & Authentic Asian Flavours', 
    img: '/assets/Foodlist/6.jpeg',
    cuisine: 'Asian',
    priceRange: '3',
    rating: 4.6,
    deliveryTime: 30,
    isPopular: true
  },
  { 
    name: 'Pizza Supreme', 
    desc: 'Hot, cheesy, and loaded with toppings.', 
    img: '/assets/Foodlist/7.jpeg',
    cuisine: 'Italian',
    priceRange: '2',
    rating: 4.1,
    deliveryTime: 35,
    isPopular: false
  },
  { 
    name: 'Salad Bowl', 
    desc: 'Fresh greens and healthy bites.', 
    img: '/assets/Foodlist/8.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.0,
    deliveryTime: 20,
    isPopular: false
  },
  { 
    name: 'Butter Chicken', 
    desc: 'Rich, creamy, and flavorful.', 
    img: '/assets/Foodlist/9.jpeg',
    cuisine: 'Indian',
    priceRange: '3',
    rating: 4.8,
    deliveryTime: 40,
    isPopular: true
  },
  { 
    name: 'Fish & Chips', 
    desc: 'Classic British comfort food.', 
    img: '/assets/Foodlist/10.jpeg',
    cuisine: 'British',
    priceRange: '2',
    rating: 4.2,
    deliveryTime: 30,
    isPopular: false
  },
  { 
    name: 'Ramen Bowl', 
    desc: 'Japanese noodles in savory broth.', 
    img: '/assets/Foodlist/11.jpeg',
    cuisine: 'Japanese',
    priceRange: '3',
    rating: 4.5,
    deliveryTime: 25,
    isPopular: true
  },
  { 
    name: 'BBQ Ribs', 
    desc: 'Smoky, tender, and delicious.', 
    img: '/assets/Foodlist/12.jpeg',
    cuisine: 'American',
    priceRange: '3',
    rating: 4.3,
    deliveryTime: 45,
    isPopular: false
  },
  { 
    name: 'Curry Rice', 
    desc: 'Spicy and aromatic rice dishes.', 
    img: '/assets/Foodlist/13.jpeg',
    cuisine: 'Indian',
    priceRange: '2',
    rating: 4.4,
    deliveryTime: 35,
    isPopular: false
  },
  { 
    name: 'Dumpling Basket', 
    desc: 'Steamed and fried dumplings.', 
    img: '/assets/Foodlist/14.jpeg',
    cuisine: 'Chinese',
    priceRange: '2',
    rating: 4.6,
    deliveryTime: 30,
    isPopular: true
  },
  { 
    name: 'Shawarma Roll', 
    desc: 'Middle Eastern wraps and rolls.', 
    img: '/assets/Foodlist/15.jpeg',
    cuisine: 'Middle Eastern',
    priceRange: '2',
    rating: 4.3,
    deliveryTime: 25,
    isPopular: false
  },
  { 
    name: 'Egg Fried Rice', 
    desc: 'Chinese-style fried rice.', 
    img: '/assets/Foodlist/16.jpeg',
    cuisine: 'Chinese',
    priceRange: '1',
    rating: 4.1,
    deliveryTime: 20,
    isPopular: false
  },
  { 
    name: 'Momo Platter', 
    desc: 'Nepalese dumplings and sauces.', 
    img: '/assets/Foodlist/17.jpeg',
    cuisine: 'Nepalese',
    priceRange: '2',
    rating: 4.7,
    deliveryTime: 35,
    isPopular: true
  },
  { 
    name: 'Kebab Mix', 
    desc: 'Grilled meats and veggies.', 
    img: '/assets/Foodlist/18.jpeg',
    cuisine: 'Middle Eastern',
    priceRange: '3',
    rating: 4.4,
    deliveryTime: 30,
    isPopular: false
  },
  { 
    name: 'Cheese Sandwich', 
    desc: 'Classic comfort food.', 
    img: '/assets/Foodlist/19.jpeg',
    cuisine: 'American',
    priceRange: '1',
    rating: 3.9,
    deliveryTime: 15,
    isPopular: false
  },
  { 
    name: 'Fruit Parfait', 
    desc: 'Layers of fruit and yogurt.', 
    img: '/assets/Foodlist/20.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.0,
    deliveryTime: 20,
    isPopular: false
  },
  { 
    name: 'Soup Special', 
    desc: 'Warm and hearty soups.', 
    img: '/assets/Foodlist/21.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.2,
    deliveryTime: 25,
    isPopular: false
  },
];

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    rating: '',
    deliveryTime: '',
    sortBy: 'popularity'
  });

  const filteredRestaurants = useMemo(() => {
    let filtered = [...restaurantData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Cuisine filter
    if (filters.cuisine) {
      filtered = filtered.filter(restaurant => restaurant.cuisine === filters.cuisine);
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(restaurant => restaurant.priceRange === filters.priceRange);
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter(restaurant => restaurant.rating >= parseFloat(filters.rating));
    }

    // Delivery time filter
    if (filters.deliveryTime) {
      filtered = filtered.filter(restaurant => restaurant.deliveryTime <= parseInt(filters.deliveryTime));
    }

    // Sort
    switch (filters.sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'delivery':
        filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
        break;
      case 'price-low':
        filtered.sort((a, b) => parseInt(a.priceRange) - parseInt(b.priceRange));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.priceRange) - parseInt(a.priceRange));
        break;
      case 'newest':
        // For demo purposes, we'll sort by name
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popularity':
      default:
        filtered.sort((a, b) => b.isPopular - a.isPopular);
        break;
    }

    return filtered;
  }, [searchTerm, filters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const getPriceDisplay = (priceRange) => {
    return '$'.repeat(parseInt(priceRange));
  };

  return (
    <div className="min-h-screen bg-white">
      <FoodGalleryMarquee />
      <SearchFilter 
        onSearch={handleSearch}
        onFilter={handleFilter}
        restaurants={restaurantData}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-800">Meet the Restaurants</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">Handpicked selection of top on-demand delivery restaurants.</p>
        
        <div className="mb-6">
          <p className="text-gray-600 text-center">
            {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((r, idx) => (
            <Link to={`/restaurants/${idx}`} className="w-full" key={r.name}>
              <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start justify-start w-full h-80 p-4 transition-transform duration-200 hover:scale-105 hover:z-10 border border-gray-100 relative">
                {r.isPopular && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <img src={r.img} alt={r.name} className="w-full h-40 object-cover rounded-xl mb-3" />
                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-bold text-gray-900">{r.name}</div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium text-gray-700">{r.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{r.desc}</div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{r.cuisine}</span>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <span className="text-green-500 mr-1">⏱</span>
                        {r.deliveryTime}min
                      </span>
                      <span className="text-orange-500 font-semibold">
                        {getPriceDisplay(r.priceRange)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Professional Info Section */}
  <div className="w-full max-w-5xl mx-auto mt-16 mb-8 px-2 md:px-6 py-8 md:py-10 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Why Choose Our Restaurants?</h2>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl">We partner with the best restaurants to bring you a curated selection of top-quality meals, fast delivery, and a seamless ordering experience. Every restaurant is handpicked for its excellence, variety, and commitment to customer satisfaction.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-3">            git remote set-url origin https://github.com/kingGeez01/Foodmunch.git            git remote set-url origin https://github.com/kingGeez01/Foodmunch.git
              <span className="text-2xl font-bold text-orange-500">★</span>
            </div>
            <div className="font-semibold text-gray-900 mb-1">Top Quality</div>
            <div className="text-sm text-gray-600">Only the best restaurants and chefs make the cut.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-green-500">⚡</span>
            </div>
            <div className="font-semibold text-gray-900 mb-1">Fast Delivery</div>
            <div className="text-sm text-gray-600">Enjoy your favorite meals delivered quickly and fresh.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-blue-500">✔</span>
            </div>
            <div className="font-semibold text-gray-900 mb-1">Trusted Service</div>
            <div className="text-sm text-gray-600">Thousands of happy customers and glowing reviews.</div>
          </div>
        </div>
      </div>
      <PromoSection />
    </div>
  );
};

export default Restaurants;

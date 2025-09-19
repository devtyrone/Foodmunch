import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FoodGalleryMarquee from '../sections/FoodGalleryMarquee';
import PromoSection from '../sections/PromoSection';
import SearchFilter from '../sections/SearchFilter';


// Top Restaurants in Ibadan, Nigeria (September 2025)
const restaurantData = [
  { 
    name: 'Chicken Republic', 
    desc: 'Nigeria\'s fastest-growing chicken-focused quick service restaurant chain, famous for Soulfully Spiced Chicken with authentic West African herbs and spices', 
    img: '/assets/resturants/chicken republic.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.8,
    deliveryTime: 20,
    isPopular: true,
    location: 'Multiple locations across Ibadan',
    mustTry: 'Soulfully Spiced Chicken with tasty sides',
    vibe: 'Clean, cool ambient restaurant with excellent customer service',
    cost: '₦2,000–₦4,500'
  },
  { 
    name: 'Martha\'s Kitchen', 
    desc: 'Homely spot with hearty, catering-style meals at budget prices—popular for family dining', 
    img: '/assets/resturants/1.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.5,
    deliveryTime: 30,
    isPopular: false,
    location: 'Jericho',
    mustTry: 'Jollof rice or spicy pepper soup',
    vibe: 'Cozy and welcoming',
    cost: '₦2,000–₦4,000'
  },
  { 
    name: 'Ibachi (Ibadan Chinese)', 
    desc: 'Successor to Kabachi, known for bold stir-fries and a local "secret sauce"', 
    img: '/assets/resturants/3.jpeg',
    cuisine: 'Chinese',
    priceRange: '2',
    rating: 4.4,
    deliveryTime: 35,
    isPopular: true,
    location: 'New Bodija',
    mustTry: 'Sweet-and-sour chicken or fried rice',
    vibe: 'Modern and upbeat',
    cost: '₦3,000–₦5,000'
  },
  { 
    name: 'Kilimanjaro Restaurant', 
    desc: 'One of Nigeria\'s fastest-growing restaurant chains since 2004, offering tasty Nigerian meals with convenient pickup and delivery options', 
    img: '/assets/resturants/kilimanjaro.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.6,
    deliveryTime: 25,
    isPopular: true,
    location: 'Multiple locations across Nigeria',
    mustTry: 'Nigerian staples and quick service meals',
    vibe: 'Modern quick service restaurant with digital convenience',
    cost: '₦2,000–₦4,000'
  },
  { 
    name: 'Five Continents', 
    desc: 'Unique global tasting experience in a stylish venue, blending cuisines from five continents', 
    img: '/assets/resturants/5.jpeg',
    cuisine: 'Multi-Continental',
    priceRange: '3',
    rating: 4.7,
    deliveryTime: 40,
    isPopular: true,
    location: 'Bodija',
    mustTry: 'Continental platter or grilled meats',
    vibe: 'Artistic with evening lights, upscale yet approachable',
    cost: '₦4,000–₦7,000'
  },
  { 
    name: 'Wimpy\'s', 
    desc: 'Decades-old spot with Ibadan\'s best hummus and shawarma, run by warm Lebanese owners', 
    img: '/assets/resturants/6.jpeg',
    cuisine: 'Lebanese',
    priceRange: '2',
    rating: 4.5,
    deliveryTime: 30,
    isPopular: false,
    location: 'Central Ibadan',
    mustTry: 'Hummus platter or mixed grill',
    vibe: 'Nostalgic, family-like service',
    cost: '₦2,000–₦4,000'
  },
  { 
    name: 'Item7 Go', 
    desc: 'Popular for quick, fresh Nigerian staples, excelling in app-based delivery (Chowdeck, Glovo)', 
    img: '/assets/resturants/item7go.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.3,
    deliveryTime: 20,
    isPopular: true,
    location: 'Bodija/Ring Road',
    mustTry: 'Party jollof rice or chicken shawarma wrap',
    vibe: 'Casual, takeaway-focused with efficient service',
    cost: '₦1,500–₦3,500'
  },
  { 
    name: 'Saire', 
    desc: 'Upscale Yoruba dining with a cultured ambiance, attached to a hotel for stay-and-dine experiences', 
    img: '/assets/resturants/8.jpeg',
    cuisine: 'Nigerian',
    priceRange: '3',
    rating: 4.6,
    deliveryTime: 35,
    isPopular: false,
    location: 'Central Ibadan',
    mustTry: 'Signature amala or seafood pepper soup',
    vibe: 'Elegant and refined',
    cost: '₦3,500–₦6,000'
  },
  { 
    name: 'Burger King', 
    desc: 'Trusted global chain with flame-grilled burgers, offering consistency in a family-friendly setting', 
    img: '/assets/resturants/burgerking.jpeg',
    cuisine: 'American',
    priceRange: '2',
    rating: 4.2,
    deliveryTime: 25,
    isPopular: true,
    location: 'Ring Road/Oluyole',
    mustTry: 'Whopper or cheeseburger meal with fries',
    vibe: 'Fast-paced, familiar fast-food vibe',
    cost: '₦2,000–₦4,000'
  },
  { 
    name: 'Tamberma', 
    desc: 'Open-air spot with diverse global dishes and a charming nighttime aesthetic', 
    img: '/assets/resturants/4.jpeg',
    cuisine: 'Fusion',
    priceRange: '3',
    rating: 4.4,
    deliveryTime: 40,
    isPopular: false,
    location: 'Bodija',
    mustTry: 'Wood-fired pizza or grilled suya',
    vibe: 'Rustic with trees and string lights',
    cost: '₦3,000–₦5,500'
  },
  { 
    name: 'Domino\'s Pizza', 
    desc: 'Reliable pizza chain with fast delivery, offering classic and local-inspired toppings (e.g., suya spice)', 
    img: '/assets/resturants/domino.jpeg',
    cuisine: 'Italian',
    priceRange: '2',
    rating: 4.3,
    deliveryTime: 30,
    isPopular: true,
    location: 'Old Bodija/Ring Road',
    mustTry: 'BBQ chicken pizza or calzone pocket',
    vibe: 'Casual, delivery/takeout-focused',
    cost: '₦2,500–₦4,500'
  },
  { 
    name: 'Ultima Restaurant & Lounge', 
    desc: 'Lively lounge with local and global dishes, perfect for social dining with cocktails', 
    img: '/assets/resturants/2.jpeg',
    cuisine: 'Nigerian',
    priceRange: '3',
    rating: 4.4,
    deliveryTime: 35,
    isPopular: false,
    location: 'Bodija',
    mustTry: 'Grilled fish or fusion jollof rice',
    vibe: 'Vibrant with music, social hotspot',
    cost: '₦3,000–₦5,000'
  },
  { 
    name: 'Le Ville', 
    desc: 'Traditional Yoruba meals with warm hospitality, ideal for cultural dining experiences', 
    img: '/assets/resturants/6.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.5,
    deliveryTime: 30,
    isPopular: false,
    location: 'Central Ibadan',
    mustTry: 'Pounded yam with ewedu soup',
    vibe: 'Homey and inviting',
    cost: '₦2,000–₦4,000'
  },
  { 
    name: 'Bliss Farm Kitchen & Bar', 
    desc: 'Fun, affordable spot with quick bites and bar vibes, great for casual hangouts', 
    img: '/assets/resturants/7.jpeg',
    cuisine: 'Nigerian',
    priceRange: '2',
    rating: 4.2,
    deliveryTime: 25,
    isPopular: true,
    location: 'Multiple locations',
    mustTry: 'Spicy wings or loaded fries',
    vibe: 'Social and energetic',
    cost: '₦2,000–₦3,500'
  },
  { 
    name: 'Vintage Lounge', 
    desc: 'Upscale dining with creative fusion dishes in a scenic, poolside setting', 
    img: '/assets/resturants/10.jpeg',
    cuisine: 'Fusion',
    priceRange: '3',
    rating: 4.6,
    deliveryTime: 40,
    isPopular: false,
    location: '3 Dugbe Road',
    mustTry: 'Mediterranean-style pepper soup',
    vibe: 'Sophisticated with a modern edge',
    cost: '₦3,500–₦6,000'
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

    // Limit results to 15 restaurants
    return filtered.slice(0, 15);
  }, [searchTerm, filters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const getPriceDisplay = (priceRange) => {
    return '₦'.repeat(parseInt(priceRange));
  };

  return (
    <div className="min-h-screen bg-white pb-2 md:pb-2">
      {/* Sticky Search & Filter just below fixed Navbar */}
      <div className="sticky top-14 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <SearchFilter 
            onSearch={handleSearch}
            onFilter={handleFilter}
            restaurants={restaurantData}
          />
        </div>
      </div>
      {/* Optional: Keep the gallery below the sticky filter */}
      <FoodGalleryMarquee />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-800">Top Restaurants in Ibadan</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">Curated list of Ibadan's best dining spots, from legendary bukas to modern fusion restaurants.</p>
        
        <div className="mb-6">
          <p className="text-gray-600 text-center">
            {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((r, idx) => (
            <Link to="/menu" className="w-full" key={r.name}>
              <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start justify-start w-full h-96 p-4 transition-transform duration-200 hover:scale-105 hover:z-10 border border-gray-100 relative">
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
                  <div className="text-sm text-gray-600 mb-2 line-clamp-2">{r.desc}</div>
                  {r.mustTry && (
                    <div className="text-xs text-red-600 mb-2 font-medium">Must-try: {r.mustTry}</div>
                  )}
                  <div className="text-xs text-gray-500 mb-2">📍 {r.location}</div>
                  <div className="text-xs text-green-600 mb-3 font-medium">{r.cost}</div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{r.cuisine}</span>
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
        <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-900">Discover Ibadan's Culinary Scene</h2>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-2xl">From popular chains like Chicken Republic to modern fusion spots like Five Continents, our curated list showcases Ibadan's diverse dining landscape. Experience authentic Nigerian cuisine, international flavors, and innovative fusion dishes all in one place.</p>
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

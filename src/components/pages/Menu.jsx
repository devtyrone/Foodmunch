import React from 'react';
import PromoSection from '../sections/PromoSection';
import HeroSection from '../sections/HeroSection';
import { FaShoppingCart } from 'react-icons/fa';
import CartOverlay from '../overlays/CartOverlay'; // Import CartOverlay
import { useCart } from '../../hooks/useCart'; // Corrected import path
// import axios from 'axios'; // Remove axios as we are using local data
import { Link } from 'react-router-dom'; // Import Link

const foodItems = [
  { id: 1, name: 'fufu and Egusi with chicken', description: 'A savory West African dish featuring starchy fufu, rich egusi stew, and tender chicken!', price: 7500.00, image: '/src/assets/Foodlist/1.jpeg' },
  { id: 2, name: 'fufu and Egusi with Fish', description: 'A flavorful West African meal with smooth fufu, nutty egusi stew, and succulent fish.', price: 6500.00, image: '/src/assets/Foodlist/2.jpeg' },
  { id: 3, name: 'Beef Shawarma', description: 'Savory beef, cumin-marinated, slow-roasted, served with pickles, flatbread.', price: 3888.00, image: '/src/assets/Foodlist/3.jpeg' },
  { id: 4, name: 'Chicken Shawarma', description: 'Juicy chicken, yogurt-marinated, spiced with paprika, wrapped with tahini, veggies.', price: 4000.00, image: '/src/assets/Foodlist/4.jpeg' },
  { id: 5, name: 'Turkey Shawarma', description: 'Light turkey, kosher-friendly, tahini-dressed, spiced like chicken, popular in Israel.', price: 4500.00, image: '/src/assets/Foodlist/5.jpeg' },
  { id: 6, name: 'Mixed Shawarma', description: 'Chicken and beef blend, spiced, hearty, wrapped with tahini, pickles.', price: 5500.00, image: '/src/assets/Foodlist/6.jpeg' },
  { id: 7, name: 'Pizza Supreme', description: 'Hot, cheesy, and loaded with toppings.', price: 18.99, image: '/src/assets/Foodlist/7.jpeg' },
  { id: 8, name: 'Salad Bowl', description: 'Fresh greens and healthy bites.', price: 7.99, image: '/src/assets/Foodlist/8.jpeg' },
  { id: 9, name: 'Goat Shawarma', description: 'Tender goat, simply seasoned, Saudi specialty, served with flatbread, veggies.', price: 5000.00, image: '/src/assets/Foodlist/9.jpeg' },
  { id: 10, name: 'Coconut Rice', description: 'Creamy, aromatic rice cooked in coconut milk, paired with fish.', price: 13.75, image: '/src/assets/Foodlist/10.jpeg' },
  { id: 11, name: 'Ramen Bowl', description: 'Japanese noodles in savory broth.', price: 11.99, image: '/src/assets/Foodlist/11.jpeg' },
  { id: 12, name: 'BBQ Ribs', description: 'Smoky, tender, and delicious.', price: 22.00, image: '/src/assets/Foodlist/12.jpeg' },
  { id: 13, name: 'Curry Rice', description: 'Spicy and aromatic rice dishes.', price: 10.00, image: '/src/assets/Foodlist/13.jpeg' },
  { id: 14, name: 'Dumpling Basket', description: 'Steamed and fried dumplings.', price: 9.00, image: '/src/assets/Foodlist/14.jpeg' },
  { id: 15, name: 'Shawarma Roll', description: 'Middle Eastern wraps and rolls.', price: 8.50, image: '/src/assets/Foodlist/15.jpeg' },
  { id: 16, name: 'Egg Fried Rice', description: 'Chinese-style fried rice.', price: 10.50, image: '/src/assets/Foodlist/16.jpeg' },
  { id: 17, name: 'Momo Platter', description: 'Nepalese dumplings and sauces.', price: 11.00, image: '/src/assets/Foodlist/17.jpeg' },
  { id: 18, name: 'Kebab Mix', description: 'Grilled meats and veggies.', price: 17.50, image: '/src/assets/Foodlist/18.jpeg' },
  { id: 19, name: 'Cheese Sandwich', description: 'Classic comfort food.', price: 6.00, image: '/src/assets/Foodlist/19.jpeg' },
  { id: 20, name: 'Fruit Parfait', description: 'Layers of fruit and yogurt.', price: 7.00, image: '/src/assets/Foodlist/20.jpeg' },
  { id: 21, name: 'Soup Special', description: 'Warm and hearty soups.', price: 5.50, image: '/src/assets/Foodlist/21.jpeg' },
  { id: 22, name: 'Noodle Box', description: 'Customizable noodle dishes.', price: 12.00, image: '/src/assets/Foodlist/22.jpeg' },
  { id: 23, name: 'Chicken Wings', description: 'Crispy and saucy wings.', price: 10.00, image: '/src/assets/Foodlist/23.jpeg' },
  { id: 24, name: 'Veggie Pizza', description: 'Fresh vegetables on a classic crust.', price: 16.00, image: '/src/assets/Foodlist/24.jpeg' },
  { id: 25, name: 'Lamb Chops', description: 'Tender and perfectly seasoned.', price: 25.00, image: '/src/assets/Foodlist/25.jpeg' },
  { id: 26, name: 'Prawn Curry', description: 'Rich and aromatic prawn curry.', price: 19.50, image: '/src/assets/Foodlist/26.jpeg' },
  { id: 27, name: 'Steak Frites', description: 'Classic steak with crispy fries.', price: 21.00, image: '/src/assets/Foodlist/27.jpeg' },
  { id: 28, name: 'Veggie Burger', description: 'Healthy and delicious plant-based burger.', price: 11.00, image: '/src/assets/Foodlist/28.jpeg' },
  { id: 29, name: 'Spicy Chicken Bowl', description: 'A fiery kick with tender chicken.', price: 13.00, image: '/src/assets/Foodlist/29.jpeg' },
  { id: 30, name: 'Classic Burger', description: 'Timeless favorite, juicy and satisfying.', price: 9.00, image: '/src/assets/Foodlist/30.jpeg' },
  { id: 31, name: 'Vegan Wrap', description: 'Fresh and flavorful vegan delight.', price: 10.00, image: '/src/assets/Foodlist/31.jpeg' },
];

const Menu = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const { cartCount, addToCart: addItemToCart } = useCart() // Rename addToCart to avoid conflict

  const addToCart = (item) => {
    addItemToCart(item)
    // alert(`${item.name} added to cart!`); // Remove alert
  };

  // Remove unused buyNow function
  // const buyNow = (item) => {
  //   alert(`Purchasing ${item.name} for $${item.price.toFixed(2)}.`);
  //   // Here you would typically integrate with a payment gateway
  //   console.log(`Simulating purchase of ${item.name}`);
  // };

  // Remove useEffect for fetching data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://dummyjson.com/products/category/groceries');
  //       setProducts(response.data.products);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="min-h-screen bg-[#E8F6F8] py-10 px-4 relative">
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition z-50 flex items-center justify-center"
        aria-label="Open Cart"
      >
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-red-500 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>
        )}
      </button>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4" style={{fontFamily: 'inherit'}}>Our Delicious Menu</h1>
        <p className="text-base text-gray-500">Explore a wide variety of meals, freshly prepared for you.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {foodItems.map((product) => (
          <div key={product.id} className="bg-white/10 border border-white/20 shadow-xl rounded-3xl p-6 flex flex-col items-center transition-transform transform duration-300 group">
            <div className="relative w-48 h-48 mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl border border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-300" />
              {/* <span className="absolute top-2 right-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs px-2 py-1 rounded-full shadow">New</span> */} {/* Removed new tag */}
            </div>
            <h2 className="text-2xl font-bold text-pink-600 mb-2 transition-colors duration-200">{product.name}</h2>
            <p className="text-gray-600 text-base mb-4 line-clamp-2 italic">{product.description}</p>
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-pink-600 font-bold text-xl">₦{product.price.toFixed(2)}</span>
              {/* <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold shadow">{product.brand}</span> */} {/* Removed brand tag */}
            </div>
            <div className="flex gap-2 w-full mt-auto">
              <button
                className="w-1/2 py-2 bg-black/20 backdrop-blur-sm border border-black/20 text-black font-bold rounded-xl shadow-lg hover:bg-black/30 transition-all duration-200 flex items-center justify-center"
                onClick={() => addToCart(product)}
                // style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                <FaShoppingCart className="text-lg" />
              </button>
              <Link
                to={`/item/${product.id}`}
                className="w-1/2 py-2 bg-black/20 backdrop-blur-sm border border-black/20 text-black font-bold rounded-xl shadow-lg hover:bg-black/30 transition-all duration-200 flex items-center justify-center"
                // style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)' }}
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Remove Featured, Coming Soon, and Testimonials sections */}
      <PromoSection />
      <HeroSection />
      <CartOverlay isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Menu;

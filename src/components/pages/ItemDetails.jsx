import React from 'react'
import { useParams } from 'react-router-dom' // Removed useNavigate
import { useCart } from '../../hooks/useCart' // Corrected CartContext import path
import { FaShoppingCart, FaCreditCard } from 'react-icons/fa' // Import new icons
import CartOverlay from '../overlays/CartOverlay' // Import CartOverlay

// Re-using the restaurantData as a source for item details for simplicity
// In a real app, you would fetch this from an API
const restaurantData = [
  { id: 1, name: 'Sunny Side Club', desc: 'Good food to start your day right!', img: '/src/assets/Foodlist/1.jpeg', price: 12.99, description_long: 'A perfect start to your day with our delicious Sunny Side Club sandwich, made with fresh ingredients and a rich sauce.' },
  { id: 2, name: 'The Cocktail Club', desc: 'Premium Cocktails & Mocktails', img: '/src/assets/Foodlist/2.jpeg', price: 15.50, description_long: 'Indulge in our exquisite selection of premium cocktails and refreshing mocktails, crafted by expert mixologists.' },
  { id: 3, name: 'Suya Central', desc: 'Savor the flavor of authentic suya', img: '/src/assets/Foodlist/3.jpeg', price: 9.99, description_long: 'Experience the rich and smoky flavors of authentic Nigerian Suya, grilled to perfection with our special blend of spices.' },
  { id: 4, name: 'The Night Train (TNT)', desc: 'Delicious Late Night Cravings.', img: '/src/assets/Foodlist/4.jpeg', price: 11.25, description_long: 'Satisfy your late-night cravings with our selection of delicious and comforting meals, available exclusively after dark.' },
  { id: 5, name: 'Wrap City', desc: 'Delicious Shawarma, Wraps & More!', img: '/src/assets/Foodlist/5.jpeg', price: 8.75, description_long: 'Enjoy a variety of mouth-watering shawarmas and wraps, packed with fresh vegetables and succulent meats or flavorful falafel.' },
  { id: 6, name: 'CHÕW Asian', desc: 'Delicious & Authentic Asian Flavours', img: '/src/assets/Foodlist/6.jpeg', price: 14.00, description_long: 'Dive into the delicious and authentic Asian flavors, from spicy curries to savory stir-fries, prepared with traditional recipes.' },
  { id: 7, name: 'Pizza Supreme', desc: 'Hot, cheesy, and loaded with toppings.', img: '/src/assets/Foodlist/7.jpeg', price: 18.00, description_long: 'Our Pizza Supreme is loaded with fresh vegetables, premium meats, and a generous layer of melted cheese on a perfectly baked crust.' },
  { id: 8, name: 'Salad Bowl', desc: 'Fresh greens and healthy bites.', img: '/src/assets/Foodlist/8.jpeg', price: 10.50, description_long: 'A refreshing and healthy salad bowl with crisp greens, vibrant vegetables, and your choice of protein and dressing.' },
  { id: 9, name: 'Butter Chicken', desc: 'Rich, creamy, and flavorful.', img: '/src/assets/Foodlist/9.jpeg', price: 16.75, description_long: 'Indulge in the rich, creamy, and intensely flavorful Butter Chicken, a classic Indian dish served with fragrant basmati rice.' },
  { id: 10, name: 'Fish & Chips', desc: 'Classic British comfort food.', img: '/src/assets/Foodlist/10.jpeg', price: 13.20, description_long: 'Enjoy the timeless classic Fish & Chips, featuring perfectly battered and fried fish with a side of golden crispy chips.' },
  { id: 11, name: 'Ramen Bowl', desc: 'Japanese noodles in savory broth.', img: '/src/assets/Foodlist/11.jpeg', price: 12.00, description_long: 'Warm up with a hearty Ramen Bowl, filled with springy noodles, rich broth, and a variety of delicious toppings.' },
  { id: 12, name: 'BBQ Ribs', desc: 'Smoky, tender, and delicious.', img: '/src/assets/Foodlist/12.jpeg', price: 20.00, description_long: 'Sink your teeth into our smoky, tender, and fall-off-the-bone BBQ Ribs, slow-cooked to perfection and basted with our signature sauce.' },
  { id: 13, name: 'Curry Rice', desc: 'Spicy and aromatic rice dishes.', img: '/src/assets/Foodlist/13.jpeg', price: 11.50, description_long: 'Explore a variety of spicy and aromatic curry rice dishes, each bursting with authentic flavors and fresh ingredients.' },
  { id: 14, name: 'Dumpling Basket', desc: 'Steamed and fried dumplings.', img: '/src/assets/Foodlist/14.jpeg', price: 9.00, description_long: 'A delightful basket of steamed and fried dumplings, served with a savory dipping sauce – a perfect appetizer or light meal.' },
  { id: 15, name: 'Shawarma Roll', desc: 'Middle Eastern wraps and rolls.', img: '/src/assets/Foodlist/15.jpeg', price: 7.50, description_long: 'Our Shawarma Roll is a flavorful blend of spiced meat, fresh vegetables, and creamy sauce, all wrapped in a soft pita bread.' },
  { id: 16, name: 'Egg Fried Rice', desc: 'Chinese-style fried rice.', img: '/src/assets/Foodlist/16.jpeg', price: 10.00, description_long: 'Classic Chinese-style egg fried rice, stir-fried with fresh vegetables and seasoned to perfection.' },
  { id: 17, name: 'Momo Platter', desc: 'Nepalese dumplings and sauces.', img: '/src/assets/Foodlist/17.jpeg', price: 12.00, description_long: 'A delightful Momo Platter featuring a selection of Nepalese dumplings, served with a spicy dipping sauce.' },
  { id: 18, name: 'Kebab Mix', desc: 'Grilled meats and veggies.', img: '/src/assets/Foodlist/18.jpeg', price: 15.00, description_long: 'Enjoy a succulent Kebab Mix with a variety of grilled meats and fresh vegetables, seasoned with aromatic spices.' },
  { id: 19, name: 'Cheese Sandwich', desc: 'Classic comfort food.', img: '/src/assets/Foodlist/19.jpeg', price: 6.50, description_long: 'A timeless classic, our Cheese Sandwich is made with toasted bread and a generous filling of melted cheese.' },
  { id: 20, name: 'Fruit Parfait', desc: 'Layers of fruit and yogurt.', img: '/src/assets/Foodlist/20.jpeg', price: 8.00, description_long: 'A refreshing Fruit Parfait with layers of fresh seasonal fruits, creamy yogurt, and crunchy granola.' },
  { id: 21, name: 'Soup Special', desc: 'Warm and hearty soups.', img: '/src/assets/Foodlist/21.jpeg', price: 7.00, description_long: 'Our Soup Special features a rotating selection of warm and hearty soups, perfect for any season.' },
];

const ItemDetails = () => {
  const { id } = useParams()
  // const navigate = useNavigate() // Remove unused navigate
  const { addToCart, openCart, isCartOpen, closeCart, cartCount, clearCart } = useCart() // Import clearCart

  const item = restaurantData.find((r) => r.id === parseInt(id))

  if (!item) {
    return <div className="text-center py-10">Item not found.</div>
  }

  const handleAddToCart = () => {
    addToCart({ id: item.id, name: item.name, price: item.price, image: item.img })
    // openCart() // Remove openCart() call for Add to Cart
  }

  const handleBuyNow = () => {
    clearCart() // Clear the cart
    addToCart({ id: item.id, name: item.name, price: item.price, image: item.img }) // Add single item
    openCart() // Open the cart overlay for Buy Now
    // navigate('/cart') // Remove navigation to cart/checkout page
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 md:px-6 lg:px-12 xl:px-24 relative">
      <button
        onClick={() => openCart()}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition z-50 flex items-center justify-center"
        aria-label="Open Cart"
      >
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-red-500 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>
        )}
      </button>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0">
          <img src={item.img} alt={item.name} className="w-80 h-80 object-cover rounded-lg shadow-md" />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{item.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{item.description_long || item.desc}</p>
          <p className="text-2xl font-bold text-red-600 mb-6">${item.price.toFixed(2)}</p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-200/75 backdrop-blur-sm text-red-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-300/80 transition duration-200 flex items-center justify-center space-x-2"
            >
              <FaShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gray-200/75 backdrop-blur-sm text-green-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-300/80 transition duration-200 flex items-center justify-center space-x-2"
            >
              <FaCreditCard size={20} />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <CartOverlay isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}

export default ItemDetails

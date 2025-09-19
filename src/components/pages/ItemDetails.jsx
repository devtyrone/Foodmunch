import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { FaShoppingCart, FaCreditCard, FaArrowLeft, FaPlus, FaMinus, FaStar, FaHeart, FaShare } from 'react-icons/fa'
import CartOverlay from '../overlays/CartOverlay'
import { formatNGN } from '../../utils/currency'

// Main food items data
const restaurantData = [
  { id: 1, name: 'Fufu and Egusi with Chicken', desc: 'A savory West African dish featuring starchy fufu, rich egusi stew, and tender chicken!', img: '/assets/Foodlist/1.jpeg', price: 7500.00, description_long: 'A hearty West African classic: smooth fufu served with rich egusi stew and tender chicken.', category: 'main', rating: 4.8, reviews: 124 },
  { id: 2, name: 'Fufu and Egusi with Fish', desc: 'A flavorful West African meal with smooth fufu, nutty egusi stew, and succulent fish.', img: '/assets/Foodlist/2.jpeg', price: 6500.00, description_long: 'Silky fufu paired with nutty egusi stew and premium fish for a comforting, flavorful meal.', category: 'main', rating: 4.7, reviews: 98 },
  { id: 3, name: 'Beef Shawarma', desc: 'Savory beef, cumin-marinated, slow-roasted, served with pickles, flatbread.', img: '/assets/Foodlist/3.jpeg', price: 2800.00, description_long: 'Juicy cumin-marinated beef, slow-roasted and wrapped with veggies and creamy sauce.', category: 'main', rating: 4.6, reviews: 156 },
  { id: 4, name: 'Chicken Shawarma', desc: 'Juicy chicken, yogurt-marinated, spiced with paprika, wrapped with tahini, veggies.', img: '/assets/Foodlist/4.jpeg', price: 3500.00, description_long: 'Tender yogurt-marinated chicken with paprika, tahini, and fresh vegetables in a soft wrap.', category: 'main', rating: 4.9, reviews: 203 },
  { id: 6, name: 'Mixed Shawarma', desc: 'Chicken and beef blend, spiced, hearty, wrapped with tahini, pickles.', img: '/assets/Foodlist/6.jpeg', price: 4000.00, description_long: 'Best of both worlds—spiced chicken and beef, wrapped with tahini and pickles.', category: 'main', rating: 4.8, reviews: 87 },
  { id: 10, name: 'Chinese Fried Rice', desc: 'Chinese fried rice + chicken dish (e.g., chili chicken)', img: '/assets/Foodlist/10.jpeg', price: 8500.00, description_long: 'Fragrant Chinese-style fried rice, often paired with chili chicken for a complete meal.', category: 'main', rating: 4.5, reviews: 76 },
  { id: 13, name: 'A Plate with Chicken', desc: 'Tender chicken portions served with savory sauce and sides.', img: '/assets/Foodlist/13.jpeg', price: 3000.00, description_long: 'Succulent chicken pieces served with savory sauce and classic sides.', category: 'main', rating: 4.4, reviews: 92 },
  { id: 14, name: 'Yam and Fried Egg', desc: 'Crispy fried yam served with fried eggs and spicy pepper sauce.', img: '/assets/Foodlist/14.jpeg', price: 2000.00, description_long: 'Golden fried yam with fried eggs and a touch of pepper sauce.', category: 'main', rating: 4.3, reviews: 67 },
  { id: 15, name: 'White Rice with Fish Sauce', desc: 'Steamed white rice served with rich, flavorful fish stew.', img: '/assets/Foodlist/15.jpeg', price: 3500.00, description_long: 'Steamed white rice served alongside a rich and flavorful fish stew.', category: 'main', rating: 4.6, reviews: 89 },
  { id: 16, name: 'Yam and Stew Sauce', desc: 'Fried yam topped with hearty tomato stew.', img: '/assets/Foodlist/16.jpeg', price: 2500.00, description_long: 'Crisp fried yam topped generously with hearty tomato stew.', category: 'main', rating: 4.2, reviews: 54 },
  { id: 20, name: 'Yam and Chicken Sauce', desc: 'Yam paired with a flavorful chicken stew.', img: '/assets/Foodlist/20.jpeg', price: 2700.00, description_long: 'Wholesome yam paired with a flavorful chicken stew.', category: 'main', rating: 4.5, reviews: 73 },
  { id: 21, name: 'Chicken Wings', desc: 'Crispy chicken wings tossed in a signature spice blend.', img: '/assets/Foodlist/21.jpeg', price: 4500.00, description_long: 'Crispy, juicy chicken wings tossed in our signature spice blend.', category: 'main', rating: 4.7, reviews: 134 },
  { id: 22, name: 'White Rice with Chicken Sauce', desc: 'Steamed white rice served with tasty chicken stew.', img: '/assets/Foodlist/22.jpeg', price: 3000.00, description_long: 'Steamed white rice with a tasty, slow-cooked chicken stew.', category: 'main', rating: 4.4, reviews: 81 },
  { id: 28, name: 'A Plate with Beef', desc: 'Seasoned beef slices served with sauce and sides.', img: '/assets/Foodlist/28.jpeg', price: 2500.00, description_long: 'Seasoned beef slices served with savory sauce and classic sides.', category: 'main', rating: 4.3, reviews: 65 },
  { id: 29, name: 'Pap and Akara', desc: 'Warm pap (ogi) served with freshly fried akara (bean cakes).', img: '/assets/Foodlist/29.jpeg', price: 2500.00, description_long: 'Comforting pap (ogi) paired with freshly fried akara bean cakes.', category: 'main', rating: 4.1, reviews: 43 },
  { id: 30, name: 'Pizza', desc: 'Savory tomato sauce, mozzarella, fresh toppings, crispy base, customizable.', img: '/assets/Foodlist/pizza.jpeg', price: 8500.00, description_long: 'Classic Italian pizza with fresh mozzarella, tomato sauce, and your choice of toppings on a crispy base.', category: 'main', rating: 4.5, reviews: 112 },
  { id: 31, name: 'burger', desc: 'Juicy patty, fresh toppings, soft bun, savory, customizable, handheld.', img: '/assets/Foodlist/burger.jpeg', price: 10500.00, description_long: 'Tasty burger with juicy patty, fresh toppings, soft bun, savory, customizable, handheld.', category: 'main', rating: 4.4, reviews: 142 },
];

// Drinks data using images from extra folder
const drinksData = [
  { id: 100, name: 'Coca Cola', desc: 'Classic Coca-Cola for the perfect refreshment', img: '/assets/extra/coca cola.jpeg', price: 1000, description_long: 'The world\'s favorite cola with that distinctive taste and refreshing fizz.', category: 'drinks', rating: 4.3, reviews: 89 },
  { id: 101, name: 'Pepsi', desc: 'Refreshing cola drink with a unique taste', img: '/assets/extra/pepsi.jpeg', price: 750, description_long: 'Quick and refreshing cola drink with a unique taste.', category: 'drinks', rating: 4.6, reviews: 200 },
  { id: 102, name: 'Fanta', desc: 'Orange-flavored soft drink, sweet and refreshing', img: '/assets/extra/fanta.jpeg', price: 700, description_long: 'Bright orange flavor that bursts with citrusy goodness and natural fruit taste.', category: 'drinks', rating: 4.1, reviews: 92 },
  { id: 103, name: 'Sprite', desc: 'Crisp lemon-lime flavored soft drink', img: '/assets/extra/sprite.jpeg', price: 700, description_long: 'Crisp lemon-lime soda that cuts through thirst with its clean, refreshing taste.', category: 'drinks', rating: 4.1, reviews: 103 },
  { id: 104, name: 'Malta', desc: 'Rich and creamy malt drink', img: '/assets/extra/malta.jpeg', price: 1000, description_long: 'A nourishing malt beverage with rich flavor and smooth finish.', category: 'drinks', rating: 4.2, reviews: 67 },
  { id: 105, name: 'Bigi Cola', desc: 'Refreshing cola drink with a unique taste', img: '/assets/extra/bigi cola.jpeg', price: 500, description_long: 'Nigeria\'s own cola with authentic taste and local pride in every sip.', category: 'drinks', rating: 4.0, reviews: 54 },
  { id: 106, name: 'Amstel Malta', desc: 'Premium non-alcoholic malt drink with rich flavor', img: '/assets/extra/amstel malta.jpeg', price: 1500, description_long: 'Premium malt drink with rich flavor and nutritional benefits, perfect with meals.', category: 'drinks', rating: 4.2, reviews: 118 },
];

// Extras data using images from extra folder
const extrasData = [
  { id: 201, name: 'Extra Chicken', desc: 'Additional portion of juicy grilled chicken', img: '/assets/extra/extra chicken.jpeg', price: 1500, description_long: 'Premium chicken pieces to enhance your meal with extra protein.', category: 'extras', rating: 4.6, reviews: 87 },
  { id: 202, name: 'Extra Rice', desc: 'Additional serving of perfectly cooked rice', img: '/assets/extra/extra rice.jpeg', price: 800, description_long: 'Perfectly steamed rice to complement your main dish.', category: 'extras', rating: 4.3, reviews: 45 },
  { id: 203, name: 'Extra Plantain', desc: 'Sweet, golden fried plantain slices', img: '/assets/extra/plantain.jpeg', price: 500, description_long: 'Golden fried plantain slices that add natural sweetness to your meal.', category: 'extras', rating: 4.5, reviews: 62 },
  { id: 204, name: 'Extra Fish', desc: 'Additional portion of fresh fish', img: '/assets/extra/fish.jpeg', price: 1000, description_long: 'Fresh, well-seasoned fish to add more flavor and nutrition.', category: 'extras', rating: 4.4, reviews: 73 },
  { id: 205, name: 'Croaker Fish', desc: 'Fresh croaker fish, grilled to perfection with local spices', img: '/assets/extra/croaker fish.jpeg', price: 2000, description_long: 'Premium croaker fish, perfectly seasoned and cooked to perfection.', category: 'extras', rating: 4.7, reviews: 94 },
  { id: 206, name: 'Extra Beef', desc: 'Additional portion of tender, seasoned beef to complement your meal', img: '/assets/extra/beef.jpeg', price: 300, description_long: 'Succulent beef pieces that add richness to any dish.', category: 'extras', rating: 4.5, reviews: 56 },
];

// Combine all items
const allItems = [...restaurantData, ...drinksData, ...extrasData];

const ItemDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, openCart, isCartOpen, closeCart, cartCount, clearCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('drinks')
  const [isFavorite, setIsFavorite] = useState(false)

  const item = allItems.find((r) => r.id === parseInt(id))

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShoppingCart className="text-gray-400 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Item not found</h2>
          <p className="text-gray-600 mb-6">The item you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Browse Menu
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ id: item.id, name: item.name, price: item.price, image: item.img })
    }
  }

  const handleBuyNow = () => {
    clearCart()
    for (let i = 0; i < quantity; i++) {
      addToCart({ id: item.id, name: item.name, price: item.price, image: item.img })
    }
    openCart()
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1))

  const relatedItems = allItems.filter(relatedItem => 
    relatedItem.category === selectedCategory && relatedItem.id !== item.id
  ).slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
          >
            <FaArrowLeft size={20} />
            Back
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-xl transition-colors ${isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'}`}
            >
              <FaHeart size={20} />
            </button>
            <button className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
              <FaShare size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = '/assets/placeholder-food.jpg'
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                {item.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{item.rating}</span>
                  <span className="text-gray-500">({item.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {item.description_long || item.desc}
              </p>

              <div className="text-4xl font-black text-red-600 mb-8">
                {formatNGN(item.price)}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-200">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                    className="w-12 h-12 rounded-l-2xl hover:bg-gray-50 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="px-6 py-3 font-bold text-gray-900 min-w-[4rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-12 rounded-r-2xl hover:bg-gray-50 flex items-center justify-center transition-colors"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>
                <div className="text-lg text-gray-600">
                  Total: <span className="font-bold text-gray-900">{formatNGN(item.price * quantity)}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border-2 border-red-600 text-red-600 py-4 px-8 rounded-2xl text-lg font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-3 shadow-sm"
              >
                <FaShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-4 px-8 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FaCreditCard size={20} />
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Order
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Add drinks, extras, or explore more delicious options
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
              {['drinks', 'extras'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Related Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((relatedItem) => (
              <div key={relatedItem.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <img 
                    src={relatedItem.img} 
                    alt={relatedItem.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/assets/placeholder-food.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">
                    {relatedItem.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedItem.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">
                      {formatNGN(relatedItem.price)}
                    </span>
                    <button
                      onClick={() => addToCart({ 
                        id: relatedItem.id, 
                        name: relatedItem.name, 
                        price: relatedItem.price, 
                        image: relatedItem.img 
                      })}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition-colors"
                    >
                      <FaPlus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => openCart()}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 z-50 flex items-center justify-center"
        aria-label="Open Cart"
      >
        <FaShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold animate-pulse">
            {cartCount}
          </span>
        )}
      </button>

      <CartOverlay isOpen={isCartOpen} onClose={closeCart} />
    </div>
  )
}

export default ItemDetails

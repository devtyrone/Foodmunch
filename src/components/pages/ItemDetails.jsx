import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { FaShoppingCart, FaCreditCard, FaArrowLeft, FaPlus, FaMinus, FaStar, FaHeart, FaShare, FaTag } from 'react-icons/fa'
import { toast } from 'react-toastify'
import CartOverlay from '../overlays/CartOverlay'
import { formatNGN } from '../../utils/currency'

// Main food items data
const restaurantData = [
  { 
    id: 1000, 
    name: 'Family Feast Platter', 
    desc: 'A bountiful feast for the whole family with a variety of our most popular dishes!', 
    img: '/assets/Foodlist/13.jpeg', 
    price: 20000.00, 
    originalPrice: 25000.00,
    description_long: 'Our signature Family Feast Platter is perfect for gatherings and special occasions. This extensive platter features a variety of our most popular dishes, including both Jollof and Fried Rice, tender grilled meats, and refreshing sides. Serves 4-6 people.', 
    category: 'special', 
    rating: 4.9, 
    reviews: 156,
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
    cookTime: '45-60 min',
    servingSize: '4-6 people',
    isSpecial: true
  },
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
  const location = useLocation()
  const navigate = useNavigate()
  const { addToCart, openCart, isCartOpen, closeCart, cartCount, clearCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('drinks')
  const [isFavorite, setIsFavorite] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [promoCodeError, setPromoCodeError] = useState('')
  const [isSpecialDeal, setIsSpecialDeal] = useState(false)
  const [remainingUses, setRemainingUses] = useState(null)

  // Check if this is the special family platter deal from navigation state
  useEffect(() => {
    if (location.state?.isSpecialDeal) {
      setIsSpecialDeal(true);
      setPromoCode(''); // Don't prefill the promo code
      setRemainingUses(location.state.availability || 0);
    }
  }, [location.state])

  // Find the item, including the special family platter deal
  let item = allItems.find((r) => r.id === parseInt(id));
  
  // If item is not found and it's a special deal (ID 1000)
  if (!item && parseInt(id) === 1000 && location.state?.isSpecialDeal) {
    item = {
      id: 1000,
      name: 'Family Feast Platter',
      originalPrice: location.state?.originalPrice || 20000,
      price: location.state?.originalPrice || 20000, // Will be updated if promo is applied
      description_long: 'Our signature Family Feast Platter is perfect for gatherings and special occasions. This extensive platter features a variety of our most popular dishes, including both Jollof and Fried Rice, tender grilled meats, and refreshing sides. Serves 4-6 people.',
      img: '/assets/Foodlist/13.jpeg',
      category: 'special',
      rating: 4.9,
      reviews: 156,
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
      cookTime: '45-60 min',
      servingSize: '4-6 people',
      isSpecial: true
    };
  }

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

  const applyPromoCode = (code) => {
    if (!code) return false
    
    // Check if it's the family platter special code
    if (code.toUpperCase() === 'FAMILY20' && isSpecialDeal) {
      if (remainingUses > 0) {
        const discount = item.originalPrice * 0.2 // 20% discount
        setDiscountAmount(discount)
        setDiscountApplied(true)
        setPromoCodeError('')
        
        // Update the item price with discount
        item.price = item.originalPrice - discount
        
        toast.success('Promo code applied! 20% discount added.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        
        return true
      } else {
        setPromoCodeError('This promo code has reached its usage limit')
        return false
      }
    } else if (code && !isSpecialDeal) {
      setPromoCodeError('This promo code is not valid for this item')
      return false
    }
    
    return false
  }
  
  const handlePromoCodeSubmit = (e) => {
    e.preventDefault()
    if (!promoCode.trim()) {
      setPromoCodeError('Please enter a promo code')
      return
    }
    
    applyPromoCode(promoCode)
  }
  
  const handleAddToCart = () => {
    // Calculate the final price based on whether a discount is applied
    const finalPrice = discountApplied ? item.price : (item.originalPrice || item.price);
    
    // Create cart item with all necessary details
    const cartItem = { 
      id: item.id, 
      name: item.name, 
      price: finalPrice,  // Use the calculated final price
      originalPrice: item.originalPrice || item.price,  // Keep track of original price
      image: item.img,
      promoCode: discountApplied ? promoCode : undefined,
      description: item.desc,
      quantity: quantity  // Include the quantity in the cart item
    };
    
    // Add the item to cart with the correct quantity
    addToCart(cartItem);
    
    // If this was a special deal with limited uses, update the remaining uses
    if (isSpecialDeal && discountApplied && remainingUses !== null) {
      const newRemainingUses = Math.max(0, remainingUses - quantity);
      setRemainingUses(newRemainingUses);
      
      if (newRemainingUses === 0) {
        // Reset discount if no more uses left
        setDiscountApplied(false);
        setDiscountAmount(0);
        item.price = item.originalPrice;
        
        toast.info('The promo code has reached its usage limit', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
    
    // Show success message
    toast.success(`${quantity} ${quantity > 1 ? 'items' : 'item'} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const handleBuyNow = () => {
    clearCart();
    
    // Calculate the final price based on whether a discount is applied
    const finalPrice = discountApplied ? item.price : (item.originalPrice || item.price);
    
    // Create cart item with all necessary details
    const cartItem = { 
      id: item.id, 
      name: item.name, 
      price: finalPrice,  // Use the calculated final price
      originalPrice: item.originalPrice || item.price,  // Keep track of original price
      image: item.img,
      promoCode: discountApplied ? promoCode : undefined,
      description: item.desc,
      quantity: quantity  // Include the quantity in the cart item
    };
    
    // Add the item to cart with the correct quantity
    addToCart(cartItem);
    
    // If this was a special deal with limited uses, update the remaining uses
    if (isSpecialDeal && discountApplied && remainingUses !== null) {
      const newRemainingUses = Math.max(0, remainingUses - quantity);
      setRemainingUses(newRemainingUses);
      
      if (newRemainingUses === 0) {
        // Reset discount if no more uses left
        setDiscountApplied(false);
        setDiscountAmount(0);
        item.price = item.originalPrice;
      }
    }
    
    // Open the cart and navigate to checkout
    openCart();
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

              {isSpecialDeal && (
                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Special family platter deal! Limited quantity available at this price.
                      </p>
                      {remainingUses !== null && (
                        <p className="mt-1 text-sm text-yellow-600">
                          Only {remainingUses} {remainingUses === 1 ? 'use' : 'uses'} remaining
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {item.description_long || item.desc}
              </p>
              
              {item.includes && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">This platter includes:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.includes.map((include, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                {discountApplied ? (
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl text-gray-400 line-through">
                        {formatNGN(item.originalPrice || item.price)}
                      </span>
                      <span className="text-4xl font-black text-red-600">
                        {formatNGN(item.price)}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {Math.round((discountAmount / (item.originalPrice || item.price)) * 100)}% OFF
                      </span>
                    </div>
                    <p className="text-sm text-green-600 flex items-center">
                      <FaTag className="mr-1" /> Promo code {promoCode} applied!
                    </p>
                  </div>
                ) : (
                  <div className="text-4xl font-black text-red-600">
                    {formatNGN(item.originalPrice || item.price)}
                  </div>
                )}
              </div>
            </div>

            {/* Promo Code Section - Only show for special deals */}
            {isSpecialDeal && (
              <div className="mb-6">
                <form onSubmit={handlePromoCodeSubmit} className="space-y-2">
                  <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">
                    Promo Code
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="text"
                      id="promoCode"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Enter promo code"
                      disabled={discountApplied}
                      className={`flex-1 min-w-0 block w-full px-4 py-3 rounded-l-md border text-black ${
                        promoCodeError ? 'border-red-300' : 'border-gray-300'
                      } focus:ring-red-500 focus:border-red-500 sm:text-sm ${
                        discountApplied ? 'bg-gray-100' : ''
                      }`}
                    />
                    <button
                      type="submit"
                      disabled={!promoCode.trim() || discountApplied}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white ${
                        discountApplied
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-red-600 hover:bg-red-700'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {discountApplied ? 'Applied!' : 'Apply'}
                    </button>
                  </div>
                  {promoCodeError && (
                    <p className="mt-1 text-sm text-red-600">{promoCodeError}</p>
                  )}
                  {discountApplied && (
                    <p className="mt-1 text-sm text-green-600">
                      Promo code applied! You saved {formatNGN(discountAmount * quantity)}
                    </p>
                  )}
                </form>
              </div>
            )}
            
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
                    disabled={isSpecialDeal && remainingUses !== null && quantity >= remainingUses}
                    className="w-12 h-12 rounded-r-2xl hover:bg-gray-50 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>
                <span className="text-gray-500 text-sm">
                  {quantity} {quantity === 1 ? 'item' : 'items'} • {formatNGN((discountApplied ? item.price : (item.originalPrice || item.price)) * quantity)}
                  {discountApplied && (
                    <span className="ml-1 text-green-600">
                      (You save {formatNGN(discountAmount * quantity)})
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={isSpecialDeal && remainingUses !== null && remainingUses <= 0}
                className={`flex-1 ${
                  isSpecialDeal && remainingUses !== null && remainingUses <= 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-900 hover:bg-gray-800'
                } text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <FaShoppingCart /> 
                {isSpecialDeal && remainingUses !== null && remainingUses <= 0
                  ? 'Deal Expired'
                  : 'Add to Cart'}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={isSpecialDeal && remainingUses !== null && remainingUses <= 0}
                className={`flex-1 ${
                  isSpecialDeal && remainingUses !== null && remainingUses <= 0
                    ? 'bg-red-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700'
                } text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <FaCreditCard /> 
                {isSpecialDeal && remainingUses !== null && remainingUses <= 0
                  ? 'Deal Expired'
                  : 'Buy Now'}
              </button>
            </div>
            
            {isSpecialDeal && remainingUses !== null && remainingUses <= 0 && (
              <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      This deal has reached its maximum number of uses. Please check back for future specials!
                    </p>
                  </div>
                </div>
              </div>
            )} 
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

import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { FaTimes, FaPlus, FaMinus, FaTrash, FaCreditCard, FaShoppingBag, FaTruck, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { formatNGN } from '../../utils/currency'

const CartOverlay = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart()
  const navigate = useNavigate()
  const [includeDelivery, setIncludeDelivery] = useState(false)

  if (!isOpen) return null

  const handleCheckout = () => {
    onClose() // Close the cart overlay
    navigate('/checkout')
  }

  const handleBackToItems = () => {
    onClose() // Close the cart overlay
    navigate('/menu') // Go back to food menu
  }

  // Dynamic delivery pricing based on cart total
  const getDeliveryFee = (subtotal) => {
    if (subtotal >= 50000) {
      return 1500; // ₦1,500 for orders ₦50,000 and above
    } else {
      return 750; // Standard ₦750 for orders below ₦50,000
    }
  }

  const deliveryFee = getDeliveryFee(cartTotal)
  const totalWithDelivery = cartTotal + (includeDelivery ? deliveryFee : 0)

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Cart Panel */}
      <div className="relative bg-white dark:bg-gray-900 w-full md:w-[420px] h-full shadow-2xl flex flex-col">
        {/* Header - Reconstructed for mobile navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-800">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between p-4 md:p-6">
            {/* Left: Back button (mobile) + Cart icon */}
            <div className="flex items-center gap-3">
              {/* Back button - visible on mobile */}
              <button 
                onClick={handleBackToItems}
                className="md:hidden w-10 h-10 rounded-xl bg-white/80 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Go back to menu"
              >
                <FaArrowLeft className="text-gray-600 dark:text-gray-300" size={16} />
              </button>
              
              {/* Cart icon */}
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <FaShoppingBag className="text-white text-lg" />
              </div>
              
              {/* Cart title and count */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            {/* Right: Close button */}
            <button 
              onClick={onClose} 
              className="w-10 h-10 rounded-xl bg-white/80 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Close cart"
            >
              <FaTimes className="text-gray-600 dark:text-gray-300" size={16} />
            </button>
          </div>

          {/* Mobile breadcrumb/navigation hint */}
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <button 
                onClick={handleBackToItems}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Menu
              </button>
              <span>→</span>
              <span className="text-red-600 dark:text-red-400 font-medium">Cart</span>
              <span>→</span>
              <span>Checkout</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                <FaShoppingBag className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Your cart is empty</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Add some delicious items to get started!</p>
              <button
                onClick={() => {
                  onClose();
                  navigate('/menu');
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded-xl shadow-sm" 
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight mb-1">
                        {item.name}
                      </h3>
                      <p className="text-red-600 dark:text-red-400 font-bold text-lg">
                        {formatNGN(item.price)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Total: {formatNGN(item.price * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 flex items-center justify-center transition-colors"
                    >
                      <FaTimes className="text-red-600 dark:text-red-400 text-sm" />
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center mt-4">
                    <div className="flex items-center bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                        className="w-10 h-10 rounded-l-xl hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaMinus className="text-gray-600 dark:text-gray-300 text-sm" />
                      </button>
                      <span className="px-4 py-2 font-semibold text-gray-900 dark:text-white min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-r-xl hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                      >
                        <FaPlus className="text-gray-600 dark:text-gray-300 text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Order Summary & Actions */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 space-y-4">
            {/* Order Summary */}
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>{formatNGN(cartTotal)}</span>
              </div>
              
              {/* Delivery Toggle */}
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <FaTruck className="text-red-600 dark:text-red-400" size={16} />
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Delivery</span>
                      {cartTotal >= 50000 ? (
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">Premium (₦50k+)</span>
                      ) : (
                        <span className="text-xs text-gray-500 dark:text-gray-400">Standard</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {includeDelivery ? formatNGN(deliveryFee) : 'Pickup'}
                    </span>
                    <button
                      onClick={() => setIncludeDelivery(!includeDelivery)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                        includeDelivery ? 'bg-red-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          includeDelivery ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                
                {/* Delivery Tier Info */}
                {includeDelivery && cartTotal < 50000 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-2 text-xs">
                    <div className="text-blue-700 dark:text-blue-300">
                      💡 Add {formatNGN(50000 - cartTotal)} more for premium delivery (₦1,500)
                    </div>
                  </div>
                )}
                
                {includeDelivery && cartTotal >= 50000 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-2 text-xs">
                    <div className="text-orange-700 dark:text-orange-300">
                      🚚 Premium delivery activated! Enhanced service included.
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-200 dark:border-gray-600">
                <span>Total</span>
                <span className="text-red-600 dark:text-red-400">{formatNGN(totalWithDelivery)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <FaCreditCard size={20} />
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FaTrash size={16} />
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartOverlay

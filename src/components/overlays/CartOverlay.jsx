import React from 'react'
import { useCart } from '../../hooks/useCart'
import { FaTimes, FaPlus, FaMinus, FaTrash, FaCreditCard } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CartOverlay = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart()
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleCheckout = () => {
    onClose() // Close the cart overlay
    navigate('/checkout')
  }

  return (
    <div className="fixed inset-0 bg-gray-200/50 md:backdrop-blur-md z-50 flex justify-end">
      <div className="bg-white w-full md:w-1/3 h-full shadow-lg p-6 overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <FaTimes size={20} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaMinus size={14} />
                  </button>
                  <span className="text-lg font-medium text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    <FaPlus size={14} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>
            ))
          }
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-gray-800">Total:</span>
                <span className="text-xl font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={clearCart}
                className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-200 mb-4 flex items-center justify-center space-x-2"
              >
                <FaTrash size={18} />
                <span>Clear Cart</span>
              </button>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-2"
              >
                <FaCreditCard size={18} />
                <span>Checkout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartOverlay

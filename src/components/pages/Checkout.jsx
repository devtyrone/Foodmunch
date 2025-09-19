import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaTimes, FaShieldAlt, FaCreditCard, FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa'
import { formatNGN } from '../../utils/currency'

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  // Dynamic delivery pricing based on cart total
  const getDeliveryFee = (subtotal) => {
    if (subtotal >= 50000) {
      return 1500; // ₦1,500 for orders ₦50,000 and above
    } else {
      return 750; // Standard ₦750 for orders below ₦50,000
    }
  }

  const deliveryFee = getDeliveryFee(cartTotal)
  const totalWithDelivery = cartTotal + deliveryFee

  const config = {
    reference: new Date().getTime().toString(),
    email: customerInfo.email || "customer@example.com",
    amount: totalWithDelivery * 100, // Amount in kobo (NGN minor unit)
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_example",
  };

  const handleSuccess = (reference) => {
    console.log(reference);
    clearCart();
    // Show success message with better UX
    alert("🎉 Payment Successful! Your order is being prepared.");
    navigate('/');
  };

  const handleClose = () => {
    console.log('Payment closed');
  };

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const isFormValid = customerInfo.name && customerInfo.email && customerInfo.phone && customerInfo.address

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
          >
            <FaArrowLeft size={20} />
            Back to Cart
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-xl bg-white shadow-sm hover:shadow-md flex items-center justify-center transition-shadow"
          >
            <FaTimes className="text-gray-600" size={16} />
          </button>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCreditCard className="text-gray-400 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to proceed with checkout.</p>
          <button
            onClick={() => navigate('/restaurants')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Browse Restaurants
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Customer Information */}
          <div className="space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaUser className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Customer Information</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                  <textarea
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors resize-none"
                    placeholder="Enter your complete delivery address"
                  />
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-green-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-green-800">Secure Payment</h3>
                  <p className="text-sm text-green-600">Your payment information is encrypted and secure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            {/* Order Items */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{formatNGN(item.price * item.quantity)}</p>
                      <p className="text-sm text-gray-500">{formatNGN(item.price)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatNGN(cartTotal)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <div className="flex flex-col">
                    <span>Delivery Fee</span>
                    {cartTotal >= 50000 ? (
                      <span className="text-xs text-orange-600 font-medium">Premium delivery (₦50k+ orders)</span>
                    ) : (
                      <span className="text-xs text-gray-500">Standard delivery</span>
                    )}
                  </div>
                  <span>{formatNGN(deliveryFee)}</span>
                </div>
                
                {/* Delivery Tier Info */}
                {cartTotal < 50000 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                    <div className="flex items-center gap-2 text-blue-700">
                      <span className="text-blue-500">💡</span>
                      <span className="font-medium">Delivery Pricing:</span>
                    </div>
                    <div className="mt-1 text-blue-600">
                      <div>• Orders under ₦50,000: ₦750 delivery</div>
                      <div>• Orders ₦50,000+: ₦1,500 premium delivery</div>
                      <div className="mt-1 font-medium">
                        Add {formatNGN(50000 - cartTotal)} more for premium delivery tier
                      </div>
                    </div>
                  </div>
                )}
                
                {cartTotal >= 50000 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                    <div className="flex items-center gap-2 text-orange-700">
                      <span className="text-orange-500">🚚</span>
                      <span className="font-medium">Premium Delivery Activated!</span>
                    </div>
                    <div className="mt-1 text-orange-600">
                      Your order qualifies for our premium delivery service with enhanced tracking and priority handling.
                    </div>
                  </div>
                )}

                <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-red-600">{formatNGN(totalWithDelivery)}</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaCreditCard className="text-red-600" />
                Payment Method
              </h3>
              
              {isFormValid ? (
                <PaystackButton
                  {...config}
                  text={`Pay ${formatNGN(totalWithDelivery)} Now`}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
                  onSuccess={handleSuccess}
                  onClose={handleClose}
                />
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-4 rounded-2xl text-lg font-bold cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <FaCreditCard />
                  Complete Information to Pay
                </button>
              )}
              
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                <FaCheckCircle className="text-green-500" />
                Powered by Paystack - Secure & Trusted
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-600 text-xl" />
                <div>
                  <h3 className="font-semibold text-orange-800">Estimated Delivery</h3>
                  <p className="text-sm text-orange-600">20-30 minutes after payment confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Checkout

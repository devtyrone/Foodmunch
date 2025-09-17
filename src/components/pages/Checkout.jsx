import React from 'react'
import { PaystackButton } from 'react-paystack'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const config = {
    reference: new Date().getTime().toString(),
    email: "customer@example.com", // Replace with customer's email from user context
    amount: cartTotal * 100, // Amount in kobo, convert from dollars to cents
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // Replace with your Paystack public key
  };

  const handleSuccess = (reference) => {
    // Handle successful payment here
    console.log(reference);
    clearCart();
    alert("Payment Successful!");
    navigate('/'); // Redirect to home or a success page
  };

  const handleClose = () => {
    // Handle payment closure here
    console.log('Payment closed');
    alert("Payment cancelled.");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative">
      {/* Back Icon - Top Left Corner */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 z-10"
        aria-label="Go Back"
      >
        <FaArrowLeft size={24} />
      </button>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Icon - Inside Container */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">Your cart is empty. Please add items to proceed to checkout.</p>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Order Summary</h2>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <p className="text-gray-600 dark:text-gray-300">{item.name} x {item.quantity}</p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4 flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200">Total:</p>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">${cartTotal.toFixed(2)}</p>
            </div>
            <div className="mt-8">
              <PaystackButton
                {...config}
                text="Pay Now"
                className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-200"
                onSuccess={handleSuccess}
                onClose={handleClose}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout

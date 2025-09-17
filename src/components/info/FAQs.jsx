import React, { useState } from 'react';
import { FaMobileAlt, FaUser, FaShoppingCart, FaCreditCard } from 'react-icons/fa'; // Import icons
import PromoSection from '../sections/PromoSection'; // Corrected import path

const allFaqs = [
  {
    category: 'App Download',
    icon: <FaMobileAlt className="text-red-500" />, // Icon for App Download
    items: [
      { id: 1, question: 'Where can I download the FoodMunch app?', answer: 'The FoodMunch app is available on both the Apple App Store and Google Play Store. Simply search for "FoodMunch" and download.' },
      { id: 2, question: 'How do I find the FoodMunch app in the store?', answer: 'Open your device\'s app store (App Store for iOS, Google Play Store for Android), tap the search icon, and type "FoodMunch" into the search bar.' },
      { id: 3, question: 'How do I install the FoodMunch app?', answer: 'After finding the app in your store, tap "Install" (Android) or "Get" (iOS). The app will automatically download and install on your device.' },
      { id: 4, question: 'What do I do after installing the app?', answer: 'Once installed, open the FoodMunch app, create an account or log in, and you\'re ready to start exploring restaurants and placing orders!' },
      { id: 5, question: 'I\'m having trouble downloading the app. What should I do?', answer: 'Ensure you have a stable internet connection and sufficient storage space. If issues persist, try restarting your device or contacting your app store\'s support.' },
    ],
  },
  {
    category: 'Account Creation',
    icon: <FaUser className="text-red-500" />, // Icon for Account Creation
    items: [
      { id: 6, question: 'How do I create an account on the FoodMunch app?', answer: 'Open the FoodMunch app and tap "Sign Up." You can register using your email, phone number, or social media accounts. Follow the on-screen instructions to complete your registration.' },
      { id: 7, question: 'Where can I find the option to sign up?', answer: 'The "Sign Up" option is usually prominent on the app\'s welcome screen or accessible through the main menu if you\'re already browsing as a guest.' },
      { id: 8, question: 'How do I verify my account?', answer: 'Depending on your registration method, you might receive a verification code via SMS or email. Enter this code into the app to verify your account.' },
      { id: 9, question: 'What should I do after creating an account?', answer: 'After creating your account, you can set up your profile, add payment methods, and start browsing local restaurants and menus.' },
      { id: 10, question: 'I\'m having trouble creating an account. What should I do?', answer: 'Check your internet connection and ensure all required fields are correctly filled. If you\'re still stuck, contact FoodMunch support for assistance.' },
    ],
  },
  {
    category: 'Placing Orders on the FoodMunch App',
    icon: <FaShoppingCart className="text-red-500" />, // Icon for Placing Orders
    items: [
      { id: 11, question: 'How do I start placing an order?', answer: 'Browse restaurants, select your desired items, customize them if necessary, and add them to your cart. Proceed to checkout when ready.' },
      { id: 12, question: 'What restaurants can I order from?', answer: 'FoodMunch partners with a wide variety of local restaurants. You can view available restaurants based on your location within the app.' },
      { id: 13, question: 'How do I access a restaurant\'s menu?', answer: 'Tap on a restaurant\'s listing in the app to view its full menu, including dish descriptions, prices, and available customization options.' },
      { id: 14, question: 'Can I customize my order?', answer: 'Many restaurants offer customization options for their dishes. Look for options like "add/remove ingredients," "spice level," or "side choices" on the item detail page.' },
      { id: 15, question: 'How do I review my order before confirming?', answer: 'Before confirming your order at checkout, you\'ll see a summary of all selected items, quantities, prices, and any applicable delivery fees or discounts. Review carefully before placing.' },
      { id: 16, question: 'What payment options are available?', answer: 'FoodMunch supports various payment methods, including credit/debit cards, mobile money, and FoodMunch Wallet. Available options will be displayed at checkout.' },
      { id: 17, question: 'What should I do if I encounter issues during payment?', answer: 'If a payment fails, check your internet connection and card details. You can try another payment method or contact your bank. If the issue persists, reach out to FoodMunch support.' },
      { id: 18, question: 'Can I schedule a delivery or pickup time?', answer: 'Yes, during checkout, you can often choose between immediate delivery/pickup or schedule a preferred time slot for a later delivery/pickup.' },
    ],
  },
  {
    category: 'Payment & Checkout on the FoodMunch App',
    icon: <FaCreditCard className="text-red-500" />, // Icon for Payment & Checkout
    items: [
      { id: 19, question: 'What payment methods are supported on the app?', answer: 'FoodMunch accepts major credit/debit cards, mobile money services, and FoodMunch Wallet payments.' },
      { id: 20, question: 'How do I add a bank card to my profile?', answer: 'Go to "Payment Methods" in your profile settings and follow the instructions to securely add a new card.' },
      { id: 21, question: 'Can I add multiple bank cards to my profile?', answer: 'Yes, you can add and manage multiple bank cards in your profile settings, allowing you to choose your preferred card at checkout.' },
      { id: 22, question: 'How do I pay using a bank transfer?', answer: 'Select bank transfer at checkout, and the necessary bank details will be provided for you to complete the payment with your order ID as reference.' },
      { id: 23, question: 'How can I use my FoodMunch Wallet to pay?', answer: 'If you have funds in your FoodMunch Wallet, you can select it as a payment option during checkout. Ensure your wallet has sufficient balance.' },
      { id: 24, question: 'How do I fund my FoodMunch Wallet?', answer: 'You can fund your FoodMunch Wallet via bank transfer, debit/credit cards, or other integrated payment options available in the wallet section.' },
      { id: 25, question: 'Can I apply promo codes or discounts?', answer: 'Yes, apply valid promo codes or discounts during the checkout process in the designated field. The discount will be reflected in your total.' },
      { id: 26, question: 'How do I access my order receipts?', answer: 'Your order receipts are stored in your "Order History" within the FoodMunch app. Select any past order to view its detailed receipt.' },
      { id: 27, question: 'What information is included in the receipts?', answer: 'Receipts include order ID, date, time, restaurant name, itemized list of purchases, prices, discounts, delivery fees, taxes, and total amount paid.' },
    ],
  },
];

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategory, setOpenCategory] = useState(null);
  const [openItem, setOpenItem] = useState(null);

  const filteredFaqs = allFaqs
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setOpenCategory(null); // Close any open categories on search
    setOpenItem(null); // Close any open items on search
  };

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
    setOpenItem(null); // Close any open items when toggling a category
  };

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center mb-8">How can we help?</h1>

        {/* Search Section */}
        <div className="mb-12 relative">
          <input
            type="text"
            placeholder="Type a question, topic or issue"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        {/* Explore topics / FAQ Categories */}
        {filteredFaqs.length > 0 && (
          <div className="mb-12">
            <p className="text-center text-gray-500 mb-4 text-sm">Explore topics</p>
            <div className="flex justify-center mb-8">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((category) => (
                <div key={category.category} className="rounded-lg border border-gray-200 shadow-sm">
                  <button
                    className="flex justify-between items-center w-full p-4 text-xl font-bold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none rounded-t-lg"
                    onClick={() => toggleCategory(category.category)}
                  >
                    <span className="flex items-center">
                      {category.icon && <span className="w-6 h-6 mr-3 flex items-center justify-center">{category.icon}</span>} {/* Icon if available */}
                      {category.category}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openCategory === category.category ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {openCategory === category.category && (
                    <div className="divide-y divide-gray-200 bg-white rounded-b-lg">
                      {category.items.map((item) => (
                        <div key={item.id} className="">
                          <button
                            className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            onClick={() => toggleItem(item.id)}
                          >
                            {item.question}
                            <svg
                              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItem === item.id ? 'rotate-180' : ''}`}
                              fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          {openItem === item.id && (
                            <div className="px-4 pt-0 pb-4 text-sm text-gray-600">
                              <p>{item.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Got more questions? Let us know section (conditionally rendered) */}
        {filteredFaqs.length === 0 && (
          <div className="text-center mt-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Got more questions?</h2>
            <p className="text-lg text-gray-600 mb-8">Let us know</p>

            <div className="mb-6">
              <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2 text-left">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="Your email address"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-base font-semibold text-gray-800 mb-2 text-left">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="Drop a message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200"
            >
              Send message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQs;

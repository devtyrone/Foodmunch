import React from 'react';
import { useState } from 'react';
import PromoSection from '../sections/PromoSection';

const faqItems = [
  {
    id: 1,
    question: 'How do I add a bank card to my profile?',
    answer: 'You can add a bank card by navigating to your profile settings, selecting "Payment Methods," and then choosing "Add New Card." Follow the prompts to enter your card details securely.',
  },
  {
    id: 2,
    question: 'How do I pay using a bank transfer?',
    answer: 'To pay via bank transfer, select the "Bank Transfer" option at checkout. You will be provided with FoodMunch\'s bank details to complete the transfer. Please ensure you include your order ID as a reference.',
  },
  {
    id: 3,
    question: 'How do I fund my FoodMunch Wallet?',
    answer: 'You can fund your FoodMunch Wallet through various methods, including bank transfers, debit/credit cards, or other integrated payment gateways. Look for the "Fund Wallet" option in your wallet section.',
  },
  {
    id: 4,
    question: 'How do I access my order receipts?',
    answer: 'All your order receipts are available in the "Order History" section of your FoodMunch app. Simply select the order you wish to view, and the receipt will be displayed.',
  },
];

const Feedback = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center mb-4">Customer Service Feedback</h1>
        <p className="text-center text-gray-600 mb-8">
          Hi there, we'd love to hear from you! Your feedback helps us grow and
          serve you better. This will only take 2 minutes.
        </p>

        {/* Payment & Checkout on the FoodMunch App */}
        <div className="mb-8 rounded-lg border border-gray-200 shadow-sm">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Payment & Checkout on the FoodMunch App</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqItems.map((item) => (
              <div key={item.id} className="">
                <button
                  className="flex justify-between items-center w-full px-4 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none"
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
                  <div className="px-4 pt-0 pb-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FoodMunch Registered Phone Number */}
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-lg font-semibold text-gray-800 mb-2">
            FoodMunch Registered Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* What's one thing you wish the FM app could do better or differently right now? */}
        <div className="mb-6">
          <label htmlFor="appImprovement" className="block text-lg font-semibold text-gray-800 mb-2">
            What's one thing you wish the FM app could do better or differently right now?
          </label>
          <textarea
            id="appImprovement"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* Are there any features or tools you've seen on other apps (Food or E-commerce) that you'd love to see on the FM app? */}
        <div className="mb-6">
          <label htmlFor="newFeatures" className="block text-lg font-semibold text-gray-800 mb-2">
            Are there any features or tools you've seen on other apps (Food or E-commerce) that you'd love to see on the FM app?
          </label>
          <textarea
            id="newFeatures"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* How easy or difficult is it to find what you're looking for on the app? */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            How easy or difficult is it for you to find what you're looking for on the app (e.g., restaurants, discounts, products)?
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input type="radio" name="difficulty" value="very-difficult" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Very Difficult</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="difficulty" value="difficult" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Difficult</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="difficulty" value="neutral" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Neutral</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="difficulty" value="somewhat-easy" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Somewhat Easy</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="difficulty" value="very-easy" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Very Easy</span>
            </label>
          </div>
        </div>

        {/* What could make it easier with reference to the question above? */}
        <div className="mb-6">
          <label htmlFor="easierExperience" className="block text-lg font-semibold text-gray-800 mb-2">
            What could make it easier with reference to the question above?
          </label>
          <textarea
            id="easierExperience"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* Would you be interested in more personalized meal recommendations? */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Would you be interested in more personalized meal recommendations based on your past orders or dietary preferences?
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input type="radio" name="recommendations" value="yes-past-orders" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Yes, Based On My Past Orders</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="recommendations" value="yes-dietary-preferences" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Yes, Based On Dietary Preferences</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="recommendations" value="no-past-orders" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">No, Based On My Past Orders</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="recommendations" value="no-dietary-preferences" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">No, Based On Dietary Preferences</span>
            </label>
          </div>
        </div>

        {/* If we added meal plans, bundles, or subscription packages—would that interest you? */}
        <div className="mb-6">
          <label htmlFor="mealPlans" className="block text-lg font-semibold text-gray-800 mb-2">
            If we added meal plans, bundles (e.g., lunch for a week), or subscription packages—would that interest you? Why or why not?
          </label>
          <textarea
            id="mealPlans"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* Outside of food, what categories would you love to shop for on the FM app? */}
        <div className="mb-6">
          <label htmlFor="otherCategories" className="block text-lg font-semibold text-gray-800 mb-2">
            Outside of food, what categories would you love to shop for on the FM app (e.g., groceries, electronics, health products etc)?
          </label>
          <textarea
            id="otherCategories"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* Would you be interested in ordering food or drinks for events? */}
        <div className="mb-6">
          <label htmlFor="eventOrdering" className="block text-lg font-semibold text-gray-800 mb-2">
            Would you be interested in ordering food or drinks for events (birthdays, parties, work meetings) directly from the app? If yes, what would make that feature useful for you?
          </label>
          <textarea
            id="eventOrdering"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* If FoodMunch started offering curated lifestyle experiences... */}
        <div className="mb-6">
          <label htmlFor="lifestyleExperiences" className="block text-lg font-semibold text-gray-800 mb-2">
            If FoodMunch started offering curated lifestyle experiences (e.g., chef-at-home dinners, mobile bars, cooking classes), would you be interested? What kind of experience would excite you most?
          </label>
          <textarea
            id="lifestyleExperiences"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* How do you feel about the current pricing and value for money? */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            How do you feel about the current pricing and value for money?
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input type="radio" name="pricingSatisfaction" value="satisfied" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Satisfied</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="pricingSatisfaction" value="mixed" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Mixed</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="pricingSatisfaction" value="unsatisfied" className="form-radio text-red-500" />
              <span className="ml-2 text-gray-700">Unsatisfied</span>
            </label>
          </div>
        </div>

        {/* What would make you order more often? */}
        <div className="mb-6">
          <label htmlFor="orderMoreOften" className="block text-lg font-semibold text-gray-800 mb-2">
            What would make you order more often (e.g., loyalty rewards, discounts, faster delivery)?
          </label>
          <textarea
            id="orderMoreOften"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* If we could build one feature or service... */}
        <div className="mb-8">
          <label htmlFor="favoriteAppFeature" className="block text-lg font-semibold text-gray-800 mb-2">
            If we could build one feature or service that would make the FM app your favorite app in Nigeria, what would it be?
          </label>
          <textarea
            id="favoriteAppFeature"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Write response"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
      <PromoSection />
    </div>
  );
};

export default Feedback;

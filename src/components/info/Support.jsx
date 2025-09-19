import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaHeadset, FaBook, FaClock, FaPhone, FaEnvelope, FaChevronDown, FaChevronUp, FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Orders', 'Delivery', 'Payment', 'Account', 'Technical'];

  const faqs = [
    { 
      id: 1,
      category: 'Orders',
      q: 'How do I track my order?', 
      a: 'You can track your order in real-time using the tracking link sent via SMS and email after checkout. Simply click the link or enter your order number on our tracking page.',
      priority: 'high'
    },
    { 
      id: 2,
      category: 'Orders',
      q: 'Can I modify my order after placing it?', 
      a: 'Orders can be modified within 5 minutes of placement. After this window, please contact our support team who may be able to help depending on the order status.',
      priority: 'medium'
    },
    { 
      id: 3,
      category: 'Delivery',
      q: 'What are your delivery hours?', 
      a: 'We deliver 24/7 in most areas. Delivery hours may vary by location and restaurant availability. Check the restaurant page for specific delivery windows.',
      priority: 'medium'
    },
    { 
      id: 4,
      category: 'Payment',
      q: 'What payment methods do you accept?', 
      a: 'We accept all major credit/debit cards, bank transfers, and mobile money payments including MTN Mobile Money, Airtel Money, and others.',
      priority: 'high'
    },
    { 
      id: 5,
      category: 'Payment',
      q: 'Do you offer refunds?', 
      a: 'Yes, refunds are processed on a case-by-case basis. Contact our support team with your order reference number for assistance.',
      priority: 'high'
    },
    { 
      id: 6,
      category: 'Delivery',
      q: 'How much does delivery cost?', 
      a: 'Delivery fees vary by distance and restaurant. The exact fee is shown during checkout before you complete your order.',
      priority: 'medium'
    },
    { 
      id: 7,
      category: 'Account',
      q: 'How do I reset my password?', 
      a: 'Click "Forgot Password" on the login page and enter your email. We\'ll send you a reset link within minutes.',
      priority: 'low'
    },
    { 
      id: 8,
      category: 'Technical',
      q: 'The app is not working properly', 
      a: 'Try clearing your browser cache or updating the app. If issues persist, contact our technical support team with details about your device and the problem.',
      priority: 'medium'
    }
  ];

  const supportChannels = [
    {
      icon: <FaHeadset className="text-2xl" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-green-500'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone Support',
      description: 'Speak directly with a support agent',
      availability: 'Mon-Sun: 8AM-10PM',
      action: 'Call Now',
      color: 'bg-blue-500'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-purple-500'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <FaExclamationTriangle className="text-red-500" />;
      case 'medium': return <FaInfoCircle className="text-yellow-500" />;
      default: return <FaCheckCircle className="text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team. 
            We're here to help 24/7.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-0 bg-white text-gray-900 text-lg focus:ring-4 focus:ring-blue-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center text-white mx-auto mb-6`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{channel.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{channel.description}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
                  <FaClock className="inline mr-2" />
                  {channel.availability}
                </div>
                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    {getPriorityIcon(faq.priority)}
                    <div>
                      <h3 className="text-lg font-semibold">{faq.q}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{faq.category}</span>
                    </div>
                  </div>
                  {expandedFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-8 border-l-4 border-blue-500">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <FaQuestionCircle className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </Link>
            <a 
              href="mailto:support@foodmunch.com" 
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

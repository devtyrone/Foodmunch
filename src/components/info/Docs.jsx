import React, { useState } from 'react';
import { FaCode, FaRocket, FaBook, FaDownload, FaExternalLinkAlt, FaSearch, FaCopy, FaCheck } from 'react-icons/fa';

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <FaRocket className="text-red-600" />,
      description: 'Quick setup guide to integrate with Foodmunch API',
      content: 'Learn how to authenticate, make your first API call, and handle responses.'
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <FaCode className="text-blue-600" />,
      description: 'Complete API documentation with endpoints and examples',
      content: 'Detailed documentation for all available endpoints, parameters, and response formats.'
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      icon: <FaDownload className="text-green-600" />,
      description: 'Official SDKs for popular programming languages',
      content: 'Download our official SDKs for JavaScript, Python, PHP, and more.'
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      icon: <FaBook className="text-purple-600" />,
      description: 'Real-time notifications for order updates',
      content: 'Set up webhooks to receive real-time notifications about order status changes.'
    }
  ];

  const quickStart = `// Install the Foodmunch SDK
npm install @foodmunch/api

// Initialize the client
import { FoodmunchAPI } from '@foodmunch/api';

const client = new FoodmunchAPI({
  apiKey: 'your-api-key',
  environment: 'sandbox' // or 'production'
});

// Get available restaurants
const restaurants = await client.restaurants.list({
  location: 'Lagos',
  radius: 5000
});

console.log(restaurants);`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-red-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
              Developer Documentation
            </h1>
            <p className="text-xl sm:text-2xl text-red-50 mb-8">
              Build amazing food delivery experiences with our comprehensive API. 
              Get started in minutes with our SDKs and detailed guides.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quick-start" className="bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                Quick Start Guide
              </a>
              <a href="#api-reference" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                API Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get up and running in 5 minutes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Get API Keys</h4>
                    <p className="text-gray-600 dark:text-gray-300">Sign up for a developer account and get your API keys from the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Install SDK</h4>
                    <p className="text-gray-600 dark:text-gray-300">Use our official SDK or make direct HTTP requests to our REST API.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Make Your First Call</h4>
                    <p className="text-gray-600 dark:text-gray-300">Fetch restaurants, create orders, and track deliveries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">JavaScript</span>
                <button
                  onClick={() => copyToClipboard(quickStart, 'quickstart')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === 'quickstart' ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{quickStart}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Documentation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.id} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-4">{section.icon}</div>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{section.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{section.content}</p>
                <a href={`#${section.id}`} className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                  Learn More <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300">Step-by-step guides for common integration patterns.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Code Examples</h3>
              <p className="text-gray-600 dark:text-gray-300">Ready-to-use code snippets in multiple languages.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sandbox</h3>
              <p className="text-gray-600 dark:text-gray-300">Test your integration in our sandbox environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;

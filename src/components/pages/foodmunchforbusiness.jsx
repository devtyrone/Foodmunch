import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUtensils, FaTruck, FaBuilding, FaChartLine, FaUsers, FaLaptop, FaShieldAlt } from 'react-icons/fa';

const FoodMunchForBusiness = () => {
  const businessSolutions = [
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
          <FaUtensils className="w-8 h-8 text-white" />
        </div>
      ),
      title: "Restaurant Partners",
      description: "Expand your reach and grow your business with our extensive customer base and marketing support.",
      benefits: [
        "Increased visibility to thousands of food lovers",
        "Streamlined order management",
        "Targeted marketing and promotional campaigns"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
          <FaTruck className="w-8 h-8 text-white" />
        </div>
      ),
      title: "Delivery Partners",
      description: "Join our delivery network and earn competitive rates with flexible scheduling.",
      benefits: [
        "Flexible working hours",
        "Competitive earnings per delivery",
        "In-app navigation and real-time support"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
          <FaBuilding className="w-8 h-8 text-white" />
        </div>
      ),
      title: "Corporate Solutions",
      description: "Tailored meal plans for workplaces, events, and team needs.",
      benefits: [
        "Bulk ordering with streamlined invoicing",
        "Expense tracking and reporting tools",
        "Dedicated account management support"
      ]
    }
  ];

  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
          <FaChartLine className="w-6 h-6 text-white" />
        </div>
      ),
      title: "Business Analytics",
      description: "Gain real-time insights to optimize operations and profitability."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
          <FaUsers className="w-6 h-6 text-white" />
        </div>
      ),
      title: "Customer Growth",
      description: "Expand your audience with our marketing tools and loyalty programs."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
          <FaLaptop className="w-6 h-6 text-white" />
        </div>
      ),
      title: "Simplified Management",
      description: "Manage menus, orders, and feedback with an intuitive dashboard."
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md">
          <FaShieldAlt className="w-6 h-6 text-white" />
        </div>
      ),
      title: "Secure Transactions",
      description: "Enjoy fast, secure payments with detailed reporting."
    }
  ];

  const testimonials = [
    {
      quote: "Partnering with FoodMunch boosted our delivery orders by 65% in three months.",
      author: "Maria Gonzalez",
      position: "Owner, Tasty Bites"
    },
    {
      quote: "FoodMunch’s tools and support transformed our restaurant operations.",
      author: "James Wilson",
      position: "Operations Manager, Urban Eats"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans" role="main">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
            aria-label="Welcome to FoodMunch Business Solutions"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Grow Your Business with FoodMunch
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of successful food businesses leveraging FoodMunch to reach more customers and boost revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
                aria-label="Get Started with FoodMunch"
              >
                Get Started
              </Link>
              <a 
                href="#solutions" 
                className="border-2 border-white hover:border-gray-200 text-white hover:bg-gray-800/20 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" aria-label="Business Solutions Overview">Business Solutions</h2>
            <p className="text-lg text-gray-600">
              Discover how FoodMunch empowers your business in today's competitive food industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                role="article"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{solution.description}</p>
                </div>
                <ul className="space-y-2 text-left">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Link 
                    to="/contact" 
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600">
              Powerful tools and features to help your food business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses</h2>
            <p className="text-lg text-gray-600">
              See how FoodMunch has transformed our partners’ success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-700 text-base italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-lg mb-8">
              Partner with FoodMunch to unlock new growth opportunities today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
                aria-label="Contact FoodMunch Team"
              >
                Contact Our Team
              </Link>
              <a 
                href="tel:+1234567890" 
                className="border-2 border-white hover:border-gray-200 text-white hover:bg-gray-800/20 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
                aria-label="Call FoodMunch Support"
              >
                Call Now: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodMunchForBusiness;
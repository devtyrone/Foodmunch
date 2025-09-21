import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaChartLine, FaShieldAlt, FaUsers, FaCog, FaSync, FaLock, FaMobileAlt, FaHeadset } from 'react-icons/fa';

const Enterprise = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const featureTimer = setInterval(() => setActiveFeature((prev) => (prev + 1) % features.length), 5000);
    const testimonialTimer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 8000);
    return () => {
      clearInterval(featureTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  const features = [
    {
      icon: <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
        <FaBuilding className="w-8 h-8" />
      </div>,
      title: "Multi-Location Management",
      description: "Centralized oversight for all restaurant locations with real-time updates and analytics."
    },
    {
      icon: <div className="p-3 rounded-full bg-green-100 text-green-600 group-hover:bg-green-50 group-hover:text-green-700 transition-colors">
        <FaChartLine className="w-8 h-8" />
      </div>,
      title: "Advanced Business Analytics",
      description: "AI-driven insights to optimize menus, enhance profitability, and streamline operations."
    },
    {
      icon: <div className="p-3 rounded-full bg-red-100 text-red-600 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
        <FaShieldAlt className="w-8 h-8" />
      </div>,
      title: "Robust Enterprise Security",
      description: "Bank-grade security with SOC 2 Type II compliance and end-to-end data encryption."
    },
    {
      icon: <div className="p-3 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
        <FaUsers className="w-8 h-8" />
      </div>,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for your entire team across all locations."
    },
    {
      icon: <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-50 group-hover:text-yellow-700 transition-colors">
        <FaCog className="w-8 h-8" />
      </div>,
      title: "Custom Solutions",
      description: "Tailored features and integrations to meet your specific business needs."
    },
    {
      icon: <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
        <FaSync className="w-8 h-8" />
      </div>,
      title: "Real-time Sync",
      description: "Instant synchronization of menu updates, orders, and inventory across all platforms."
    },
    {
      icon: <div className="p-3 rounded-full bg-pink-100 text-pink-600 group-hover:bg-pink-50 group-hover:text-pink-700 transition-colors">
        <FaLock className="w-8 h-8" />
      </div>,
      title: "Data Protection",
      description: "Advanced security measures to protect your business and customer data."
    },
    {
      icon: <div className="p-3 rounded-full bg-teal-100 text-teal-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
        <FaMobileAlt className="w-8 h-8" />
      </div>,
      title: "Mobile Management",
      description: "Manage your business on-the-go with our powerful mobile app."
    },
    {
      icon: <div className="p-3 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-50 group-hover:text-orange-700 transition-colors">
        <FaHeadset className="w-8 h-8" />
      </div>,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock for your business needs."
    }
  ];

  const testimonials = [
    {
      quote: "FoodMunch enabled a 27% reduction in operational costs and a 183% increase in online orders.",
      author: "Sarah Johnson, COO",
      company: "Urban Eats Group"
    },
    {
      quote: "Exceptional customization and support for our multi-location enterprise needs.",
      author: "Michael Chen, Director",
      company: "Fusion Cuisine"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise Solutions for Food Businesses
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto">
            Empower your restaurant enterprise with our comprehensive platform, designed to drive growth, efficiency, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Request a Demo
            </Link>
            <a 
              href="#overview" 
              className="border border-white hover:border-gray-300 text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
            >
              Watch Overview
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features for Your Business</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive tools to optimize operations and elevate your restaurant enterprise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-3 bg-gray-100 text-primary-600 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 text-center"
            >
              <p className="text-lg text-gray-800 mb-4 italic">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
              <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</div>
              <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Schedule a personalized consultation to discover how FoodMunch can revolutionize your operations.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
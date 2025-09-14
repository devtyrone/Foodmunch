import React from 'react';
import { FaBullseye, FaHeart, FaGlobe, FaUsers, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const Mission = () => {
  const missionPoints = [
    {
      icon: <FaBullseye className="text-red-600 text-3xl" />,
      title: "Our Mission",
      description: "To make high-quality, delicious food accessible to everyone, everywhere, while supporting local communities and sustainable practices."
    },
    {
      icon: <FaHeart className="text-red-600 text-3xl" />,
      title: "Our Vision",
      description: "To become the world's most trusted food delivery platform, connecting people with exceptional culinary experiences that nourish both body and soul."
    },
    {
      icon: <FaGlobe className="text-red-600 text-3xl" />,
      title: "Our Impact",
      description: "Creating positive change in communities by supporting local restaurants, reducing food waste, and promoting healthy eating habits."
    }
  ];

  const values = [
    {
      icon: <FaUsers className="text-red-600 text-2xl" />,
      title: "Community First",
      description: "We believe in building strong communities through food. Every order supports local restaurants and creates jobs in your neighborhood."
    },
    {
      icon: <FaShieldAlt className="text-red-600 text-2xl" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards in food safety, preparation, and delivery to ensure every meal meets our customers' expectations."
    },
    {
      icon: <FaLightbulb className="text-red-600 text-2xl" />,
      title: "Innovation",
      description: "We continuously innovate our technology and processes to provide better service, faster delivery, and enhanced customer experiences."
    }
  ];

  const stats = [
    { number: "1M+", label: "Happy Customers" },
    { number: "500+", label: "Partner Restaurants" },
    { number: "50+", label: "Cities Served" },
    { number: "99.9%", label: "Delivery Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Delivering more than just food – we're delivering experiences, 
              community, and a commitment to excellence in every bite.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Impact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {point.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h2>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                FoodMunch was born from a simple idea: everyone deserves access to great food, 
                regardless of their schedule or location. Founded in 2019 by a team of food 
                enthusiasts and tech innovators, we set out to bridge the gap between amazing 
                local restaurants and busy people who love good food.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                What started as a small delivery service in New York has grown into a platform 
                that connects thousands of customers with hundreds of restaurants across multiple 
                cities. But our core mission remains the same: making exceptional food accessible 
                to everyone.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to support local businesses, create jobs in our communities, 
                and bring joy to millions of meals. Every order is an opportunity to make 
                someone's day better through the power of great food.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2019 - The Beginning</h4>
                    <p className="text-gray-600">Founded with a vision to make great food accessible to everyone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2020 - Rapid Growth</h4>
                    <p className="text-gray-600">Expanded to 10 cities and partnered with 100+ restaurants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2022 - Innovation</h4>
                    <p className="text-gray-600">Launched AI-powered recommendations and sustainable packaging</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">2024 - Today</h4>
                    <p className="text-gray-600">Serving 1M+ customers across 50+ cities with 99.9% satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that tell the story of our commitment to excellence and community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to You
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fresh, Quality Ingredients</h3>
                    <p className="text-gray-600">We partner only with restaurants that meet our strict quality standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast, Reliable Delivery</h3>
                    <p className="text-gray-600">Your food arrives hot, fresh, and on time, every time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Customer Service</h3>
                    <p className="text-gray-600">Our team is here 24/7 to ensure your complete satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600">Every order supports local businesses and creates jobs in your community</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When you choose FoodMunch, you're not just ordering food – you're supporting 
                a mission to make great food accessible to everyone while building stronger 
                communities.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Together, we can create a world where delicious, quality food is just a click 
                away, and where every meal brings people together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Order Now
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the FoodMunch Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust us to deliver exceptional food experiences.
          </p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Start Your Food Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaTruck, FaShieldAlt, FaUsers, FaGlobe, FaRecycle, FaAward, FaHeart } from 'react-icons/fa';

const Sourcing = () => {
  const sourcingPrinciples = [
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Sustainable Sourcing",
      description: "We partner with farms and suppliers who prioritize environmental sustainability and ethical practices in their operations."
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Quality Assurance",
      description: "Every ingredient undergoes rigorous quality checks to ensure freshness, safety, and nutritional value meet our high standards."
    },
    {
      icon: <FaUsers className="text-purple-600 text-3xl" />,
      title: "Local Partnerships",
      description: "We support local farmers and suppliers, strengthening communities and reducing our carbon footprint through shorter supply chains."
    }
  ];

  const qualityStandards = [
    {
      title: "Freshness Guarantee",
      description: "All ingredients are sourced within 24-48 hours of harvest to ensure maximum freshness and nutritional value.",
      icon: "🌱"
    },
    {
      title: "Organic Certification",
      description: "Over 80% of our produce comes from certified organic farms that follow strict environmental and health standards.",
      icon: "🏆"
    },
    {
      title: "Fair Trade Practices",
      description: "We ensure fair wages and working conditions for all workers in our supply chain, from farm to table.",
      icon: "🤝"
    },
    {
      title: "Traceability",
      description: "Every ingredient can be traced back to its source, ensuring complete transparency in our supply chain.",
      icon: "🔍"
    }
  ];

  const supplierCategories = [
    {
      category: "Fresh Produce",
      percentage: 35,
      description: "Locally sourced fruits and vegetables from certified organic farms",
      suppliers: ["Green Valley Farms", "Sunrise Organics", "Mountain View Produce"]
    },
    {
      category: "Meat & Poultry",
      percentage: 25,
      description: "Humanely raised, antibiotic-free meat from trusted local suppliers",
      suppliers: ["Heritage Farms", "Pasture Perfect", "Clean Meat Co."]
    },
    {
      category: "Dairy & Eggs",
      percentage: 20,
      description: "Farm-fresh dairy products from grass-fed, free-range animals",
      suppliers: ["Meadowbrook Dairy", "Golden Egg Farm", "Cream Valley"]
    },
    {
      category: "Grains & Pantry",
      percentage: 20,
      description: "Whole grains, spices, and pantry staples from sustainable sources",
      suppliers: ["Ancient Grains Co.", "Spice Route", "Pantry Partners"]
    }
  ];

  const sustainabilityMetrics = [
    { metric: "Carbon Footprint", value: "Reduced by 40%", description: "Through local sourcing and efficient logistics" },
    { metric: "Food Waste", value: "Less than 2%", description: "Through careful planning and donation programs" },
    { metric: "Packaging", value: "100% Recyclable", description: "All packaging materials are eco-friendly and recyclable" },
    { metric: "Water Usage", value: "Conserved 30%", description: "Through sustainable farming partnerships" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Sourcing</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              From farm to table, we ensure every ingredient meets our highest standards 
              for quality, sustainability, and ethical sourcing.
            </p>
          </div>
        </div>
      </div>

      {/* Sourcing Principles Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The values that guide every sourcing decision we make
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sourcingPrinciples.map((principle, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Standards Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence in every aspect of sourcing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">{standard.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{standard.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supplier Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Supply Chain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse network of trusted suppliers across different categories
            </p>
          </div>
          
          <div className="space-y-8">
            {supplierCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  <div className="text-3xl font-bold text-green-600">{category.percentage}%</div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.suppliers.map((supplier, supplierIndex) => (
                    <span 
                      key={supplierIndex}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full"
                    >
                      {supplier}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Metrics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sustainability Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to environmental responsibility through responsible sourcing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-gray-600 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supplier Partnership Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're always looking for new suppliers who share our commitment to quality, 
                sustainability, and ethical practices. Join our network of trusted partners 
                and help us deliver exceptional food experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our partnership program offers fair pricing, reliable orders, and support 
                for sustainable farming practices. Together, we can build a better food system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaAward className="text-green-600 mr-3" />
                  <span className="text-gray-700">Fair pricing and reliable payments</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="text-green-600 mr-3" />
                  <span className="text-gray-700">Support for sustainable practices</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-green-600 mr-3" />
                  <span className="text-gray-700">Dedicated partnership support</span>
                </div>
                <div className="flex items-center">
                  <FaRecycle className="text-green-600 mr-3" />
                  <span className="text-gray-700">Waste reduction programs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Become a Supplier</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Fresh Produce</option>
                    <option>Meat & Poultry</option>
                    <option>Dairy & Eggs</option>
                    <option>Grains & Pantry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Tell us about your products and practices..."></textarea>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Taste the Difference Quality Makes
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the exceptional quality and freshness that comes from our 
            commitment to responsible sourcing and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
              Order Now
            </Link>
            <Link to="/about-us" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sourcing;

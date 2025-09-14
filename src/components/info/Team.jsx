import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/src/assets/others/chef.jpeg",
      bio: "With over 15 years in the food industry, Sarah leads our vision of making quality food accessible to everyone. She previously served as VP of Operations at FreshDirect.",
      specialties: ["Strategic Planning", "Operations Management", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@foodmunch.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head Chef & Culinary Director",
      image: "/src/assets/others/chef.jpeg",
      bio: "Award-winning chef with Michelin-star experience, Michael brings 20 years of culinary excellence to our kitchen. He's passionate about sustainable cooking and local ingredients.",
      specialties: ["Menu Development", "Quality Control", "Culinary Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@foodmunch.com"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Chief Technology Officer",
      image: "/src/assets/others/chef.jpeg",
      bio: "Tech visionary with expertise in food delivery platforms. Emily has built scalable systems for major food companies and leads our digital transformation initiatives.",
      specialties: ["Technology Strategy", "Platform Development", "Data Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@foodmunch.com"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Head of Operations",
      image: "/src/assets/others/chef.jpeg",
      bio: "Operations expert with a focus on efficiency and customer satisfaction. David ensures our delivery network runs smoothly and maintains our high service standards.",
      specialties: ["Supply Chain", "Logistics", "Process Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@foodmunch.com"
      }
    },
    {
      id: 5,
      name: "Lisa Park",
      position: "Head of Marketing",
      image: "/src/assets/others/chef.jpeg",
      bio: "Creative marketing leader with a passion for food and community. Lisa has built successful campaigns for major food brands and leads our customer engagement strategies.",
      specialties: ["Brand Strategy", "Digital Marketing", "Community Building"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@foodmunch.com"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Head of Customer Experience",
      image: "/src/assets/others/chef.jpeg",
      bio: "Customer advocate with a background in hospitality and service excellence. James ensures every customer interaction exceeds expectations and builds lasting relationships.",
      specialties: ["Customer Service", "Experience Design", "Quality Assurance"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@foodmunch.com"
      }
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from food preparation to customer service.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We continuously innovate to improve our services and create better experiences.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices.",
      icon: "🤝"
    },
    {
      title: "Community",
      description: "We're committed to building strong relationships with our customers and communities.",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-yellow-300">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Passionate professionals dedicated to bringing you the best food experience possible. 
              Get to know the people behind FoodMunch.
            </p>
          </div>
        </div>
      </div>

      {/* Team Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at FoodMunch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading FoodMunch to success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-red-600 font-medium">{member.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      aria-label="Email"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At FoodMunch, we believe that great food brings people together. Our team is built on 
                a foundation of passion, creativity, and a shared commitment to excellence. We foster 
                an environment where innovation thrives and every team member's contribution is valued.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just a food delivery company – we're a community of food lovers, tech 
                enthusiasts, and customer advocates working together to make every meal memorable.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate individuals who share our vision of making 
                great food accessible to everyone. Explore career opportunities with us.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-red-600 mr-3" />
                  <span className="text-gray-600">New York, NY</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-red-600 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-red-600 mr-3" />
                  <span className="text-gray-600">careers@foodmunch.com</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-red-600 mr-3" />
                  <span className="text-gray-600">Mon-Fri 9AM-6PM</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Team's Excellence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order now and taste the difference our passionate team makes in every dish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Order Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

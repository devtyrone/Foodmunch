/**
 * Team.jsx
 * Dedicated page to showcase leadership team, core values, culture, and contact details.
 * This page focuses on static content and team member bios.
 */
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

// Marquee component styled like AboutUs.jsx (circular avatars, name, title)
// - Auto-scrolls left, pauses on hover, supports drag/touch scrubbing
function TeamMarquee({ members = [] }) {
  const marqueeRef = useRef(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let offset = 0;
    let animationFrame;
    const speed = 1.5;

    // Duplicate content initially for seamless loop
    if (marquee.children.length === members.length) {
      for (let i = 0; i < members.length; i++) {
        marquee.appendChild(marquee.children[i].cloneNode(true));
      }
    }

    const containerWidth = marquee.parentElement.offsetWidth;
    const contentWidth = () => marquee.scrollWidth / 2;
    // Start from left edge (0) instead of right
    offset = 0;
    offsetRef.current = offset;
    marquee.style.transform = `translateX(${offset}px)`;

    const animate = () => {
      offset = offsetRef.current;
      // Always scroll, never pause
      if (!draggingRef.current) {
        offset -= speed;
      }
      // Reset to start from left when content scrolls off
      if (offset < -contentWidth()) {
        offset = 0;
      }
      offsetRef.current = offset;
      marquee.style.transform = `translateX(${offset}px)`;
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [members]);

  const onMouseDown = (e) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    isPausedRef.current = true;
  };
  const onMouseMove = (e) => {
    if (!draggingRef.current) return;
    const delta = e.clientX - startXRef.current;
    offsetRef.current = startOffsetRef.current + delta;
    if (marqueeRef.current) marqueeRef.current.style.transform = `translateX(${offsetRef.current}px)`;
  };
  const onMouseUp = () => {
    draggingRef.current = false;
    isPausedRef.current = false;
  };
  const onTouchStart = (e) => {
    const x = e.touches[0]?.clientX || 0;
    draggingRef.current = true;
    startXRef.current = x;
    startOffsetRef.current = offsetRef.current;
    isPausedRef.current = true;
  };
  const onTouchMove = (e) => {
    if (!draggingRef.current) return;
    const x = e.touches[0]?.clientX || 0;
    const delta = x - startXRef.current;
    offsetRef.current = startOffsetRef.current + delta;
    if (marqueeRef.current) marqueeRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    e.preventDefault();
  };
  const onTouchEnd = () => {
    draggingRef.current = false;
    isPausedRef.current = false;
  };

  return (
    <div className="overflow-hidden w-full relative">
      <div
        ref={marqueeRef}
        className="whitespace-nowrap flex py-4 select-none cursor-grab active:cursor-grabbing"
        style={{ willChange: 'transform' }}
        onMouseEnter={() => { /* Remove pause on hover */ }}
        onMouseLeave={() => { draggingRef.current = false; }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {[...members, ...members].map((member, idx) => (
          <div key={idx} className="inline-block mx-4 flex-none w-48 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg mx-auto" loading="lazy" decoding="async" />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-red-600 text-sm">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const Team = () => {
  // Team data model used to render leadership cards
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/assets/others/chef.jpeg",
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
      name: "Ezenewu Great",
      position: "Head Chef & Culinary Director",
      image: "/assets/others/chef.jpeg",
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
      name: "Ezeokwu Chinedu",
      position: "Chief Technology Officer",
      image: "/assets/others/chef.jpeg",
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
      name: "Mercy Oladimeji",
      position: "Head of Operations",
      image: "/assets/others/chef.jpeg",
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
      name: "Ovuoke Buluku",
      position: "Head of Marketing",
      image: "/assets/others/chef.jpeg",
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
      name: "James Okosa",
      position: "Head of Customer Experience",
      image: "/assets/others/chef.jpeg",
      bio: "Customer advocate with a background in hospitality and service excellence. James ensures every customer interaction exceeds expectations and builds lasting relationships.",
      specialties: ["Customer Service", "Experience Design", "Quality Assurance"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@foodmunch.com"
      }
    }
  ];

  // Company values displayed as a four-column feature grid
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

      {/* Team Members Section (AboutUs-style marquee) */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the experienced professionals leading FoodMunch to success</p>
          </div>
          <TeamMarquee members={teamMembers} />
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
              
              <Link to="/careers/open-positions" className="block w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
                View Open Positions
              </Link>
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
            <Link to="/menu" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block text-center">
              Order Now
            </Link>
            <Link to="/about-us" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-block text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

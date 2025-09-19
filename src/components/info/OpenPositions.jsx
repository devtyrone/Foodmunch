import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaChevronDown, FaChevronUp, FaSearch, FaFilter } from 'react-icons/fa';

const OpenPositions = () => {
  const [expandedRole, setExpandedRole] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = ['All', 'Engineering', 'Product', 'Operations', 'Marketing', 'Sales', 'Customer Success'];
  const locations = ['All', 'Remote', 'Lagos', 'New York', 'London', 'Hybrid'];

  const positions = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote • Africa/Europe',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₦15M - ₦25M',
      summary: 'Build fast, accessible interfaces with React and Tailwind.',
      description: 'We\'re looking for a Senior Frontend Engineer to lead the development of our customer-facing applications. You\'ll work closely with design and product teams to create exceptional user experiences.',
      responsibilities: [
        'Architect and implement scalable frontend solutions using React, TypeScript, and Next.js',
        'Lead code reviews and mentor junior developers',
        'Collaborate with designers to implement pixel-perfect, responsive UIs',
        'Optimize application performance and ensure accessibility standards',
        'Contribute to technical documentation and best practices'
      ],
      requirements: [
        '5+ years of experience with modern JavaScript frameworks (React preferred)',
        'Strong understanding of web performance optimization',
        'Experience with TypeScript and modern CSS frameworks',
        'Excellent communication and collaboration skills',
        'Portfolio demonstrating high-quality production applications'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work arrangements',
        'Annual learning budget (₦500K)',
        'Health insurance for you and family',
        '30 days paid time off'
      ]
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Product',
      location: 'Hybrid • Lagos',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₦10M - ₦18M',
      summary: 'Own end-to-end product design from research to polish.',
      description: 'Join our product team to shape the future of food delivery in Africa. You\'ll lead design initiatives from conception to launch.',
      responsibilities: [
        'Conduct user research and translate insights into design solutions',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Develop and maintain our design system',
        'Collaborate with engineers to ensure quality implementation',
        'Present design decisions to stakeholders'
      ],
      requirements: [
        '3+ years of product design experience',
        'Proficiency in Figma and prototyping tools',
        'Strong portfolio showing end-to-end design process',
        'Experience with user research methodologies',
        'Understanding of mobile-first design principles'
      ],
      benefits: [
        'Competitive compensation package',
        'Modern office in Victoria Island',
        'Design tools and equipment budget',
        'Quarterly team retreats',
        'Meal allowances and gym membership'
      ]
    },
    {
      id: 3,
      title: 'Operations Lead',
      department: 'Operations',
      location: 'Hybrid • Lagos',
      type: 'Full-time',
      experience: '4+ years',
      salary: '₦12M - ₦20M',
      summary: 'Scale partner operations and delivery excellence.',
      description: 'Lead our operations team to ensure seamless delivery experiences for millions of customers across Nigeria.',
      responsibilities: [
        'Manage relationships with restaurant partners',
        'Optimize delivery routes and driver allocation',
        'Implement quality control processes',
        'Analyze operational metrics and drive improvements',
        'Lead and develop a team of operations specialists'
      ],
      requirements: [
        '4+ years in operations or logistics management',
        'Experience with data analysis and process optimization',
        'Strong leadership and communication skills',
        'Ability to work in fast-paced environment',
        'Bachelor\'s degree or equivalent experience'
      ],
      benefits: [
        'Performance-based bonuses',
        'Company car or transport allowance',
        'Health and wellness programs',
        'Professional development opportunities',
        'Stock options'
      ]
    },
    {
      id: 4,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₦14M - ₦22M',
      summary: 'Tell our story and grow our community across channels.',
      description: 'Drive our marketing strategy to accelerate growth and build a beloved brand across Africa.',
      responsibilities: [
        'Develop and execute multi-channel marketing campaigns',
        'Manage social media strategy and content calendar',
        'Oversee influencer and partnership programs',
        'Analyze campaign performance and optimize ROI',
        'Build and lead a high-performing marketing team'
      ],
      requirements: [
        '5+ years of marketing experience, preferably in tech or food industry',
        'Proven track record of successful campaign management',
        'Strong analytical and creative skills',
        'Experience with digital marketing tools and platforms',
        'Excellent written and verbal communication'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Marketing budget for experimentation',
        'Conference and training opportunities',
        'Flexible work schedule',
        'Comprehensive health coverage'
      ]
    },
    {
      id: 5,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-7 years',
      salary: '₦12M - ₦22M',
      summary: 'Build scalable APIs and services powering our platform.',
      description: 'Join our backend team to build robust, scalable systems that handle millions of orders daily.',
      responsibilities: [
        'Design and implement RESTful APIs and microservices',
        'Optimize database queries and system performance',
        'Implement security best practices',
        'Participate in system design and architecture decisions',
        'Write clean, maintainable, and well-tested code'
      ],
      requirements: [
        'Strong experience with Node.js, Python, or Go',
        'Experience with SQL and NoSQL databases',
        'Understanding of distributed systems and cloud platforms',
        'Knowledge of CI/CD and DevOps practices',
        'Problem-solving mindset and attention to detail'
      ],
      benefits: [
        'Top-tier compensation',
        'Latest development tools and equipment',
        'Learning and certification budget',
        'Flexible hours across time zones',
        'Annual company offsite'
      ]
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Hybrid • Lagos',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₦8M - ₦14M',
      summary: 'Ensure customer satisfaction and drive retention.',
      description: 'Be the voice of our customers and help them get the most value from our platform.',
      responsibilities: [
        'Onboard new restaurant partners',
        'Provide ongoing support and training',
        'Identify upselling and cross-selling opportunities',
        'Gather customer feedback and insights',
        'Collaborate with product team on improvements'
      ],
      requirements: [
        '2+ years in customer success or account management',
        'Excellent communication and interpersonal skills',
        'Problem-solving ability and patience',
        'Experience with CRM tools',
        'Passion for food and hospitality'
      ],
      benefits: [
        'Competitive base salary plus commissions',
        'Career growth opportunities',
        'Comprehensive training program',
        'Food credits and discounts',
        'Team building activities'
      ]
    }
  ];

  const filteredPositions = positions.filter(position => {
    const matchesDepartment = selectedDepartment === 'All' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || position.location.includes(selectedLocation);
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          position.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const toggleExpand = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-red-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Build the Future of Food Delivery
            </h1>
            <p className="text-xl sm:text-2xl text-red-50 mb-8">
              Join our mission to revolutionize how people discover and enjoy great food. 
              We're looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">{positions.length}</span>
                <span className="ml-2 text-red-50">Open Positions</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">6</span>
                <span className="ml-2 text-red-50">Departments</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">4</span>
                <span className="ml-2 text-red-50">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join Foodmunch?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Growth', desc: 'Rapid career advancement in a high-growth startup' },
              { icon: '💡', title: 'Innovation', desc: 'Work with cutting-edge technology and creative solutions' },
              { icon: '🌍', title: 'Impact', desc: 'Make a real difference in millions of lives daily' },
              { icon: '🤝', title: 'Culture', desc: 'Join a diverse, inclusive, and supportive team' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 sticky top-14 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 text-gray-600">
            Showing {filteredPositions.length} positions
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {filteredPositions.map((role) => (
              <div key={role.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <FaBriefcase className="mr-2 text-red-500" />
                          {role.department}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-red-500" />
                          {role.location}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-2 text-red-500" />
                          {role.type}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{role.summary}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {role.salary}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {role.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => toggleExpand(role.id)}
                        className="flex items-center text-red-600 hover:text-red-700 font-semibold"
                      >
                        View Details
                        {expandedRole === role.id ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedRole === role.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">About the Role</h4>
                          <p className="text-gray-600 mb-4">{role.description}</p>
                          
                          <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {role.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span className="text-gray-600">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2 mb-6">
                            {role.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-red-500 mr-2">✓</span>
                                <span className="text-gray-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits & Perks</h4>
                          <ul className="space-y-2">
                            {role.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-green-500 mr-2">★</span>
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Buttons muted per request: visible but disabled with hover tooltip */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <div className="relative group">
                          <button
                            className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg opacity-60 cursor-not-allowed"
                            disabled
                            aria-disabled="true"
                            title="Application is not open"
                          >
                            Apply Now
                          </button>
                          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Application is not open
                          </span>
                        </div>
                        <div className="relative group">
                          <button
                            className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg opacity-60 cursor-not-allowed"
                            disabled
                            aria-disabled="true"
                            title="Application is not open"
                          >
                            Share This Role
                          </button>
                          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Application is not open
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/careers#join-us" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OpenPositions;

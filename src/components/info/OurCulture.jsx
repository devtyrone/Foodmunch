import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaUsers, FaHeart, FaRocket, FaLightbulb, FaHandshake, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurCulture = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const cultureValues = [
    {
      icon: <FaUsers className="text-3xl text-red-600" />,
      title: 'People First',
      brief: 'We prioritize our team\'s growth, wellbeing, and success.',
      full: 'At Foodmunch, people are our greatest asset. We invest in continuous learning, provide mentorship opportunities, and celebrate individual achievements. Our flexible work arrangements and comprehensive benefits ensure everyone can bring their best selves to work.',
      stats: ['95% employee satisfaction', '4.8/5 Glassdoor rating', '85% internal promotions']
    },
    {
      icon: <FaHeart className="text-3xl text-red-600" />,
      title: 'Customer Obsession',
      brief: 'Every decision starts with "How does this help our customers?"',
      full: 'We\'re obsessed with creating delightful experiences. From the first click to the last bite, we sweat the details. We listen actively to feedback, iterate quickly, and measure success by customer happiness, not just metrics.',
      stats: ['4.7/5 average rating', '2M+ happy customers', '<30 min avg delivery']
    },
    {
      icon: <FaRocket className="text-3xl text-red-600" />,
      title: 'Move Fast, Learn Faster',
      brief: 'We ship quickly, measure impact, and iterate relentlessly.',
      full: 'Speed is our competitive advantage. We embrace experimentation, celebrate learning from failures, and optimize for rapid iteration. Our two-week sprint cycles and daily standups keep us agile and responsive to market needs.',
      stats: ['200+ features shipped/year', '2-week release cycles', '50+ A/B tests monthly']
    },
    {
      icon: <FaLightbulb className="text-3xl text-red-600" />,
      title: 'Innovation Mindset',
      brief: 'We challenge the status quo and embrace creative solutions.',
      full: 'Innovation isn\'t just about technology—it\'s about finding better ways to serve our customers and partners. We encourage wild ideas, provide innovation time, and reward creative problem-solving at every level.',
      stats: ['20% time for innovation', '10+ patents filed', '3 industry awards']
    },
    {
      icon: <FaHandshake className="text-3xl text-red-600" />,
      title: 'Radical Transparency',
      brief: 'We share openly, communicate honestly, and build trust.',
      full: 'Transparency builds trust. We share company metrics openly, encourage constructive feedback, and believe in having difficult conversations with empathy. Our all-hands meetings and open documentation keep everyone aligned.',
      stats: ['Weekly all-hands', 'Open salary bands', 'Public roadmap']
    },
    {
      icon: <FaGlobe className="text-3xl text-red-600" />,
      title: 'Global Impact, Local Heart',
      brief: 'We think globally but act locally in every community we serve.',
      full: 'While we aim for global scale, we never forget our local roots. We partner with local restaurants, support community initiatives, and adapt our service to local tastes and preferences. Every market is unique, and we celebrate that diversity.',
      stats: ['500+ local partners', '₦100M+ to local economy', '50+ community events']
    }
  ];

  const workLifeBalance = [
    {
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive. Core hours 10am-3pm, flex the rest.',
      icon: '🕐'
    },
    {
      title: 'Remote First',
      description: 'Work from anywhere. Office optional, productivity mandatory.',
      icon: '🏠'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take the time you need. We trust you to manage your workload.',
      icon: '🏖️'
    },
    {
      title: 'Wellness Budget',
      description: '₦500K annual budget for gym, therapy, or wellness activities.',
      icon: '💪'
    },
    {
      title: 'Learning Days',
      description: 'One day per month dedicated to learning and development.',
      icon: '📚'
    },
    {
      title: 'Sabbaticals',
      description: 'After 3 years, take a month-long paid sabbatical.',
      icon: '✈️'
    }
  ];

  const employeeStories = [
    {
      name: 'Adaeze Okonkwo',
      role: 'Senior Product Designer',
      tenure: '2 years at Foodmunch',
      image: '/assets/others/chef.jpeg',
      quote: 'Foodmunch gave me the autonomy to redesign our entire mobile experience. The trust and support I received was incredible.',
      highlight: 'Led the redesign that increased conversion by 40%'
    },
    {
      name: 'Emeka Nwosu',
      role: 'Engineering Lead',
      tenure: '3 years at Foodmunch',
      image: '/assets/others/chef.jpeg',
      quote: 'The engineering culture here is unmatched. We move fast but never compromise on quality or user experience.',
      highlight: 'Built our microservices architecture from scratch'
    },
    {
      name: 'Fatima Ahmed',
      role: 'Operations Manager',
      tenure: '18 months at Foodmunch',
      image: '/assets/others/chef.jpeg',
      quote: 'I joined as an analyst and was promoted twice in 18 months. The growth opportunities here are real.',
      highlight: 'Reduced delivery times by 35% in Lagos'
    }
  ];

  const cultureActivities = [
    { title: 'Friday Demos', desc: 'Weekly show-and-tell of what we\'ve built', emoji: '🎯' },
    { title: 'Lunch & Learn', desc: 'Monthly sessions where team members teach skills', emoji: '🍕' },
    { title: 'Hackathons', desc: 'Quarterly innovation sprints with prizes', emoji: '💻' },
    { title: 'Team Retreats', desc: 'Annual offsite for bonding and strategy', emoji: '🏝️' },
    { title: 'Culture Awards', desc: 'Monthly recognition for living our values', emoji: '🏆' },
    { title: 'Food Fridays', desc: 'Team lunch from our partner restaurants', emoji: '🍔' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Culture That <span className="text-yellow-300">Nourishes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-red-50 mb-8 leading-relaxed">
              We're building more than a food delivery platform. We're creating a workplace where 
              talented people do their best work, grow together, and have fun along the way.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-red-100">Team Members</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-red-100">Nationalities</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-3xl font-bold">4.8/5</div>
                <div className="text-red-100">Culture Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section with Expandable Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles that guide every decision, 
              every interaction, and every line of code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{value.brief}</p>
                  
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    Learn More
                    {expandedSection === index ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>

                  {expandedSection === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                      <p className="text-gray-700 mb-4">{value.full}</p>
                      <div className="space-y-2">
                        {value.stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-sm text-gray-600">{stat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work-Life Harmony</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe great work happens when people have the flexibility and support to live full lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workLifeBalance.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices from the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the people who make Foodmunch special.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {employeeStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-xs text-gray-500">{story.tenure}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{story.quote}"</blockquote>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-red-600 font-semibold">{story.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture in Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Culture in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we bring our values to life through rituals, traditions, and daily practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{activity.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Culture?</h2>
          <p className="text-xl text-gray-300 mb-10">
            If our values resonate with you and you're excited about building the future of food delivery, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/careers/open-positions" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors inline-block"
            >
              View Open Positions
            </Link>
            <Link 
              to="/careers" 
              className="border-2 border-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors inline-block"
            >
              Learn More About Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCulture;

import React, { useState } from 'react';
import { FaCalendar, FaUser, FaClock, FaTag, FaSearch, FaArrowRight, FaHeart, FaShare, FaComment } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Company News', 'Product Updates', 'Food Culture', 'Technology', 'Community'];

  const posts = [
    {
      id: 1,
      title: 'Welcome to the Foodmunch Blog',
      slug: 'welcome-to-foodmunch-blog',
      excerpt: 'Discover insights from our team on food, delivery innovations, and the stories that shape our platform. Join us on this delicious journey.',
      content: 'Full article content would go here...',
      author: 'Sarah Johnson',
      authorRole: 'Head of Marketing',
      date: '2025-01-15',
      readTime: '3 min read',
      category: 'Company News',
      image: '/assets/food/food.jpg',
      tags: ['welcome', 'company', 'introduction'],
      likes: 42,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: 'How We Curate Top Restaurants',
      slug: 'restaurant-curation-process',
      excerpt: 'A behind-the-scenes look at our rigorous vendor selection process and quality control measures that ensure you get the best dining experience.',
      content: 'Full article content would go here...',
      author: 'Michael Chen',
      authorRole: 'Operations Manager',
      date: '2025-01-12',
      readTime: '5 min read',
      category: 'Food Culture',
      image: '/assets/food/food2.jpg',
      tags: ['restaurants', 'quality', 'curation'],
      likes: 67,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: 'Introducing Real-Time Order Tracking',
      slug: 'real-time-order-tracking',
      excerpt: 'Experience complete transparency with our new real-time tracking system. Know exactly where your food is, from kitchen to your doorstep.',
      content: 'Full article content would go here...',
      author: 'Alex Rodriguez',
      authorRole: 'Product Manager',
      date: '2025-01-10',
      readTime: '4 min read',
      category: 'Product Updates',
      image: '/assets/food/food3.jpg',
      tags: ['tracking', 'technology', 'updates'],
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 4,
      title: 'The Rise of Nigerian Cuisine in Global Markets',
      slug: 'nigerian-cuisine-global-markets',
      excerpt: 'Exploring how traditional Nigerian dishes are gaining international recognition and how Foodmunch is supporting local restaurants in this journey.',
      content: 'Full article content would go here...',
      author: 'Adaora Okafor',
      authorRole: 'Cultural Liaison',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Food Culture',
      image: '/assets/food/food4.jpg',
      tags: ['nigerian-cuisine', 'culture', 'global'],
      likes: 134,
      comments: 31,
      featured: false
    },
    {
      id: 5,
      title: 'Building Sustainable Delivery Networks',
      slug: 'sustainable-delivery-networks',
      excerpt: 'Our commitment to environmental responsibility through electric vehicles, optimized routes, and eco-friendly packaging solutions.',
      content: 'Full article content would go here...',
      author: 'David Okonkwo',
      authorRole: 'Sustainability Lead',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Technology',
      image: '/assets/food/food5.jpg',
      tags: ['sustainability', 'environment', 'delivery'],
      likes: 76,
      comments: 19,
      featured: false
    },
    {
      id: 6,
      title: 'Community Spotlight: Local Heroes',
      slug: 'community-spotlight-local-heroes',
      excerpt: 'Meet the restaurant owners, delivery partners, and customers who make our community special. Their stories inspire us every day.',
      content: 'Full article content would go here...',
      author: 'Grace Adeola',
      authorRole: 'Community Manager',
      date: '2025-01-03',
      readTime: '5 min read',
      category: 'Community',
      image: '/assets/food/food.jpg',
      tags: ['community', 'stories', 'spotlight'],
      likes: 98,
      comments: 27,
      featured: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
              The Foodmunch Blog
            </h1>
            <p className="text-xl sm:text-2xl text-orange-50 mb-8">
              Stories, insights, and updates from the world of food delivery. 
              Discover what's cooking in our kitchen of innovation.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-0 bg-white text-gray-900 focus:ring-4 focus:ring-orange-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'All' && (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center">
                          <FaCalendar className="mr-2" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-2" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <FaTag className="mr-2" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3"></div>
                          <div>
                            <p className="font-semibold text-sm">{post.author}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <FaHeart className="mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <FaComment className="mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mr-2"></div>
                        <span className="text-xs font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <FaHeart className="mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <FaComment className="mr-1" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get the latest stories and updates delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              Subscribe <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

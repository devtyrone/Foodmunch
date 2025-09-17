import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTimes, FaStar, FaClock, FaDollarSign } from 'react-icons/fa';

const SearchFilter = ({ onSearch, onFilter, restaurants = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    rating: '',
    deliveryTime: '',
    sortBy: 'popularity'
  });

  const cuisineTypes = [
    'All Cuisines', 'Asian', 'Italian', 'Mexican', 'Indian', 'Chinese', 
    'American', 'Mediterranean', 'Thai', 'Japanese', 'Korean', 'Middle Eastern'
  ];

  const priceRanges = [
    { label: 'Any Price', value: '' },
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
    { label: '$$$$', value: '4' }
  ];

  const ratings = [
    { label: 'Any Rating', value: '' },
    { label: '4.5+ Stars', value: '4.5' },
    { label: '4.0+ Stars', value: '4.0' },
    { label: '3.5+ Stars', value: '3.5' },
    { label: '3.0+ Stars', value: '3.0' }
  ];

  const deliveryTimes = [
    { label: 'Any Time', value: '' },
    { label: 'Under 30 min', value: '30' },
    { label: 'Under 45 min', value: '45' },
    { label: 'Under 60 min', value: '60' }
  ];

  const sortOptions = [
    { label: 'Most Popular', value: 'popularity' },
    { label: 'Highest Rated', value: 'rating' },
    { label: 'Fastest Delivery', value: 'delivery' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Newest', value: 'newest' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      cuisine: '',
      priceRange: '',
      rating: '',
      deliveryTime: '',
      sortBy: 'popularity'
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '' && value !== 'popularity');

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-4">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  onSearch('');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaFilter className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 font-medium">Filters</span>
            {hasActiveFilters && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {Object.values(filters).filter(v => v !== '' && v !== 'popularity').length}
              </span>
            )}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-red-600 hover:text-red-700 font-medium text-sm"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Cuisine Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuisine Type
                </label>
                <select
                  value={filters.cuisine}
                  onChange={(e) => handleFilterChange('cuisine', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                >
                  {cuisineTypes.map((cuisine) => (
                    <option key={cuisine} value={cuisine === 'All Cuisines' ? '' : cuisine}>
                      {cuisine}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaStar className="inline w-4 h-4 text-yellow-500 mr-1" />
                  Rating
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                >
                  {ratings.map((rating) => (
                    <option key={rating.value} value={rating.value}>
                      {rating.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaClock className="inline w-4 h-4 text-blue-500 mr-1" />
                  Delivery Time
                </label>
                <select
                  value={filters.deliveryTime}
                  onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                >
                  {deliveryTimes.map((time) => (
                    <option key={time.value} value={time.value}>
                      {time.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleFilterChange('sortBy', option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.sortBy === option.value
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.cuisine && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                {filters.cuisine}
                <button
                  onClick={() => handleFilterChange('cuisine', '')}
                  className="ml-2 hover:text-red-600"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.priceRange && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                {priceRanges.find(p => p.value === filters.priceRange)?.label}
                <button
                  onClick={() => handleFilterChange('priceRange', '')}
                  className="ml-2 hover:text-red-600"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.rating && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                {ratings.find(r => r.value === filters.rating)?.label}
                <button
                  onClick={() => handleFilterChange('rating', '')}
                  className="ml-2 hover:text-red-600"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.deliveryTime && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                {deliveryTimes.find(t => t.value === filters.deliveryTime)?.label}
                <button
                  onClick={() => handleFilterChange('deliveryTime', '')}
                  className="ml-2 hover:text-red-600"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

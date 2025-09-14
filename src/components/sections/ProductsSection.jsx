import React from 'react'
import { useSearchParams } from 'react-router-dom'

const productsData = [
  {
    id: 1,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'FoodMunch App',
    description: 'High quality chef prepared meals delivered at a click of a button.',
    buttonText: 'Download',
    link: '#', // Placeholder link
  },
  {
    id: 2,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'FoodMunch Business',
    description: 'Corporate meal plans designed to boost employee satisfaction.',
    buttonText: 'View',
    link: '#', // Placeholder link
  },
  {
    id: 3,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Event Catering',
    description: 'Personalised catering services for all types of events.',
    buttonText: 'Contact us',
    link: '#', // Placeholder link
  },
  {
    id: 5,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Healthy Bowls',
    description: 'Nutritious and delicious bowls for a balanced meal.',
    buttonText: 'Order Now',
    link: '#',
  },
  {
    id: 6,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Gourmet Pizzas',
    description: 'Hand-tossed pizzas with premium ingredients.',
    buttonText: 'View Menu',
    link: '#',
  },
  {
    id: 7,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Dessert Delights',
    description: 'Sweet treats and pastries to satisfy your cravings.',
    buttonText: 'Browse',
    link: '#',
  },
  {
    id: 8,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Beverage Bar',
    description: 'Refreshing drinks, smoothies, and specialty coffees.',
    buttonText: 'Explore',
    link: '#',
  },
  {
    id: 9,
    icon: '/src/assets/others/chef.jpeg', // Placeholder icon
    title: 'Breakfast Delights',
    description: 'Start your day with our delicious breakfast options.',
    buttonText: 'Order Now',
    link: '#',
  },
];

const ProductsSection = () => {
  const [searchParams] = useSearchParams()
  const designParam = searchParams.get('design')

  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  // Responsive products per page
  const getProductsPerPage = () => {
    if (window.innerWidth < 640) return 2 // for mobile screens (2x2 grid)
    if (window.innerWidth < 1024) return 2 // for sm screens
    if (window.innerWidth < 1280) return 3 // for lg screens
    return 4 // for xl screens and above
  }

  const currentProductsPerPage = getProductsPerPage()
  const totalSections = Math.ceil(productsData.length / currentProductsPerPage)

  let productsToDisplay
  let sectionClassName = "py-16 bg-white"

  if (designParam === 'special') {
    // Example: Filter products and change background for 'special' design
    productsToDisplay = productsData.filter(product => product.id === 1 || product.id === 5) // Show only specific products
    sectionClassName = "py-16 bg-gradient-to-r from-red-500 to-yellow-500 text-white" // Special background
  } else {
    const startIndex = currentIndex * currentProductsPerPage
    productsToDisplay = productsData.slice(startIndex, startIndex + currentProductsPerPage)
  }

  return (
    <section className={sectionClassName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {productsToDisplay.map((product) => (
            <div key={product.id} className="bg-white/10 border border-white/20 shadow-lg rounded-lg p-4 sm:p-6 flex flex-col items-center text-center min-h-[350px] sm:min-h-[400px]">
              <div className="mb-4">
                <img src={product.icon} alt={product.title} className="w-16 h-16 object-cover rounded-full" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow">{product.description}</p>
              <a
                href={product.link}
                className="mt-auto inline-block bg-white text-black font-semibold py-2 px-3 sm:py-3 sm:px-6 rounded-lg shadow-sm border border-red-500 hover:bg-red-50 transition-colors duration-200 w-full text-center whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base"
                style={{}} // Removed textShadow as it's no longer needed for black text on white background
              >
                {product.buttonText}
              </a>
            </div>
          ))}
        </div>
        {/* Pagination (visible on all screens) */} 
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${currentIndex === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'}`}
          >
            Previous
          </button>
          {Array.from({ length: totalSections }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-red-500' : 'bg-gray-300'}`}
            ></button>
          ))}
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(totalSections - 1, prev + 1))}
            disabled={currentIndex === totalSections - 1}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${currentIndex === totalSections - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

import React from 'react';

const ChefSpotlight = () => {
  const chefData = {
    name: 'Chef Henry Nneji',
    title: 'Head of Culinary & Restaurants',
    description: 'A culinary virtuoso with a distinguished background, Chef Henry Nneji, a Le Cordon Bleu-trained specialist and valedictorian, masterfully blends strategic acumen with innovative culinary artistry. His journey, marked by an unwavering passion for gastronomic excellence, has led him to create a unique culinary philosophy rooted in fresh, locally sourced ingredients and global flavors.',
    image: '/src/assets/others/chef.jpeg', // Updated image path
  };

  return (
    <section className="w-full py-12 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Chef spotlight</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-64 object-top"
              src={chefData.image}
              alt={chefData.name}
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">FoodCourt</div>
            <h3 className="mt-1 text-2xl leading-tight font-medium text-black">
              {chefData.name}
            </h3>
            <p className="text-gray-500">{chefData.title}</p>
            <p className="mt-4 text-gray-600 text-sm">{chefData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;

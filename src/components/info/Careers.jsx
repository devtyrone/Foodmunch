import React from 'react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Section 1: Choose your forte */}
      <section className="pt-4 pb-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your <span className="text-red-600">Career</span> With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team that's revolutionizing the food delivery industry. 
              We're looking for passionate individuals who want to make a real impact 
              in a fast-growing, innovative company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Competitive salary and comprehensive benefits package</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Flexible work arrangements and remote opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Professional development and growth opportunities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">Collaborative and inclusive work environment</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                  View Open Positions
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center">
                  Learn About Our Culture
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                <img
                  src="/assets/food/food.jpg"
                  alt="Professional team collaboration"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How we work */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">How we work</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Discover a work environment where innovation meets collaboration.</p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Card 1: Diversity & Inclusion */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <span className="text-red-500 text-4xl mb-4"></span> {/* Placeholder Icon */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">Diversity & Inclusion</h3>
              <p className="text-gray-600">We practice a culture that respects different perspectives. We encourage openness and team collaborations across board.</p>
            </div>
            {/* Card 2: Actual work - life balance */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <span className="text-red-500 text-4xl mb-4"></span> {/* Placeholder Icon */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">Actual work - life balance</h3>
              <p className="text-gray-600">Work-Life balance is an integral part of a healthy and productive work environment.</p>
            </div>
            {/* Card 3: Everyone is a contributor */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <span className="text-red-500 text-4xl mb-4"></span> {/* Placeholder Icon */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">Everyone is a contributor</h3>
              <p className="text-gray-600">At FoodMunch, each member plays a vital part in delivering the exceptional dining experience we're known for. Together, every action helps us serve up something greater.</p>
            </div>
            {/* Card 4: Tailored reward system */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <span className="text-red-500 text-4xl mb-4"></span> {/* Placeholder Icon */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tailored reward system</h3>
              <p className="text-gray-600">We recognize the importance of equitable benefits and rewards, and we ensure its practicability.</p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/assets/food/food.jpg" alt="Work culture 1" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
            <img src="/assets/food/food2.jpg" alt="Work culture 2" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
            <img src="/assets/food/food3.jpg" alt="Work culture 3" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
            <img src="/assets/food/food4.jpg" alt="Work culture 4" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
            <img src="/assets/food/food5.jpg" alt="Work culture 5" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
            <img src="/assets/food/food.jpg" alt="Work culture 6" className="w-full h-64 object-cover rounded-lg shadow-md" /> {/* Placeholder image */}
          </div>
        </div>
      </section>

      {/* Section 3: Join us (Job Application Form) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-center mb-4">Join us</h2>
          <p className="text-center text-gray-600 mb-8">
            Passionate about what we do? Share your details and let us know
            your interest. We'll keep you in mind for future opportunities
          </p>

          {/* Full name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-lg font-semibold text-gray-800 mb-2">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter full name"
            />
          </div>

          {/* Email address */}
          <div className="mb-6">
            <label htmlFor="emailAddress" className="block text-lg font-semibold text-gray-800 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="emailAddress"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter email address"
            />
          </div>

          {/* Interested Position */}
          <div className="mb-6">
            <label htmlFor="interestedPosition" className="block text-lg font-semibold text-gray-800 mb-2">
              Interested Position
            </label>
            <input
              type="text"
              id="interestedPosition"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="What position are you interested in?"
            />
          </div>

          {/* Upload CV */}
          <div className="mb-6">
            <label htmlFor="uploadCV" className="block text-lg font-semibold text-gray-800 mb-2">
              Upload CV
            </label>
            <div className="flex items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <input type="file" id="uploadCV" className="hidden" />
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 014 4.903A3 3 0 0015 15H7m2 4l-3-3m0 0l3-3m-3 3h12"></path></svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
            </div>
          </div>

          {/* Write cover letter */}
          <div className="mb-8">
            <label htmlFor="coverLetter" className="block text-lg font-semibold text-gray-800 mb-2">
              Write cover letter <span className="text-gray-500 text-sm">(optional 1000 words max)</span>
            </label>
            <textarea
              id="coverLetter"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write response"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

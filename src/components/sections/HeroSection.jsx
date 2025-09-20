import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover h-screen flex items-center justify-center text-white w-full"
      style={{ backgroundImage: 'url(/assets/others/end.png)', backgroundPosition: 'center 30%' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Join us on our Journey</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          We’re redefining dining experiences and growing fast. If you’re passionate about making an impact,
          share your details to let us know you're interested in joining the team.
        </p>
        <Link
          to="/team"
          className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200"
        >
          Share your details
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

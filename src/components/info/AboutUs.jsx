import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added Link import

const teamMembers = [
  {
    id: 1,
    name: 'Jumai Abidoye',
    title: 'Delivery & Supply Chain Manager',
    image: '/assets/others/chef.jpeg', // Placeholder image
  },
  {
    id: 2,
    name: 'Mercy Oladimeji',
    title: 'Lead, Innovation & Restaurants',
    image: '/assets/others/chef.jpeg', // Placeholder image
  },
  {
    id: 3,
    name: 'Eric Okosa',
    title: 'Logistics Manager',
    image: '/assets/others/chef.jpeg', // Placeholder image
  },
  {
    id: 4,
    name: 'Henry Nneji',
    title: 'Chief Executive Officer',
    image: '/assets/others/chef.jpeg', // Placeholder image
  },
  {
    id: 5,
    name: 'Ovuoke Buluku',
    title: 'Chief Operations Officer',
    image: '/assets/others/chef.jpeg', // Placeholder image
  },
];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Section 1: Creating the Future of Food Delivery Worldwide */}
      <section className="py-10 px-4 text-center">
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl md:text-5xl font-extrabold mb-8 leading-tight">Creating the Future of Food Delivery Worldwide</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From Nigeria to the world, FoodMunch is redefining food delivery with an emphasis on
            quality, variety, and convenience. We are on a mission to deliver exceptional dining
            experiences right to your doorstep—wherever you are.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto mb-16">
          <img
            src="/assets/food/food.jpg" // Placeholder image
            alt="Food Delivery Innovation"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center w-56">
              <p className="text-4xl font-bold text-gray-800">3M+</p>
              <p className="text-gray-600">Meals Delivered</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center w-56">
              <p className="text-4xl font-bold text-gray-800">300+</p>
              <p className="text-gray-600">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At FoodMunch, our mission is to deliver exceptional meals by focusing on quality, variety, and sustainability.
            We are committed to providing fresh, delicious food with outstanding service, creating value for our customers and
            driving growth. As we continue to innovate and expand, we aim to build a strong and enduring brand that stands
            out for its excellence and impact.
          </p>
        </div>
      </section>

      {/* Section 3: The FoodMunch Journey */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">The FoodMunch Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img src="/assets/food/food.jpg" alt="Startup" className="w-full h-48 object-cover rounded-lg mb-4" /> {/* Placeholder image */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">STARTUP</h3>
              <p className="text-gray-600">FoodMunch was founded to transform how people enjoy their favorite meals, focusing on delivering quality and variety with every order</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img src="/assets/food/food2.jpg" alt="Growth" className="w-full h-48 object-cover rounded-lg mb-4" /> {/* Placeholder image */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">GROWTH</h3>
              <p className="text-gray-600">Through innovation and strategic partnerships, we've expanded our offerings to bring better food experiences to more people</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img src="/assets/food/food3.jpg" alt="Sustainability" className="w-full h-48 object-cover rounded-lg mb-4" /> {/* Placeholder image */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">SUSTAINABILITY</h3>
              <p className="text-gray-600">With a commitment to quality, convenience, and exceptional service, we have become a go-to choice for our customers.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <img src="/assets/food/food4.jpg" alt="Expansion" className="w-full h-48 object-cover rounded-lg mb-4" /> {/* Placeholder image */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">EXPANSION</h3>
              <p className="text-gray-600">As we look ahead, our goal is to reach more communities enhancing our services, and continue delivering exceptional dining experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Good Food, Good People (Team Section) */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Good Food, Good People</h2>
          <p className="text-lg text-gray-600 mb-12">Meet the Team</p>
          <MarqueeTeam /> {/* Render the MarqueeTeam component here */}
        </div>
      </section>

      {/* New Section: Join us on our Journey (from previous HeroSection content) */}
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
            to="/about-us"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200"
          >
            Share your details
          </Link>
        </div>
      </section>
    </div>
  );
};

// Marquee component for team members
const MarqueeTeam = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let offset = 0;
    let animationFrame;
    const scrollSpeed = 1.5; // Increased scroll speed

    const animate = () => {
      offset -= scrollSpeed;
      // Duplicate content if it's about to run out
      // if (offset < -marquee.scrollWidth / 2) {
      //   offset = 0;
      // }
      // Recalculate contentWidth and containerWidth if needed after resize or initial render
      const containerWidth = marquee.parentElement.offsetWidth;
      const contentWidth = marquee.scrollWidth / 2; // Assuming content is duplicated
      if (offset < -contentWidth) {
          offset = containerWidth; // Reset to start from right side
      }
      marquee.style.transform = `translateX(${offset}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    // Duplicate content initially for seamless loop
    if (marquee.children.length === teamMembers.length) {
        for (let i = 0; i < teamMembers.length; i++) {
            marquee.appendChild(marquee.children[i].cloneNode(true));
        }
    }

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden w-full relative">
      <div
        ref={marqueeRef}
        className="whitespace-nowrap flex py-4"
        style={{ willChange: 'transform' }}
      >
        {[...teamMembers, ...teamMembers].map((member, idx) => (
          <div key={idx} className="inline-block mx-4 flex-none w-48 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg mx-auto" />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-red-600 text-sm">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

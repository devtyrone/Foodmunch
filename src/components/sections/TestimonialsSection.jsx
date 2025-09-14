import React, { useRef, useEffect, useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Example icons

const testimonials = [
  {
    id: 1,
    text: "I love how fast my food got to me after the order was confirmed. And they have loads of amazing choice of meals to choose from. I am so sticking with Them!",
    author: "Ola_banjy",
    icon: <FaTwitter className="text-blue-400" />,
  },
  {
    id: 2,
    text: "Been a while I have been impressed by a Nigerian food app. Great delivery time, great food, value for money.",
    author: "Seyilr",
    icon: <FaFacebook className="text-blue-600" />,
  },
  {
    id: 3,
    text: "I had the meat lovers' Shawarma from Food Court yesterday, and I fall in love! I need to get more",
    author: "The Ariike",
    icon: <FaTwitter className="text-blue-400" />,
  },
  {
    id: 4,
    text: "Wrap city by FoodCourt's shawarma is a 10/10!",
    author: "eneolyssa",
    icon: <FaTwitter className="text-blue-400" />,
  },
  {
    id: 5,
    text: "Love food court so much it gives me butterflies!",
    author: "The A",
    icon: <FaTwitter className="text-blue-400" />,
  },
  {
    id: 6,
    text: "You guys are amazing, seamless payment option, timely service, neat packaging. I wish I could give more than 5 stars. Do I recommend? Hell yes! Get the app and you'll be glad you did",
    author: "Asammadu",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    id: 7,
    text: "Seamless experience from start to finish! Makes me so excited to see ❤️❤️❤️",
    author: "mir fontana",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    id: 8,
    text: "The user experience was amazing, very quick and easy to order. Once I arrived to pick up my food, the customer service was top notch and she was very polite. The food itself was the best 10/10...",
    author: "Ayo Longe",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    id: 9,
    text: "Smoked turkey salad 😍 my favorite",
    author: "toluwani.olusola",
    icon: <FaInstagram className="text-pink-500" />,
  },
  {
    id: 10,
    text: "Pair the green smoothie with smoothie later. That's my go-to order!",
    author: "pha",
    icon: <FaInstagram className="text-pink-500" />,
  },
];

const TestimonialsSection = () => {
  const marqueeRefLeft = useRef(null);
  const marqueeRefRight = useRef(null);
  const [isPausedLeft, setIsPausedLeft] = useState(false);
  const [isPausedRight, setIsPausedRight] = useState(false);

  const testimonialsRow1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const testimonialsRow2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  // Marquee for left-moving row
  useEffect(() => {
    const marquee = marqueeRefLeft.current;
    if (!marquee) return;

    let animationFrameId;
    let offset = 0;
    const speed = 1.5; // Adjusted speed for 2-second cycle

    const animate = () => {
      if (!isPausedLeft) { // Use isPausedLeft
        offset -= speed;
        if (offset < -marquee.scrollWidth / 2) {
          offset = 0;
        }
        marquee.style.transform = `translateX(${offset}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Duplicate content for seamless looping
    marquee.innerHTML += marquee.innerHTML;

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPausedLeft]); // Dependency on isPausedLeft

  // Marquee for right-moving row
  useEffect(() => {
    const marquee = marqueeRefRight.current;
    if (!marquee) return;

    let animationFrameId;
    let offset = -marquee.scrollWidth / 2; // Start from left to move right
    const speed = 1.5; // Adjusted speed for 2-second cycle

    const animate = () => {
      if (!isPausedRight) { // Use isPausedRight
        offset += speed;
        if (offset > 0) {
          offset = -marquee.scrollWidth / 2; // Loop back
        }
        marquee.style.transform = `translateX(${offset}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Duplicate content for seamless looping
    marquee.innerHTML += marquee.innerHTML;

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPausedRight]); // Dependency on isPausedRight

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Over <span className="text-red-600">3 million meals</span> served!
        </h2>
        <p className="text-lg text-gray-600 mb-12">See what our customers have to say</p>

        <div 
          className="relative overflow-hidden py-4 space-y-6"
        >
          {/* Left-moving marquee */}
          <div
            ref={marqueeRefLeft}
            className="flex space-x-6 items-stretch min-w-full"
            style={{ willChange: 'transform' }}
            onMouseEnter={() => setIsPausedLeft(true)}
            onMouseLeave={() => setIsPausedLeft(false)}
          >
            {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
              <div 
                key={testimonial.id + '-left-' + index} 
                className="flex-none w-80 p-6 bg-white rounded-lg shadow flex flex-col justify-between"
                style={{ minWidth: '320px' }}
              >
                <p className="text-gray-700 text-base mb-4 flex-grow text-left">"{testimonial.text}"</p>
                <div className="flex items-center justify-start mt-auto">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {testimonial.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">@{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right-moving marquee */}
          <div
            ref={marqueeRefRight}
            className="flex space-x-6 items-stretch min-w-full"
            style={{ willChange: 'transform' }}
            onMouseEnter={() => setIsPausedRight(true)}
            onMouseLeave={() => setIsPausedRight(false)}
          >
            {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
              <div 
                key={testimonial.id + '-right-' + index} 
                className="flex-none w-80 p-6 bg-white rounded-lg shadow flex flex-col justify-between"
                style={{ minWidth: '320px' }}
              >
                <p className="text-gray-700 text-base mb-4 flex-grow text-left">"{testimonial.text}"</p>
                <div className="flex items-center justify-start mt-auto">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    {testimonial.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">@{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

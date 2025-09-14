import React from 'react';

const PromoSection = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto my-12 px-6 py-10 rounded-[48px]" style={{background: 'linear-gradient(90deg, #6ec1e4 0%, #fd7e14 100%)'}}>
    <div className="flex-1 flex flex-col justify-center items-start">
      <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-6">Hungry?<br/>Order now!</h2>
      <div className="flex gap-4 mt-2">
        <a href="#" className="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-36 h-12 object-contain" />
        </a>
        <a href="#" className="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-36 h-12 object-contain" />
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
      {/* Replace src with your phone mockup image if available */}
      <img src="https://i.imgur.com/8QfQ2Qp.png" alt="Phone Mockup" className="w-[320px] h-auto" />
    </div>
  </div>
);

export default PromoSection;

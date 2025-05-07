import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage, buttonText, onButtonClick }) => {
  return (
    <section 
      className="h-[500px] md:h-[500px] bg-cover bg-center bg-no-repeat relative flex items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      <div className="container mx-auto px-4 relative z-[2] max-w-4xl">
        <h1 className="text-4xl md:text-5xl mb-6 uppercase font-bold">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mb-8 font-light">{subtitle}</p>}
        {buttonText && (
          <button 
            className="px-8 py-4 text-lg uppercase bg-blue-600 text-white border-none rounded cursor-pointer transition-colors duration-300 hover:bg-blue-700"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
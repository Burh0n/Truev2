import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="px-6 pt-6 pb-2 text-xl text-blue-600">{title}</h3>
      <p className="px-6 pb-6 text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
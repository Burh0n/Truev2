import React from 'react';

const CircleButton = ({ text, onClick }) => {
  return (
    <button 
      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer border-none font-bold text-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg"
      onClick={onClick}
    >
      <span className="leading-none">{text}</span>
    </button>
  );
};

export default CircleButton;
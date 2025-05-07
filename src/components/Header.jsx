import React from 'react';
import Navigation from './Navigation';
import Logo from '/logo.svg'
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="max-w-[160px]">
          <img src={Logo} alt="TRUE Fitness" className="w-full h-auto" />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
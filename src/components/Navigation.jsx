import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="main-nav">
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <ul className={`md:flex space-y-2 md:space-y-0 list-none ${isMenuOpen ? 'block absolute top-full right-0 bg-white shadow-md p-4' : 'hidden md:block'}`}>
        <li className="md:ml-8">
          <NavLink to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="md:ml-8">
          <NavLink to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
            }
          >
            О Бренде
          </NavLink>
        </li>
        <li className="md:ml-8">
          <NavLink to="/advantages" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
            }
          >
            Преимущества
          </NavLink>
        </li>
        <li className="md:ml-8">
          <NavLink to="/open-club" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
            }
          >
            Открыть клуб
          </NavLink>
        </li>
        <li className="md:ml-8">
          <NavLink to="/contacts" 
            className={({ isActive }) => 
              isActive 
                ? "text-blue-600 font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors duration-300"
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
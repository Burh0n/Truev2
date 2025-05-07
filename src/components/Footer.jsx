import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        <div className="max-w-[150px]">
          <img src="/api/placeholder/150/50" alt="TRUE Fitness" className="w-full" />
        </div>
        
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h4 className="text-blue-400 mb-6 font-semibold">О нас</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-white hover:text-blue-400 transition-colors duration-300">О бренде</Link></li>
                <li><Link to="/advantages" className="text-white hover:text-blue-400 transition-colors duration-300">Преимущества</Link></li>
                <li><Link to="/open-club" className="text-white hover:text-blue-400 transition-colors duration-300">Открыть клуб</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-400 mb-6 font-semibold">Контакты</h4>
              <ul className="space-y-3">
                <li>Email: info@true-fitness.com</li>
                <li>Телефон: +7 (123) 456-7890</li>
                <li><Link to="/contacts" className="text-white hover:text-blue-400 transition-colors duration-300">Наш адрес</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full ml-4 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full ml-4 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full ml-4 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <i className="fab fa-vk"></i>
          </a>
        </div>
      </div>
      <div className="text-center py-6 border-t border-gray-700 text-sm">
        <p>&copy; {new Date().getFullYear()} TRUE Fitness. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
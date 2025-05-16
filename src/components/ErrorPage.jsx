import React from 'react';
import { Link } from 'react-router-dom';
import CircleButton from './CircleButton';

const ErrorPage = ({ code = 404, message = 'Страница не найдена' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">{code}</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{message}</h2>
        
        <p className="text-gray-600 mb-8">
          {code === 404 
            ? 'Возможно, страница была перемещена или удалена, или вы ввели неверный адрес.' 
            : 'Произошла ошибка. Пожалуйста, попробуйте снова позже или вернитесь на главную страницу.'}
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="bg-blue-600 text-white py-3 px-8 rounded-md text-base font-semibold transition-colors duration-300 hover:bg-blue-700">
            Вернуться на главную
          </Link>
          
          <div className="flex space-x-4 mt-4">
            <Link to="/contacts">
              <CircleButton text="?" onClick={() => {}} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-12 max-w-sm w-full">
        <svg className="w-full" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M100,140 Q180,50 240,140 T380,140" 
            fill="none" 
            stroke="#2563EB" 
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="240" cy="140" r="40" fill="#EFF6FF" stroke="#2563EB" strokeWidth="4" />
          <text x="240" y="150" fontSize="40" fontWeight="bold" textAnchor="middle" fill="#2563EB">
            !
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
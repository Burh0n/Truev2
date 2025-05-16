import React from 'react';

const LoadingSpinner = ({ size = 'medium', fullScreen = false }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4'
  };
  
  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50'
    : 'flex items-center justify-center p-4';
  
  return (
    <div className={containerClasses}>
      <div 
        className={`${sizeClasses[size]} rounded-full border-blue-600 border-t-transparent animate-spin`}
        role="status"
        aria-label="Loading"
      />
      
      {fullScreen && (
        <span className="sr-only">Loading...</span>
      )}
    </div>
  );
};

export default LoadingSpinner;
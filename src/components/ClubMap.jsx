import React from 'react';

const ClubMap = ({ location }) => {
  // In a real application, you would use a maps API like Google Maps or Leaflet
  return (
    <div className="club-map">
      <div className="map-container rounded-lg overflow-hidden shadow-md mb-4">
        {/* Map would be rendered here using a proper maps API */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <img src="/api/placeholder/800/400" alt="Club Location Map" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">Наш адрес</h3>
        <p className="mb-2">{location.address}</p>
        <p className="mb-2">Телефон: {location.phone}</p>
        <p className="mb-2">Часы работы: {location.hours}</p>
        <p>Email: {location.email}</p>
      </div>
    </div>
  );
};

export default ClubMap;
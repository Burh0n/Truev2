import React from 'react';

const FacilityLayout = ({ floorPlanImage, handleAreaClick }) => {
  // These would be passed as props in a real implementation
  const areas = [
    { id: 'gym', title: 'Тренажерный зал', coords: '150,120,300,200' },
    { id: 'group', title: 'Зона групповых занятий', coords: '320,120,450,200' },
    { id: 'cardio', title: 'Кардио-зона', coords: '150,220,300,300' },
    { id: 'relax', title: 'Зона отдыха', coords: '320,220,450,300' }
  ];

  return (
    <div className="facility-layout max-w-4xl mx-auto">
      <div className="floor-plan-container relative">
        <img src={floorPlanImage} alt="Facility Floor Plan" className="w-full h-auto rounded-lg shadow-md" />
        <map name="facility-map">
          {areas.map(area => (
            <area 
              key={area.id}
              shape="rect" 
              coords={area.coords} 
              alt={area.title}
              title={area.title}
              onClick={() => handleAreaClick(area.id)}
              className="cursor-pointer"
            />
          ))}
        </map>
      </div>
    </div>
  );
};

export default FacilityLayout;
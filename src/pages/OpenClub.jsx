// pages/OpenClub.jsx
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ContactForm from '../components/ContactForm';
import FacilityLayout from '../components/FacilityLayot';
import CircleButton from '../components/CircleButton';

const OpenClub = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  
  const handleAreaClick = (areaId) => {
    setSelectedArea(areaId);
  };

  return (
    <div className="pb-12">
      <HeroSection 
        title="Открыть клуб TRUE" 
        subtitle="Присоединяйтесь к нашей сети и начните свой успешный фитнес-бизнес"
        backgroundImage="/assets/images/open-club-hero.jpg"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-6">План помещения</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Оптимальное использование пространства - один из ключей к успеху фитнес клуба.
            Наша планировка разработана для максимальной эффективности и комфорта.
          </p>
          
          <div className="relative mt-8">
            <FacilityLayout 
              floorPlanImage="/Plan.svg" 
              handleAreaClick={handleAreaClick} 
            />
            
            {selectedArea && (
              <div className="mt-8 bg-white rounded-lg shadow-md p-6 relative">
                {selectedArea === 'gym' && (
                  <div className="pr-12">
                    <h3 className="text-2xl font-bold text-sky-600 mb-4">Тренажерный зал</h3>
                    <p className="text-gray-700">Современное оборудование от ведущих производителей. Силовые тренажеры, свободные веса, функциональная зона.</p>
                    <div className="absolute top-4 right-4">
                      <CircleButton text="X" onClick={() => setSelectedArea(null)} />
                    </div>
                  </div>
                )}
                {selectedArea === 'group' && (
                  <div className="pr-12">
                    <h3 className="text-2xl font-bold text-sky-600 mb-4">Зона групповых занятий</h3>
                    <p className="text-gray-700">Просторный зал для различных групповых программ. Качественное покрытие, звуковое оборудование, зеркала.</p>
                    <div className="absolute top-4 right-4">
                      <CircleButton text="X" onClick={() => setSelectedArea(null)} />
                    </div>
                  </div>
                )}
                {selectedArea === 'cardio' && (
                  <div className="pr-12">
                    <h3 className="text-2xl font-bold text-sky-600 mb-4">Кардио-зона</h3>
                    <p className="text-gray-700">Беговые дорожки, эллиптические тренажеры, велотренажеры и степперы от ведущих брендов.</p>
                    <div className="absolute top-4 right-4">
                      <CircleButton text="X" onClick={() => setSelectedArea(null)} />
                    </div>
                  </div>
                )}
                {selectedArea === 'relax' && (
                  <div className="pr-12">
                    <h3 className="text-2xl font-bold text-sky-600 mb-4">Зона отдыха</h3>
                    <p className="text-gray-700">Комфортное пространство для отдыха между тренировками. Фитнес-бар, места для общения.</p>
                    <div className="absolute top-4 right-4">
                      <CircleButton text="X" onClick={() => setSelectedArea(null)} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-12">Преимущества франшизы TRUE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="text-5xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Проверенная бизнес-модель</h3>
              <p className="text-gray-700">Отработанные бизнес-процессы, которые доказали свою эффективность.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="text-5xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Обучение персонала</h3>
              <p className="text-gray-700">Комплексная программа обучения для всех сотрудников.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="text-5xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Маркетинговая поддержка</h3>
              <p className="text-gray-700">Готовые маркетинговые материалы и стратегии продвижения.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="text-5xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Техническая поддержка</h3>
              <p className="text-gray-700">Полное сопровождение на всех этапах открытия и работы клуба.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-4">Заинтересованы в открытии клуба?</h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Заполните форму, и наш представитель свяжется с вами для обсуждения деталей.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default OpenClub;
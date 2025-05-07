// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';


const Home = () => {
  const features = [
    {
      id: 1,
      image: '/1.svg',
      title: 'Современное оборудование',
      description: 'Тренажеры премиум-класса от ведущих мировых производителей для эффективных тренировок.'
    },
    {
      id: 2,
      image: '/2.svg',
      title: 'Профессиональные тренеры',
      description: 'Опытные инструкторы с международными сертификатами, которые помогут достичь ваших целей.'
    },
    {
      id: 3,
      image: '/3.svg',
      title: 'Разнообразные программы',
      description: 'Групповые тренировки, персональный тренинг, специализированные программы для разных уровней подготовки.'
    }
  ];

  const handleGetStarted = () => {
    document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-12">
      <HeroSection 
        title="TRUE FITNESS" 
        subtitle="Превосходство. Инновации. Результат."
        backgroundImage='/Home.svg'
        buttonText="Начать"
        onButtonClick={handleGetStarted}
      />
      
      <section id="features-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-10">Почему выбирают TRUE FITNESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(feature => (
              <FeatureCard 
                key={feature.id}
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-sky-600 mb-4">О бренде TRUE</h2>
            <p className="text-gray-700 mb-6 text-lg">
              TRUE FITNESS — это сеть современных фитнес-клубов, объединенных философией 
              истинного фитнеса, основанного на научном подходе, передовых технологиях 
              и индивидуальном внимании к каждому клиенту.
            </p>
            <Link to="/about" className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Узнать больше
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/4.svg" 
              alt="TRUE Fitness Club" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-sky-600 mb-10">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <p className="text-gray-700 italic">
                  "TRUE FITNESS полностью изменил мое отношение к тренировкам. 
                  Профессиональные тренеры и отличное оборудование помогли мне достичь 
                  результатов, о которых я только мечтал."
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src="/assets/images/testimonial-1.jpg" 
                  alt="Алексей" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-sky-600">Алексей</h4>
                  <p className="text-sm text-gray-600">Член клуба с 2022 года</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <p className="text-gray-700 italic">
                  "Атмосфера в клубе потрясающая! Всегда чисто, современно, стильно. 
                  Групповые занятия очень разнообразны и интересны. Рекомендую всем!"
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src="/assets/images/testimonial-2.jpg" 
                  alt="Мария" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-sky-600">Мария</h4>
                  <p className="text-sm text-gray-600">Член клуба с 2021 года</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы присоединиться к TRUE FITNESS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Откройте свой собственный клуб под нашим брендом и станьте частью успешной сети.
          </p>
          <Link 
            to="/open-club" 
            className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Открыть клуб
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
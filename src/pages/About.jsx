// pages/About.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';

const About = () => {
  return (
    <div className="pb-12">
      <HeroSection 
        title="О бренде TRUE" 
        subtitle="Философия истинного фитнеса"
        backgroundImage="/Home.svg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-sky-600 mb-6">Наша история</h2>
            <p className="text-lg text-gray-700 mb-6">
              TRUE FITNESS начал свою историю в 2010 году с открытием первого клуба в Москве. 
              Основатели бренда поставили перед собой цель — создать фитнес-клубы нового поколения, 
              где каждый клиент сможет достичь своих целей благодаря передовым технологиям, 
              квалифицированному персоналу и индивидуальному подходу.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              За последние годы TRUE FITNESS превратился в одну из самых динамично развивающихся 
              сетей фитнес-клубов в России, открывая новые локации в разных городах и постоянно 
              совершенствуя свои услуги и программы.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-sky-600 mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Качество</h3>
              <p className="text-gray-700">
                Мы предлагаем только лучшее: от оборудования до программ тренировок и квалификации персонала.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Инновации</h3>
              <p className="text-gray-700">
                Мы постоянно внедряем новейшие технологии и методики для достижения максимальных результатов.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl text-sky-600 mb-6 flex justify-center">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold text-sky-600 mb-4">Сообщество</h3>
              <p className="text-gray-700">
                Мы создаем вдохновляющую атмосферу, где каждый чувствует себя частью команды единомышленников.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/5.svg" 
                alt="TRUE Fitness Team" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-sky-600 mb-6">Наша команда</h2>
              <p className="text-lg text-gray-700 mb-4">
                В TRUE FITNESS работают профессионалы своего дела: от сертифицированных тренеров 
                до опытных менеджеров. Каждый сотрудник разделяет ценности бренда и стремится 
                к постоянному развитию.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Наши тренеры регулярно проходят обучение и повышают квалификацию, чтобы предоставлять 
                клиентам самые эффективные и безопасные методики тренировок.
              </p>
              <p className="text-lg text-gray-700">
                Мы гордимся нашей командой и уверены, что именно люди делают TRUE FITNESS особенным 
                и выделяют нас среди других фитнес-клубов.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Помочь каждому клиенту достичь своих фитнес-целей, улучшить качество жизни и 
            сформировать привычку к здоровому образу жизни через инновационный подход к тренировкам, 
            вдохновляющую атмосферу и поддержку профессионалов.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';

export default function TrueWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section - "Преимущества" */}
        <section className="bg-blue-500 text-white py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">СЕРТИФИЦИРОВАННЫЕ FITNESS ТРЕНЕРЫ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  <img src="/9.svg" alt="Training" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-blue-600 font-bold mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-700">Персональные тренировки с учетом ваших особенностей и целей</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  <img src="/9.svg" alt="Group training" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-blue-600 font-bold mb-2">Групповые тренировки</h3>
                  <p className="text-gray-700">Эффективные занятия в группе с профессиональными инструкторами</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  <img src="/9.svg" alt="Equipment" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-blue-600 font-bold mb-2">Современное оборудование</h3>
                  <p className="text-gray-700">Тренажеры высокого качества для эффективных тренировок</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300 relative">
                  <img src="/9.svg" alt="Nutrition" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-blue-600 font-bold mb-2">Программы питания</h3>
                  <p className="text-gray-700">Рекомендации по питанию для достижения ваших фитнес-целей</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">ОБОРУДОВАНИЕ НА НАШИХ FITNES ПЛОЩАДКАХ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src="/11.svg" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-700 font-bold mb-2">Кардио тренажеры</h3>
                  <p className="text-gray-600 text-sm">Современные беговые дорожки, велотренажеры и эллипсоиды</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src="/11.svg" alt="Strength equipment" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-700 font-bold mb-2">Силовые тренажеры</h3>
                  <p className="text-gray-600 text-sm">Профессиональное оборудование для силовых тренировок</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src="/11.svg" alt="Free weights" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-700 font-bold mb-2">Свободные веса</h3>
                  <p className="text-gray-600 text-sm">Гантели, штанги и грифы различного веса</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img src="/11.svg" alt="Functional zone" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-700 font-bold mb-2">Функциональная зона</h3>
                  <p className="text-gray-600 text-sm">Специальное оборудование для функциональных тренировок</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">НАЧНИТЕ ТРЕНИРОВАТЬСЯ В TRUE FITNESS ЦЕНТРЕ</h2>
            
            <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src="/13.svg" alt="Fitness training" className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ</h3>
                  <p className="text-white mb-6">Заполните форму и наш специалист свяжется с вами для консультации</p>
                  <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 w-full md:w-auto">
                    ТРЕНИРОВАТЬСЯ С НАМИ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
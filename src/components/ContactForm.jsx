import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: ''
    });
    
    // In a real application, you would send the data to your server here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-lg mx-auto">
      {formStatus.submitted && (
        <div className={`p-4 mb-6 rounded-md font-medium ${formStatus.error 
          ? 'bg-red-50 text-red-500 border border-red-500' 
          : 'bg-green-50 text-green-500 border border-green-500'}`}
        >
          {formStatus.message}
        </div>
      )}
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        
        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        
        <div className="w-full">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        
        <div className="w-full">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Город"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        
        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Сообщение"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white border-none py-4 px-6 rounded-md text-base font-semibold cursor-pointer transition-colors duration-300 hover:bg-blue-700 mt-4"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
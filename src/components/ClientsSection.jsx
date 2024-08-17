import React, { useState } from 'react';
import cl1 from '../assets/cl1.png';
import './ClientSection.css'

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="clients-section bg-gray-100 py-14">
      <div className="container mx-auto px-4">
        {/* Sponsors Outer */}
        <div className="sponsors-outer overflow-x-auto flex justify-center">
          {/* Sponsors Carousel */}
          <div className="flex space-x-2"> {/* Reduced space between items */}
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-60 flex-shrink-0"
                onClick={() => handleClick(index)}
              >
                <div className={`slide-item ${activeIndex === index ? 'bg-red-500' : ''}`}>
                  <a href="#" className="focus:outline-none">
                    <img
                      src={cl1}
                      alt={`Client ${item}`}
                      className={`w-full h-14 object-contain transition-transform duration-300 ${
                        activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

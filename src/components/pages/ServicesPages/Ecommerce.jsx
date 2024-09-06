import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import softnew1 from '../../../assets/softnew1.jpg';
import marque3 from '../../../assets/marque3.jpg';

const Ecommerce = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({ duration: 1000 });

    // GSAP animations
    gsap.from('.animate', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return (
    <div className="space-y-12 px-4 md:px-10">
      {/* First Section - ecom1 image */}
      <motion.div
        className="relative w-full h-64 sm:h-80 md:h-[40vh] mb-8 lg:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <img
          src={softnew1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
          Professional Ecommerce Web Development 
          </h1>
        </div>
      </motion.div>

      {/* Second Section - marque3 image and content */}
      <motion.div
        className="flex flex-col md:flex-row items-stretch p-8 text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-left"
      >
        <motion.div
          className="lg:w-1/2 flex justify-center animate"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-right"
        >
          <img src={marque3} alt="Software Development" className="w-full h-[70vh] object-cover rounded-lg shadow-lg" />
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-4">
            Professional Ecommerce Web Development Company
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Arrc Technology is an eCommerce web development company in Pune which offers e-commerce development to various types of retailers, sellers, and manufacturers. E-commerce development depends on the type of business model you have like
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We are a top-notch eCommerce developer in Pune. E-commerce business markets are developing at observable rates. E-commerce website design for any business enables clients to buy items from their home and from anywhere. On the web and traditional markets have different methodologies for conducting business. Traditional retailers offer fewer items due to limited space, whereas online retailers don’t require physical space as there is no rush of customers in their shop. Products are delivered to customers at their address. Pricing strategies are also different for traditional and online retailers. With the help of e-commerce web design, we can manage our product list, offers, prices, and many other things from one place.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Ecommerce;

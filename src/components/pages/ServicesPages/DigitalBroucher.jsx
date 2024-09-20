import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import bgiamgenewone from '../../../assets/bgiamgenewone.jpg'; // Replace with the actual path to your image

const DigitalBroucher = () => {
  useEffect(() => {
    // GSAP animations for heading and content
    gsap.from('.heading', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  // Define the fadeInUp animation variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-12 px-4 py-8  text-white sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1400px] xl-max:max-w-[1600px] 2xl:max-w-[1800px]">
      {/* Full-Width Background Image */}
      <motion.div
        className="relative w-full h-64 sm:h-80 md:h-[40vh] mb-8 lg:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <img
          src={bgiamgenewone}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
          Digital Brochure
          </h1>
        </div>
      </motion.div>
      {/* Heading Section */}
      <motion.div
        className="text-center heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold text-custom-purple">
          Digital Brochure
        </h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="content mx-auto max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p className="mb-4">
          If you make digital brochures, flyers, leaflets, booklets, or pamphlets, you know that it takes a lot of effort to design them to be eye-catching and comfortable for viewing online.
        </p>
        <p className="mt-4">
          We can create nice, professional-looking digital brochures that make your content stand out.
        </p>
      </motion.div>
    </div>
  );
};

export default DigitalBroucher;

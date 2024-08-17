import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import digitalbrochurebg from '../../../assets/digitalbrochurebg.jpg'; // Replace with the actual path to your image

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
    <div className="space-y-12 px-4 py-8  text-white">
      {/* Full-Width Background Image */}
      <motion.div
        className="relative w-full h-[35vh] mx-[-10px] mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <img
          src={digitalbrochurebg}
          alt="Digital Brochure"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Heading Section */}
      <motion.div
        className="text-center heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold text-purple-600">
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

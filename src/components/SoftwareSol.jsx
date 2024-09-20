import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const SoftwareSol = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    gsap.from('.animate', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-custom-purple to-blue-500 leading-tight mb-6 antialiased">
            Our Software Solutions
          </h2>
        </motion.div>

        {/* Section Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Solution 1 */}
          <motion.div
            className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg animate"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-right"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-custom-purple to-blue-500 antialiased">
              Custom Software Development
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Tailor-made software solutions to fit your business needs, ensuring efficiency and scalability with the latest technologies.
            </p>
          </motion.div>

          {/* Solution 2 */}
          <motion.div
            className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg animate"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            data-aos="fade-left"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-custom-purple to-blue-500 antialiased">
              Cloud Solutions
            </h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Implement robust cloud solutions to streamline your operations, enhance collaboration, and ensure data security with scalable infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Section Footer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <p className="text-base md:text-lg text-gray-400">
            At our company, we are committed to delivering innovative software solutions tailored to your unique business challenges. Contact us to find out more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareSol;

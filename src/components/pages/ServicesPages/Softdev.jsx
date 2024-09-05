import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import softnew1 from '../../../assets/softnew1.jpg';
import softdev1 from '../../../assets/softdev1.jpeg';
import icon1 from '../../../assets/icon1.png';
import icon2 from '../../../assets/icon2.png';
import icon3 from '../../../assets/icon3.png';
import { FaCogs, FaFileCode, FaCheckSquare, FaRocket } from 'react-icons/fa';

const SoftDev = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    gsap.from('.animate', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to('.animate', {
          opacity: 1,
          y: 0,
          duration: 0.1
        });
      }
    });
  }, []);

  return (
    <section className=" text-white py-8 px-4 sm:px-8 lg:px-16">
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
          Best Software Development Services
          </h1>
        </div>
      </motion.div>


      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 animate"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Best Software Development Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">
            Quality is our prime motto as qualitative work always counts. Arrc Technology guarantees quality parameters to be carried accordingly, ensuring the performance of your business apps, mobile apps, and website design.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
            We have a professional approach to offer a complete suite of software development and management services using modern technical infrastructure and advanced design principles. Our IT strategists are fanatic about delivering software solutions aimed at driving exceptional business value.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
            Our end-to-end software development services are designed to cover almost all spectrums of different industries. We offer an ambient of custom software development services spanning from cloud, mobile, and desktop technologies to all major platforms.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center animate"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-right"
        >
          <img src={softdev1} alt="Software Development" className="w-full h-[70vh] object-cover rounded-lg shadow-lg" />
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8 lg:mt-12">
        <motion.div
          className="flex flex-col items-center space-y-4 w-full sm:w-1/2 md:w-1/3 animate"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
            <img src={icon1} alt="Custom Solutions" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Custom Solutions
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center">
            Custom solutions are best fit to any customer business processes and daily operations. So we prefer to build custom or customer oriented solutions in reasonable cost which will save customer time and legacy software maintenance. Please contact us for more information.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-4 w-full sm:w-1/2 md:w-1/3 animate"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
            <img src={icon2} alt="Speedy Workflow" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Speedy Workflow
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center">
            We personally know a lot of competing companies, where the speedy and agile work style is never cherished and all the deadlines pass by just as the team gets stuck behind the schedule. We cannot emphasize enough how much different our approach to the timing.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center space-y-4 w-full sm:w-1/2 md:w-1/3 animate"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
            <img src={icon3} alt="Thorough Testing" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Thorough Testing
          </h3>
          <p className="text-sm sm:text-base text-gray-300 text-center">
            With the web & software department just as much extensive as it is attentive, we're can assure you of the end-quality of our product. This means that regardless of either the scale or the complexity of the task at hand, we're ready to make it faultless!
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap mx-4 lg:mx-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          <div className="main-timeline">
            <a href="#" className="timeline flex items-center space-x-4 mb-8 animate">
              <div className="timeline-icon flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
                <FaCogs className="text-white" />
              </div>
              <div className="timeline-content">
                <h3 className="title text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  DESIGN
                </h3>
                <p className="description text-sm sm:text-base text-gray-300">
                  We develop a strategy for your business &amp; plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.
                </p>
              </div>
            </a>
            <a href="#" className="timeline flex items-center space-x-4 mb-8 animate">
              <div className="timeline-icon flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
                <FaFileCode className="text-white" />
              </div>
              <div className="timeline-content">
                <h3 className="title text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  DEVELOPMENT
                </h3>
                <p className="description text-sm sm:text-base text-gray-300">
                  After design, we start the work on your project &amp; provide you with drafts &amp; prototypes. That way, you have the freedom to test your website, mobile app.
                </p>
              </div>
            </a>
            <a href="#" className="timeline flex items-center space-x-4 mb-8 animate">
              <div className="timeline-icon flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
                <FaCheckSquare className="text-white" />
              </div>
              <div className="timeline-content">
                <h3 className="title text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  DELIVERY/LAUNCH
                </h3>
                <p className="description text-sm sm:text-base text-gray-300">
                  The final stage is taking the work live and ensuring that your website is error free or your mobile app meets the app store guidelines.
                </p>
              </div>
            </a>
            <a href="#" className="timeline flex items-center space-x-4 mb-8 animate">
              <div className="timeline-icon flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full">
                <FaRocket className="text-white" />
              </div>
              <div className="timeline-content">
                <h3 className="title text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  SUPPORT
                </h3>
                <p className="description text-sm sm:text-base text-gray-300">
                  We value our client relationships &amp; focus on building connections that last beyond our project. We pride ourselves on providing personal service.
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftDev;

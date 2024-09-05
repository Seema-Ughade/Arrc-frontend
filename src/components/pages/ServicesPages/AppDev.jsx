import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import softnew1 from '../../../assets/softnew1.jpg'; // Adjust the path as necessary

const AppDev = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className=" py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Full Width Background Image Section */}
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
          Mobile App Development
          </h1>
        </div>
      </motion.div>


          {/* Main Content Section */}
          <div className="w-full lg:w-3/4 space-y-8">
            {/* Section Title and Introduction */}
            <motion.div
              className="mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased">
                Mobile App Development
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                We Build Mobile Apps for Every User, Every Platform &amp; Every Industry.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                Smartphones, based on both Android and iPhone systems, have gained quite a lot of popularity. People use their phones not only to talk and send messages but also to browse the internet and do online shopping. This has made it necessary to have an Android/iPhone app related to your business. If you are looking for an Android/iPhone application development company, your search ends at Arrc Technology.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                Arrc Technology boasts a team of skilled experts who have years of experience in developing mobile applications for Android as well as iPhone, be it tablets, phones, or phablets. Our team is up to date with the latest technology in mobile application development and uses the latest tools for this purpose. We follow a customer-centric approach to make sure that you receive an app that works well for your customers as well as your business.
              </p>
            </motion.div>

            {/* Company Overview */}
            <motion.div
              className='text-left mb-12'
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-left"
            >
              <h4 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased">
                Mobile App Development Company
              </h4>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                By adopting the best industry standards, processes, technologies, and tools for custom software development, we are able to make us one of the top mobile app development companies.
              </p>
              <ul className="list-disc list-inside pl-5 text-base md:text-lg text-gray-400 mb-4">
                <li>Our extensive work experience</li>
                <li>Affordability</li>
                <li>Apps increase customer engagement</li>
                <li>Apps reduce costs</li>
                <li>Apps promotion and offers great support</li>
                <li>Apps are the best social media platform</li>
                <li>Best quality</li>
                <li>Creativity</li>
              </ul>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              className='text-left mb-12'
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-right"
            >
              <h5 className="text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased">
                What We Offer Under Mobile Application Development Services
              </h5>
              <ul className="list-disc list-inside pl-5 text-base md:text-lg text-gray-400 mb-4">
                <li>Create Mobile App Screen</li>
                <li>Android App Development</li>
                <li>iOS App Development</li>
                <li>Cross-Platform App Development</li>
                <li>Hybrid App Development</li>
              </ul>
            </motion.div>

            {/* Why Choose Arrc Technology */}
            <motion.div
              className='text-left'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              <h5 className="text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased">
                Why Arrc Technology for Mobile Application Development?
              </h5>
              <ul className="list-disc list-inside pl-5 text-base md:text-lg text-gray-400">
                <li>End-to-End Solutions - App Discovery to App Maintenance</li>
                <li>User-centric approach to product development</li>
                <li>Pre-built app solutions for popular verticals to save time and money</li>
                <li>Working with the latest technologies and tools</li>
                <li>Timely project deliveries</li>
                <li>Security and confidentiality assurance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDev;

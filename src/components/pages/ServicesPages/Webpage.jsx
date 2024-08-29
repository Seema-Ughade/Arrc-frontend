import React from 'react';
import { motion } from 'framer-motion';
import softnew1 from '../../../assets/softnew1.jpg';
import webdevpic from '../../../assets/webdevpic.jpg';

const Webpage = () => {
  return (
    <div className="container mx-auto p-6  text-white">
      {/* Full Width Image with 1/3 Height */}
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
          WEB Design & Development Company
          </h1>
        </div>
      </motion.div>

      {/* First Section: Text Content Below Image */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <div className="w-full lg:w-3/4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased transition-transform transform hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600">
            WEB Design & Development Company
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed font-normal antialiased">
            Experience in web design and development to help you implement integrated systems and processes to scale new frontiers.
          </p>
          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed font-normal antialiased">
            We strive to develop customized responsive web development solutions, not cookie-cutter projects. Each website we develop is truly unique. No two are ever identical. Our custom web builds do not rely on templates, plugins or “found code.” This allows us to provide you with a customized, user-friendly, stable and reliable website.
          </p>
          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed font-normal antialiased">
            Bizzfly has a team of highly skilled software developers who are committed to giving the best output and best advice with an outstanding design, short, iterative development cycles, combined with your ongoing feedback and usability with a high-quality product.
          </p>
        </div>
      </motion.div>

      {/* Second Section: Image on the Left, Text on the Right */}
      <motion.div
        className="shadow-md flex flex-col lg:flex-row items-center mb-12 w-full"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-left"
      >
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <img
            src={webdevpic}
            alt="Responsive Web Design"
            className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-6 lg:text-left text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased transition-transform transform hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600">
            Responsive Web Design
          </h2>
          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed font-normal antialiased">
            Bizzfly is the famous leading & award-winning website design & development company. Being a top digital marketing & SEO company in Pune, we provide solutions for web design & web development services. Our customer-centric approach makes us a unique solutions provider for website designing & development. Our expert development team specializes in building static, dynamic, functional, responsive, SEO-friendly, and user-friendly websites.
          </p>
          <p className="text-lg md:text-xl mb-4 text-white leading-relaxed font-normal antialiased">
            Our team encompasses extremely talented Web Designers, Creative Content Writers, and Digital Marketing Executives, which helps us be a top Website design company in Pune. We design SEO-friendly websites using the latest technologies and platforms like Bootstrap, HTML5, CSS3, JQuery, JavaScript, and WordPress.
          </p>
        </div>
      </motion.div>

      {/* Third Section: What We Offer and Why Bizzfly */}
      <motion.div
        className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-6 lg:mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        {/* What We Offer */}
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased transition-transform transform hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600">
            What We Offer
          </h3>
          <ul className="list-disc list-inside pl-6 text-white leading-relaxed font-normal antialiased">
            <li className="mb-2">Create Website Mockup</li>
            <li className="mb-2">PSD to HTML Conversions</li>
            <li className="mb-2">Website Design</li>
            <li className="mb-2">Website Redesign</li>
            <li className="mb-2">Website Maintenance</li>
            <li className="mb-2">Custom Website Development</li>
            <li className="mb-2">Blog Websites</li>
            <li className="mb-2">UI / UX Design</li>
          </ul>
        </div>

        {/* Why Bizzfly */}
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 leading-tight antialiased transition-transform transform hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-600">
            Why Bizzfly for Website Design and Development?
          </h3>
          <ul className="list-disc list-inside pl-6 text-white leading-relaxed font-normal antialiased">
            <li className="mb-2">Bugs and Error-Free Websites</li>
            <li className="mb-2">Safe, Backed-Up, and Secured Websites</li>
            <li className="mb-2">Customized Themes & Content</li>
            <li className="mb-2">Quick Response Time</li>
            <li className="mb-2">Low Cost Affordable Costing</li>
            <li className="mb-2">Free Updates with Outstanding Support</li>
            <li className="mb-2">Responsive Websites</li>
            <li className="mb-2">Search Engine Friendly and Faster Websites</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Webpage;

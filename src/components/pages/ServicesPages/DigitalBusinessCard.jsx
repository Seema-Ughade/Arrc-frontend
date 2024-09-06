import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import bgiamgenewone from '../../../assets/bgiamgenewone.jpg'; // Make sure the path is correct

const DigitalBusinessCard = () => {
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

  // Define the fadeInUp animation variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-12 p-8">
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
           Digital Business Card          </h1>
        </div>
      </motion.div>

      {/* First Section - Introduction */}
      <motion.div
        className="text-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-semibold mb-4 text-[#9B59B6] leading-[1.2]">
        Interactive Digital Business Card</h1>
        <p className="text-lg leading-relaxed">
          Business cards are a staple of the corporate and professional world. The usefulness of a business card is showing all of your contact details in a single, convenient location. Hand one to someone you meet, and you're more likely to continue the conversation later.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          In the digital era, it's essential to also use digital business cards to share all of your contact details in one convenient view. Digital business cards are easy to share and perfect to consolidate all of your accounts and contact details in a single view.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The purpose of a digital business card is simple: to help you connect with more potential clients, partners, and co-workers.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Digital business cards serve primarily the same purpose. Most of us are on so many platforms (LinkedIn, Twitter, Instagram, and more) that it can be overwhelming to share all of those details at once. That's where virtual business cards shine.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The point of an e-business card is to create a single, simple, shareable file with all of your contact details. That way, the recipient has no friction to follow your account on social media or contact you using the details.
        </p>
      </motion.div>
    </div>
  );
};

export default DigitalBusinessCard;

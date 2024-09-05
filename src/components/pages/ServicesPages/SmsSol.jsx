import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import bulksmssolutionbg from '../../../assets/bulksmssolutionbg.jpg'; // Make sure the path is correct

const SmsSol = () => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({ duration: 1000 });

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

    // GSAP animation for list items with stagger effect
    gsap.from('.list-item', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
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
          src={bulksmssolutionbg}
          alt="Digital Marketing"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Heading Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-purple-600 heading">
          Low Cost Transactional and Promotional Bulk SMS Provider in Pune
        </h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="content mx-auto max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-purple-600">
          Low Cost Transactional and Promotional Bulk SMS Provider in Pune
        </h2>

        <p className="mb-4">
          Arrc Technology is one of the leading and reliable bulk SMS service providers in Pune. Arrc Technology Solutions offers various SMS services like Transactional bulk SMS, Promotional bulk SMS, and voice SMS in your city Pune. Many organizations and companies have used our SMS gateway and are 100% satisfied. For sending SMS, there is no need for any mobile device; rather, you can send SMS using your computer. Just an internet connection is needed to send SMS via the internet. Thus, sometimes this message service is called web SMS service.
        </p>
        <h2 className="text-2xl font-semibold text-purple-600">
          Why Arrc Technology for Bulk SMS Service in Pune?
        </h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Directly connected with Vodafone, Idea, Airtel</li>
          <li>Arrc Technology has its own infrastructure</li>
          <li>Dedicated and strong support team</li>
          <li>Experienced technical experts for application management</li>
          <li>High configuration SMPP server with 100% uptime</li>
          <li>Uses multiple channels to reduce traffic</li>
          <li>Uses high-priority routes for sending SMS</li>
          <li>No hidden costs</li>
          <li>No fake commitments</li>
          <li>Reasonable cost</li>
          <li>Almost all clients are 100% satisfied</li>
          <li>Remote support with desktop sharing</li>
          <li>Email support</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SmsSol;

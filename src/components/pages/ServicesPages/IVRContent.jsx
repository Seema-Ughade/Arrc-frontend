import React from 'react';
import { motion } from 'framer-motion';
import ivr from '../../../assets/ivr.jpg';

const IVRContent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6 p-6 text-white">
      {/* Header Section with Image */}
      <motion.div
        className="relative w-full h-[35vh] mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <img
          src={ivr}
          alt="Interactive Voice Response"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
            Interactive Voice Response (IVR) Solutions and Services
          </h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg leading-relaxed">
          Take your customer experience to the next level with our cutting-edge IVR solutions and services. Our IVR systems are designed to automate and streamline your customer interactions, providing 24/7 support and helping you stay ahead of the competition.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-custom-purple">Benefits of Our IVR Solutions:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improved Customer Experience: Provide quick and easy access to information and support, reducing wait times and frustration.</li>
          <li>Increased Efficiency: Automate routine tasks and free up human resources for more complex issues.</li>
          <li>Cost Savings: Reduce operational costs by minimizing the need for live agents.</li>
          <li>Enhanced Brand Image: Offer a professional and modern customer interaction experience.</li>
        </ul>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-custom-purple">Our IVR Services:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom IVR Development: Tailored solutions to meet your specific business needs.</li>
          <li>IVR Hosting and Maintenance: Reliable and secure hosting, with regular updates and maintenance.</li>
          <li>IVR Integration: Seamless integration with your existing systems and infrastructure.</li>
          <li>IVR Analytics and Reporting: Gain valuable insights into customer interactions and behavior.</li>
        </ul>
      </motion.div>

      {/* Industry-Specific Solutions Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-custom-purple">Industry-Specific IVR Solutions:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Healthcare: Patient appointment reminders, prescription refill requests, and more.</li>
          <li>Finance: Account balance inquiries, payment processing, and fraud alerts.</li>
          <li>E-commerce: Order tracking, product information, and customer support.</li>
        </ul>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-custom-purple mb-4">Get Started with Our IVR Solutions Today!</h2>
        <p className="text-lg">
          Contact us to learn more about our IVR solutions and services, and take the first step towards transforming your customer experience.
        </p>
      </motion.div>
    </div>
  );
};

export default IVRContent;

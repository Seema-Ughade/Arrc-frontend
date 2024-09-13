import React, { useEffect, useRef } from 'react';
import HomeSection from './HomeSection';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProcessTimeline from './ProcessTimeline';


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const introRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const qualityRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    const sections = [introRef.current, visionRef.current, missionRef.current, qualityRef.current, resultsRef.current];
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }}
      );
    });
  }, []);

  return (
    <><section className="about-us-section py-12 px-4 sm:px-8 lg:px-16  text-white">
    <div className="container mx-auto">
      {/* Introduction Section */}
      <div ref={introRef} className="text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          What We're All About
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We assure you the best innovative and creative solutions for digital marketing and web development. We promise to deliver cost-effective online marketing solutions to maximize your profit. Arrc Technology stands out from traditional marketing agencies by focusing on 100% customer satisfaction and results-oriented marketing in the digital world.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We have evolved to offer a range of services including Digital Marketing, Web Development, Website Development, Online Application Development, Search Engine Optimization, Internet Marketing, Online Branding, E-commerce Solutions, and Mobile Application Development.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Our team is creative and committed to innovation. We prioritize data analysis before undertaking any digital media planning and marketing work. With nearly a decade of experience in IT and Digital Marketing, our founders drive innovation across industry verticals.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Our prime goal is to place our clients’ websites high on the growth curve, channelizing every effort to provide a competitive edge in the market.
        </motion.p>
      </div>

      {/* Vision, Mission, and Quality Policy Section */}
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 mb-12">
        {/* Vision */}
        <div ref={visionRef} className="flex-1 mb-8 md:mb-0 md:w-1/3">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Vision
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            As a leading digital marketing agency, our vision is to leverage our deep expertise and understanding of clients’ business domains to create tailored-fit solutions for their individual needs.
          </motion.p>
        </div>

        {/* Mission */}
        <div ref={missionRef} className="flex-1 mb-8 md:mb-0 md:w-1/3">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We strive to maintain a balance between Innovation, Creativity, Flexibility, Quality, and Affordability. Our goal is to foster digital innovation and provide SEO and SMM solutions to businesses worldwide.
          </motion.p>
        </div>

        {/* Quality Policy */}
        <div ref={qualityRef} className="flex-1 md:w-1/3">
          <motion.h3
            className="text-xl sm:text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Quality Policy
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Arrc Technology is committed to delivering services with an emphasis on continuous improvement, a pro-active approach, courtesy, timely response, and accuracy, aiming for total customer satisfaction.
          </motion.p>
        </div>
      </div>

      {/* Business Results Section */}
      <div ref={resultsRef} className="text-center">
        <motion.h3
          className="text-xl sm:text-2xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Aligning & Accelerating Business Results
        </motion.h3>
        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We bring together Digital Marketing Operations, IT operations, and domain knowledge to help transform your business.
        </motion.p>
        <div>
          <HomeSection />
        </div>
      </div>
    </div>
  </section>
  <ProcessTimeline/>
  </>
    
  );
};

export default AboutSection;

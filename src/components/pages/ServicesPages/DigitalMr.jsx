import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import bgiamgenewone from '../../../assets/bgiamgenewone.jpg';
import digitalmarketingpic from '../../../assets/digitalmarketingpic.jpeg';

gsap.registerPlugin(ScrollTrigger);

const DigitalMr = () => {
  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  // GSAP animations with ScrollTrigger
  React.useEffect(() => {
    gsap.fromTo(
      '.fade-in',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      }
    );

    gsap.fromTo(
      '.slide-in',
      { x: -100 },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.slide-in',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div className="container mx-auto p-6  text-white sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1400px] xl-max:max-w-[1600px] 2xl:max-w-[1800px]">
      {/* Full Width Image with 1/4 Height */}
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
          Digital Media Marketing Services
          </h1>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.div 
        className="text-center mb-12 px-10 lg:px-16 fade-in"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-semibold mb-4 text-[#9B59B6] leading-[1.2]">
          Digital Media Marketing Services
        </h1>
        <p className="text-lg mb-4 leading-[1.8] font-normal text-[#E8E8E8]">
          Grow your online presence with the best result-driven Digital Marketing Agency. Arrc Technology offers solutions for SEO, SEM, PPC, ORM, Lead Generation campaigns along with innovative digital solutions.
        </p>
        <p className="text-lg mb-4 leading-[1.8] font-normal text-[#E8E8E8]">
          Digital marketing is the marketing of products or services using digital technologies and media, mainly on the internet. It covers advertising through online channels such as search engines, websites, social media, email, mobile apps, and other digital mediums.
        </p>
        <p className="text-lg mb-4 leading-[1.8] font-normal text-[#E8E8E8]">
          Digital marketing focuses on engaging with customers and growing your business. It plays a significant role for both customers and companies. Arrc Technology provides synergistic platforms as per the customer's requirements, believing in long-term commitment to attract new prospects, build brand awareness, and generate leads.
        </p>
      </motion.div>

      {/* Advantages Section with Image */}
      <div className="flex flex-col lg:flex-row items-center mb-12">
        <motion.div 
          className="lg:w-1/2 w-full mb-6 lg:mb-0 "
        >
          <img src={digitalmarketingpic} alt="Digital Marketing Benefits" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </motion.div>
        <motion.div 
          className="lg:w-1/2 w-full lg:pl-6 lg:text-left"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#8E44AD] leading-[1.2]">
            Advantages of Digital Marketing For Business
          </h2>
          <ul className="list-disc list-inside pl-6 text-[#E8E8E8] leading-[1.8] font-normal">
            <li className="mb-2">Digital marketing is the most powerful form of marketing.</li>
            <li className="mb-2">It is the most cost-effective way to market your business.</li>
            <li className="mb-2">Digital marketing is highly measurable.</li>
            <li className="mb-2">Targeted campaigns reach the right customers at a lower cost compared to traditional methods.</li>
            <li className="mb-2">Allows you to target your ideal buyers effectively.</li>
            <li className="mb-2">Helps you reach customers on social media.</li>
            <li className="mb-2">Adapt strategies quickly for best results.</li>
            <li className="mb-2">Earn people’s trust and build brand reputation.</li>
            <li className="mb-2">Gain insights into competitors.</li>
            <li className="mb-2">Real-time results.</li>
            <li className="mb-2">Improve outreach.</li>
          </ul>
        </motion.div>
      </div>

      {/* What We Do Section */}
      <motion.div 
        className="mb-12 px-4 lg:px-16 fade-in"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#8E44AD] leading-[1.2]">
          What We Do
        </h2>
        <p className="text-lg mb-4 leading-[1.8] font-normal text-[#E8E8E8]">
          We are a creatively led, strategically driven, techno-friendly full-service Digital Marketing Agency with an expert team. We help companies strike a conversation with their target audience through a strong digital marketing strategy. This involves understanding:
        </p>
        <ul className="list-disc list-inside pl-6 text-[#E8E8E8] leading-[1.8] font-normal">
          <li className="mb-2">The customer's objectives</li>
          <li className="mb-2">The customer segment they are trying to serve</li>
          <li className="mb-2">The values the customer stands for</li>
        </ul>
        <p className="text-lg mb-4 leading-[1.8] font-normal text-[#E8E8E8]">
          We create performing ads with strategic precision for your brands, ad servers, and audiences, and re-target verified leads for your business continuously.
        </p>
      </motion.div>

      {/* What Makes Us the Best Section */}
      <motion.div 
        className="mb-12 px-4 lg:px-16 fade-in"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#8E44AD] leading-[1.2]">
          What Makes Us the Best Digital Marketing Agency
        </h2>
        <ul className="list-disc list-inside pl-6 text-[#E8E8E8] leading-[1.8] font-normal">
          <li className="mb-2">We provide a 360° approach to Digital Marketing.</li>
          <li className="mb-2">Our culture of going above and beyond to deliver results, no matter what.</li>
          <li className="mb-2">We believe in "When you win, we win. When you lose, we lose."</li>
          <li className="mb-2">Empowering brands with end-to-end digital solutions and services.</li>
          <li className="mb-2">Award-winning campaigns and business-critical ideas.</li>
          <li className="mb-2">The leading independent digital agency in India.</li>
          <li className="mb-2">Established client engagement models for maximum ROI.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DigitalMr;

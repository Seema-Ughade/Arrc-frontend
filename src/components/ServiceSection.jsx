
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// import seo from '../assets/seo.jpg';
import seoimagenew from '../assets/seoimagenew.jpg'
import digitalmarketingcard from '../assets/digitalmarketingcard.jpg'
import webdevimagenew from '../assets/webdevimagenew.jpeg'
import appdev23 from '../assets/appdev23.avif'
import softdev24 from '../assets/softdev24.jpg';
import eccomerce from '../assets/eccomerce.jpg';

// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const services = [
  { img: seoimagenew, title: "SEO/SEM Solutions", 
    description: 
"Elevate your digital presence with our SEO/SEM solutions. We excel in optimizing search engine rankings and managing targeted ad campaigns to drive traffic and boost visibility. Our strategic approach delivers measurable results."
  , link: "/seo-solution" },

  { img: digitalmarketingcard, title: "Digital Marketing", description: 
"Unlock the potential of digital marketing with our expert strategies. We craft customized SEO and SEM solutions to enhance your online presence. Our targeted ad campaigns drive growth and engagement. Data-driven insights ensure optimal results and impact."







, link: "/digital-marketing" },


  { img: webdevimagenew, title: "Website Development", description: 
"Transform your vision into a powerful website with our expert team. We craft static and dynamic sites that are responsive and SEO-friendly. Our focus is on user-friendly, functional designs for a seamless experience. Tailored solutions to meet your needs."
    , link: "/website-development" },

  { img: appdev23, title: "App Development", description: 
    "We develop apps that stand out from the crowd. We are a fast-growing mobile application development firm, working closely with clients to understand their requirements & suggest cost-effective, scalable & robust mobile solutions."
    , link: "/app-development" },
    
  { img: softdev24, title: "Software Development", description: 
"Optimize your operations with our custom software solutions. We design and develop scalable software that meets your specific needs. Our development process ensures robust, efficient, and user-friendly software to enhance productivity and drive innovation."

    , link: "/software-development" },
  { img: eccomerce, title: "E-Commerce Solutions", description: 
"Elevate your online store with our e-commerce solutions. We create secure, user-friendly, and responsive platforms tailored to your needs. Our focus is on enhancing user experience, optimizing transactions, and driving sales through effective strategies."

    , link: "/ecommerce-solution" },
];

const ServiceSection = () => {
  return (
    // <section id="services" className=" py-12">
    //   <div className="container mx-auto px-6 md:px-12 lg:px-40 text-center">
    //     <motion.h2
    //       className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gradient bg-clip-text text-purple-600 "
    //       variants={textVariants}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.7 }}
    //     >
    //       Our Services
    //     </motion.h2>

    //     <motion.p
    //       className="mb-12 text-gray-300 text-lg md:text-xl"
    //       variants={textVariants}
    //       initial="hidden"
    //       animate="visible"
    //       transition={{ duration: 0.7, delay: 0.2 }}
    //       whileHover={{ color: '#8B5CF6' }} // Purple color on hover
    //     >
    //       Discover our diverse range of services tailored to help you transform your business with innovative IT solutions.
    //     </motion.p>

    //     <motion.div
    //       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate="visible"
    //     >
    //       {services.map((service, index) => (
    //         <motion.div
    //           key={index}
    //           className="relative transform hover:scale-105 hover:rotate-3 transition-transform duration-500"
    //           variants={cardVariants}
    //           initial="hidden"
    //           animate="visible"
    //           transition={{ duration: 0.7, delay: index * 0.1 }}
    //         >
    //           <div className="bg-gray-800 shadow-2xl rounded-lg p-4 sm:p-6 flex flex-col items-center">
    //             <div className="relative w-full h-32 sm:h-40 lg:h-48">
    //               <motion.img
    //                 src={service.img}
    //                 alt={service.title}
    //                 className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
    //                 variants={cardVariants}
    //                 initial="hidden"
    //                 animate="visible"
    //                 transition={{ duration: 0.5 }}
    //               />
    //               <div className="absolute inset-0 rounded-t-lg pointer-events-none"></div>
    //             </div>
    //             <motion.h3
    //               className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-gradient bg-clip-text   text-purple-600 text-center hover:text-white transition-colors duration-300"
    //               variants={textVariants}
    //               initial="hidden"
    //               animate="visible"
    //               transition={{ duration: 0.7, delay: index * 0.1 }}
    //             >
    //               <Link to={service.link}>{service.title}</Link>
    //             </motion.h3 >
    //             <motion.p whileHover={{ color: '#8B5CF6' }} // Purple color on hover
    //               className="mt-2 text-white ">{service.description}</motion.p>
    //             <Link
    //               to={service.link}
    //               className="inline-block  bg-purple-600 hover:bg-gray-500   text-white hover:bg-gradient-to-l  rounded-3xl w-[80%] px-3 py-1.5 text-center mt-4 transition-all duration-300"
    //             >
    //               Read More
    //             </Link>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
    // </section>
    <section id="services" className="py-12">
  <div className="container mx-auto px-6 md:px-12 lg:px-40 text-center">
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gradient bg-clip-text text-purple-600"
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(173, 216, 230, 0.8)" }} // Light Blue glow on hover
    >
      Our Services
    </motion.h2>

    <motion.p
      className="mb-12 text-gray-400 text-lg md:text-xl"
      variants={textVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ color: '#5A67D8', textShadow: "0 0 15px rgba(90, 103, 216, 0.8)" }} // Subtle Indigo glow on hover
    >
      Discover our diverse range of services tailored to help you transform your business with innovative IT solutions.
    </motion.p>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="relative transform hover:scale-105 hover:rotate-3 transition-transform duration-500"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: index * 0.1 }}
          whileHover={{ boxShadow: "0 0 20px rgba(173, 216, 230, 0.8)" }} // Light Blue glow on hover
        >
          <div className="bg-gray-800 shadow-2xl rounded-lg p-4 sm:p-6 flex flex-col items-center">
            <div className="relative w-full h-32 sm:h-40 lg:h-48">
              <motion.img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 rounded-t-lg pointer-events-none"></div>
            </div>
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-gradient bg-clip-text text-purple-600 text-center hover:text-white transition-colors duration-300"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ textShadow: "0 0 15px rgba(173, 216, 230, 0.8)" }} // Light Blue glow on hover
            >
              <Link to={service.link}>{service.title}</Link>
            </motion.h3 >
            <motion.p 
              className="mt-2 text-white"
              whileHover={{ color: '#5A67D8', textShadow: "0 0 15px rgba(90, 103, 216, 0.8)" }} // Subtle Indigo glow on hover
            >
              {service.description}
            </motion.p>
            <Link
              to={service.link}
              className="inline-block bg-gradient-to-r from-purple-500 via-blue-600 to-black hover:from-black hover:via-blue-600 hover:to-purple-500 rounded-xl w-[70%] px-3 py-1.5 text-white text-center mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(173, 216, 230, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
              }}
            >
              Read More
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  );
};

export default ServiceSection;

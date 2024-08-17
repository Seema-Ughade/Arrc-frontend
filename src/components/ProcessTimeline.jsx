import React from 'react';
import { FaCogs, FaFileCode, FaCheckSquare, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, x: -50 }, // Start off the screen to the left
  visible: { opacity: 1, x: 0 }, // Move to original position
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  initial: { rotateY: 0 },
  hover: { rotateY: 180 }, // Rotate horizontally
};

const ProcessTimeline = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-40 text-center">
        <motion.h3
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gradient bg-clip-text text-purple-500"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
        >
          Process We Follow
        </motion.h3>

        <motion.p
          className="mb-12 text-gray-300 text-lg md:text-xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ color: '#8B5CF6' }} // Purple color on hover
        >
          Our skill lies in creating websites & mobile apps that are very user-friendly. We enable you to design & convey the capacities to reach your ideal customers.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.2 } }}}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: <FaCogs className='text-white ' />,
              color: 'bg-gray-800 hover:bg-purple-500',
              title: 'DESIGN',
              description: 'We develop a strategy for your business & plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.',
              textColor: 'text-white'
            },
            {
              icon: <FaFileCode className='text-white' />,
              color: 'bg-gray-800 hover:bg-purple-500',
              title: 'DEVELOPMENT',
              description: 'After design, we start the work on your project & provide you with drafts & prototypes. That way, you have the freedom to test your website, mobile app.',
              textColor: 'text-white'
            },
            {
              icon: <FaCheckSquare className='text-white' />,
              color: 'bg-gray-800 hover:bg-purple-500',
              title: 'DELIVERY/LAUNCH',
              description: 'The final stage is taking the work live and ensuring that your website is error free or your mobile app meets the app store guidelines.',
              textColor: 'text-white'
            },
            {
              icon: <FaRocket className='text-white' />,
              color: 'bg-gray-800 hover:bg-purple-500',
              title: 'SUPPORT',
              description: 'We value our client relationships & focus on building connections that last beyond our project. We pride ourselves on providing personal service.',
              textColor: 'text-white'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative transform transition-transform duration-300 bg-gradient-to-r ${item.color} rounded-lg shadow-lg p-6 text-center`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} // Slight scale effect on hover
            >
              <motion.div
                className={`text-5xl mb-4 ${item.textColor}`}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d', display: 'inline-block' }} // Preserve 3D effect
              >
                {item.icon}
              </motion.div>
              <motion.h4
                className={`text-xl font-semibold mb-2 ${item.textColor}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {item.title}
              </motion.h4>
              <p className="text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

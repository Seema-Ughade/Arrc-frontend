



// import React from 'react';
// import about from '../assets/about.jpg';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <>
//     <div className=" py-16">
//       <div className="flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 mt-10">
//         <div className="flex flex-wrap w-full gap-6">
//           {/* Image Column */}
//           <div className="lg:w-5/12 md:w-full sm:w-5/12 ">
//             <img 
//               src={about} 
//               alt="About Us" 
//               className="w-full h-full object-cover rounded-lg"
//               style={{ borderRadius: '8px' }} // Apply border radius here
//             />
//             <div className="absolute inset-0 bg-gradient-to-r   bg-opacity-50 flex items-center justify-center rounded-lg">
//               {/* Optional overlay for better text visibility */}
//             </div>
//           </div>

//           {/* Text Column */}
//           <div className="lg:w-6/12 md:w-full sm:w-full px-4 mb-8 lg:mb-0 order-2 flex flex-col justify-center">
//             <motion.div
//               className="inner-column py-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="sec-title mb-6">
//                 <motion.h3
//                   className="text-4xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-purple-600"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   What We're All About
//                 </motion.h3>
//                 <motion.div
//                   className="text mb-4 text-white"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                 >
//                   <strong>
//                     We assure you to give the best innovative, creative solutions for digital marketing & web development. We promised to give a cost-effective online marketing solution to maximize profit.
//                   </strong>
//                 </motion.div>
//               </div>
//               <p className="text-white mb-4">
//                 Arrc Technology is the best Digital Marketing and Website Development Company. It's different from your traditional marketing agency.
//               </p>
//               <Link to="/about" className="inline-flex items-center px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
//                 <span>Read More</span>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default About;




import React from 'react';
import about from '../assets/about.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <div className="py-16">
        <div className="flex flex-col items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mb-10 lg:mt-10">
          <div className="flex flex-wrap w-full gap-6 relative">
            {/* Image Column */}
            <div className="lg:w-5/12 md:w-full sm:w-5/12 relative">
              <img 
                src={about} 
                alt="About Us" 
                className="w-full h-full object-cover rounded-lg"
                style={{ borderRadius: '8px' }} // Apply border radius here
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r bg-opacity-50 flex items-center justify-center rounded-lg pointer-events-none">
                {/* Optional overlay for better text visibility */}
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:w-6/12 md:w-full sm:w-full px-4 mb-8 lg:mb-0 order-2 flex flex-col justify-center relative z-10">
              <motion.div
                className="inner-column py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="sec-title mb-6">
                  <motion.h3
                    className="text-4xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-purple-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    What We're All About
                  </motion.h3>
                  <motion.div
                    className="text mb-4 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <strong>
                      We assure you to give the best innovative, creative solutions for digital marketing & web development. We promised to give a cost-effective online marketing solution to maximize profit.
                    </strong>
                  </motion.div>
                </div>
                <p className="text-white mb-4">
                  Arrc Technology is the best Digital Marketing and Website Development Company. It's different from your traditional marketing agency.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md  hover:to-purple-500 transition-all duration-300 z-20"
                >
                  <span>Read More</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

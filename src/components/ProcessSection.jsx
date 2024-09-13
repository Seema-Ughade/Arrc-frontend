// // import React from 'react';
// // import { FaCogs, FaFileCode, FaCheckSquare, FaRocket } from 'react-icons/fa';

// // const ProcessSection = () => {
// //   return (
// //     <section className="bg-gray-200 py-16">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-12">
// //           <h3 className="text-3xl font-bold mb-4">Process We Follow</h3>
// //           <p className="text-lg text-gray-700">
// //             Our skill lies in creating websites & mobile apps that are very user-friendly. We enable you to design & convey the capacities to reach your ideal customers.
// //           </p>
// //         </div>
// //         <div className="flex flex-wrap -mx-2">
// //           {/* DESIGN */}
// //           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
// //             <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
// //               <div className="text-4xl text-blue-600 mb-4">
// //                 <FaCogs />
// //               </div>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-semibold mb-2">DESIGN</h3>
// //                 <p className="text-gray-700">
// //                   We develop a strategy for your business & plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.
// //                 </p>
// //               </div>
// //             </div>
// //           </a>
          
// //           {/* DEVELOPMENT */}
// //           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
// //             <div className="flex flex-col items-center p-6 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
// //               <div className="text-4xl text-green-600 mb-4">
// //                 <FaFileCode />
// //               </div>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-semibold mb-2">DEVELOPMENT</h3>
// //                 <p className="text-gray-700">
// //                   After design, we start the work on your project & provide you with drafts & prototypes. That way, you have the freedom to test your website, mobile app.
// //                 </p>
// //               </div>
// //             </div>
// //           </a>
          
// //           {/* DELIVERY/LAUNCH */}
// //           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
// //             <div className="flex flex-col items-center p-6 bg-gradient-to-r from-red-100 via-red-200 to-red-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
// //               <div className="text-4xl text-red-600 mb-4">
// //                 <FaCheckSquare />
// //               </div>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-semibold mb-2">DELIVERY/LAUNCH</h3>
// //                 <p className="text-gray-700">
// //                   The final stage is taking the work live and ensuring that your website is error-free or your mobile app meets the app store guidelines.
// //                 </p>
// //               </div>
// //             </div>
// //           </a>
          
// //           {/* SUPPORT */}
// //           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
// //             <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
// //               <div className="text-4xl text-purple-600 mb-4">
// //                 <FaRocket />
// //               </div>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-semibold mb-2">SUPPORT</h3>
// //                 <p className="text-gray-700">
// //                   We value our client relationships & focus on building connections that last beyond our project. We pride ourselves on providing personal service.
// //                 </p>
// //               </div>
// //             </div>
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProcessSection;


// import React from 'react';
// import { FaCogs, FaFileCode, FaCheckSquare, FaRocket } from 'react-icons/fa';
// import './ProcessSection.css'; // Import the CSS file

// const ProcessSection = () => {
//   return (
//     <section className="bg-gray-200 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h3 className="text-3xl font-bold mb-4">Process We Follow</h3>
//           <p className="text-lg text-gray-700">
//             Our skill lies in creating websites & mobile apps that are very user-friendly. We enable you to design & convey the capacities to reach your ideal customers.
//           </p>
//         </div>
//         <div className="flex flex-wrap -mx-2">
//           {/* DESIGN */}
//           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
//             <div className="flip-box">
//               <div className="flip-box-inner">
//                 <div className="flip-box-front flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <div className="text-4xl text-blue-600 mb-4">
//                     <FaCogs />
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-semibold mb-2">DESIGN</h3>
//                     <p className="text-gray-700">
//                       We develop a strategy for your business & plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flip-box-back flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold mb-2">DESIGN</h3>
//                   <p className="text-white">
//                     Our team will create a custom design tailored to your needs, ensuring a unique and effective solution for your business.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </a>
          
//           {/* DEVELOPMENT */}
//           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
//             <div className="flip-box">
//               <div className="flip-box-inner">
//                 <div className="flip-box-front flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <div className="text-4xl text-green-600 mb-4">
//                     <FaFileCode />
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-semibold mb-2">DEVELOPMENT</h3>
//                     <p className="text-gray-700">
//                       After design, we start the work on your project & provide you with drafts & prototypes. That way, you have the freedom to test your website, mobile app.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flip-box-back flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold mb-2">DEVELOPMENT</h3>
//                   <p className="text-white">
//                     Our development team ensures that your project is built to the highest standards, delivering a robust and scalable solution.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </a>
          
//           {/* DELIVERY/LAUNCH */}
//           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
//             <div className="flip-box">
//               <div className="flip-box-inner">
//                 <div className="flip-box-front flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <div className="text-4xl text-red-600 mb-4">
//                     <FaCheckSquare />
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-semibold mb-2">DELIVERY/LAUNCH</h3>
//                     <p className="text-gray-700">
//                       The final stage is taking the work live and ensuring that your website is error-free or your mobile app meets the app store guidelines.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flip-box-back flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold mb-2">DELIVERY/LAUNCH</h3>
//                   <p className="text-white">
//                     We handle the deployment process, ensuring a smooth launch and that everything is set up correctly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </a>
          
//           {/* SUPPORT */}
//           <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
//             <div className="flip-box">
//               <div className="flip-box-inner">
//                 <div className="flip-box-front flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <div className="text-4xl text-purple-600 mb-4">
//                     <FaRocket />
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-semibold mb-2">SUPPORT</h3>
//                     <p className="text-gray-700">
//                       We value our client relationships & focus on building connections that last beyond our project. We pride ourselves on providing personal service.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flip-box-back flex flex-col items-center p-6 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold mb-2">SUPPORT</h3>
//                   <p className="text-white">
//                     Our support team is always available to assist you, ensuring that your needs are met and your project runs smoothly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;


import React from 'react';
import { FaCogs, FaFileCode, FaCheckSquare, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProcessSection.css'; // Import the CSS file

const ProcessSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold mb-4 text-purple-600 hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Process We Follow
          </motion.h3>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our skill lies in creating websites & mobile apps that are very user-friendly. We enable you to design & convey the capacities to reach your ideal customers.
          </motion.p>
        </div>
        <div className="flex flex-wrap -mx-2">
          {/* DESIGN */}
          {/* <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8"> */}
          <a className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <motion.div
              className="flip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flip-box-inner">
                <div className="flip-box-front flex flex-col items-center p-6  rounded-lg shadow-lg">
                  <div className="text-4xl text-white mb-4">
                    <FaCogs />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">DESIGN</h3>
                    <p className="text-gray-200">
                      We develop a strategy for your business & plan accordingly considering requirements. Our solutions are designed in-house, from the ground up.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">DESIGN</h3>
                  <p className="text-white">
                    Our team will create a custom design tailored to your needs, ensuring a unique and effective solution for your business.
                  </p>
                </div>
              </div>
            </motion.div>
          </a>

          {/* DEVELOPMENT */}
          {/* <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8"> */}
          <a  className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <motion.div
              className="flip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flip-box-inner">
                <div className="flip-box-front flex flex-col items-center p-6  rounded-lg shadow-lg">
                  <div className="text-4xl text-white mb-4">
                    <FaFileCode />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">DEVELOPMENT</h3>
                    <p className="text-gray-200">
                      After design, we start the work on your project & provide you with drafts & prototypes. That way, you have the freedom to test your website, mobile app.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">DEVELOPMENT</h3>
                  <p className="text-white">
                    Our development team ensures that your project is built to the highest standards, delivering a robust and scalable solution.
                  </p>
                </div>
              </div>
            </motion.div>
          </a>

          {/* DELIVERY/LAUNCH */}
          {/* <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8"> */}
          <a  className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <motion.div
              className="flip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flip-box-inner">
                <div className="flip-box-front flex flex-col items-center p-6  rounded-lg shadow-lg">
                  <div className="text-4xl text-white mb-4">
                    <FaCheckSquare />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2  text-white">DELIVERY/LAUNCH</h3>
                    <p className="text-gray-200">
                      The final stage is taking the work live and ensuring that your website is error-free or your mobile app meets the app store guidelines.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">DELIVERY/LAUNCH</h3>
                  <p className="text-white">
                    We handle the deployment process, ensuring a smooth launch and that everything is set up correctly.
                  </p>
                </div>
              </div>
            </motion.div>
          </a>

          {/* SUPPORT */}
          {/* <a href="#" className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8"> */}
          <a  className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <motion.div
              className="flip-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flip-box-inner">
                <div className="flip-box-front flex flex-col items-center p-6  rounded-lg shadow-lg">
                  <div className="text-4xl text-white mb-4">
                    <FaRocket />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">SUPPORT</h3>
                    <p className="text-gray-200">
                      We value our client relationships & focus on building connections that last beyond our project. We pride ourselves on providing personal service.
                    </p>
                  </div>
                </div>
                <div className="flip-box-back flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2 text-white">SUPPORT</h3>
                  <p className="text-white">
                    Our support team is always available to assist you, ensuring that your needs are met and your project runs smoothly.
                  </p>
                </div>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

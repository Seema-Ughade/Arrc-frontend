// import React from 'react';
// import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { useNavigate } from 'react-router-dom';



// const Footer = () => {
//   const navigate = useNavigate();

//   // GSAP animations on component mount
//   React.useEffect(() => {
//     gsap.fromTo(
//       '.footer-section',
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
//     );
//   }, []);
  

//   return  (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* About Us Section */}
//           <motion.section 
//             className="footer-section mb-8"
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-purple-500">About Us</h2>
//             <p className="text-base mb-4">
//               We provide innovative and creative solutions for digital marketing and web development. Our aim is to offer cost-effective online marketing solutions to maximize profit.
//             </p>
//             <Link to="/about" className="text-blue-400 hover:underline">Read More...</Link><br/>
//             <button 
//               className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-400 hover transition duration-300"
//               onClick={() => navigate('/login')}
//             >
//               Login
//             </button>
//           </motion.section>


//           {/* Our Services Section */}
//           <motion.section 
//             className="footer-section mb-8"
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-purple-500">Our Services</h2>
//             <ul className="list-disc list-inside space-y-2">
//               <li><Link to="/seo-solution" className="text-blue-400 hover:underline">SEO/SEM Solutions</Link></li>
//               <li><Link to="/digital-marketing" className="text-blue-400 hover:underline">Digital Marketing</Link></li>
//               <li><Link to="/digital-business-card" className="text-blue-400 hover:underline">Digital Business Card</Link></li>
//               <li><Link to="/cyber-security" className="text-blue-400 hover:underline">Cyber Security</Link></li>
//               <li><Link to="/digital-brochure" className="text-blue-400 hover:underline">Digital Brochure</Link></li>
//               <li><Link to="/website-development" className="text-blue-400 hover:underline">Website Development</Link></li>
//               <li><Link to="/app-development" className="text-blue-400 hover:underline">App Development</Link></li>
//               <li><Link to="/software-development" className="text-blue-400 hover:underline">Software Development</Link></li>
//               <li><Link to="/ecommerce-solution" className="text-blue-400 hover:underline">E-Commerce Solutions</Link></li>
//               <li><Link to="/internships" className="text-blue-400 hover:underline">Internship</Link></li>
//               <li><Link to="/services1" className="text-blue-400 hover:underline">services</Link></li>
//               <li><Link to="/Demo" className="text-blue-400 hover:underline">Demo</Link></li>
//               <li><Link to="/InternshipCourse" className="text-blue-400 hover:underline">InternshipInfo</Link></li>
//               <li><Link to="/CourseSection" className="text-blue-400 hover:underline">CourseSection</Link></li>
              
              

//             </ul>
//           </motion.section>

//           {/* Contact Information & Footer Text Section */}
//           <motion.section 
//             className="footer-section flex flex-col mb-8"
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex flex-wrap items-center mb-4 space-x-4">
//               <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-700 transition-colors duration-300">
//                 <FaFacebook />
//               </a>
//               <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800 transition-colors duration-300">
//                 <FaLinkedin />
//               </a>
//               <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-700 transition-colors duration-300">
//                 <FaInstagram />
//               </a>
//               <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-500 transition-colors duration-300">
//                 <FaTelegram />
//               </a>
//             </div>
//             <div className="text-base mb-4">
//               <p>+91-7502211337 / +91-9107223377</p>
//               <p>Email: <a href="mailto:info@example.com" className="text-blue-400 hover:underline">arrctechnology15@gmail.com</a></p>
//             </div>
//             <div className=" text-sm mb-4">
//               <p>© 2024 All Rights Reserved.</p>
//             </div>
//             <div className="flex flex-wrap  space-x-4 text-sm mb-4">
//               <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>
//               <Link to="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</Link>
//               <Link to="/faq" className="text-blue-400 hover:underline">FAQ</Link>
//             </div>
//             <div className=" text-sm">
//               <a href="#top" className="text-blue-400 hover:underline">Back to Top</a>
//             </div>
//           </motion.section>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // GSAP animations on component mount
  React.useEffect(() => {
    gsap.fromTo(
      '.footer-section',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <motion.section 
            className="footer-section mb-8"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-500">About Us</h2>
            <p className="text-base mb-4">
              We provide innovative and creative solutions for digital marketing and web development. Our aim is to offer cost-effective online marketing solutions to maximize profit.
            </p>
            <Link to="/about" className="text-blue-400 hover:underline">Read More...</Link><br/>
            <button 
              className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </motion.section>

          {/* Our Services Section */}
          <motion.section 
            className="footer-section lg:ml-24 mb-8"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Our Services</h2>
            <ul className="grid grid-cols-2 gap-4">
            <li><Link to="/website-development" className="text-blue-400 hover:underline">Website Development</Link></li>
            <li><Link to="/app-development" className="text-blue-400 hover:underline">App Development</Link></li>
            <li><Link to="/software-development" className="text-blue-400 hover:underline">Software Development</Link></li>
            <li><Link to="/ecommerce-solution" className="text-blue-400 hover:underline">E-Commerce Solutions</Link></li>
              <li><Link to="/seo-solution" className="text-blue-400 hover:underline">SEO/SEM Solutions</Link></li>
              <li><Link to="/digital-marketing" className="text-blue-400 hover:underline">Digital Marketing</Link></li>
              <li><Link to="/digital-business-card" className="text-blue-400 hover:underline">Digital Business Card</Link></li>
              <li><Link to="/digital-brochure" className="text-blue-400 hover:underline">Digital Brochure</Link></li>
              <li><Link to="/bulk-sms-solutions" className="text-blue-400 hover:underline">Bulk Sms Solutions</Link></li>
              <li><Link to="ivr-solutions" className="text-blue-400 hover:underline">IVR Solutions</Link></li>
              <li><Link to="/cyber-security" className="text-blue-400 hover:underline">Cyber Security</Link></li>
              <li><Link to="/internships" className="text-blue-400 hover:underline">Internship</Link></li>
              <li><Link to="/InternshipCourse" className="text-blue-400 hover:underline">Internship Information</Link></li>
              <li><Link to="/CourseSection" className="text-blue-400 hover:underline">Course Information</Link></li>
            </ul>
          </motion.section>

          {/* Contact Information & Footer Text Section */}
          <motion.section 
            className="footer-section lg:ml-20 flex flex-col mb-8"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4 space-x-4">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-700 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-800 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-700 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-500 transition-colors duration-300">
                <FaTelegram />
              </a>
            </div>
            <div className="text-base mb-4">
              <p>+91-7502211337 / +91-9107223377</p>
              <p>Email: <a href="mailto:info@example.com" className="text-blue-400 hover:underline">arrctechnology15@gmail.com</a></p>
            </div>
            <div className="text-sm mb-4">
              <p>© 2024 All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap space-x-4 text-sm mb-4">
              <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</Link>
              <Link to="/faq" className="text-blue-400 hover:underline">FAQ</Link>
            </div>
            <div className="text-sm">
              <a href="#top" className="text-blue-400 hover:underline">Back to Top</a>
            </div>
          </motion.section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

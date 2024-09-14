
// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import ProcessSection from './ProcessSection';
// import ServiceSection from './ServiceSection';
// import ProcessTimeline from './ProcessTimeline';
// import About from './About';
// import Demo from '../components/pages/demo/Demo'
// import HomeSection from './HomeSection';
// import { motion } from 'framer-motion';
// import HorePage from '../components/pages/Heropage/HeroPage'

// const MainLayout = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: true });
//   const { ref: processTimelineRef, inView: processTimelineInView } = useInView({ triggerOnce: true });
//   const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
//   const { ref: homeSectionRef, inView: homeSectionInView } = useInView({ triggerOnce: true });
//   const { ref: processSectionRef, inView: processSectionInView } = useInView({ triggerOnce: true });
//   const { ref: demoRef, inView: demoInView } = useInView({ triggerOnce: true });

//   const handleMouseEnter = (section) => {
//     setActiveSection(section);
//   };

//   const handleMouseLeave = () => {
//     setActiveSection(null);
//   };

//   const getAnimationProps = (sectionInView, sectionName) => ({
//     opacity: activeSection === sectionName || sectionInView ? 1 : 0,
//     y: activeSection === sectionName || sectionInView ? 0 : 50
//   });

//   return (
//     <div>
//      < HorePage/>
//       <motion.div
//         ref={serviceRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(serviceInView, 'service')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('service')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ServiceSection />
//       </motion.div>

//       <motion.div
//         ref={processTimelineRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(processTimelineInView, 'processTimeline')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('processTimeline')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ProcessTimeline />
//       </motion.div>

//       <motion.div
//         ref={aboutRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(aboutInView, 'about')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('about')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <About />
//       </motion.div>

//       <motion.div
//         ref={homeSectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(homeSectionInView, 'homeSection')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('homeSection')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <HomeSection />
//       </motion.div>

//       <motion.div
//         ref={processSectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(processSectionInView, 'Demo')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('Demo')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ProcessSection />
        
//       </motion.div>
//       <motion.div
//         ref={demoRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(demoInView, 'processSection')}
//         transition={{ duration: 0.6 }}
//         onMouseEnter={() => handleMouseEnter('processSection')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Demo />
        
//       </motion.div>
//     </div>
//   );
// }

// export default MainLayout;






// // import React, { useState } from 'react';
// // import { useInView } from 'react-intersection-observer';
// // import { motion } from 'framer-motion';
// // import ProcessSection from './ProcessSection';
// // import ServiceSection from './ServiceSection';
// // import ProcessTimeline from './ProcessTimeline';
// // import About from './About';
// // import Demo from '../components/pages/demo/Demo';
// // import HomeSection from './HomeSection';

// // const MainLayout = () => {
// //   const [activeSection, setActiveSection] = useState(null);

// //   const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: false, threshold: 0.1 });
// //   const { ref: processTimelineRef, inView: processTimelineInView } = useInView({ triggerOnce: false, threshold: 0.1 });
// //   const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.1 });
// //   const { ref: homeSectionRef, inView: homeSectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });
// //   const { ref: processSectionRef, inView: processSectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });
// //   const { ref: demoRef, inView: demoInView } = useInView({ triggerOnce: false, threshold: 0.1 });

// //   const handleMouseEnter = (section) => {
// //     setActiveSection(section);
// //   };

// //   const handleMouseLeave = () => {
// //     setActiveSection(null);
// //   };

// //   const getAnimationProps = (sectionInView, sectionName) => ({
// //     opacity: activeSection === sectionName || sectionInView ? 1 : 0,
// //     y: activeSection === sectionName || sectionInView ? 0 : 50,
// //     transition: { duration: 0.6 }
// //   });

// //   return (
// //     <div>
// //       <motion.div
// //         ref={serviceRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(serviceInView, 'service')}
// //         onMouseEnter={() => handleMouseEnter('service')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <ServiceSection />
// //       </motion.div>

// //       <motion.div
// //         ref={processTimelineRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(processTimelineInView, 'processTimeline')}
// //         onMouseEnter={() => handleMouseEnter('processTimeline')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <ProcessTimeline />
// //       </motion.div>

// //       <motion.div
// //         ref={aboutRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(aboutInView, 'about')}
// //         onMouseEnter={() => handleMouseEnter('about')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <About />
// //       </motion.div>

// //       <motion.div
// //         ref={homeSectionRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(homeSectionInView, 'homeSection')}
// //         onMouseEnter={() => handleMouseEnter('homeSection')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <HomeSection />
// //       </motion.div>

// //       <motion.div
// //         ref={processSectionRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(processSectionInView, 'processSection')}
// //         onMouseEnter={() => handleMouseEnter('processSection')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <ProcessSection />
// //       </motion.div>

// //       <motion.div
// //         ref={demoRef}
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={getAnimationProps(demoInView, 'demo')}
// //         onMouseEnter={() => handleMouseEnter('demo')}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <Demo />
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default MainLayout;












import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ProcessSection from './ProcessSection';
import ServiceSection from './ServiceSection';
// import ProcessTimeline from './ProcessTimeline';
import About from './About';
// import Demo from '../components/pages/demo/Demo';
import HomeSection from './HomeSection';
import HeroPage from '../components/pages/Heropage/HeroPage';

gsap.registerPlugin(ScrollToPlugin);

const MainLayout = () => {
  // Setup refs with useInView
  const { ref: serviceRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  // const { ref: processTimelineRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: aboutRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  // const { ref: homeSectionRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: processSectionRef } = useInView({ triggerOnce: false, threshold: 0.1 });
  // const { ref: demoRef } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    gsap.fromTo(
      ['#service', '#processTimeline', '#about', '#homeSection', '#processSection', '#demo'],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  const scrollToSection = (sectionId) => {
    gsap.to(window, { scrollTo: `#${sectionId}`, duration: 1 });
  };

  return (
    <div>
      <HeroPage />
      
      <div ref={serviceRef} id="service">
        <ServiceSection />
      </div>
{/* 
      <div ref={processTimelineRef} id="processTimeline">
        <ProcessTimeline />
      </div> */}

      <div ref={aboutRef} id="about">
        <About />
      </div>

      {/* <div ref={homeSectionRef} id="homeSection">
        <HomeSection />
      </div> */}

      <div ref={processSectionRef} id="processSection">
        <ProcessSection />
      </div>

      {/* <div ref={demoRef} id="demo">
        <Demo />
      </div> */}

      {/* Example of buttons to scroll to different sections */}
      {/* <button onClick={() => scrollToSection('service')}>Go to Service</button>
      <button onClick={() => scrollToSection('processTimeline')}>Go to Process Timeline</button>
      <button onClick={() => scrollToSection('about')}>Go to About</button>
      <button onClick={() => scrollToSection('homeSection')}>Go to Home Section</button>
      <button onClick={() => scrollToSection('processSection')}>Go to Process Section</button> */}
      {/* <button onClick={() => scrollToSection('demo')}>Go to Demo</button> */}
    </div>
  );
};

export default MainLayout;

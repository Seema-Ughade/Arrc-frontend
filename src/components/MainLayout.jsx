
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProcessSection from './ProcessSection';
import ServiceSection from './ServiceSection';
import ProcessTimeline from './ProcessTimeline';
import About from './About';
import Demo from '../components/pages/demo/Demo'
import HomeSection from './HomeSection';
import { motion } from 'framer-motion';
import HorePage from '../components/pages/Heropage/HeroPage'

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState(null);

  const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: true });
  const { ref: processTimelineRef, inView: processTimelineInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: homeSectionRef, inView: homeSectionInView } = useInView({ triggerOnce: true });
  const { ref: processSectionRef, inView: processSectionInView } = useInView({ triggerOnce: true });
  const { ref: demoRef, inView: demoInView } = useInView({ triggerOnce: true });

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  const getAnimationProps = (sectionInView, sectionName) => ({
    opacity: activeSection === sectionName || sectionInView ? 1 : 0,
    y: activeSection === sectionName || sectionInView ? 0 : 50
  });

  return (
    <div>
     < HorePage/>
      <motion.div
        ref={serviceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(serviceInView, 'service')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('service')}
        onMouseLeave={handleMouseLeave}
      >
        <ServiceSection />
      </motion.div>

      <motion.div
        ref={processTimelineRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(processTimelineInView, 'processTimeline')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('processTimeline')}
        onMouseLeave={handleMouseLeave}
      >
        <ProcessTimeline />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(aboutInView, 'about')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        <About />
      </motion.div>

      <motion.div
        ref={homeSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(homeSectionInView, 'homeSection')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('homeSection')}
        onMouseLeave={handleMouseLeave}
      >
        <HomeSection />
      </motion.div>

      <motion.div
        ref={processSectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(processSectionInView, 'Demo')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('Demo')}
        onMouseLeave={handleMouseLeave}
      >
        <ProcessSection />
        
      </motion.div>
      <motion.div
        ref={demoRef}
        initial={{ opacity: 0, y: 50 }}
        animate={getAnimationProps(demoInView, 'processSection')}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => handleMouseEnter('processSection')}
        onMouseLeave={handleMouseLeave}
      >
        <Demo />
        
      </motion.div>
    </div>
  );
}

export default MainLayout;






// import React, { useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
// import ProcessSection from './ProcessSection';
// import ServiceSection from './ServiceSection';
// import ProcessTimeline from './ProcessTimeline';
// import About from './About';
// import Demo from '../components/pages/demo/Demo';
// import HomeSection from './HomeSection';

// const MainLayout = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const { ref: serviceRef, inView: serviceInView } = useInView({ triggerOnce: false, threshold: 0.1 });
//   const { ref: processTimelineRef, inView: processTimelineInView } = useInView({ triggerOnce: false, threshold: 0.1 });
//   const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.1 });
//   const { ref: homeSectionRef, inView: homeSectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });
//   const { ref: processSectionRef, inView: processSectionInView } = useInView({ triggerOnce: false, threshold: 0.1 });
//   const { ref: demoRef, inView: demoInView } = useInView({ triggerOnce: false, threshold: 0.1 });

//   const handleMouseEnter = (section) => {
//     setActiveSection(section);
//   };

//   const handleMouseLeave = () => {
//     setActiveSection(null);
//   };

//   const getAnimationProps = (sectionInView, sectionName) => ({
//     opacity: activeSection === sectionName || sectionInView ? 1 : 0,
//     y: activeSection === sectionName || sectionInView ? 0 : 50,
//     transition: { duration: 0.6 }
//   });

//   return (
//     <div>
//       <motion.div
//         ref={serviceRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(serviceInView, 'service')}
//         onMouseEnter={() => handleMouseEnter('service')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ServiceSection />
//       </motion.div>

//       <motion.div
//         ref={processTimelineRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(processTimelineInView, 'processTimeline')}
//         onMouseEnter={() => handleMouseEnter('processTimeline')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ProcessTimeline />
//       </motion.div>

//       <motion.div
//         ref={aboutRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(aboutInView, 'about')}
//         onMouseEnter={() => handleMouseEnter('about')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <About />
//       </motion.div>

//       <motion.div
//         ref={homeSectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(homeSectionInView, 'homeSection')}
//         onMouseEnter={() => handleMouseEnter('homeSection')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <HomeSection />
//       </motion.div>

//       <motion.div
//         ref={processSectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(processSectionInView, 'processSection')}
//         onMouseEnter={() => handleMouseEnter('processSection')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <ProcessSection />
//       </motion.div>

//       <motion.div
//         ref={demoRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={getAnimationProps(demoInView, 'demo')}
//         onMouseEnter={() => handleMouseEnter('demo')}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Demo />
//       </motion.div>
//     </div>
//   );
// }

// export default MainLayout;

import React, { useEffect, useState } from 'react';
import ServiceSection from './ServiceSection'
import ProcessTimeline from './ProcessTimeline'
import HomeSection from './HomeSection'
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3000; // Duration for the counter animation in ms
    const startTime = performance.now();
    const endValue = end;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newCount = Math.floor(progress * endValue);

      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end]);

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-4xl font-bold text-green-600 mb-2">{count}+</h2>
    </div>
  );
};

const Home = () => {
  return (
    <>
    
<ServiceSection />
      <ProcessTimeline/>
<HomeSection/>
    </>
      
   
    
  );

};

export default Home;

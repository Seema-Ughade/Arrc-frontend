// import React, { useEffect, useState } from 'react';

// const Counter = ({ end }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const duration = 3000; // Duration for the counter animation in ms
//     const startTime = performance.now();
//     const endValue = end;

//     const updateCount = (currentTime) => {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const newCount = Math.floor(progress * endValue);

//       setCount(newCount);

//       if (progress < 1) {
//         requestAnimationFrame(updateCount);
//       }
//     };

//     requestAnimationFrame(updateCount);
//   }, [end]);

//   return (
//     <div className="text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200">
//       <h2 className="text-4xl font-bold text-green-600 mb-2">{count}+</h2>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//     <div className="px-6 py-8 bg-gray-50 mx-10">
//       <div className="flex flex-wrap justify-center gap-6">
//         {/* Counter Column */}
//         <div className="w-full sm:w-1/2 md:w-1/6 text-center">
//           <Counter end={9} />
//           <p className="text-gray-700 mt-4 text-lg font-semibold">Year of Experience</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/6 text-center">
//           <Counter end={950} />
//           <p className="text-gray-700 mt-4 text-lg font-semibold">Happy Customers</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/6 text-center">
//           <Counter end={850} />
//           <p className="text-gray-700 mt-4 text-lg font-semibold">Projects Delivered</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/6 text-center">
//           <Counter end={100} />
//           <p className="text-gray-700 mt-4 text-lg font-semibold">Expertise</p>
//         </div>
//       </div>

//     </div>
    
//   );

// };

// export default Home;




import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className="text-center p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-purple-600 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {count}+
      </motion.h2>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="px-6 py-8 ">
      <div className="flex  flex-wrap justify-center gap-6">
        {/* Counter Column */}
        <div className="w-full  sm:w-1/2 md:w-1/6 text-center">
          <Counter end={9} />
          <p className="text-white  mt-4 text-lg font-semibold">Year of Experience</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 text-center">
          <Counter end={950} />
          <p className="text-white mt-4 text-lg font-semibold">Happy Customers</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 text-center">
          <Counter end={850} />
          <p className="text-white mt-4 text-lg font-semibold">Projects Delivered</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/6 text-center">
          <Counter end={100} />
          <p className="text-white mt-4 text-lg font-semibold">Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count < 100) {
      timer = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, 100)); // Increment count
      }, 50); // Adjust the speed of the counter
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <motion.div
      className="counter"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>{count}</h2>
    </motion.div>
  );
};

export default Counter;

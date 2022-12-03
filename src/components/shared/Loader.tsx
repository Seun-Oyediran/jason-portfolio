import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 5200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {active && (
        <motion.div
          className="app__loader__con d-flex justify-content-center align-items-center px-3"
          exit={{ x: '1000px' }}
        >
          <div className="loader" />
          <p>Loading</p>
        </motion.div>
      )}
    </div>
  );
};

export default Loader;

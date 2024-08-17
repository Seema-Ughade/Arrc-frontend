import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="flex items-center text-gray-500 font-semibold dark:text-white-dark">
      <motion.ol
        className="flex items-center gap-x-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        <motion.li
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            to="/"
            className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70"
          >
            <svg className="w-4 h-4 text-gray-500 dark:text-white-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.li>
        {pathnames.map((pathname, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <motion.li
              key={href}
              className={`flex items-center before:w-1 before:h-1 before:rounded-full before:bg-purple-600 before:inline-block before:relative before:-top-0.5 before:mx-4 ${isLast ? 'text-purple-600' : ''}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isLast ? (
                <span className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] text-purple-600">
                  <svg className="w-4 h-4 mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {pathname}
                </span>
              ) : (
                <Link
                  to={href}
                  className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70"
                >
                  <svg className="w-4 h-4 mr-2 text-gray-500 dark:text-white-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {pathname}
                </Link>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
};

export default Breadcrumbs;

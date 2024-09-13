import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logonew1 from '../assets/logonew1.png';

const Navbar = () => {
    const [showSolutions, setShowSolutions] = useState(false);
    const [showDigitalSolutions, setShowDigitalSolutions] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const handleSolutionsClick = () => {
        setShowSolutions(!showSolutions);
        if (showDigitalSolutions) setShowDigitalSolutions(false);
    };


    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setSidebarOpen(!sidebarOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setSidebarOpen(false);
        setShowSolutions(false);
        setShowDigitalSolutions(false);
    };

    const handleDigitalSolutionsClick = () => {
        setShowDigitalSolutions(!showDigitalSolutions);
        if (showSolutions) setShowSolutions(false);

    };

    return (
        <>
            {/* Top Bar */}
            {/* <div className={`bg-gray-900 py-2 ${sidebarOpen ? 'hidden' : 'block'} lg:block`}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center  space-x-2">
                            <a href="tel:7502211337" className="text-white hover:text-gray-300 ">
                                <i className="fa fa-phone"></i> +91-7502211337 / +91-9146677505
                            </a>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-400 text-sm">Call us for any question or concern</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                        <ul className="flex space-x-4">
                            <li><a href="mailto:info@Arrc Technology.com" className="text-white"><i className="fa fa-envelope"></i> info@Arrc Technology.com</a></li>
                            <li className='text-white'><i className="fa fa-map-marker-alt"></i> Katraj, Pune 411043</li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* Main Navbar */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white sticky top-0 z-50 ${sidebarOpen ? 'hidden' : 'block'} lg:block`}
            >
                <div className="bg-gray-950 text-white">
                    <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" onClick={handleLinkClick}>
                                <img src={logonew1} alt="Logo" className="h-12 object-contain" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="block lg:hidden px-4 py-2 rounded-md text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {/* Navbar Links */}
                        <div className="bg-gray-950 text-white">

                        <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                            <ul className="flex flex-col lg:flex-row lg:space-x-6">
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to="/home" className="hover:text-purple-700  px-4 py-2 rounded-md block text-center lg:text-left" onClick={handleLinkClick}>
                                        Home
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to="/about" className="hover:text-purple-700  px-4 py-2 rounded-md block text-center lg:text-left" onClick={handleLinkClick}>
                                        About Us
                                    </Link>
                                </motion.li>




                                <motion.li className="relative"
    whileHover={{ scale: 1.05 }}
>
    <button
        onClick={handleSolutionsClick}
        className="hover:text-purple-700 px-4 py-2 rounded-md block w-full text-center lg:text-left"
    >
        Software Solutions
        <i className={`fa ${showSolutions ? 'fa-times' : 'fa-plus'} ml-2 text-xxs`}></i>

    </button>
    {showSolutions && (
        <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute  text-white mt-2 shadow-lg w-48 lg:w-50 z-20"
        >
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="relative"
            >
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/website-development" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Website Development</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/app-development" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>App Development</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/software-development" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Software Development</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/ecommerce-solution" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>E-Commerce Solutions</Link>
                </motion.li>
            </motion.ul>
        </motion.ul>
    )}
</motion.li>

<motion.li className="relative"
    whileHover={{ scale: 1.05 }}
>
    <button
        onClick={handleDigitalSolutionsClick}
        className="hover:text-purple-700 px-4 py-2 rounded-md block w-full text-center lg:text-left"
    >
        Digital Marketing
        <i className={`fa ${showDigitalSolutions ? 'fa-times' : 'fa-plus'} ml-2  text-xxs`}></i>

    </button>
    {showDigitalSolutions && (
        <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute  text-white mt-2 shadow-lg w-48 lg:w-50 z-10"
        >
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, transition: { staggerChildren: 0.1 } },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="relative"
            >
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/seo-solution" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>SEO/SEM Solutions</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/digital-marketing" className="block px-4  py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Digital Marketing</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/digital-business-card" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Digital Business Card</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/digital-brochure" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Digital Brochure</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/bulk-sms-solutions" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>Bulk SMS Solutions</Link>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>
                    <Link to="/ivr-solutions" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-purple-700" onClick={handleLinkClick}>IVR Solutions</Link>
                </motion.li>
            </motion.ul>
        </motion.ul>
    )}
</motion.li>

                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to="/cyber-security" className="hover:text-purple-700  px-4 py-2 rounded-md block text-center lg:text-left" onClick={handleLinkClick}>
                                        Cyber Security
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to="/contact-us" className="hover:text-purple-700  px-4 py-2 rounded-md block text-center lg:text-left" onClick={handleLinkClick}>
                                        Contact Us
                                    </Link>
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to="/demo" className="hover:text-purple-700  px-4 py-2 rounded-md block text-center lg:text-left" onClick={handleLinkClick}>
                                        Demo
                                    </Link>
                                </motion.li>
                            </ul>
                        </nav>
                                            </div>
                    </div>
                </div>
            </motion.header>

            {/* Sidebar for Mobile */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: sidebarOpen ? '0%' : '100%' }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 bg-gray-900 bg-opacity-75 transition-transform transform lg:hidden z-40`}
            >
                <div className="relative w-64 bg-white h-full flex flex-col">
                    <button
                        className="absolute top-4 right-4 p-2"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="flex-shrink-0 p-4">
                        <img src={logonew1} alt="Logo" className="h-12 object-contain" />
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col">

                            {/* home */}
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/home" className="text-black  px-4 py-2 block" onClick={handleLinkClick}>Home</Link>
                            </motion.li>

                            {/* about */}
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/about" className="text-black  px-4 py-2 block" onClick={handleLinkClick}>About Us</Link>
                            </motion.li>

                            {/* software solutions */}
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <button
                                    onClick={handleSolutionsClick}
                                    className="text-black  px-4 py-2 block w-full text-left"
                                >
                                    Software Solutions
                                    
                                </button>
                                {showSolutions && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-200 text-black"
                                    >
                                        <li><Link to="/website-development" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Website Development</Link></li>
                                        <li><Link to="/app-development" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>App Development</Link></li>
                                        <li><Link to="/software-development" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Software Development</Link></li>
                                        <li><Link to="/ecommerce-solution" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>E-Commerce Solutions</Link></li>
                                    </motion.ul>
                                )}
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <button
                                    onClick={handleDigitalSolutionsClick}
                                    className="text-black  px-4 py-2 block w-full text-left"
                                >
                                    Digital Marketing
                                    
                                    </button>
                                {showDigitalSolutions && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-200 text-black"
                                    >
                                        <li><Link to="/seo-solution" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>SEO/SEM Solutions</Link></li>
                                        <li><Link to="/digital-marketing" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Digital Marketing</Link></li>
                                        <li><Link to="/digital-business-card" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Digital Business Card</Link></li>
                                        <li><Link to="/digital-brochure" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Digital Brochure</Link></li>

                                        <li><Link to="/bulk-sms-solutions" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>Bulk SMS Solutions</Link></li>
                                        <li><Link to="/ivr-solutions" className="block px-4 py-2 hover:bg-blue-600" onClick={handleLinkClick}>IVR Solutions</Link></li>
                                       
                                    </motion.ul>
                                )}
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >

                                <Link to="/cyber-security" className="text-black  px-4 py-2 block" onClick={handleLinkClick}>Cyber Security</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/contact-us" className="text-black  px-4 py-2 block" onClick={handleLinkClick}>Contact Us</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link to="/demo2" className="text-black  px-4 py-2 block" onClick={handleLinkClick}>Demo</Link>
                            </motion.li>

                        </ul>
                    </nav>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;

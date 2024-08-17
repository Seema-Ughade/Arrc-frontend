// Layout.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatalogDownload from './components/CatalogDownload';
import Chatbot from './components/Chatbot';

const Layout = ({ children }) => {
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    return (
        <>
            {!isDashboard && <Navbar />}
            {children}
            {!isDashboard && <Footer />}
            {!isDashboard && <CatalogDownload />}
            {!isDashboard && <Chatbot />}
        </>
    );
};

export default Layout;

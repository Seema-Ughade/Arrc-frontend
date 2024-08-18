// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
// import AboutSection from './components/AboutSection';
// import Services from './components/Services';
// import SoftwareSol from './components/SoftwareSol';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import MainLayout from './components/MainLayout';
// import SEOPage from './components/pages/SeoPages/SEOPage';
// import Webpage from './components/pages/ServicesPages/Webpage';
// import DigitalMr from './components/pages/ServicesPages/DigitalMr';
// import CyberSecPage from './components/CyberSecPage.jsx';
// import AppDev from './components/pages/ServicesPages/AppDev';
// import Contact from './components/Contact';
// import Softdev from './components/pages/ServicesPages/Softdev.jsx';
// import Internship from './components/Internship.jsx'
// import Ecommerce from './components/pages/ServicesPages/Ecommerce.jsx';
// import SmsSol from './components/pages/ServicesPages/SmsSol.jsx';
// import Service1 from './components/ServicePage/Service1.jsx';
// // import ParticleRing from './components/ParticleRing.jsx';
// import Chatbot from './components/Chatbot.jsx';
// import CatalogDownload from './components/CatalogDownload.jsx';
// import Demo from './components/pages/demo/Demo.jsx';
// // import Breadcrumbs from './Breadcrumbs.jsx';
// import DigitalBusinessCard from './components/pages/ServicesPages/DigitalBusinessCard.jsx'
// import IVRContent from './components/pages/ServicesPages/IVRContent.jsx'
// import DigitalBroucher from './components/pages/ServicesPages/DigitalBroucher.jsx'
// import InternshipCourse from './components/internship/InternshipCourse.jsx'
// import  from './components/internship/InternshipInfo.jsx'
// import Login from './admin/Login/Login.jsx'
// import Dashboard from './admin/Login/Dashboard.jsx';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <>
//         <Router>

//           <Navbar/>
//           {/* <Breadcrumbs/> */}

//                 {/* <ParticleRing /> */}

//           <Routes>
//             <Route path='/' element={<MainLayout/>}/>
            
//             <Route path='/home' element={<MainLayout/>}/>
//             <Route path='/about' element={<AboutSection/>}/>
//             <Route path='/services' element={<Services/>}/>
//             <Route path='/services1' element={<Service1/>}/>
//             <Route path='/contact-us' element={<Contact/>}/>

//             <Route path='/Chatbot' element={<Chatbot/>}/>
//             <Route path='/CatelogDownload' element={<CatalogDownload/>}/>


//             <Route path='/Software Solutions' element={<SoftwareSol/>}/>
//             <Route path='/seo-solution' element={<SEOPage/>}/>
//             <Route path='/website-development' element={<Webpage/>}/>


//             <Route path='/digital-marketing' element={<DigitalMr/>}/>
//             <Route path='/digital-business-card' element={<DigitalBusinessCard/>}/>

//             <Route path='/app-development' element={<AppDev/>}/>
//             <Route path='/ecommerce-solution' element={<Ecommerce/>}/>
//             <Route path='/bulk-sms-solutions' element={<SmsSol/>}/>
//             <Route path='/ivr-solutions' element={<IVRContent/>}/>
//             <Route path='/digital-brochure' element={<DigitalBroucher/>}/>
          
          
//             <Route path='/cyber-security' element={<CyberSecPage/>}/>
//             <Route path='/software-development' element={<Softdev/>}/>
//             <Route path='/internships' element={<Internship/>}/>
//             <Route path='/InternshipCourse' element={<InternshipCourse/>}/>
//             <Route path='/internshipInfo' element={<InternshipInfo/>}/>
//             <Route path='/Demo' element={<Demo/>}/>


//             {/* <Route path='/login' element={<Login/>}/>
//             <Route path='/dashboard' element={<Dashboard/>}/> */}

            
// <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />



          
//           </Routes>
//           <CatalogDownload/>

//           <Chatbot />
//           <Footer/>
//         </Router>
//     </>
//   );
// }

// export default App


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Contact from './components/Contact';
import SEOPage from './components/pages/SeoPages/SEOPage';
import Webpage from './components/pages/ServicesPages/Webpage';
import DigitalMr from './components/pages/ServicesPages/DigitalMr';
import AppDev from './components/pages/ServicesPages/AppDev';
import Ecommerce from './components/pages/ServicesPages/Ecommerce';
import SmsSol from './components/pages/ServicesPages/SmsSol';
import CyberSecPage from './components/CyberSecPage';
import Softdev from './components/pages/ServicesPages/Softdev';
import Internship from './components/Internship';
import InternshipCourse from './components/internship/InternshipCourse';
import InternshipInfo from './components/internship/InternshipInfo';
import Login from './admin/Login/Login';
import Dashboard from './admin/Login/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot'
import CatelogDownload from './components/CatalogDownload'
import SoftwareSol from './components/SoftwareSol'
import DigitalBroucher from './components/pages/ServicesPages/DigitalBroucher'
import IVRContent from './components/pages/ServicesPages/IVRContent'
import CourseSection from './admin/Course/CourseSection'
import CourseForm from './admin/Course/CourseForm'



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><MainLayout /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/home" element={<><Navbar /><MainLayout /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutSection /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/contact-us" element={<><Navbar /><Contact /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/seo-solution" element={<><Navbar /><SEOPage /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/Software Solutions" element={<><Navbar /><SoftwareSol /><Chatbot/><CatelogDownload/><Footer /></>} />




        <Route path="/website-development" element={<><Navbar /><Webpage /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/digital-marketing" element={<><Navbar /><DigitalMr /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/digital-business-card" element={<><Navbar /><DigitalBroucher /><Chatbot/><CatelogDownload/><Footer /></>} />

        <Route path="/app-development" element={<><Navbar /><AppDev /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/digital-brochure" element={<><Navbar /><AppDev /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/ecommerce-solution" element={<><Navbar /><Ecommerce /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/bulk-sms-solutions" element={<><Navbar /><SmsSol /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/ivr-solutions" element={<><Navbar /><IVRContent /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/cyber-security" element={<><Navbar /><CyberSecPage /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/software-development" element={<><Navbar /><Softdev /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/internships" element={<><Navbar /><Internship /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/InternshipCourse" element={<><Navbar /><InternshipCourse /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/internshipInfo" element={<><Navbar /><InternshipInfo /><Chatbot/><CatelogDownload/><Footer /></>} />
        <Route path="/courseInfo" element={<><Navbar /><CourseForm /><Chatbot/><CatelogDownload/><Footer /></>} />

        <Route path="/CourseSection" element={<><Navbar /><CourseSection /><Chatbot/><CatelogDownload/><Footer /></>} />

        {/* Login Route */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Route for Dashboard and Admin Pages */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Redirect to home if no matching route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

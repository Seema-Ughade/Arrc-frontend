import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Preloader.css'; // Import the CSS file
import serviceimage1 from '../../../assets/serviceimage1.jpg';
import serviceimage2 from '../../../assets/serviceimage2.jpg';
import serviceimage3 from '../../../assets/serviceimage3.jpg';
import serviceimage4 from '../../../assets/serviceimage4.jpg';
import serviceimage5 from '../../../assets/serviceimage5.jpg';

const Demo = () => {
  const [clickedItem, setClickedItem] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (itemId, href) => {
    setClickedItem((prevState) => (prevState === itemId ? null : itemId));

    // Delay navigation to show the content first
    setTimeout(() => {
      navigate(href);
    }); // Adjust the delay as needed
  };

  const items = [
    { id: '1', href: '/website-development', src: serviceimage1, alt: 'Website Development', title: 'Website Development', content: 'Detailed information about Website Development.' },
    { id: '2', href: '/app-development', src: serviceimage2, alt: 'App Development', title: 'App Development', content: 'Detailed information about App Development.' },
    { id: '3', href: '/software-development', src: serviceimage3, alt: 'Software Development', title: 'Software Development', content: 'Detailed information about Software Development.' },
    { id: '4', href: '/digital-marketing', src: serviceimage4, alt: 'Digital Marketing', title: 'Digital Marketing', content: 'Detailed information about Digital Marketing.' },
    { id: '5', href: '/ecommerce-solution', src: serviceimage5, alt: 'E-Commerce Solution', title: 'E-Commerce Solution', content: 'Detailed information about E-Commerce Solution.' },
    { id: '6', href: '/seo-solution', src: serviceimage1, alt: 'Website Development', title: 'Seo Solution', content: 'Detailed information about Website Development.' },
    { id: '7', href: '/ivr-solutions', src: serviceimage2, alt: 'App Development', title: 'IVR Solutions', content: 'Detailed information about App Development.' },
    { id: '8', href: '/cyber-security', src: serviceimage3, alt: 'Software Development', title: 'Software Development', content: 'Detailed information about Software Development.' },
    { id: '9', href: '/digital-business-card', src: serviceimage4, alt: 'Digital Marketing', title: 'Digital Business Card', content: 'Detailed information about Digital Marketing.' },
    { id: '10', href: '/bulk-sms-solutions', src: serviceimage5, alt: 'E-Commerce Solution', title: 'Bulk Sms Solutions', content: 'Detailed information about E-Commerce Solution.' },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...items, ...items].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="nofollow"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              handleClick(item.id, item.href); // Pass the href to handleClick
            }}
          >
            <img
              loading="lazy"
              decoding="async"
              src={item.src}
              alt={item.alt}
            />
            <div className="wdt-content-title">
              <h5>{item.title}</h5>
            </div>
            {clickedItem === item.id && (
              <div className="wdt-content-description">
                <p>{item.content}</p>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Demo;

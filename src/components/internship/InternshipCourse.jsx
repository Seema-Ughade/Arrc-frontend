import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaStar } from 'react-icons/fa';

// InternshipCard Component
const InternshipCard = ({ title, overview, details, popular }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApplyClick = () => {
    // Navigate to the /internshipInfo page with state to pass the selected internship details
    navigate('/internshipInfo', { state: { title, overview, details } });
  };

  return (
    <div className="border-2 bg-gray-900 border-[#d4deff] rounded-lg p-[45px] px-[30px] text-center shadow-lg mb-10 relative animate-fadeInUp box-border">
      {popular && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
          POPULAR
        </span>
      )}
      <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-gradient bg-clip-text   text-purple-600 text-center hover:text-white transition-colors duration-300"
                  >{title}</h3>
      <p className="mb-4">{overview}</p>
      <div className="ud-internship-body mb-4">
        <ul className="list-none p-0 m-0">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
      <button
                  className="inline-block  bg-purple-600 hover:bg-gray-500   text-white hover:bg-gradient-to-l  rounded-xl w-[50%] px-3 py-1.5 text-center mt-4 transition-all duration-300"
                  onClick={handleApplyClick} // Add click event handler
      >
        Apply Now
      </button>
    </div>
  );
};

// InternshipCourse Component
const InternshipCourse = () => {
  const internships = [
    {
      title: 'Software Development Internship',
      overview: 'Overview',
      details: ['Life Cycle', 'CLI Apps', 'GUI Apps', 'Web Scraping'],
    },
    {
      title: 'Web Dev Internship',
      overview: 'Overview',
      details: ['HTML5 & CSS3', 'Javascript', 'Responsive Website', 'Web Applications'],
      popular: true,
    },
    {
      title: 'Android Development Internship',
      overview: 'Overview',
      details: ['Kotlin/Flutter/React Native', 'Simple Apps', 'Advanced Apps', 'Cloud Apps'],
    },
    {
      title: 'Machine Learning Internship',
      overview: 'Overview',
      details: ['Data Analysis', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning'],
    },
    {
      title: 'Data Science Internship',
      overview: 'Overview',
      details: ['EDA', 'Data Pre-processing', 'Data Visualization', 'BI Tools'],
      popular: true,
    },
    {
      title: 'Cyber Security Internship',
      overview: 'Overview',
      details: ['Caesar Cipher', 'Pixel Manipulation', 'Password Complexity', 'Keyloggers', 'Network Packet Analysis'],
    },
  ];

  return (
    <div className="p-6 md:p-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="ud-section-title mx-auto">
            <span
                  className="text-lg sm:text-xl lg:text-4xl  font-bold mt-4 text-gradient bg-clip-text   text-purple-600 text-center hover:text-white transition-colors duration-300"
                  >Internships</span>
            <h2 className="text-xl font-bold mt-2 mb-2">Our Internships</h2>
            <p className="font-semibold mb-2 block">
              Our internships offer hands-on experience in various fields, including Web Development, Machine Learning, Data Science, and more. Interns will work on real-world projects, collaborate with industry experts, and gain valuable insights into their respective fields.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              overview={internship.overview}
              details={internship.details}
              popular={internship.popular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipCourse;

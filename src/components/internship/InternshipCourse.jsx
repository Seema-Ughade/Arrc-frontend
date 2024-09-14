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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="border-2 bg-gray-900 h-[420px]  border-[#d4deff] rounded-lg p-[45px] px-[30px] text-center shadow-lg mb-10 relative animate-fadeInUp box-border">
      {popular && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
          POPULAR
        </span>
      )}
      <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-gradient bg-clip-text h-[70px]  text-purple-600 text-center hover:text-white transition-colors duration-300"
                  >{title}</h3>
      {/* <p className="mb-4 h-[40px]">{overview}</p> */}
      <p className="mb-2  h-[50px] box-border text-ellipsis overflow-hidden line-clamp-2">
  {overview}
</p>

      <div className="ud-internship-body box-border h-[100px] mb-4">
        <ul className="list-none p-0 m-0">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
      {/* <button
                  className="inline-block  bg-purple-600 hover:bg-gray-500   text-white hover:bg-gradient-to-l  rounded-xl w-[50%] px-3 py-1.5 text-center mt-4 transition-all duration-300"
                  onClick={handleApplyClick} // Add click event handler
      >
        Apply Now
      </button> */}
         <button
 onClick={() => {
  handleApplyClick();
  scrollToTop();
}}

className="inline-block bg-gradient-to-r box-border h-[35px] from-purple-500 via-blue-600 to-black hover:from-black hover:via-blue-600 hover:to-purple-500 rounded-xl w-[60%] px-3 py-1.5 text-white text-center mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(173, 216, 230, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
              }}
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
      overview: 'This internship offers a comprehensive introduction to software development, focusing on various stages of the software lifecycle. Interns will gain experience building command-line and graphical user interface applications, along with web scraping techniques.',
      details: ['Software Development Life Cycle (SDLC)', 'Command-Line Interface (CLI) Applications', 'Graphical User Interface (GUI) Applications', 'Web Scraping'],
    },
    {
      title: 'Web Dev Internship',
      overview: 'A practical internship designed to provide hands-on experience in building and deploying websites. Interns will learn how to create responsive and dynamic web applications using the latest front-end technologies.',
      details: ['HTML5 & CSS3', 'JavaScript Programming', 'Responsive Website Design', 'Full-Stack Web Applications'],
      popular: true,
    },
    {
      title: 'Android Development Internship',
      overview: 'This internship focuses on Android app development using popular frameworks such as Kotlin, Flutter, or React Native. Interns will start with simple apps and advance to more complex cloud-based applications.',
      details: ['Kotlin, Flutter, or React Native', 'Developing Simple Mobile Applications', 'Advanced Mobile Applications', 'Cloud-Based Mobile Apps'],
    },
    {
      title: 'Machine Learning Internship',
      overview: 'Interns will explore various machine learning concepts, from data analysis to deep learning. This internship covers essential algorithms and techniques used in supervised, unsupervised, and deep learning applications.',
      details: ['Data Analysis and Preprocessing', 'Supervised Learning Algorithms', 'Unsupervised Learning Algorithms', 'Deep Learning and Neural Networks'],
    },
    {
      title: 'Data Science Internship',
      overview: 'This internship dives into the world of data science, focusing on exploratory data analysis (EDA), data visualization, and using business intelligence (BI) tools for real-world data-driven decision-making.',
      details: ['Exploratory Data Analysis (EDA)', 'Data Preprocessing Techniques', 'Data Visualization Tools and Techniques', 'Business Intelligence (BI) Tools'],
      popular: true,
    },
    {
      title: 'Cyber Security Internship',
      overview: 'This internship provides insights into cybersecurity fundamentals, focusing on encryption techniques, password security, and network packet analysis. Interns will engage in hands-on projects to strengthen their understanding of data protection and network security.',
      details: ['Caesar Cipher and Basic Encryption Techniques', 'Pixel Manipulation for Security', 'Password Complexity and Strength', 'Network Packet Analysis'],
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

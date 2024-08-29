import React, { useState } from 'react';
import InternshipImage from '../assets/InternshipImage.jpg'
import { FaCertificate, FaNetworkWired, FaHands, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import bgnew from '../assets/bgnew.jpg'; // Import your background image here
import InternshipCourse from './internship/InternshipCourse';


// Main Demo2 Component
const Internship = () => {
  // AboutUs Component
  const AboutUs = () => (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-6 md:p-20 lg:p-28 text-white">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0">
        <span className="text-purple-600 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 block">About Us</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Transforming the Way People Learn</h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Our mission is to create innovative and accessible learning solutions that empower people of all ages and backgrounds to achieve their full potential. Whether you're a student looking to improve your grades, a professional seeking to upskill, or an organization looking to enhance employee training, we have the tools and resources you need to succeed.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          If you're looking for an innovative and dynamic learning experience that will help you achieve your goals and unlock your full potential, we invite you to join us on this exciting journey. Together, we can transform the way we learn and create a better future for all.
        </p>
      </div>
  
      {/* Right Section - Image */}
      <div className="md:w-1/2 w-full flex justify-center lg:h-96 md:justify-center">
        <img src={InternshipImage} alt="About Us" className="w-full md:w-auto max-w-md  rounded-lg shadow-lg object-cover h-full" />
      </div>
    </div>
  );
        
  // InternshipCard Component
  const InternshipCard = ({ title, overview, details, popular }) => (
    <div className=" border-2 bg-gray-900 border-[#d4deff] rounded-lg p-[45px] px-[30px] text-center shadow-lg mb-10 relative animate-fadeInUp box-border">
      {popular && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
          POPULAR
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{overview}</p>
      <div className="ud-internship-body mb-4">
        <ul className="list-none p-0 m-0">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Apply Now</button>
    </div>
    );

  // Internships Component
  const Internships = () => {
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
<div className=" text-white">
      <div className="container mx-auto">
        <div className="text-center ">
          {/* <div className="ud-section-title mx-auto">
            <span className="text-purple-600 text-5xl font-semibold mb-3 block">Internships</span>
            <h2 className="text-2xl font-bold mb-2">Our Internships</h2>
            <p className='font-semibold mb-2 block'>
              Our internships offer hands-on experience in various fields, including Web Development, Machine Learning, Data Science, and more. Interns will work on real-world projects, collaborate with industry experts, and gain valuable insights into their respective fields.
            </p>
          </div> */}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              overview={internship.overview}
              details={internship.details}
              popular={internship.popular}
            />
          ))}
        </div> */}
         <div className="div">
        <InternshipCourse />
      </div>
      </div>
    </div>
  );
};

  // Features Component
  const Features = () => {
    const features = [
      {
        title: 'Verified Certificates',
        description: 'Get Verified Certificates to prove your hard work!',
        icon: <FaCertificate className="text-4xl text-blue-500" />,
      },
      {
        title: 'Networking',
        description: 'Tap into our network and increase your chances of placements.',
        icon: <FaNetworkWired className="text-4xl text-green-500" />,
      },
      {
        title: 'Hands-on Experience',
        description: 'Gain practical experience by working on real-world projects.',
        icon: <FaHands className="text-4xl text-yellow-500" />,
      },
      {
        title: 'High Quality Content',
        description: 'Great Content to prepare students for their future careers.',
        icon: <FaStar className="text-4xl text-purple-500" />,
      },
    ];
  
    return (
<div className="p-6 md:p-12 ">
    <h2 className="text-4xl font-bold text-purple-600 text-center mb-8">Features of our Internships</h2>
    <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
            <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4 text-center"
            >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl text-purple-600 font-bold mb-2">{feature.title}</h3>
                <p className='text-white'>{feature.description}</p>
            </div>
        ))}
    </div>
</div>
    );
  };
    
  
  // FAQ Component
  const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const faqs = [
      {
        question: 'What is the duration of Internship?',
        answer: 'The duration varies depending on the internship program. Please check the specific program details for more information.',
      },
      {
        question: 'Can I complete multiple tracks together?',
        answer: 'Yes, you can apply for multiple tracks. However, you need to manage your time effectively to complete all requirements.',
      },
      {
        question: 'Is there any fees for the internship?',
        answer: 'Some internships may have fees associated with them. Please refer to the specific internship program details for accurate information.',
      },
      {
        question: 'When will I receive the Offer Letter?',
        answer: 'You will receive the offer letter once your application is reviewed and accepted. This typically happens within a few weeks of your application submission.',
      },
      {
        question: 'How to submit Tasks?',
        answer: 'Tasks are usually submitted through our online portal. Instructions for submission will be provided during the internship.',
      },
      {
        question: 'What is the criteria for selection?',
        answer: 'Determination to learn and grow is all what is needed.',
      },
      {
        question: 'When does the internships start?',
        answer: 'Internships typically start at specific times throughout the year. Check the internship program for exact dates.',
      },
      {
        question: 'Is the internship Offline or Online?',
        answer: 'Internships can be either offline or online. Details will be provided in the internship program description.',
      },
      {
        question: 'CIN is showing Invalid',
        answer: 'If your CIN is showing as invalid, please contact our support team for assistance.',
      },
      {
        question: 'When will I get the Certificate?',
        answer: 'Certificates are usually issued upon successful completion of the internship. You will receive details on how to obtain your certificate.',
      },
    ];
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    // Split FAQs into two sections
    const half = Math.ceil(faqs.length / 2);
    const firstHalf = faqs.slice(0, half);
    const secondHalf = faqs.slice(half);
  
    return (
      <div className="p-6 md:p-12 ">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">Any Questions? Answered</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            {firstHalf.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg mb-4">
                <button
                  className="flex items-center justify-between w-full p-6 text-left text-xl font-bold focus:outline-none"
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className='text-purple-600'>{faq.question}</span>
                  <span className="flex-shrink-0">
                    {activeIndex === index ? <FaChevronUp className="text-purple-600" /> : <FaChevronDown className="text-purple-600" />}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-6 text-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            {secondHalf.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg mb-4">
                <button
                  className="flex items-center justify-between w-full p-6 text-left text-xl font-bold focus:outline-none"
                  onClick={() => handleToggle(index + half)} // Adjust index for the second half
                  aria-expanded={activeIndex === index + half}
                >
                  <span className='text-purple-600'>{faq.question}</span>
                  <span className="flex-shrink-0">
                    {activeIndex === index + half ? <FaChevronUp className="text-purple-600" /> : <FaChevronDown className="text-purple-600" />}
                  </span>
                </button>
                {activeIndex === index + half && (
                  <div className="p-6 text-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  // ContactUs Component
  const ContactUs = () => (
    <div className="p-6 md:p-12 ">
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Contact Details */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Let’s Talk About</h2>
          <p className="mb-4 text-white">We'd love to hear from you!</p>
          <h3 className="text-xl font-bold text-purple-600 mb-2">Our Location</h3>
          <p className="mb-4 text-white"> Unit No.401, 5thFloor, Ideal Square, Ideal Colony, Sr.no. 129, Kothrud, Pune-38</p>
          <h3 className="text-xl font-bold text-purple-600 mb-2">How Can We Help?</h3>
          <p className="text-blue-600  text-xl">arrctechnology15@gmail.com</p>
        </div>
  
        {/* Right Section - Contact Form */}
        <div className="md:w-1/2">
          <h2 className="text-3xl text-purple-600 font-bold mb-4">Send Us a Message</h2>
          <form className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
            <div className="mb-4">
              <label htmlFor="fullName" className="   text-purple-600">Full Name*</label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="mt-1 p-2 block w-full border border-purple-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className=" text-purple-600">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="example@yourmail.com"
                className="mt-1 p-2 block w-full border border-purple-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className=" text-purple-600">Phone*</label>
              <input
                type="tel"
                id="phone"
                placeholder="XXXXXXXXXX"
                className="mt-1 p-2 block w-full border border-purple-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className=" text-purple-600">Message*</label>
              <textarea
                id="message"
                placeholder="Type your message here"
                rows="4"
                className="mt-1 p-2 block w-full border border-purple-300 rounded-md shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
 
  
  return (
    <div 
      style={{
        backgroundImage: `url(${bgnew})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <AboutUs />
      <Internships />
      <Features />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default Internship;

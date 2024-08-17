import React from 'react';
import cybersecbg from '../assets/cybersecbg.jpg'; // Adjust the path as necessary

const CyberSecPage = () => {
  return (
    <div className="container mx-auto p-6  text-white">
      {/* Full Width Background Image Section */}
      <div className="relative w-full h-[40vh] mb-12">
        <img 
          src={cybersecbg} 
          alt="Cyber Security Background" 
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center mb-12 px-4 lg:px-0">
        <div className="w-full lg:w-3/4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 leading-tight antialiased transition-colors duration-500 hover:text-[#4A5568]">
        We Secure Your Enterprise & Web Site
          </h1>
          <p className="text-lg mb-6 leading-relaxed font-normal text-gray-300 antialiased transition-opacity duration-500 hover:opacity-90">
            Bizzfly is an IT security company based in Pune, our single focus is in making sure you have the best and most appropriate security infrastructure available to support your informational requirements. We have proven records of success in doing this for a wide range of organizations with unique capabilities that set us apart from other technology firms.
          </p>
          <p className="text-lg mb-6 leading-relaxed font-normal text-gray-300 antialiased transition-opacity duration-500 hover:opacity-90">
            We here at Bizzfly prioritize providing quality solutions with the highest priority for protecting our client’s interests. We orient our solutions towards providing cost-effective security balanced with quality standards. We started as cyber forensic investigators by consulting law enforcement and handling individuals involved unknowingly in cybercrime and lost finances. Today, Bizzfly, as a team, provides various solutions such as network security, vulnerability assessment and penetration testing, ISMS policy and audit, cyber forensics, cloud computing, data recovery, threat intelligence and detection, and email security.
          </p>
          <p className="text-lg mb-6 leading-relaxed font-normal text-gray-300 antialiased transition-opacity duration-500 hover:opacity-90">
            We have a team for cybercrime, cyberattacks, and cyber awareness. Contact us for any cyber questions, queries, inquiries, or consultations. We provide a FIRST FREE CONSULTATION, so don’t worry; we understand your privacy is important.
          </p>
          <p className="text-lg font-semibold text-gray-100 leading-relaxed antialiased">
            We secure enterprises & companies. We are here to secure your company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecPage;

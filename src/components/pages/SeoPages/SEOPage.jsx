// import React from 'react';
// import seo from '../../../assets/seo.jpg';
// import seobg from '../../../assets/seobg.jpg';

// const SEOPage = () => {
//     return (
//         <div className="container mx-auto p-6">
//             {/* Full Width Image with 1/4 Height */}
//             <div className="relative w-full h-[35vh] mb-12">
//                 <img 
//                     src={seobg} 
//                     alt="SEO Services" 
//                     className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" 
//                 />
//             </div>

//             {/* First Section: Text Content Below Image */}
//             <div className="flex flex-col items-center mb-12 px-4 lg:px-0">
//                 <div className="w-full lg:w-3/4 text-center">
//                     <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2D3748] leading-[1.3] antialiased transition-colors duration-500 hover:text-[#4A5568]">
//                         Best SEO Services for Optimal Results
//                     </h1>
//                     <p className="text-lg mb-4 leading-[1.7] font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80">
//                         Using search engines as a channel for increasing happy customers, our aim is to give your website a good position in popular search engine results page lists.
//                     </p>
//                     <p className="text-lg mb-4 leading-[1.7] font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80">
//                         Search Engines are the most effective way to get your website noticed by potential customers. Arrc Technology provides the best organic SEO services in Pune at affordable prices. We are Fastest Growing and Most Awarded Full-Service SEO Company.
//                     </p>
//                     <p className="text-lg mb-4 leading-[1.7] font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80">
//                         We offer guaranteed SEO services. Complete Website Analysis. We, with an in-depth review of your site, find out weaknesses & strengths and discover why the site is not fulfilling peak efficiency. We deliver results for companies around the world so if you want Profit by Search Pune’s no 1 SEO Firm to help with your big plans then we would love to chat about Pune’s Premium SEO Services Offering.
//                     </p>
//                 </div>
//             </div>

//             {/* Second Section: Image on the Left, Text on the Right */}
//             <div className="flex flex-col lg:flex-row items-center mb-12 px-4 lg:px-0">
//                 <div className="lg:w-1/2 w-full lg:pl-6 lg:text-left mb-6 lg:mb-0 animate__animated animate__fadeIn animate__delay-1s">
//                     <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2D3748] leading-[1.4] antialiased transition-colors duration-500 hover:text-[#4A5568]">
//                         Why Companies Should Invest in SEO
//                     </h2>
//                     <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                         Companies that seek to expand their online presence to the growing population of customers should invest in SEO. It is an effective way to engage with customers and grow business revenue, SEO strategies are crucial in helping boost their brand.
//                     </p>
//                     <ul className="list-disc list-inside pl-6 mb-4 text-[#4C4C4D] leading-[1.7] font-normal antialiased">
//                         <li className="mb-2">Higher Brand Credibility</li>
//                         <li className="mb-2">Take Business To The Next Level</li>
//                         <li className="mb-2">Definite Increase in Quality Traffic</li>
//                         <li className="mb-2">Impressive Marketing Return on Investment</li>
//                         <li className="mb-2">Increase Visibility</li>
//                         <li className="mb-2">Achieve Higher Conversion Rates</li>
//                         <li className="mb-2">Build Brand Awareness Through Better Rankings</li>
//                         <li className="mb-2">Google Analytics for Better Consumer Insight</li>
//                     </ul>
//                 </div>
//                 <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:order-last animate__animated animate__fadeIn animate__delay-2s">
//                     <img 
//                         src={seo} 
//                         alt="SEO Services" 
//                         className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" 
//                     />
//                 </div>
//             </div>

//             {/* Third Section: Full Width */}
//             <div className="bg-white p-6 mx-4 lg:mx-0 shadow-md text-center animate__animated animate__fadeIn animate__delay-3s">
//                 <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#2D3748] leading-[1.4] antialiased transition-colors duration-500 hover:text-[#4A5568]">
//                     Search Engine Marketing (SEM)
//                 </h2>
//                 <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                     Search Engine has become an integral part of every internet user’s life, an online support system guiding most of their search activities. This has made availing search engine marketing services a necessary step in the road to increasing online visibility and overall ‘search-ability’ in search engine results page.
//                 </p>
//                 <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                     Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising.
//                 </p>
//                 <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                     SEM uses paid advertising with AdWords or Bing Ads, pay per click (particularly beneficial for local providers as it enables potential consumers to contact a company directly with one click).
//                 </p>
//                 <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                     A keyword analysis is performed for both SEO and SEM, but not necessarily at the same time. SEM and SEO both need to be monitored and updated frequently to reflect evolving best practices.
//                 </p>
//                 <p className="text-lg mb-4 leading-[1.7] text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80">
//                     Arrc Technology is a fastest growing Search Engine Marketing Agency in Pune which mainly focuses on providing the best quality SEM services to the clients. Our mission at Arrc Technology is to bloom as an eminent SEM agency in Pune, in this vastly spreading era of digital marketing by delivering the best quality Search Engine Marketing Services to our clients and maintain our reputation by making a balance between guaranteed results and client satisfaction.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default SEOPage;


import React from 'react';
import { motion } from 'framer-motion';
import Seoiamge from '../../../assets/Seoiamge.jpeg';
import seoiamge from '../../../assets/seoiamge.jpg';

const SEOPage = () => {
    return (
        <div className="container mx-auto p-6  text-white">
            {/* Full Width Image with 1/4 Height */}
            <motion.div
        className="relative w-full h-64 sm:h-80 md:h-[40vh] mb-8 lg:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        data-aos="fade-up"
      >
        <img
          src={seoiamge}bgiamgenewone
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
          Best SEO Services for Optimal Results
          </h1>
        </div>
      </motion.div>

            {/* First Section: Text Content Below Image */}
            <div className="flex flex-col items-center mb-12 px-4 lg:px-0">
                <div className="w-full lg:w-3/4 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 leading-tight antialiased transition-colors duration-500 hover:text-[#4A5568]"
                    >
                        Best SEO Services for Optimal Results
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80"
                    >
                        Using search engines as a channel for increasing happy customers, our aim is to give your website a good position in popular search engine results page lists.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80"
                    >
                        Search Engines are the most effective way to get your website noticed by potential customers. Arrc Technology provides the best organic SEO services in Pune at affordable prices. We are Fastest Growing and Most Awarded Full-Service SEO Company.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed font-normal text-[#4C4C4D] antialiased transition-opacity duration-500 hover:opacity-80"
                    >
                        We offer guaranteed SEO services. Complete Website Analysis. We, with an in-depth review of your site, find out weaknesses & strengths and discover why the site is not fulfilling peak efficiency. We deliver results for companies around the world so if you want Profit by Search Pune’s no 1 SEO Firm to help with your big plans then we would love to chat about Pune’s Premium SEO Services Offering.
                    </motion.p>
                </div>
            </div>

            {/* Second Section: Image on the Left, Text on the Right */}
            <div className="flex flex-col lg:flex-row items-center mb-8 px-4 lg:px-0">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2 w-full lg:pl-6 lg:text-left mb-6 lg:mb-0"
                >
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 leading-tight antialiased transition-colors duration-500 hover:text-[#4A5568]">
                        Why Companies Should Invest in SEO
                    </h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                    >
                        Companies that seek to expand their online presence to the growing population of customers should invest in SEO. It is an effective way to engage with customers and grow business revenue, SEO strategies are crucial in helping boost their brand.
                    </motion.p>
                    <motion.ul 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="list-disc list-inside pl-6 mb-4 text-[#4C4C4D] leading-relaxed font-normal antialiased"
                    >
                        <li className="mb-2">Higher Brand Credibility</li>
                        <li className="mb-2">Take Business To The Next Level</li>
                        <li className="mb-2">Definite Increase in Quality Traffic</li>
                        <li className="mb-2">Impressive Marketing Return on Investment</li>
                        <li className="mb-2">Increase Visibility</li>
                        <li className="mb-2">Achieve Higher Conversion Rates</li>
                        <li className="mb-2">Build Brand Awareness Through Better Rankings</li>
                        <li className="mb-2">Google Analytics for Better Consumer Insight</li>
                    </motion.ul>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 0 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2 w-full mb-2 lg:mb-0 lg:order-last"
                >
                    <img 
                        src={Seoiamge} 
                        alt="SEO Services" 
                        className="w-[95%] h-[75%] lg:ml-10 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105" 
                    />
                </motion.div>
            </div>

            {/* Third Section: Full Width */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black p-6 mx-4 lg:mx-0 shadow-md text-center"
            >
                       <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 leading-tight antialiased transition-colors duration-500 hover:text-[#4A5568]">
                        Search Engine Marketing (SEM)
                </h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                >
                    Search Engine has become an integral part of every internet user’s life, an online support system guiding most of their search activities. This has made availing search engine marketing services a necessary step in the road to increasing online visibility and overall ‘search-ability’ in search engine results page.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                >
                    Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                >
                    SEM uses paid advertising with AdWords or Bing Ads, pay per click (particularly beneficial for local providers as it enables potential consumers to contact a company directly with one click).
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                >
                    A keyword analysis is performed for both SEO and SEM, but not necessarily at the same time. SEM and SEO both need to be monitored and updated frequently to reflect evolving best practices.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed text-[#4C4C4D] font-normal antialiased transition-opacity duration-500 hover:opacity-80"
                >
                    Arrc Technology is a fastest growing Search Engine Marketing Agency in Pune which mainly focuses on providing the best quality SEM services to the clients. Our mission at Arrc Technology is to bloom as an eminent SEM agency in Pune, in this vastly spreading era of digital marketing by delivering the best quality Search Engine Marketing Services to our clients and maintain our reputation by making a balance between guaranteed results and client satisfaction.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default SEOPage;

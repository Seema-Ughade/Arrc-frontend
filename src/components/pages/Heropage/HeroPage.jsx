// // import React from 'react';
// // import runningrobo from '../../../assets/runningrobo.jpg';
// // import Artiamge from '../../../assets/Artiamge.jpg';
// // import besecondiamge from '../../../assets/besecondiamge.jpg';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import './HeroPage.css';
// // function HeroPage() {
// //   return (
// //     <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="carousel">
// //       <div className="carousel-indicators">
// //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
// //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
// //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
// //       </div>
// //       <div className="carousel-inner">
// //         <div className="relative">
// //           <div className="carousel-item active">
// //             <img src={Artiamge} className="d-block h-[100vh] w-full object-cover" alt="Hero Image 1" />
// //             <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
// //               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
// //                 <span className="relative block">
// //                   ARCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
// //                 </span>
// //               </div>
// //               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
// //                 "AI and automation are transforming industries,<br /> driving efficiency, and opening up<br /> new possibilities for creativity and innovation in ways we never imagined."
// //               </h2>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="carousel-item">
// //           <img src={besecondiamge} className="d-block h-[100vh] w-100" alt="Hero Image 2" />
// //           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
// //               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
// //                 <span className="relative  block">
// //                   ARCC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
// //                 </span>
// //               </div>
// //               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
// //               "Empowering the future with AI and automation,<br /> we are revolutionizing industries, enhancing productivity,<br /> and unlocking unprecedented potential for innovation."</h2>
// //             </div>
// //         </div>
// //         <div className="carousel-item">
// //           <img src={runningrobo} className="d-block h-[100vh] w-100" alt="Hero Image 3" />
// //           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
// //               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
// //                 <span className="relative  block">
// //                   ARCC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
// //                 </span>
// //               </div>
// //               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
// //               "Redefining what's possible with AI and automation,<br /> we are pioneering a new era of innovation,<br /> where technology meets limitless potential."
// //               </h2>
// //             </div>
// //         </div>
// //       </div>
// //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
// //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Previous</span>
// //       </button>
// //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
// //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //         <span className="visually-hidden">Next</span>
// //       </button>
// //     </div>
// //   );
// // }

// // export default HeroPage;


//correct below==========================================================

// import React from 'react';
// import runningrobo from '../../../assets/runningrobo.jpg';
// import Artiamge from '../../../assets/Artiamge.jpg';
// import besecondiamge from '../../../assets/besecondiamge.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './HeroPage.css';
// function HeroPage() {
//   return (
//     <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="relative">
//           <div className="carousel-item active">
//             {/* <img src={Artiamge} className="d-block h-[100vh] w-full object-cover" alt="Hero Image 1" /> */}
//             <img src={Artiamge} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 1" />

//             <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative block">
//                   ARRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[4vw]  md:text-[2.5vw] lg:text-[30px]">
//                 "AI and automation are transforming industries,<br /> driving efficiency, and opening up<br /> new possibilities for creativity and innovation in ways we never imagined."
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           {/* <img src={besecondiamge} className="d-block h-[100vh] w-100" alt="Hero Image 2" /> */}
//           <img src={besecondiamge} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 2" />

//           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative  text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative  block">
//                   ARRC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[3.7vw] md:text-[2.5vw] lg:text-[30px]">
//               "Empowering the future with AI and automation,<br /> we are revolutionizing industries, enhancing productivity,<br /> and unlocking unprecedented potential for innovation."</h2>
//             </div>
//         </div>
//         <div className="carousel-item">
//           {/* <img src={runningrobo} className="d-block h-[100vh] w-100" alt="Hero Image 3" /> */}
//           <img src={runningrobo} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 3" />

//           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative  block">
//                   ARRC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[4vw] md:text-[2.5vw] lg:text-[30px]">
//               "Redefining what's possible with AI and automation,<br /> we are pioneering a new era of innovation,<br /> where technology meets limitless potential."
//               </h2>
//             </div>
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default HeroPage;
























import React, { useState, useEffect } from 'react';
import runningrobo from '../../../assets/runningrobo.jpg';
import Artiamge from '../../../assets/Artiamge.jpg';
import besecondiamge from '../../../assets/besecondiamge.jpg';
import './HeroPage.css';

function HeroPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      img: Artiamge,
      alt: 'Hero Image 1',
      title: ' TECHNOLOGY',
      description: `            
      "AI and automation are transforming industries,<br />  and opening up new possibilities for creativity and innovation in ways we never imagined."`,
    },
//     {
//       img: besecondiamge,
//       alt: 'Hero Image 2',
//       title: ' TECHNOLOGY',
//       description: 
// `  "Empowering the future with AI and automation,<br /> we are revolutionizing industries, enhancing productivity,<br /> and unlocking unprecedented potential for innovation."</h2>
// `    },
    {
      img: runningrobo,
      alt: 'Hero Image 3',
      title: ' TECHNOLOGY',
      description: 
`"Redefining what's possible with AI and automation,<br /> we are pioneering a new era of innovation,<br /> where technology meets limitless potential."
`    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div id="carouselExampleCaptions" className="relative">
      {/* Carousel Indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto mb-4 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-lg ${index === activeIndex ? 'bg-gray-400 opacity-100' : 'bg-gray-400 opacity-50'} transition-opacity duration-300`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      {/* <div className="relative w-full overflow-hidden sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1245px] xl-max:max-w-[1440px] 2xl:max-w-[1536px]"> */}
      <div className="relative w-full overflow-hidden sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px] xl-max:max-w-[1600px] 2xl:max-w-[1800px]">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
          >
            <img src={slide.img} className="block w-full h-[50vh] md:h-[75vh] lg:h-[100vh] object-cover" alt={slide.alt} />
            <div className="absolute top-1/3 left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
              <h2 className="text-[3vw] md:text-[6vw] lg:text-[60px] font-bold">
                ARRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">{slide.title}</span>
              </h2>
              {/* <p className="text-[4vw] md:text-[2.5vw] lg:text-[30px]">
                {slide.description}
              </p> */}
               <p 
        className="text-[3vw] md:text-[2.5vw] sm:text-[2vw] lg:text-[30px]"
        dangerouslySetInnerHTML={{ __html: slide.description }}
      ></p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        className="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center w-12 text-white opacity-50 hover:opacity-90 focus:outline-none"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

export default HeroPage;


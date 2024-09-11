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
//             <img src={Artiamge} className="d-block h-[100vh] w-full object-cover" alt="Hero Image 1" />
//             <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative block">
//                   ARCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
//                 "AI and automation are transforming industries,<br /> driving efficiency, and opening up<br /> new possibilities for creativity and innovation in ways we never imagined."
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <img src={besecondiamge} className="d-block h-[100vh] w-100" alt="Hero Image 2" />
//           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative  block">
//                   ARCC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
//               "Empowering the future with AI and automation,<br /> we are revolutionizing industries, enhancing productivity,<br /> and unlocking unprecedented potential for innovation."</h2>
//             </div>
//         </div>
//         <div className="carousel-item">
//           <img src={runningrobo} className="d-block h-[100vh] w-100" alt="Hero Image 3" />
//           <div className="absolute top-1/3  left-0 transform -translate-y-1/2 p-6  bg-opacity-50 ml-10 text-white w-1/3">
//               <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
//                 <span className="relative  block">
//                   ARCC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
//                 </span>
//               </div>
//               <h2 className=" mb-3 text-[4vw] md:text-[6vw] lg:text-[30px]">
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




import React from 'react';
import runningrobo from '../../../assets/runningrobo.jpg';
import Artiamge from '../../../assets/Artiamge.jpg';
import besecondiamge from '../../../assets/besecondiamge.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './HeroPage.css';
function HeroPage() {
  return (
    <div id="carouselExampleCaptions" className=" carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="relative">
          <div className="carousel-item active">
            {/* <img src={Artiamge} className="d-block h-[100vh] w-full object-cover" alt="Hero Image 1" /> */}
            <img src={Artiamge} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 1" />

            <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
              <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
                <span className="relative block">
                  ARRC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
                </span>
              </div>
              <h2 className=" mb-3 text-[4vw]  md:text-[2.5vw] lg:text-[30px]">
                "AI and automation are transforming industries,<br /> driving efficiency, and opening up<br /> new possibilities for creativity and innovation in ways we never imagined."
              </h2>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          {/* <img src={besecondiamge} className="d-block h-[100vh] w-100" alt="Hero Image 2" /> */}
          <img src={besecondiamge} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 2" />

          <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
              <div className="relative  text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
                <span className="relative  block">
                  ARRC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
                </span>
              </div>
              <h2 className=" mb-3 text-[3.7vw] md:text-[2.5vw] lg:text-[30px]">
              "Empowering the future with AI and automation,<br /> we are revolutionizing industries, enhancing productivity,<br /> and unlocking unprecedented potential for innovation."</h2>
            </div>
        </div>
        <div className="carousel-item">
          {/* <img src={runningrobo} className="d-block h-[100vh] w-100" alt="Hero Image 3" /> */}
          <img src={runningrobo} className="d-block w-100 h-[50vh] md:h-[75vh] lg:h-[100vh] object-inherit" alt="Hero Image 3" />

          <div className="absolute top-1/3  left-0 transform -translate-y-1/2 lg:p-6  bg-opacity-50 ml-10 text-white w-1/3">
              <div className="relative text-[4vw] md:text-[6vw] lg:text-[60px] font-bold text-white ">
                <span className="relative  block">
                  ARRC <span className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
                </span>
              </div>
              <h2 className=" mb-3 text-[4vw] md:text-[2.5vw] lg:text-[30px]">
              "Redefining what's possible with AI and automation,<br /> we are pioneering a new era of innovation,<br /> where technology meets limitless potential."
              </h2>
            </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroPage;





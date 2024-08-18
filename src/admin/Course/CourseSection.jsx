import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// CourseCard Component
const CourseCard = ({ title, overview, details, popular }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/courseInfo', { state: { title, overview, details } });
  };

  return (
    <div className="border-2 bg-gray-900 border-[#d4deff] rounded-lg p-[45px] px-[30px] text-center shadow-lg mb-10 relative animate-fadeInUp box-border">
      {popular && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
          POPULAR
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{overview}</p>
      <div className="ud-course-body mb-4">
        <ul className="list-none p-0 m-0">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleApplyClick}
      >
        Apply Now
      </button>
    </div>
  );
};

// CourseSection Component
const CourseSection = () => {
  const courses = [
    {
      title: 'MERN Full Stack',
      overview: 'Master the MERN stack: MongoDB, Express.js, React, and Node.js.',
      details: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      title: 'Python',
      overview: 'Learn Python programming essentials and applications.',
      details: ['Basic Syntax', 'Data Structures', 'Web Development'],
      popular: true,
    },
    {
      title: 'PHP',
      overview: 'Focus on server-side scripting and web development.',
      details: ['Server-side Programming', 'MySQL', 'APIs'],
    },
    {
      title: 'HTML & CSS',
      overview: 'Learn the basics of web design and development.',
      details: ['HTML', 'CSS', 'Responsive Design'],
    },
    {
      title: 'Java',
      overview: 'Focus on object-oriented programming and application development.',
      details: ['Core Java', 'Advanced Java', 'Application Development'],
    },
    {
      title: 'AI/ML',
      overview: 'Dive into Artificial Intelligence and Machine Learning.',
      details: ['AI Basics', 'Machine Learning', 'Data Science'],
    },
    {
      title: 'Data Science',
      overview: 'Focus on data analysis, visualization, and interpretation.',
      details: ['Data Analysis', 'Visualization', 'Statistical Techniques'],
      popular: true,
    },
    {
      title: 'Flutter',
      overview: 'Develop cross-platform mobile applications.',
      details: ['Dart Programming', 'Flutter Widgets', 'Cross-Platform Development'],
    },
    {
      title: 'React Native',
      overview: 'Build native mobile apps using React.',
      details: ['React', 'Native Modules', 'Cross-Platform Apps'],
    },
    // Add other courses here...
  ];

  return (
    <div className="p-6 md:p-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="ud-section-title mx-auto">
            <span className="text-blue-600 font-semibold mb-2 block">Courses</span>
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <p className="font-semibold mb-2 block">
              Explore our range of IT courses, including web development, mobile app development, AI/ML, and more. Gain the skills needed to excel in the IT industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              overview={course.overview}
              details={course.details}
              popular={course.popular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;

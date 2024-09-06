import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// CourseCard Component
const CourseCard = ({ title, overview, details, popular }) => {
  
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/courseInfo', { state: { title, overview, details } });
  };

  return (
    <div className="border-2 bg-gray-800 border-[#d4deff] rounded-lg p-[45px] px-[30px] text-center h-[420px] shadow-lg mb-10 relative animate-fadeInUp box-border">
      {popular && (
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 right-2">
          POPULAR
        </span>
      )}
      <h3 
                  className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 text-gradient bg-clip-text h-[70px]  text-purple-600 text-center hover:text-white transition-colors duration-300"
                  >{title}</h3>
      <p className="mb-2 h-[40px]">{overview}</p>
      <div className="ud-course-body h-[100px] mb-4">
        <ul className="list-none p-0 m-0">
          {details.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
      </div>
      {/* <button
                  className="inline-block  bg-purple-600 hover:bg-gray-500   text-white hover:bg-gradient-to-l  rounded-xl w-[50%] px-3 py-1.5 text-center mt-4 transition-all duration-300"
                  onClick={handleApplyClick}
      >
        Apply Now
      </button> */}
       <button
              onClick={handleApplyClick}
              className="inline-block bg-gradient-to-r h-[35px] from-purple-500 via-blue-600 to-black hover:from-black hover:via-blue-600 hover:to-purple-500 rounded-xl w-[60%] px-3 py-1.5 text-white text-center mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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

// CourseSection Component
const CourseSection = () => {
  const courses = [
    {
      title: 'Full Stack Development with React Course',
      overview: 'MongoDB, Express.js, React, and Node.js.',
      details: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Build dynamic web applications with full-stack development using React, mastering the art of creating seamless user experiences.',
    },
    {
      title: 'Full Stack Development with Angular Course',
      overview: 'MongoDB, Express.js, Angular, and Node.js.',
      details: ['Angular', 'Node.js', 'MongoDB', 'Express.js'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Build dynamic web applications with full-stack development using Angular, and master the art of creating seamless user experiences with our comprehensive Full Stack with Angular course in Pune.',
    },
    {
      title: 'Python',
      overview: 'Learn Python programming essentials and applications.',
      details: ['Basic Syntax', 'Data Structures', 'Web Development'],
      popular: true,
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Master Python programming and build a strong foundation in data structures and web development.',
    },
    {
      title: 'PHP',
      overview: 'Focus on server-side scripting and web development.',
      details: ['Server-side Programming', 'MySQL', 'APIs'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Learn PHP for robust server-side scripting and efficient web development practices.',
    },
    {
      title: 'HTML & CSS',
      overview: 'Learn the basics of web design and development.',
      details: ['HTML', 'CSS', 'Responsive Design'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Master HTML and CSS to design and develop responsive, modern websites.',
    },
    {
      title: 'Java',
      overview: 'Focus on object-oriented programming and application development.',
      details: ['Core Java', 'Advanced Java', 'Application Development'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Gain expertise in Java, from core concepts to advanced application development.',
    },
    {
      title: 'AI/ML',
      overview: 'Dive into Artificial Intelligence and Machine Learning.',
      details: ['AI Basics', 'Machine Learning', 'Data Science'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Explore the world of AI and Machine Learning, and learn how to apply these technologies in real-world scenarios.',
    },
    {
      title: 'Data Science',
      overview: 'Focus on data analysis, visualization, and interpretation.',
      details: ['Data Analysis', 'Visualization', 'Statistical Techniques'],
      popular: true,
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Master data science techniques to analyze and interpret data effectively, making data-driven decisions.',
    },
    {
      title: 'Flutter',
      overview: 'Develop cross-platform mobile applications.',
      details: ['Dart Programming', 'Flutter Widgets', 'Cross-Platform Development'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Learn Flutter and Dart to create high-performance, cross-platform mobile applications.',
    },
    {
      title: 'React Native',
      overview: 'Build native mobile apps using React.',
      details: ['React', 'Native Modules', 'Cross-Platform Apps'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Develop native mobile applications using React Native, and bring your app ideas to life.',
    },
    {
      title: 'Digital Marketing',
      overview: 'Learn strategies for effective digital marketing and SEO.',
      details: ['SEO', 'Content Marketing', 'Social Media Marketing'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Master the art of digital marketing with strategies focused on SEO, content marketing, and social media engagement.',
    },
    {
      title: 'Software Testing',
      overview: 'Understand software testing principles and practices.',
      details: ['Manual Testing', 'Automated Testing', 'Quality Assurance'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Learn comprehensive software testing techniques to ensure high-quality software delivery.',
    },
    {
      title: 'AI Prompt Engineering',
      overview: 'Learn techniques for engineering prompts for AI models.',
      details: ['Prompt Design', 'Model Interaction', 'Evaluation Metrics'],
      popular: true,

      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Master prompt engineering for AI models, enabling efficient interaction and accurate outputs.',
    },
    {
      title: 'Website Development',
      overview: 'Learn how to create and maintain websites.',
      details: ['Front-end Development', 'Back-end Development', 'Web Design'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Develop the skills to create, maintain, and optimize websites using modern web development techniques.',
    },
    {
      title: 'Flutter / Android Studio / Swift',
      overview: 'Explore mobile development with Flutter, Android Studio, and Swift.',
      details: ['Flutter', 'Android Studio', 'Swift'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Learn the essentials of mobile development with a focus on Flutter, Android Studio, and Swift, building versatile mobile applications.',
    },
    {
      title: 'Cyber Security',
      overview: 'Learn about protecting systems, networks, and programs from digital attacks.',
      details: ['Network Security', 'Ethical Hacking', 'Incident Response', 'Cryptography'],
      subDetails: [
        'Online and Offline Classes',
        'Certificate of Completion',
        '100% Placement assistance',
        'Industry focused curriculum',
        'Timely assignments',
        'Mock interviews',
      ],
      extraDescription: 'Gain expertise in cybersecurity to protect digital systems and networks from evolving threats.',
    }
  ];
    

  return (
    <div className="p-6 md:p-12 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="ud-section-title mx-auto">
            <span
                  className="text-lg sm:text-xl lg:text-4xl  font-bold mt-4 text-gradient bg-clip-text   text-purple-600 text-center hover:text-white transition-colors duration-300"
                  >Courses</span>
            <h2 className="text-xl font-bold mb-2 mt-2">Our Courses</h2>
            <p className="font-semibold mb-2 block">
              Explore our range of IT courses, including web development, mobile app development, AI/ML, and more. Gain the skills needed to excel in the IT industry.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

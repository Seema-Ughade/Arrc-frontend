import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// CourseCard Component
const CourseCard = ({ title, overview, details, popular }) => {
  
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/courseInfo', { state: { title, overview, details } });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
      {/* <p className="mb-2 h-[40px]">{overview}</p> */}
      <p className="mb-2  h-[50px] text-ellipsis overflow-hidden line-clamp-2">
  {overview}
</p>

      
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
               onClick={() => {
                handleApplyClick();
                scrollToTop();
              }}
            

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
      overview:`The Full Stack Development with React course offers a comprehensive learning experience for building web applications using MongoDB, Express.js, React, and Node.js. This course is designed to equip you with the skills to develop modern, scalable web applications from start to finish.<br/><br/>
      You will start with the basics of Node.js and Express.js to understand server-side development, then move on to MongoDB for database management. React will be covered in-depth for building dynamic, user-friendly front-end interfaces. The course combines theoretical knowledge with practical, hands-on projects to ensure you gain real-world experience.<br/><br/>
Throughout the course, you will learn how to integrate these technologies seamlessly, manage state, handle API requests, and deploy your applications. Ideal candidates should have a basic understanding of HTML, CSS, and JavaScript, though prior experience with the specific technologies is not required.<br/><br/>
By the end of the course, you will be proficient in creating full-stack applications and ready to tackle complex projects in a professional environment. The course also includes support for job placement and career advancement to help you transition into the industry successfully.<br/><br/>

      `,
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
     //ai prompt engineering
     {
      title: 'AI Prompt Engineering',
      overview: `
      AI prompt engineering is the process of designing effective and precise prompts to guide AI models, such as GPT, in generating accurate and relevant responses. In artificial intelligence and natural language processing (NLP), the way a prompt is structured greatly influences the quality and usefulness of the output. A well-crafted prompt ensures that the AI understands the task and provides results that meet the user’s expectations.<br/><br/>
Key elements of prompt engineering include clarity, which ensures the prompt is specific and unambiguous, and context, where providing sufficient background information helps the AI generate more informed responses. Constraints like word limits, style guidelines, or specific formats can also be applied to tailor the output. Additionally, instruction-based prompts direct the AI to follow particular structures, such as creating lists, comparisons, or step-by-step processes.<br/><br/>
The importance of AI prompt engineering lies in its ability to optimize efficiency, reduce trial-and-error, and improve precision. With well-crafted prompts, users can save time, as the AI is more likely to deliver useful outputs in fewer attempts. It also allows for greater customization, ensuring that responses align with specific needs, such as tone, style, or format.<br/><br/>
In essence, prompt engineering is a critical skill in leveraging AI effectively for various applications, from content generation to problem-solving.<br/><br/>
      `,
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
    //angular
    {
      title: 'Full Stack Development with Angular Course',
      overview :`Our Full Stack Development with Angular course is designed to equip you with the essential skills needed to build modern web applications using the MEAN stack—MongoDB, Express.js, Angular, and Node.js. This comprehensive program covers everything from the fundamentals of full stack development to advanced techniques in each technology.<br/><br/> 
      You will start by understanding the architecture of full stack applications and then delve into MongoDB for database management, learning CRUD operations and schema design. With Express.js, you'll explore server-side development, including routing, middleware, and error handling.<br/><br/>
      The course emphasizes Angular for dynamic front-end development, teaching you how to create responsive user interfaces, manage data with services, and handle routing and forms. You'll also gain proficiency in Node.js for building scalable server-side applications and RESTful APIs.<br/><br/>
       Throughout the course, you’ll engage in hands-on projects that integrate all aspects of the stack, receive expert guidance, and benefit from flexible, online learning. Upon completion, you will earn a certificate to demonstrate your expertise. To apply, simply fill out the application form with your contact details and relevant background, and our admissions team will guide you through the next steps.<br/><br/>
      
      `,
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
    //python
    {
      title: 'Python',
      overview: `Our Python programming course offers a thorough introduction to one of the most versatile and widely-used programming languages today. This course is designed for beginners as well as those looking to deepen their understanding of Python’s capabilities. You will start with fundamental concepts, including syntax, data types, and control structures, and then progress to more advanced topics such as object-oriented programming, file handling, and error management. The course also covers Python libraries and frameworks that are essential for data analysis, web development, and automation.<br/><br/>
      Throughout the course, you'll engage in practical exercises and real-world projects to apply what you’ve learned. This hands-on approach ensures that you gain valuable experience in writing and debugging Python code. Additionally, the course includes modules on popular Python libraries such as NumPy, pandas, and Flask, which are crucial for tasks ranging from data manipulation to web application development.<br/><br/>
      With flexible online access, you can learn at your own pace and fit the course into your schedule. Expert instructors provide support and feedback to help you master Python programming. Upon completion, you'll receive a certificate to validate your skills and enhance your career prospects. To apply, complete the application form with your details, and our team will guide you through the enrollment process.<br/><br/>
      `,
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
    //php
    {
      title: 'PHP',
      overview: `PHP programming course is meticulously designed to equip you with the skills needed to develop dynamic and interactive web applications using PHP. Whether you’re a beginner or looking to enhance your existing knowledge, this course covers everything from the basics to advanced PHP techniques. You’ll start by learning the fundamentals, including syntax, variables, data types, and control structures. As you advance, you’ll explore functions, form handling, sessions, and cookies, and gain expertise in working with databases using MySQL.<br/><br/>
      The course also delves into more sophisticated topics such as object-oriented programming (OOP) in PHP, error handling, and security best practices. Additionally, you'll learn to integrate PHP with HTML and CSS to create responsive and engaging user interfaces. Practical, hands-on projects are a core component, allowing you to apply your skills in real-world scenarios and build functional web applications.<br/><br/>
      With flexible online access, you can progress through the course at your own pace while receiving expert support and feedback. By the end of the course, you'll earn a certificate that highlights your PHP proficiency and opens doors to career opportunities in web development. To get started, simply fill out the application form with your contact details and relevant background, and our team will assist you with the enrollment process.<br/><br/>
      
      `,
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
    //html and css
    {
      title: 'HTML & CSS',
      overview: `HTML & CSS course provides a comprehensive introduction to the foundational technologies used to create and style modern web pages. Designed for beginners as well as those looking to refresh their skills, this course covers everything you need to know to build and design visually appealing and responsive websites.<br/>.<br/>
      You’ll begin with the basics of HTML, learning to structure web content with elements such as headings, paragraphs, lists, and links. As you progress, you’ll dive into more advanced HTML topics like forms, tables, and multimedia integration. Alongside HTML, you'll gain proficiency in CSS, which is crucial for styling and laying out your web pages. The course covers essential CSS concepts including selectors, properties, and values, as well as advanced techniques like Flexbox and CSS Grid for creating complex layouts..<br/>.<br/>
      The course emphasizes practical, hands-on experience with real-world projects that enable you to apply your knowledge in building and designing websites. You’ll also learn best practices for ensuring your websites are responsive and accessible across different devices and screen sizes..<br/>.<br/>
      With flexible online access, you can learn at your own pace, supported by expert instructors who provide feedback and guidance throughout the course. Upon completion, you’ll earn a certificate that demonstrates your proficiency in HTML and CSS. To apply, simply fill out the application form with your contact details, and our team will guide you through the enrollment process..<br/>.<br/>
      
      `,
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

    //java
    {
      title: 'Java',
      overview: `Our Java programming course offers a thorough introduction to one of the most powerful and widely-used programming languages in the industry. Designed for both beginners and those looking to deepen their Java skills, this course covers the essential concepts and advanced techniques needed to develop robust and scalable applications.<br/><br/>
      You will start by learning the core principles of Java, including syntax, data types, operators, and control flow. The course then progresses to more advanced topics such as object-oriented programming (OOP) principles, including classes, objects, inheritance, and polymorphism. You'll also gain experience with exception handling, file I/O, and multithreading, which are crucial for building efficient and reliable applications.<br/><br/>
      The course emphasizes hands-on learning, featuring practical exercises and real-world projects that help you apply what you've learned. You'll work on building Java applications, from simple programs to more complex systems, reinforcing your understanding of concepts and improving your problem-solving skills.<br/><br/>
      Additionally, you'll explore popular Java frameworks and tools, such as Spring and Hibernate, which are essential for modern application development. Flexible online access allows you to learn at your own pace, supported by expert instructors who provide feedback and guidance throughout the course.<br/><br/>
      Upon completion, you'll earn a certificate that highlights your Java programming proficiency and enhances your career prospects. To apply, simply complete the application form with your contact details and relevant background, and our team will assist you with the enrollment process.<br/><br/>
      
      
      `,
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

    //al/ml
    {
      title: 'AI/ML',
      overview: `Our Artificial Intelligence (AI) and Machine Learning (ML) course provides a comprehensive introduction to the transformative technologies driving modern innovation. This course is perfect for both beginners and experienced professionals eager to expand their expertise in AI and ML.<br/><br/>
      Starting with the fundamentals, you'll explore core concepts such as supervised and unsupervised learning, neural networks, and deep learning. You'll gain hands-on experience with essential algorithms and models, including linear regression, decision trees, and clustering techniques. As you progress, the course covers advanced topics like natural language processing (NLP), computer vision, and reinforcement learning.<br/><br/>
      You’ll work on real-world projects that apply these concepts, using popular tools and frameworks such as TensorFlow, Keras, and scikit-learn. These practical exercises are designed to help you build intelligent systems and solve complex problems.<br/><br/>
      The course is delivered online, offering flexible access so you can learn at your own pace. Expert instructors provide guidance and feedback throughout the program. Upon completion, you’ll earn a certificate that highlights your proficiency in AI and ML, enhancing your career prospects in this rapidly evolving field. To enroll, complete the application form with your contact details, and our team will assist you with the process.<br/><br/>
      `,
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
    //Data science
    {
      title: 'Data Science',
      overview: `
      Data Science course offers a thorough introduction to the skills and techniques required to analyze and interpret complex data. Ideal for both newcomers and those seeking to deepen their expertise, this course covers the entire data science workflow, from data collection and cleaning to advanced analytics and visualization.<br/><br/>
You will begin by learning the fundamentals of data science, including statistical analysis, probability, and data wrangling. The course covers essential tools and programming languages such as Python and R, providing hands-on experience with libraries like pandas, NumPy, and matplotlib for data manipulation and visualization.<br/><br/>
As you advance, you will explore machine learning algorithms, including regression, classification, and clustering techniques. The course also delves into more sophisticated topics like natural language processing (NLP) and big data technologies, preparing you to handle large datasets and extract meaningful insights.<br/><br/>
Practical, real-world projects are a key component of the course, allowing you to apply your skills to solve data-driven problems. With flexible online access and support from expert instructors, you can learn at your own pace and gain the proficiency needed for a career in data science.<br/><br/>
Upon completion, you will earn a certificate that validates your skills and enhances your career opportunities. To apply, simply fill out the application form with your contact details, and our team will guide you through the enrollment process.<br/><br/>
 `,
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
    //flutter
    {
      title: 'Flutter',
      overview: `   
Our Flutter course offers an in-depth introduction to building high-performance, cross-platform mobile applications using Google's Flutter framework. This course is perfect for both beginners eager to start mobile app development and experienced developers looking to expand their skill set with Flutter.<br/><br/>
You’ll start by learning the basics of Dart, the programming language used by Flutter, and progress to understanding the Flutter framework itself. The course covers essential Flutter concepts, including widgets, state management, and navigation, enabling you to build responsive and visually appealing user interfaces.<br/><br/>
As you advance, you'll explore more complex topics such as asynchronous programming, integrating with REST APIs, and implementing custom animations. Hands-on projects are a central feature of the course, allowing you to apply what you’ve learned by developing real-world applications and solving practical challenges.<br/><br/>
The course is delivered online, providing flexible access so you can learn at your own pace while receiving guidance from expert instructors. By the end of the course, you'll have the skills to create sophisticated mobile applications for both iOS and Android platforms using Flutter.<br/><br/>
Upon completion, you will earn a certificate that highlights your proficiency in Flutter development. To get started, fill out the application form with your contact information, and our team will assist you with the enrollment process. <br/><br/>
      `,
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
    //react native
    {
      title: 'React Native',
      overview: `
      React Native is a popular open-source framework developed by Facebook that allows developers to build mobile applications for both iOS and Android using a single codebase written in JavaScript. It leverages the React library for building user interfaces, making it easier to create dynamic and responsive mobile apps. One of the key advantages of React Native is its ability to produce truly native apps, meaning the components are rendered using native mobile UI components rather than web-based views, which enhances performance.<br/><br/>
The framework offers a feature called hot reloading, allowing developers to see changes in real-time without restarting the app, improving development efficiency. It also supports the integration of native modules, enabling developers to write platform-specific code for features that require high performance or deep system integration.<br/><br/>
React Native has strong community support, with numerous third-party libraries, tools, and plugins available to extend its functionality. Its cross-platform nature significantly reduces development time and costs, as teams no longer need to maintain separate codebases for iOS and Android. Companies like Instagram, Airbnb, and Walmart have successfully used React Native to build scalable apps.<br/><br/>
With its efficient development cycle, cross-platform capabilities, and growing ecosystem, React Native is a solid choice for mobile app development.<br/><br/>
 `,
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
    //digital marketing
    {
      title: 'Digital Marketing',
      overview: `
      Digital marketing refers to the use of online channels and strategies to promote products, services, or brands to a target audience. It encompasses a wide range of tactics, including search engine optimization (SEO), social media marketing, email marketing, content marketing, pay-per-click (PPC) advertising, and influencer marketing. The goal is to reach potential customers through digital platforms where they spend most of their time, such as search engines, social media, and websites.<br/><br/>
One of the main benefits of digital marketing is the ability to target specific demographics and measure performance in real-time. Tools like Google Analytics and social media insights allow businesses to track user engagement, conversion rates, and return on investment (ROI) with precision. This data-driven approach helps optimize campaigns for better results.<br/><br/>
Digital marketing also offers flexibility and cost-efficiency compared to traditional marketing methods. Businesses can run ads on platforms like Facebook or Google with budgets that suit their needs, making it accessible for small and large companies alike.<br/><br/>
With the increasing reliance on digital devices and platforms, digital marketing has become a crucial aspect of any successful marketing strategy, helping businesses build brand awareness, engage customers, and drive sales effectively. <br/><br/>
      `,
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
    //software testing
    {
      title: 'Software Testing',
      overview:`
Software testing is a crucial process in software development that involves evaluating and verifying that a software product meets the required specifications and functions correctly. It helps identify defects, bugs, and inconsistencies in the system, ensuring that the final product is reliable, efficient, and user-friendly.<br/><br/>
There are various types of software testing, including manual testing, where testers execute tests without tools, and automated testing, which uses scripts and software tools to perform tests. Some key testing types include functional testing (to check if the software performs the desired functions), performance testing (to assess speed, stability, and responsiveness), and regression testing (to ensure that recent changes haven't negatively impacted existing features).<br/><br/>
Software testing offers significant benefits, such as identifying errors early in the development process, which reduces the cost of fixing issues post-launch. It also ensures that the software is high quality and performs well under different conditions, enhancing user satisfaction. By thoroughly testing the software, businesses can prevent potential failures, increase customer trust, and maintain a competitive edge.<br/><br/>
In summary, software testing is essential for delivering a robust and error-free product, minimizing risks, and ensuring the software performs as expected in real-world environments.<br/><br/>
      `,
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
   
    //website development
    {
      title: 'Website Development',
      overview: `
Website development is the process of creating, building, and maintaining websites. It involves both the front-end and back-end aspects, making it a comprehensive task requiring various skills and tools. The front-end development focuses on the visible part of the website that users interact with. It includes creating layouts, design, and interactive elements using technologies like HTML, CSS, and JavaScript to ensure the site is visually appealing and easy to navigate.<br/><br/>
Back-end development handles the server-side, where all the data processing and server interactions occur. This involves using databases (such as MySQL or MongoDB) and server-side programming languages (like PHP, Python, or Node.js) to manage the website’s core functions, such as user authentication, data storage, and server requests.<br/><br/>
Web design is another crucial component, ensuring the site is both aesthetically pleasing and user-friendly. A well-designed website attracts visitors and keeps them engaged, enhancing the user experience. Additionally, content management systems (CMS) like WordPress make it easier to update and manage the content without extensive coding knowledge.<br/><br/>
A well-developed website plays a vital role in establishing an online presence for businesses, enabling them to reach a global audience, provide essential information, and offer smooth, user-friendly functionality across all devices.<br/><br/>

`,
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
    //flutter/swift
    {
      title: 'Flutter / Android Studio / Swift',
      overview: `Flutter
Flutter is an open-source UI software development kit (SDK) developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses Dart as the primary programming language. Flutter’s core advantage is its cross-platform nature, enabling developers to create apps for iOS, Android, web, and desktop using a single codebase. It offers a rich set of pre-designed widgets, customizable UI components, and features like hot reload, which allows developers to see the changes instantly without restarting the app.<br/><br/>
Android Studio
Android Studio is the official integrated development environment (IDE) for Google's Android platform. It provides tools for building, testing, and debugging Android applications. Android Studio supports multiple programming languages, including Java, Kotlin, and C++. Its powerful features include an emulator for testing apps on different devices, a layout editor for designing UIs visually, and built-in support for Gradle, making it easier to manage dependencies and automate builds.<br/><br/>
Swift
Swift is Apple’s programming language designed for iOS, macOS, watchOS, and tvOS app development. It’s known for being fast, safe, and modern, offering a clean syntax that is easier to read and write compared to Objective-C. Swift allows developers to write code with fewer errors, ensuring more reliable and efficient iOS applications. It is supported by Xcode, Apple’s IDE for app development.<br/><br/>
In summary, Flutter is ideal for cross-platform development, Android Studio is best for building Android apps, and Swift is key for iOS app development.<br/><br/>

`,
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
    //cyber security
    {
      title: 'Cyber Security',
      overview: `Cybersecurity involves protecting computer systems, networks, and data from digital attacks, theft, and damage. As technology advances, so do the methods employed by cybercriminals, making cybersecurity a critical aspect of modern IT management. The primary goals of cybersecurity are to ensure the confidentiality, integrity, and availability of information.<br/><br/>
Confidentiality ensures that sensitive data is accessible only to authorized individuals. Integrity involves maintaining the accuracy and completeness of information, preventing unauthorized alterations. Availability guarantees that data and services are accessible to authorized users when needed.<br/><br/>
Key practices in cybersecurity include firewalls, which block unauthorized access, and encryption, which protects data by converting it into a secure format. Antivirus software detects and removes malicious programs, while intrusion detection systems monitor for suspicious activities. Regular software updates and patch management address vulnerabilities that could be exploited by attackers.<br/><br/>
Additionally, security awareness training for employees helps mitigate human errors that can lead to breaches. Incident response planning prepares organizations to quickly and effectively respond to security incidents.<br/><br/>
In summary, cybersecurity is essential for safeguarding information systems from a wide range of threats, ensuring data protection, and maintaining the trust of users and stakeholders.<br/><br/>
`,
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

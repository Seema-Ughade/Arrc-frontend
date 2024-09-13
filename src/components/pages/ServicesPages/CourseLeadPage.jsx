import React from 'react';
import { motion } from 'framer-motion';
import webdevpic from '../../../assets/webdevpic.jpg'; // Replace with actual image

const CourseLeadPage = () => {
  return (
    <div className="container text-white mx-auto p-6">
      {/* Hero Section */}
      <motion.div className="relative w-full h-64 mb-6 sm:h-80 md:h-[60vh]">
        <img
          src={webdevpic}
          alt="Course"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-600 mb-4 text-center">
            Master Web Development
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-6">
            Join our comprehensive course to become a web development expert.
          </p>
          <a
            href="#lead-form"
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </motion.div>

      {/* Course Details */}
      <motion.div className="text-center text-white mb-12">
        <h2 className="text-4xl md:text-5xl text-purple-600 font-bold mb-6">
          What You Will Learn
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Our course covers everything from HTML, CSS, and JavaScript to advanced frameworks like React and Node.js.
        </p>
        <ul className="list-disc list-inside pl-6 text-left mx-auto max-w-4xl">
          <li className="mb-2 text-lg md:text-xl">Building responsive websites from scratch</li>
          <li className="mb-2 text-lg md:text-xl">Creating interactive web applications</li>
          <li className="mb-2 text-lg md:text-xl">Understanding web development best practices</li>
          <li className="mb-2 text-lg md:text-xl">Mastering popular frameworks and libraries</li>
        </ul>
      </motion.div>

      {/* Instructor Information */}
      <motion.div className="flex flex-col lg:flex-row items-center mb-12">
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
          <img
            src={webdevpic}
            alt="Instructor"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 w-full lg:pl-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your Instructor
          </h3>
          <p className="text-lg md:text-xl mb-4">
            John Doe is a seasoned web developer with over 10 years of experience in the industry. He has worked with top tech companies and is passionate about teaching and helping others succeed.
          </p>
        </div>
      </motion.div>

      {/* Testimonials and Reviews */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Our Students Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl mb-2">"This course transformed my career! The content was comprehensive, and the instructor was top-notch."</p>
            <footer className="font-semibold">— Jane Smith</footer>
          </blockquote>
          <blockquote className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl mb-2">"I gained practical skills that I use every day in my job. Highly recommend this course."</p>
            <footer className="font-semibold">— John Doe</footer>
          </blockquote>
        </div>
      </motion.div>

      {/* Pricing and Enrollment Options */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pricing and Enrollment
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Enroll now and start your journey towards becoming a web development expert. We offer flexible payment plans and scholarships.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Course Price: $100
        </p>
        <p className="text-lg md:text-xl mb-4">
          Payment Plans: Available
        </p>
        <a
          href="#lead-form"
          className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
        >
          Enroll Now
        </a>
      </motion.div>

      {/* FAQs */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">What is the course duration?</h3>
            <p className="mt-2 text-lg md:text-xl">The course lasts for 12 weeks, with weekly classes and assignments.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Are there any prerequisites?</h3>
            <p className="mt-2 text-lg md:text-xl">No prior knowledge is required. We start from the basics and build up.</p>
          </div>
        </div>
      </motion.div>

      {/* Schedule */}
      <motion.div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Course Schedule
        </h2>
        <ul className="list-disc list-inside pl-6 mx-auto max-w-4xl">
          <li className="text-lg md:text-xl">Week 1-2: Introduction to HTML & CSS</li>
          <li className="text-lg md:text-xl">Week 3-4: JavaScript Basics</li>
          <li className="text-lg md:text-xl">Week 5-6: Advanced JavaScript & DOM Manipulation</li>
          <li className="text-lg md:text-xl">Week 7-8: React Fundamentals</li>
          <li className="text-lg md:text-xl">Week 9-10: Node.js & Express</li>
          <li className="text-lg md:text-xl">Week 11-12: Final Project & Review</li>
        </ul>
      </motion.div>

      {/* Lead Capture Form */}
      <motion.div
        id="lead-form"
        className="bg-gray-800 lg:w-1/2 mx-auto p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl text-purple-600 font-bold mb-4 text-center">
          Sign Up for More Information
        </h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree URL
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 border border-gray-400 rounded-lg shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 border border-gray-400 rounded-lg shadow-sm"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-4 border border-gray-400 rounded-lg shadow-sm"
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CourseLeadPage;

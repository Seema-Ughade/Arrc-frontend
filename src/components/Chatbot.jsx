import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const questionsAndAnswers = {
  'What Services Do You Offer?': `At Arrch Technology, we provide a comprehensive range of IT services, including:
1. **Web Development**: Custom websites, e-commerce solutions, and CMS platforms.
2. **Mobile App Development**: Native and cross-platform mobile applications.
3. **Digital Marketing**: SEO, SEM, social media marketing, and content marketing.
4. **Cloud Solutions**: Cloud migration, infrastructure setup, and management.
5. **IT Consulting**: Strategic IT planning, system integration, and project management.
6. **IT Training & Placement**: Professional training in various IT domains with placement assistance.`,
  
  'What Is Your Unique Selling Proposition (USP)?': `Our USP lies in our client-centric approach and commitment to delivering tailor-made solutions. We combine industry expertise with cutting-edge technologies to provide innovative solutions that meet your specific business needs. We also offer end-to-end services, from concept to execution, ensuring a seamless experience for our clients.`,

  'Can You Send Me Details About Your Digital Marketing Services?': `Certainly! Our digital marketing services include:
1. **Search Engine Optimization (SEO)**: Improve your website's visibility on search engines and attract organic traffic.
2. **Search Engine Marketing (SEM)**: Targeted advertising campaigns to increase brand awareness and drive conversions.
3. **Social Media Marketing**: Develop and execute social media strategies to engage your audience and build brand loyalty.
4. **Content Marketing**: Create and distribute valuable content to attract, engage, and retain customers.
5. **Email Marketing**: Customized email campaigns to nurture leads and convert them into customers.
6. **Analytics and Reporting**: In-depth analysis and reporting to measure the effectiveness of your digital marketing efforts.
We tailor our digital marketing strategies to align with your business goals and target audience.`,

  'Can You Send Me Details About Your IT Training and Placement Services?': `Absolutely! Our IT Training & Placement services are designed to equip you with the skills needed to excel in the IT industry. We offer:
1. **Training Programs**: Comprehensive training in programming languages, web development, data science, cybersecurity, and more.
2. **Certification Preparation**: Guidance and resources for industry-recognized certifications such as CompTIA, Cisco, Microsoft, and AWS.
3. **Soft Skills Training**: Workshops on communication, teamwork, and problem-solving skills.
4. **Placement Assistance**: Resume building, mock interviews, and job search support to help you secure your dream job.
Our experienced instructors and industry connections ensure that you receive practical, hands-on training and valuable placement opportunities.`,

  'Can You Provide Details About Your Courses?': `Certainly! We offer a wide range of courses tailored to different levels of expertise:
1. **Web Development**: Courses covering HTML, CSS, JavaScript, PHP, and popular frameworks like React and Angular.
2. **Mobile App Development**: Training in Android, iOS, and cross-platform development.
3. **Data Science & Analytics**: Courses on Python, R, machine learning, and data visualization tools.
4. **Cybersecurity**: Training on ethical hacking, network security, and information security management.
5. **Cloud Computing**: Courses on AWS, Azure, and Google Cloud Platform, including cloud architecture and deployment.
6. **Software Development**: Comprehensive courses on Java, .NET, C++, and other programming languages.`
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [questionsList, setQuestionsList] = useState(Object.keys(questionsAndAnswers));
  const [showQuestionsList, setShowQuestionsList] = useState(false);
  const [showWhatsAppPrompt, setShowWhatsAppPrompt] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isVisible) {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "Hello! How can I assist you today?", type: 'chatbot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    }
  }, [isVisible]);

  const handleQuestionClick = (question) => {
    const response = questionsAndAnswers[question] || "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕";

    setMessages(prevMessages => [
      ...prevMessages,
      { text: question, type: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      { text: response, type: 'chatbot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setShowWhatsAppPrompt(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      if (questionsList.includes(input.trim())) {
        handleQuestionClick(input.trim());
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: input.trim(), type: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);
        setShowWhatsAppPrompt(true);
      }
      setInput('');
    }
  };

  const handleVisibilityToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleQuestionSelect = (question) => {
    handleQuestionClick(question);
    setShowQuestionsList(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.link/zkcnv2', '_blank'); // Replace with your WhatsApp number
    setShowWhatsAppPrompt(false);
  };

  const handleInputFocus = () => {
    setShowQuestionsList(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowQuestionsList(false);
    }, 200); // Delay to allow click event to register on the questions list
  };

  return (
    <>
      <button
        onClick={handleVisibilityToggle}
        className="fixed bottom-4 right-4 p-3 bg-purple-500 text-white rounded-full shadow-lg z-50"
        aria-label="Chatbot"
      >
        <FaRobot size={24} />
      </button>

      {isVisible && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-16 right-4 w-96 bg-purple-100 border border-purple-300 rounded-lg shadow-lg z-50"
        >
          <div className="bg-purple-500 text-white p-4 rounded-t-lg text-lg font-bold relative">
            Chatbot
            <button
              onClick={handleVisibilityToggle}
              className="absolute top-2 right-2 p-1 bg-purple-700 rounded-full text-white"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg ${msg.type === 'user' ? 'bg-purple-200 text-right' : 'bg-purple-50 text-left'}`}
              >
                <p>{msg.text}</p>
                <span className="text-gray-500 text-sm block">{msg.time}</span>
              </div>
            ))}
            {showWhatsAppPrompt && (
              <div className="mt-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex items-center">
                <p className="mr-3 text-gray-800">Your question isn't in our FAQ. Would you like to chat with us on WhatsApp?</p>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                  aria-label="Open WhatsApp"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-purple-50 border-t border-purple-300 rounded-b-lg relative">
            <form onSubmit={handleSubmit} className="flex items-center relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Type your question..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                aria-label="Send"
              >
                <FaPaperPlane size={20} />
              </button>
            </form>
            {showQuestionsList && (
              <div className="absolute bottom-full left-0 w-full bg-purple-50 border border-gray-300 rounded-lg shadow-lg mb-2 z-10">
                {questionsList.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionSelect(question)}
                    className="block w-full text-left p-2 hover:bg-gray-100"
                    aria-label={question}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

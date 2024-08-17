import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaEye, FaSearch, FaHandHoldingUsd } from 'react-icons/fa'; // Font Awesome icons
import Picture1 from '../../assets/Picture1.png';
import AINewImage from '../../assets/AINewImage.jpeg';

const Service1 = () => {
  return (
    <div className="max-w-8xl mx-auto p-6  text-white overflow-hidden">
      {/* Main Image Section */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={AINewImage} 
          alt="AI Overview" 
          className="w-full h-[450px] object-cover rounded-lg" 
        />
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-wrap mt-6 gap-6">
        {/* Left Image Section */}
        <motion.div 
          className="flex-none w-full md:w-[450px] h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={Picture1} 
            alt="AI Application" 
            className="w-full h-full object-cover rounded-lg" 
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div 
          className="flex-1 max-h-[400px] overflow-y-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-6">
            {/* Content Blocks */}
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Development</h2>
              <p className="text-gray-300 leading-relaxed">
                Develop cutting-edge AI solutions with advanced algorithms and machine learning techniques to drive innovation.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI RGB</h2>
              <p className="text-gray-300 leading-relaxed">
                Enhance visual representations and user experiences with AI-driven RGB image processing and color analysis.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Image Modifier</h2>
              <p className="text-gray-300 leading-relaxed">
                Modify and enhance images using AI techniques for better quality, resolution, and aesthetic appeal.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Cloud Technology</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilize cloud-based solutions for scalable AI deployments, storage, and data processing.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Data Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                Gather and analyze data effectively to drive AI insights and decision-making processes.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Integrated Module</h2>
              <p className="text-gray-300 leading-relaxed">
                Integrate various AI modules for comprehensive solutions that address complex problems.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Development</h2>
              <p className="text-gray-300 leading-relaxed">
                Develop cutting-edge AI solutions with advanced algorithms and machine learning techniques to drive innovation.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI RGB</h2>
              <p className="text-gray-300 leading-relaxed">
                Enhance visual representations and user experiences with AI-driven RGB image processing and color analysis.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Image Modifier</h2>
              <p className="text-gray-300 leading-relaxed">
                Modify and enhance images using AI techniques for better quality, resolution, and aesthetic appeal.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Cloud Technology</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilize cloud-based solutions for scalable AI deployments, storage, and data processing.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Data Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                Gather and analyze data effectively to drive AI insights and decision-making processes.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Integrated Module</h2>
              <p className="text-gray-300 leading-relaxed">
                Integrate various AI modules for comprehensive solutions that address complex problems.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Development</h2>
              <p className="text-gray-300 leading-relaxed">
                Develop cutting-edge AI solutions with advanced algorithms and machine learning techniques to drive innovation.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI RGB</h2>
              <p className="text-gray-300 leading-relaxed">
                Enhance visual representations and user experiences with AI-driven RGB image processing and color analysis.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">AI Image Modifier</h2>
              <p className="text-gray-300 leading-relaxed">
                Modify and enhance images using AI techniques for better quality, resolution, and aesthetic appeal.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Cloud Technology</h2>
              <p className="text-gray-300 leading-relaxed">
                Utilize cloud-based solutions for scalable AI deployments, storage, and data processing.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Data Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                Gather and analyze data effectively to drive AI insights and decision-making processes.
              </p>
            </div>
            <div className="p-5 bg-gray-900 rounded-lg shadow-lg">
              <h2 className="text-purple-400 text-2xl font-semibold mb-2">Integrated Module</h2>
              <p className="text-gray-300 leading-relaxed">
                Integrate various AI modules for comprehensive solutions that address complex problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Benefit Section */}
      <div className="mt-12 p-6  rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">Benefits of Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="p-5 bg-gray-900 rounded-lg shadow-lg flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
            <FaBullhorn className="text-purple-400 text-5xl mb-3" />

              <h3 className="text-purple-400 text-xl font-semibold mb-2">Engagement</h3>
              <p className="text-gray-300 leading-relaxed">
                Design patent protects the unique visual aspects of your product, preventing.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-5 bg-gray-900 rounded-lg shadow-lg flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
            <FaEye className="text-purple-400 text-5xl mb-3" />

              <h3 className="text-purple-400 text-xl font-semibold mb-2">Brand Visibility</h3>
              <p className="text-gray-300 leading-relaxed">
                Design patent protects the unique visual aspects of your product, preventing.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-5 bg-gray-900 rounded-lg shadow-lg flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
            <FaSearch className="text-purple-400 text-5xl mb-3" />

              <h3 className="text-purple-400 text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Design patent protects the unique visual aspects of your product, preventing.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-5 bg-gray-900 rounded-lg shadow-lg flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div>
            <FaHandHoldingUsd className="text-purple-400 text-5xl mb-3" />

              <h3 className="text-purple-400 text-xl font-semibold mb-2">Lead Generation</h3>
              <p className="text-gray-300 leading-relaxed">
                Design patent protects the unique visual aspects of your product, preventing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service1;

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../Components/Footer/Footer';
import { useState, useEffect } from 'react';


const AboutUs = () => {
    const [displayText, setDisplayText] = useState('');
  const fullText = `Welcome to EduVerse! We’re on a mission to democratize education by providing free resources, solving doubts, and making learning accessible to all. Our team of expert educators is passionate about helping students succeed. Join us in this journey of knowledge!`;

  useEffect(() => {
    animateText(fullText); // Trigger text animation on component mount
  }, []);

  const animateText = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed here (ms per character)
  };
  return (
    <>
      <div className="h-100% bg-gradient-to-r from-[#009FFF] to-[#ec2F4B]">
        <div className="container mx-auto px-6">

        
          {/* Introduction Section */}
          <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 p-6 rounded-lg shadow-lg mt-3"
    >
      <h1 className="text-4xl font-bold text-white underline">About Us</h1>
      <div className='flex'>
        <p className="mt-44 text-xl ml-3 mr-3 text-white tracking-wide">
          {displayText}
        </p>
        <img src="pngegg.png" alt="" className='h-4/6 w-1/2' />
      </div>
    </motion.div>
        
          {/* Our Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" shadow-md rounded-lg p-6 mb-12"
          >
            <h2 className="text-3xl font-semibold text-blue-700">Our Mission</h2>
            <div className='flex'>
                 <img src="mission.png" alt="" className='h-96 w-1/2' />
            <p className="mt-4  text-xl ml-8 mr-8 text-white tracking-wide">
              Eduverse aims to provide free and accessible educational resources for college students. We offer a comprehensive platform with book sections, AI doubt-solving, blogs, and video courses to help students study effectively.
              We’re on a mission to democratize education by providing free resources, solving doubts, and making learning accessible to all. Our team of expert educators is passionate about helping students succeed. Join us in this journey of knowledge!
            </p>
           
            </div>
          </motion.div>

          {/* Meet the Founders Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className=" shadow-md rounded-lg p-6 mb-12 border-white shadow-white"
          >
            <h2 className="text-3xl font-semibold ">Meet the Founders</h2>
            <div className="mt-6 flex justify-around ">
              <div className="flex items-center flex-col text-center ">
                <img className="w-80 h-96 rounded-lg mb-2 object-cover" src="pic.jpg" alt="Abhishek Chaurasia" />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Abhishek Chaurasia</h3>
                  <p className="text-white">Founder</p>
                </div>
              </div>
              <div className="flex items-center flex-col text-center">
                <img className="w-80 h-96 rounded-lg mb-2 object-cover" src="akpic.jpg" alt="Akhand Pratap Singh" />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Akhand Pratap Singh</h3>
                  <p className="text-white">Founder</p>
                </div>
              </div>
              <div className="flex items-center flex-col text-center">
                <img className="w-80 h-96 rounded-lg object-cover" src="pkpic.jpeg" alt="Prateek Mishra" />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-white">Prateek Mishra</h3>
                  <p className="text-white">Founder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Features Section with Animated Card Deck */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="bg-blue-400 shadow-md rounded-lg p-6 mb-12 border-white border-2 shadow-white"
          >
            <h2 className="text-3xl font-semibold text-blue-700">Our Features</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className=" p-4 rounded-lg shadow-md border-white border-2 shadow-white"
              >
                <img src="library.jpg" alt="Book Section" className="w-full h-32 object-cover rounded" />
                <h3 className="text-xl font-semibold mt-4 text-white">Book Section</h3>
                <p className="text-gray-200 mt-2">
                  Explore a wide range of books curated for effective learning.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 p-4 rounded-lg shadow-md border-white border-2 shadow-white"
              >
                <img src="Assets/Expert/Designer.png" alt="AI Doubt Section" className="w-full h-36 object-fit rounded" />
                <h3 className="text-xl font-semibold mt-4 text-white">AI Doubt Section</h3>
                <p className="text-gray-200 mt-2">
                  Get your doubts solved instantly with our AI-powered tools.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 p-4 rounded-lg shadow-md border-white border-2 shadow-white"
              >
                <img src="blog.png" alt="Blog Section" className="w-full h-32 object-cover rounded" />
                <h3 className="text-xl font-semibold mt-4 text-white">Blog Section</h3>
                <p className="text-gray-200 mt-2">
                  Stay updated with our latest articles and posts.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 p-4 rounded-lg shadow-md border-white border-2 shadow-white"
              >
                <img src="video.jpg" alt="Video Course Section" className="w-full h-32 object-cover rounded" />
                <h3 className="text-xl font-semibold mt-4 text-white">Video Course Section</h3>
                <p className="text-gray-200 mt-2">
                  Access a variety of video courses to enhance your learning.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="bg-blue-600 text-white shadow-md rounded-lg p-6 mb-12"
          >
            <h2 className="text-3xl font-semibold">Testimonials</h2>
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-blue-700 rounded-lg shadow-md">
                <p className="text-lg">
                  "Eduverse has transformed my learning experience! The resources are top-notch and easily accessible."
                </p>
                <p className="mt-2 font-semibold text-right">- Student A</p>
              </div>
              <div className="p-4 bg-blue-700 rounded-lg shadow-md">
                <p className="text-lg">
                  "I love the AI doubt section. It’s like having a tutor available 24/7."
                </p>
                <p className="mt-2 font-semibold text-right">- Student B</p>
              </div>
              <div className="p-4 bg-blue rounded-lg shadow-md">
                <p className="text-lg">
                  "The variety of courses and books available on Eduverse is amazing. Highly recommend it!"
                </p>
                <p className="mt-2 font-semibold text-right">- Student C</p>
              </div>
            </div>
          </motion.div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

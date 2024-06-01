import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';

  return (
    <div className="bg-gray-100 min-h-screen font-poppins py-20 px-4">
      <div className="container mx-auto px-4">
        <div className="relative bg-white shadow-2xl rounded-lg p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-25 rounded-lg"></div>
          <div className="relative z-10">
            <iframe
              src={mapSrc}
              className="w-full h-64 lg:h-96 rounded-lg mb-8"
              title="Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h2 className="text-4xl font-bold text-indigo-600 text-center mb-8">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <MdEmail className="text-3xl text-indigo-600 animate-bounce" />
                <span className="text-indigo-600 text-lg">info@Eduverse.com</span>
              </div>
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <MdPhone className="text-3xl text-indigo-600 animate-bounce" />
                <span className="text-indigo-600 text-lg">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdLocationOn className="text-3xl text-indigo-600 animate-bounce" />
                <span className="text-indigo-600 text-lg">Eduverse Pvt LMT</span>
              </div>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-gray-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-4"
                    placeholder="Prateek"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-600 mb-1">Your Email</label>
                  <input
                    type="email"
                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-4"
                    placeholder="akhand@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Message</label>
                <textarea
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-4 h-32 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                  Send Message
                  <svg
                    className="ml-2 w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m0 0A7.5 7.5 0 0118 20.5M6.582 9H11m0 0V4m0 5a7.5 7.5 0 0011.5 0M13 9h.582m0 0A7.5 7.5 0 0118 20.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-indigo-600 text-center mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-110"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

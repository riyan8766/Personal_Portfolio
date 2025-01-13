import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          className="flex flex-col md:flex-row md:space-x-12 items-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Riyan</h3>
            <p className="text-gray-400">
              Frontend Developer based in Pakistan, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Riyan. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/rayan-aly-web-developer/" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white hover:underline">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:underline">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

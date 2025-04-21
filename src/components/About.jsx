import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startCounting) {
      const experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 3 ? prev + 1 : 3));
      }, 100);
      const projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 20 ? prev + 1 : 22));
      }, 20);
      const clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 10 ? prev + 1 : 15));
      }, 150);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [startCounting]);

  return (
    <motion.div
      className="bg-black text-white py-16 sm:py-20"
      id="about"
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.img
            src={AboutImage}
            alt="About"
            className="w-60 sm:w-72 h-72 sm:h-80 rounded object-cover"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-base sm:text-lg mb-8 leading-relaxed">
              I’m a passionate Frontend Developer specializing in React, Next.js, and Tailwind CSS.
              I craft modern, responsive, and animation-rich web applications that deliver exceptional user experiences.
              With a keen eye for design and deep technical expertise, I blend clean, maintainable code with smooth motion and performance-focused development.
              My work transforms ideas into fast, interactive, and scalable digital solutions—built with precision and purpose.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {experience}+
                </h3>
                <p className="text-sm">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {projects}+
                </h3>
                <p className="text-sm">Projects Completed</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {clients}+
                </h3>
                <p className="text-sm">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

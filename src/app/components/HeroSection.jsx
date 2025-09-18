"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-28 scroll-mt-28 px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto"
    >
      <h2 className="sr-only">Hero Section Introduction</h2>

      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Left Content */}
        <motion.div
          className="col-span-7 text-center sm:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-purple-500">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Rohit",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <motion.p
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building fast, scalable web apps using MERN & JavaScript.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold shadow-lg text-center"
            >
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Rohit_Pal_Resume.pdf"
              download
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold shadow-lg"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
                Download CV
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="col-span-5 mt-10 sm:mt-0 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-400 blur-3xl opacity-30 z-0 animate-pulse"
            aria-hidden="true"
          />
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden z-10">
            <Image
              src="/images/hero-image1.png"
              alt="Rohit - Developer Portrait"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
              sizes="(max-width: 768px) 250px, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

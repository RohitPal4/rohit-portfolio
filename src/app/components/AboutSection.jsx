"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import SkillCard from "./SkillCard";
import StatCard from "./StatCard";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Programming Languages</h4>
          <div className="flex flex-wrap gap-2">
            <SkillCard skill="C++" level="Advanced" />
            <SkillCard skill="Python" level="Advanced" />
            <SkillCard skill="JavaScript" level="Advanced" />
            <SkillCard skill="TypeScript" level="Intermediate" />
            <SkillCard skill="C" level="Intermediate" />
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Web Technologies</h4>
          <div className="flex flex-wrap gap-2">
            <SkillCard skill="React.js" level="Advanced" />
            <SkillCard skill="Next.js" level="Advanced" />
            <SkillCard skill="Node.js" level="Advanced" />
            <SkillCard skill="Express" level="Advanced" />
            <SkillCard skill="Tailwind CSS" level="Advanced" />
            <SkillCard skill="Django" level="Intermediate" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">AI/ML & Tools</h4>
          <div className="flex flex-wrap gap-2">
            <SkillCard skill="TensorFlow" level="Intermediate" />
            <SkillCard skill="Flask" level="Intermediate" />
            <SkillCard skill="MongoDB" level="Advanced" />
            <SkillCard skill="Docker" level="Intermediate" />
            <SkillCard skill="Git" level="Advanced" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <motion.div 
          className="bg-gradient-to-r from-blue-900/20 to-green-900/20 p-6 rounded-lg border border-blue-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">B.Tech CSE (AI & ML)</h3>
          <p className="text-blue-400 font-medium">Galgotias University, Greater Noida</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-300">CGPA: 8.37</span>
            <span className="text-gray-400">June 2026</span>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-4">
        <motion.div 
          className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 rounded-lg border border-green-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="font-semibold text-white">Software Engineering - NPTEL (IIT)</h4>
          <p className="text-sm text-gray-400 mt-1">Oct 2024</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-4 rounded-lg border border-orange-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="font-semibold text-white">AI & ML - AWS Academy</h4>
          <p className="text-sm text-gray-400 mt-1">Sep 2023</p>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div className="space-y-4">
        <motion.div 
          className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-4 rounded-lg border border-yellow-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="font-semibold text-white flex items-center">
            🏆 LeetCode Champion
          </h4>
          <p className="text-sm text-gray-300 mt-2">
            Solved 500+ problems in C++ with a 280-day streak
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-green-900/20 to-teal-900/20 p-4 rounded-lg border border-green-500/20"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="font-semibold text-white flex items-center">
            ⭐ GeeksforGeeks 3-Star
          </h4>
          <p className="text-sm text-gray-300 mt-2">
            Achieved through consistent DSA practice and challenges
          </p>
        </motion.div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gradient-to-br from-gray-900 via-blue-900/10 to-green-900/10" id="about">
      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <StatCard number="500+" label="LeetCode Problems" icon="🧩" />
          <StatCard number="8.42" label="CGPA" icon="🎓" />
          <StatCard number="3⭐" label="GeeksforGeeks" icon="⭐" />
          <StatCard number="280" label="Day Streak" icon="🔥" />
        </motion.div>

        <div className="md:grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image and Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur-xl opacity-20"></div>
              <Image 
                src="/images/about-image.png" 
                alt="Rohit Pal - Full Stack Developer" 
                width={500} 
                height={500} 
                className="relative z-10 rounded-lg"
              />
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Full-stack Developer (MERN) experienced in building scalable web apps and deploying 
                deep learning models using TensorFlow and Flask. Delivered projects with secure 
                authentication, optimized performance, and responsive UIs.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Tabs and Content */}
          <motion.div 
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <p className="text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer specializing in the MERN stack with expertise in 
              AI/ML integration. I love creating interactive, responsive web applications that solve 
              real-world problems. My journey includes solving 500+ algorithmic challenges and 
              building scalable applications with modern technologies.
            </p>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("achievements")}
                active={tab === "achievements"}
              >
                Achievements
              </TabButton>
            </div>

            {/* Tab Content */}
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px]"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
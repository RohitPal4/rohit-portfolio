"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Task Management System",
    description: "Full-stack MERN application with JWT authentication, Redux state management, and real-time task statistics with category filters.",
    image: "/projects/1.jpg",
    tag: ["All", "Web", "Full-Stack"],
    gitUrl: "https://github.com/RohitPal4/Task_Management_System",
    previewUrl: "https://task-management-system-azure.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Scalable chat app supporting 100+ concurrent users with Socket.IO, Cloudinary image uploads, and JWT authentication.",
    image: "/projects/2.jpg",
    tag: ["All", "Web", "Real-Time"],
    gitUrl: "https://github.com/RohitPal4/chat-app",
    previewUrl: "https://chat-app-demo.vercel.app",
    technologies: ["React", "Socket.IO", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    id: 3,
    title: "Plant Disease Detection",
    description: "AI-powered web app detecting 15+ plant diseases with 90% accuracy using CNN and MobileNetV2 architecture.",
    image: "/projects/3.jpg",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/RohitPal4/plant-decease-detection",
    previewUrl: "https://plant-detection-demo.vercel.app",
    technologies: ["React", "TensorFlow", "Flask", "Python", "CNN"],
  },
  {
    id: 4,
    title: "Hotel Booking Dashboard",
    description: "Comprehensive hotel management dashboard with booking analytics, cancellation tracking, and revenue insights.",
    image: "/projects/4.jpg",
    tag: ["All", "Web", "Dashboard"],
    gitUrl: "https://github.com/RohitPal4/Hotel-booking-Project",
    previewUrl: "https://hotel-dashboard-demo.vercel.app",
    technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description: "ML-powered movie recommendation engine with collaborative filtering and content-based algorithms.",
    image: "/projects/5.jpg",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/rohitpal440/movie-recommender",
    previewUrl: "https://movie-rec-demo.vercel.app",
    technologies: ["Python", "Scikit-learn", "Flask", "React", "Pandas"],
  },
  {
    id: 6,
    title: "Diet Planner Application",
    description: "Personalized nutrition planning app with calorie tracking, meal suggestions, and health goal monitoring.",
    image: "/projects/6.jpg",
    tag: ["All", "Web", "Health"],
    gitUrl: "https://github.com/RohitPal4/DietaGenie",
    previewUrl: "https://diet-planner-demo.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-900 via-blue-900/5 to-green-900/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my journey through full-stack development, AI/ML integration, and modern web technologies
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["All", "Web", "AI/ML", "Full-Stack", "Real-Time", "Dashboard", "Health"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              6+
            </div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              90%
            </div>
            <div className="text-gray-400">Accuracy</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-green-900/30 rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-gray-400">Users</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
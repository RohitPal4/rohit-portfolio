import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies = [] }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-gray-700/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
      whileHover={{ 
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden group">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        
        {/* Action Buttons Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              <CodeBracketIcon className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg"
            >
              <EyeIcon className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600/90 to-green-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies Used */}
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-blue-900/40 to-green-900/40 text-blue-300 text-xs rounded-md border border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 4 && (
                <span className="px-2 py-1 text-gray-400 text-xs">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons (Mobile) */}
        <div className="flex gap-3 md:hidden">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-center"
          >
            View Code
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 border border-blue-500/30 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-center"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
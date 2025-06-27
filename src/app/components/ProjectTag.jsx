import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isSelected
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={false}
    >
      {/* Background */}
      {isSelected ? (
        <motion.div
          layoutId="activeProjectTag"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600/30" />
      )}
      
      {/* Text */}
      <span className="relative z-10 text-sm md:text-base">{name}</span>
      
      {/* Active indicator dot */}
      {isSelected && (
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        />
      )}
      
      {/* Hover glow effect */}
      {!isSelected && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />
      )}
    </motion.button>
  );
};

export default ProjectTag;
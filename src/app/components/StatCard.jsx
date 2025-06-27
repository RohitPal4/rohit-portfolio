import { motion } from "framer-motion";

const StatCard = ({ number, label, icon }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-900/30 to-green-900/30 p-6 rounded-lg border border-blue-500/20 text-center backdrop-blur-sm"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatCard;
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        active
          ? "text-white"
          : "text-gray-400 hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      
      {!active && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-gray-600/30" />
      )}
      
      <span className="relative z-10">{children}</span>
      
      {active && (
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;
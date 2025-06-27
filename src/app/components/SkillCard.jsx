import { motion } from "framer-motion";

const SkillCard = ({ skill, level }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "from-green-500 to-emerald-500";
      case "Intermediate":
        return "from-yellow-500 to-orange-500";
      case "Beginner":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelBg = (level) => {
    switch (level) {
      case "Advanced":
        return "from-green-900/20 to-emerald-900/20 border-green-500/30";
      case "Intermediate":
        return "from-yellow-900/20 to-orange-900/20 border-yellow-500/30";
      case "Beginner":
        return "from-blue-900/20 to-cyan-900/20 border-blue-500/30";
      default:
        return "from-gray-900/20 to-gray-800/20 border-gray-500/30";
    }
  };

  return (
    <motion.div
      className={`px-4 py-2 rounded-lg border bg-gradient-to-r ${getLevelBg(level)} backdrop-blur-sm`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center space-y-1">
        <span className="text-white font-medium text-sm">{skill}</span>
        <div className={`w-full h-1 bg-gradient-to-r ${getLevelColor(level)} rounded-full`}></div>
        <span className="text-xs text-gray-400">{level}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
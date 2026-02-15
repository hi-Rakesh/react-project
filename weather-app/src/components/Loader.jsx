import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <motion.p
        className="text-white text-lg font-semibold"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;

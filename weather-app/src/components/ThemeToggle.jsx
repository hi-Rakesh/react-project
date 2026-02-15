import { useContext } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/10 backdrop-blur-lg border border-white/20 
                 text-white p-3 rounded-full transition-all duration-300"
      aria-label="Toggle Theme"
    >
      <motion.div
        key={dark ? "sun" : "moon"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
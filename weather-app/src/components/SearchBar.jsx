import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="my-1">
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center  bg-white/10 backdrop-blur-lg border border-white/20  rounded-full p-2 gap-2">
      <Search  className="text-gray-100"/>
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 bg-white/10 rounded-full border-none w-1/1 focus:border-0 focus:ring-0 focus:ring-none focus:outline-none transition duration-200"
      />
      <motion.button  whileTap={{ scale: 1 }} type="submit" className=" bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white font-bold py-2 px-4  rounded-full"><Search /></motion.button>
      </div>
    </form>
    </div>
  );
};

export default SearchBar;
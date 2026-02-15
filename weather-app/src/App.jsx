import {useContext} from "react";
import {useWeather} from "./hooks/useWeather";
import {ThemeContext} from "./context/ThemeContext";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import ThemeToggle from "./components/ThemeToggle";
import { CloudSun,Moon } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const {weather, loading, error, getWeather} = useWeather();

const getBg = () => {
  const text = weather?.current?.condition?.text?.toLowerCase() || "";

  if (text.includes("rain"))
    return "bg-[url('https://images.unsplash.com/photo-1501696461441-9c6b6e1b28e8')] bg-cover bg-center";

  if (text.includes("cloud"))
    return "bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')] bg-cover bg-center";

  if (text.includes("sunny") || text.includes("clear"))
    return "bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center";

  if (text.includes("mist") || text.includes("fog"))
    return "bg-[url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227')] bg-cover bg-center";


  return "bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center`";
};
  return (
    <>
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-10">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
    </div>
    <div className="min-h-screen h-screen dark:bg-black bg-gradient-to-br from-gray-100 to-blue-100 py-4 px-50">
      <div className={`flex flex-col  ${getBg()} rounded-2xl shadow-lg h-full py-4 px-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white">
            <CloudSun  className="font-bold text-2xl"/>
            <motion.h2
          className="font-bold text-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          >
          Weather App
          </motion.h2>
          </div>
          <ThemeToggle />
        </div>

        <SearchBar onSearch={getWeather} />
        {weather ? (
          <>
            <WeatherCard data={weather} />
            <Forecast data={weather} />
          </>
        ):
          <div className="text-center mt-10">
            <p className="text-lg text-white">Search for a city to get the weather forecast.</p>
          </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;

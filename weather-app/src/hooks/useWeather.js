import { useState } from "react";
import { fetchWeather } from "../services/weatherService";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);

      // Save recent searches
      const history = JSON.parse(localStorage.getItem("recent")) || [];
      const updated = [city, ...history.filter((c) => c !== city)].slice(0, 5);
      localStorage.setItem("recent", JSON.stringify(updated));
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeather };
};
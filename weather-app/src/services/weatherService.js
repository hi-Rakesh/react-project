import axios from 'axios';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.weatherapi.com/v1";

export const fetchWeather = async (city) => {
    const { data } = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
            key: API_KEY,
            q: city,
            days: 7,
            aqi: 'no',
            alerts: 'no'
        }
    });
    return data;
};
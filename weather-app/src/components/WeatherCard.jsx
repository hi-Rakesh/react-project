import { MapPin,Droplet,Wind } from "lucide-react";

const WeatherCard = ({data}) => {
  console.log("WeatherCard data:", data);
  const {location, current} = data;
  
const formatDate = (date) => {
  return new Date(date)
    .toLocaleString('en-IN', {
      weekday: 'long',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    .replace(',', ' |');
};

  return (
    <div className="bg-white/10 backdrop-blur-lg  text-white border border-white/20 p-6 flex justify-between items-center rounded-2xl my-1 shadow-md bg-[url('https://images.unsplash.com/photo-1504601207848-7f2c3c5f0c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')]">
      <div>
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <MapPin /> {location.name}
      </h2>
      
      <p className="text-md text-gray-100">{formatDate(location.localtime)} </p>

      <h1 className="text-6xl font-bold">{current.temp_c}°C</h1>

      <p className="text-xl font-semibold text-gray-100">{current.condition.text}</p>

      <p className="flex items-center gap-2 my-1 w-50 rounded-full "> <Droplet /> Humidity {current.humidity}%</p>
      <p className="flex items-center gap-2 my-1 w-50 rounded-full "><Wind />Wind {current.wind_kph} kph</p>
      </div>

      <div className="w-1/4 flex justify-center items-center">
        <img className="object-contain w-full h-full" src={current.condition.icon} alt={current.condition.text} />
      </div>
    </div>
  );
};

export default WeatherCard;

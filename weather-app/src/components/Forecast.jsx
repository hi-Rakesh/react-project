const Forecast = ({ data }) => {
  return (
    <div className="flex justify-between  text-white items-start mt-1 gap-2  overflow-x-auto">
      {data.forecast.forecastday.map((day) => (
        <div key={day.date} className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 w-full rounded-2xl shadow-lg flex flex-col items-center">
          <p>{new Date(day.date).toLocaleDateString('en-IN', { weekday: 'short'})}</p>
          <img src={day.day.condition.icon} alt="forecast" />
          <p>
            {day.day.maxtemp_c}° / {day.day.mintemp_c}°
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
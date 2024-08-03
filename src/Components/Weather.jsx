import React from "react";

const Weather = ({ weatherData }) => {
  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
      {weatherData.weather ? (
        <>
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="text-lg text-gray-700">
              {weatherData.weather[0].description}
            </p>
            <h1 className="text-5xl font-bold my-4">
              {kelvinToCelsius(weatherData.main.temp)}°C
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p>
                <span className="font-bold">Feels Like:</span>{" "}
                {kelvinToCelsius(weatherData.main.feels_like)}°C
              </p>
              <p>
                <span className="font-bold">Humidity:</span>{" "}
                {weatherData.main.humidity}%
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p>
                <span className="font-bold">Pressure:</span>{" "}
                {weatherData.main.pressure} hPa
              </p>
              <p>
                <span className="font-bold">Temp Max:</span>{" "}
                {kelvinToCelsius(weatherData.main.temp_max)}°C
              </p>
              <p>
                <span className="font-bold">Temp Min:</span>{" "}
                {kelvinToCelsius(weatherData.main.temp_min)}°C
              </p>
            </div>
          </div>
        </>
      ) : (
        <span className="text-2xl text-center mt-6">
          Search for a place to get weather details
        </span>
      )}
    </div>
  );
};

export default Weather;

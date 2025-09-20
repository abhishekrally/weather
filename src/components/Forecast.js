// src/Forecast.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

function Forecast({ weather }) {
  const { data } = weather;
  const [forecastData, setForecastData] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        const dailyData = response.data.list.filter((item, index) => index % 8 === 0).slice(0, 5);
        setForecastData(dailyData);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [data.name]);

  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevState) => !prevState);
  };

  const convertToFahrenheit = (temperature) => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  const renderTemperature = (temperature) => {
    return isCelsius
      ? Math.round(temperature)
      : convertToFahrenheit(temperature);
  };
  
  const getWeatherIcon = (iconCode) => {
      const iconMap = {
        '01d': 'CLEAR_DAY',
        '01n': 'CLEAR_NIGHT',
        '02d': 'PARTLY_CLOUDY_DAY',
        '02n': 'PARTLY_CLOUDY_NIGHT',
        '03d': 'PARTLY_CLOUDY_DAY',
        '03n': 'PARTLY_CLOUDY_NIGHT',
        '04d': 'CLOUDY',
        '04n': 'CLOUDY',
        '09d': 'RAIN',
        '09n': 'RAIN',
        '10d': 'RAIN',
        '10n': 'RAIN',
        '11d': 'RAIN',
        '11n': 'RAIN',
        '13d': 'SNOW',
        '13n': 'SNOW',
        '50d': 'FOG',
        '50n': 'FOG',
      };
      return iconMap[iconCode] || 'CLEAR_DAY';
  };

  return (
    <div>
      <div className="city-name">
        <h2>
          {data.name}, <span>{data.sys.country}</span>
        </h2>
      </div>
      <div className="date">
        <span>{getCurrentDate()}</span>
      </div>
      <div className="temp">
        <ReactAnimatedWeather
          icon={getWeatherIcon(data.weather[0].icon)}
          size={70}
          animate={true}
        />
        {renderTemperature(data.main.temp)}
        <sup className="temp-deg" onClick={toggleTemperatureUnit}>
          {isCelsius ? "°C" : "°F"} | {isCelsius ? "°F" : "°C"}
        </sup>
      </div>
      <p className="weather-des">{data.weather[0].description}</p>
      <div className="weather-info">
        <div className="col">
          <ReactAnimatedWeather icon="WIND" size={40} />
          <div>
            <p className="wind">{data.wind.speed} m/s</p>
            <p>Wind speed</p>
          </div>
        </div>
        <div className="col">
          <ReactAnimatedWeather icon="RAIN" size={40} />
          <div>
            <p className="humidity">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
      <div className="forecast">
        <h3>5-Day Forecast:</h3>
        <div className="forecast-container">
          {forecastData.map((day) => (
            <div className="day" key={day.dt}>
              <p className="day-name">{formatDay(day.dt)}</p>
              <ReactAnimatedWeather
                icon={getWeatherIcon(day.weather[0].icon)}
                size={40}
                animate={true}
              />
              <p className="day-temperature">
                {renderTemperature(day.main.temp_min)}° /{" "}
                <span>{renderTemperature(day.main.temp_max)}°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
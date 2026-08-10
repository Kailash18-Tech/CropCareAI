import React from "react";

const WeatherCard = ({
  day,
  date,
  icon,
  condition,
  temperature,
  high,
  low,
  rainChance,
}) => {
  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div>
          <h3>{day}</h3>
          <p>{date}</p>
        </div>

        <span className="weather-icon">{icon}</span>
      </div>

      <div className="weather-condition">
        {condition}
      </div>

      <div className="weather-temperature">
        <span className="weather-main-temp">{temperature}°</span>
        <div className="weather-range">
          <span className="weather-high">H {high}°</span>
          <span className="weather-low">L {low}°</span>
        </div>
      </div>

      <div className="weather-rain">
        <span>💧</span>
        <span>{rainChance}% chance of rain</span>
      </div>
    </div>
  );
};

export default WeatherCard;
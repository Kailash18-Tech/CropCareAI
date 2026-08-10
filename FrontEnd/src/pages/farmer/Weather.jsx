import React, { useState } from "react";
import WeatherCard from "../../components/farmer/weather/WeatherCard";
import WeatherLocation from "../../components/farmer/weather/WeatherLocation";
import "../../styles/farmer/Weather.css";

const Weather = () => {
  const [selectedLocation, setSelectedLocation] = useState("Avinashi");

  const weatherData = {
    Avinashi: {
      current: {
        temperature: 31,
        feelsLike: 33,
        condition: "Sunny",
        icon: "☀️",
        humidity: 68,
        wind: 14,
        rainChance: 20,
      },
      forecast: [
        {
          day: "Today",
          date: "Aug 10",
          icon: "☀️",
          condition: "Sunny",
          temperature: 31,
          high: 33,
          low: 25,
          rainChance: 20,
        },
        {
          day: "Tomorrow",
          date: "Aug 11",
          icon: "🌤️",
          condition: "Partly Cloudy",
          temperature: 30,
          high: 32,
          low: 24,
          rainChance: 30,
        },
        {
          day: "Wednesday",
          date: "Aug 12",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 28,
          high: 30,
          low: 24,
          rainChance: 65,
        },
        {
          day: "Thursday",
          date: "Aug 13",
          icon: "🌧️",
          condition: "Rainy",
          temperature: 27,
          high: 29,
          low: 23,
          rainChance: 75,
        },
        {
          day: "Friday",
          date: "Aug 14",
          icon: "⛅",
          condition: "Mostly Cloudy",
          temperature: 29,
          high: 31,
          low: 24,
          rainChance: 45,
        },
        {
          day: "Saturday",
          date: "Aug 15",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 28,
          high: 30,
          low: 23,
          rainChance: 60,
        },
        {
          day: "Sunday",
          date: "Aug 16",
          icon: "☀️",
          condition: "Sunny",
          temperature: 32,
          high: 34,
          low: 25,
          rainChance: 20,
        },
      ],
    },

    Coimbatore: {
      current: {
        temperature: 30,
        feelsLike: 32,
        condition: "Partly Cloudy",
        icon: "🌤️",
        humidity: 65,
        wind: 12,
        rainChance: 25,
      },
      forecast: [
        {
          day: "Today",
          date: "Aug 10",
          icon: "🌤️",
          condition: "Partly Cloudy",
          temperature: 30,
          high: 32,
          low: 24,
          rainChance: 25,
        },
        {
          day: "Tomorrow",
          date: "Aug 11",
          icon: "☀️",
          condition: "Sunny",
          temperature: 31,
          high: 33,
          low: 24,
          rainChance: 15,
        },
        {
          day: "Wednesday",
          date: "Aug 12",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 28,
          high: 30,
          low: 23,
          rainChance: 55,
        },
        {
          day: "Thursday",
          date: "Aug 13",
          icon: "🌧️",
          condition: "Rainy",
          temperature: 27,
          high: 29,
          low: 23,
          rainChance: 70,
        },
        {
          day: "Friday",
          date: "Aug 14",
          icon: "⛅",
          condition: "Cloudy",
          temperature: 29,
          high: 31,
          low: 24,
          rainChance: 40,
        },
        {
          day: "Saturday",
          date: "Aug 15",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 28,
          high: 30,
          low: 23,
          rainChance: 60,
        },
        {
          day: "Sunday",
          date: "Aug 16",
          icon: "☀️",
          condition: "Sunny",
          temperature: 31,
          high: 33,
          low: 24,
          rainChance: 20,
        },
      ],
    },

    Tiruppur: {
      current: {
        temperature: 31,
        feelsLike: 34,
        condition: "Sunny",
        icon: "☀️",
        humidity: 62,
        wind: 15,
        rainChance: 20,
      },
      forecast: [
        {
          day: "Today",
          date: "Aug 10",
          icon: "☀️",
          condition: "Sunny",
          temperature: 31,
          high: 34,
          low: 25,
          rainChance: 20,
        },
        {
          day: "Tomorrow",
          date: "Aug 11",
          icon: "🌤️",
          condition: "Partly Cloudy",
          temperature: 30,
          high: 33,
          low: 24,
          rainChance: 30,
        },
        {
          day: "Wednesday",
          date: "Aug 12",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 29,
          high: 31,
          low: 24,
          rainChance: 55,
        },
        {
          day: "Thursday",
          date: "Aug 13",
          icon: "🌧️",
          condition: "Rainy",
          temperature: 27,
          high: 30,
          low: 23,
          rainChance: 70,
        },
        {
          day: "Friday",
          date: "Aug 14",
          icon: "⛅",
          condition: "Cloudy",
          temperature: 29,
          high: 32,
          low: 24,
          rainChance: 40,
        },
        {
          day: "Saturday",
          date: "Aug 15",
          icon: "🌦️",
          condition: "Light Rain",
          temperature: 28,
          high: 31,
          low: 23,
          rainChance: 60,
        },
        {
          day: "Sunday",
          date: "Aug 16",
          icon: "☀️",
          condition: "Sunny",
          temperature: 32,
          high: 35,
          low: 25,
          rainChance: 20,
        },
      ],
    },
  };

  const selectedWeather =
    weatherData[selectedLocation] || weatherData.Avinashi;

  const current = selectedWeather.current;

  return (
    <div className="weather-page">
      {/* Header */}
      <div className="weather-header">
        <div>
          <p className="weather-eyebrow">CROPCARE AI</p>

          <h1>Weather</h1>

          <p className="weather-subtitle">
            Check weather conditions for your selected location
            and plan your farming activities accordingly.
          </p>
        </div>
      </div>

      {/* Location */}
      <WeatherLocation
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />

      {/* Current Weather */}
      <section className="current-weather">
        <div className="current-weather-main">
          <div className="current-weather-icon">
            {current.icon}
          </div>

          <div>
            <p className="current-weather-label">
              Current Weather — {selectedLocation}
            </p>

            <h2>{current.temperature}°C</h2>

            <p className="current-weather-condition">
              {current.condition}
            </p>
          </div>
        </div>

        <div className="current-weather-details">
          <div className="weather-detail">
            <span>🌡️</span>

            <div>
              <small>Feels Like</small>
              <strong>{current.feelsLike}°C</strong>
            </div>
          </div>

          <div className="weather-detail">
            <span>💧</span>

            <div>
              <small>Humidity</small>
              <strong>{current.humidity}%</strong>
            </div>
          </div>

          <div className="weather-detail">
            <span>💨</span>

            <div>
              <small>Wind</small>
              <strong>{current.wind} km/h</strong>
            </div>
          </div>

          <div className="weather-detail">
            <span>🌧️</span>

            <div>
              <small>Rain Chance</small>
              <strong>{current.rainChance}%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast */}
      <section className="weather-forecast-section">
        <div className="weather-section-header">
          <div>
            <h2>7-Day Forecast</h2>

            <p>
              Forecast for {selectedLocation} for the upcoming
              seven days.
            </p>
          </div>
        </div>

        <div className="weather-grid">
          {selectedWeather.forecast.map((weather, index) => (
            <WeatherCard
              key={index}
              day={weather.day}
              date={weather.date}
              icon={weather.icon}
              condition={weather.condition}
              temperature={weather.temperature}
              high={weather.high}
              low={weather.low}
              rainChance={weather.rainChance}
            />
          ))}
        </div>
      </section>

      {/* Farming Advisory */}
      <section className="weather-advisory">
        <div className="weather-advisory-icon">🌱</div>

        <div>
          <h2>Farming Advisory</h2>

          <p>
            Weather conditions can affect irrigation, spraying,
            harvesting, and other field activities. Check the
            forecast regularly before planning important farming
            operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Weather;
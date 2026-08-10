import React, { useState } from "react";

const LOCATIONS = [
  "Avinashi",
  "Coimbatore",
  "Tiruppur",
  "Erode",
  "Salem",
  "Chennai",
  "Madurai",
  "Trichy",
];

const WeatherLocation = ({ selectedLocation, onLocationChange }) => {
  const [isLocating, setIsLocating] = useState(false);

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        /*
          For now, we use the coordinates only for frontend testing.

          Later, during backend integration:
          latitude + longitude will be sent to the backend,
          which will identify the location and return real weather data.
        */

        onLocationChange("My Location");
        setIsLocating(false);
      },
      () => {
        alert(
          "Unable to access your location. Please allow location access and try again."
        );
        setIsLocating(false);
      }
    );
  };

  return (
    <section className="weather-location">
      <div className="weather-location-heading">
        <div className="weather-location-icon">📍</div>

        <div>
          <h2>Weather Location</h2>
          <p>
            Select a location to view its current weather and forecast.
          </p>
        </div>
      </div>

      <div className="weather-location-controls">
        <div className="weather-location-select-wrapper">
          <label htmlFor="weather-location">
            Select Location
          </label>

          <select
            id="weather-location"
            value={selectedLocation}
            onChange={(event) =>
              onLocationChange(event.target.value)
            }
          >
            {LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="weather-my-location-btn"
          onClick={handleMyLocation}
          disabled={isLocating}
        >
          <span>📍</span>

          {isLocating ? "Finding Location..." : "Use My Location"}
        </button>
      </div>
    </section>
  );
};

export default WeatherLocation;
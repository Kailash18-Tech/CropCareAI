import React from "react";

const SeedLabCard = ({ name, location, type, services }) => {
  const handleViewLaboratory = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${name}, ${location}`
    )}`;

    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="seedlab-card">
      <div className="seedlab-card-top">
        <div className="seedlab-card-icon">🔬</div>

        <span className="seedlab-card-badge">
          {type}
        </span>
      </div>

      <div className="seedlab-card-content">
        <h3>{name}</h3>

        <p className="seedlab-location">
          📍 {location}
        </p>

        <div className="seedlab-services">
          <h4>Testing Services</h4>

          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <span>✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="seedlab-card-footer">
        <button
          type="button"
          className="seedlab-view-btn"
          onClick={handleViewLaboratory}
        >
          View Laboratory
        </button>
      </div>
    </div>
  );
};

export default SeedLabCard;
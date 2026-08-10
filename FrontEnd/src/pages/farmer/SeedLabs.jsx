import React, { useState } from "react";
import SeedLabCard from "../../components/farmer/seedlabs/SeedLabCard";
import "../../styles/farmer/SeedLabs.css";

const seedLabs = [
  {
    id: 1,
    name: "Government Seed Testing Laboratory",
    location: "Coimbatore, Tamil Nadu",
    type: "Government Laboratory",
    services: [
      "Germination Testing",
      "Physical Purity Testing",
      "Seed Quality Testing",
    ],
  },
  {
    id: 2,
    name: "State Seed Testing Laboratory",
    location: "Chennai, Tamil Nadu",
    type: "Government Laboratory",
    services: [
      "Germination Testing",
      "Moisture Testing",
      "Seed Purity Testing",
    ],
  },
  {
    id: 3,
    name: "Agricultural Seed Testing Centre",
    location: "Salem, Tamil Nadu",
    type: "Testing Centre",
    services: [
      "Seed Health Testing",
      "Germination Testing",
      "Quality Analysis",
    ],
  },
];

const locations = [
  "All Locations",
  ...seedLabs.map((lab) => lab.location),
];

const SeedLabs = () => {
  const [selectedLocation, setSelectedLocation] =
    useState("All Locations");

  const filteredLabs =
    selectedLocation === "All Locations"
      ? seedLabs
      : seedLabs.filter(
          (lab) => lab.location === selectedLocation
        );

  return (
    <div className="seedlabs-page">

      {/* =========================================
          HEADER
          ========================================= */}

      <div className="seedlabs-header">
        <p className="seedlabs-eyebrow">
          CROPCARE AI
        </p>

        <h1>Seed Labs</h1>

        <p className="seedlabs-subtitle">
          Find trusted seed testing laboratories and get
          your seeds tested before planting.
        </p>
      </div>


      {/* =========================================
          INTRO CARD
          ========================================= */}

      <div className="seedlabs-intro">

        <div className="seedlabs-intro-content">

          <div className="seedlabs-icon">
            🔬
          </div>

          <div>
            <h2>
              Test Your Seeds Before Planting
            </h2>

            <p>
              Check seed quality, germination potential,
              purity, and other important properties through
              certified seed testing laboratories.
            </p>
          </div>

        </div>

      </div>


      {/* =========================================
          LOCATION SELECTOR
          ========================================= */}

      <div className="seedlabs-location-section">

        <div className="seedlabs-location-header">

          <div>
            <h2>Find a Seed Testing Laboratory</h2>

            <p>
              Select your location to view available seed
              testing laboratories.
            </p>
          </div>

          <div className="seedlabs-location-select-wrapper">

            <label htmlFor="seedlab-location">
              Select Location
            </label>

            <select
              id="seedlab-location"
              value={selectedLocation}
              onChange={(event) =>
                setSelectedLocation(event.target.value)
              }
              className="seedlabs-location-select"
            >
              {locations.map((location) => (
                <option
                  key={location}
                  value={location}
                >
                  {location}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>


      {/* =========================================
          LAB SECTION
          ========================================= */}

      <div className="seedlabs-section">

        <div className="seedlabs-section-header">

          <div>
            <h2>
              Available Seed Laboratories
            </h2>

            <p>
              {selectedLocation === "All Locations"
                ? `Showing all ${filteredLabs.length} seed laboratories`
                : `Showing seed laboratories in ${selectedLocation}`}
            </p>
          </div>

          <span className="seedlabs-result-count">
            {filteredLabs.length}{" "}
            {filteredLabs.length === 1
              ? "Laboratory"
              : "Laboratories"}
          </span>

        </div>


        {/* =========================================
            LAB CARDS
            ========================================= */}

        {filteredLabs.length > 0 ? (

          <div className="seedlabs-grid">

            {filteredLabs.map((lab) => (
              <SeedLabCard
                key={lab.id}
                name={lab.name}
                location={lab.location}
                type={lab.type}
                services={lab.services}
              />
            ))}

          </div>

        ) : (

          <div className="seedlabs-empty">

            <div className="seedlabs-empty-icon">
              🔬
            </div>

            <h3>
              No Seed Labs Found
            </h3>

            <p>
              There are currently no seed testing
              laboratories available for this location.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default SeedLabs;
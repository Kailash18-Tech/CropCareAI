import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/farmer/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Kailash",
    phone: "+91 98765 43210",
    email: "farmer@example.com",
    village: "Avinashi",
    district: "Tiruppur",
    state: "Tamil Nadu",
  });

  const [lands, setLands] = useState([
    {
      id: 1,
      location: "Avinashi",
      landSize: "3.5 Acres",
      landType: "Owned",
      mainCrops: "Tomato, Rice",
      irrigationType: "Drip Irrigation",
      farmingType: "Conventional Farming",
      soilType: "Red Soil",
    },
    {
      id: 2,
      location: "Tiruppur",
      landSize: "2 Acres",
      landType: "Leased",
      mainCrops: "Cotton",
      irrigationType: "Borewell",
      farmingType: "Organic Farming",
      soilType: "Black Soil",
    },
  ]);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLandChange = (landId, event) => {
    const { name, value } = event.target;

    setLands((current) =>
      current.map((land) =>
        land.id === landId
          ? {
              ...land,
              [name]: value,
            }
          : land
      )
    );
  };

  const handleAddLand = () => {
    const newLand = {
      id: Date.now(),
      location: "",
      landSize: "",
      landType: "Owned",
      mainCrops: "",
      irrigationType: "Drip Irrigation",
      farmingType: "Conventional Farming",
      soilType: "Red Soil",
    };

    setLands((current) => [...current, newLand]);
  };

  const handleRemoveLand = (landId) => {
    setLands((current) =>
      current.filter((land) => land.id !== landId)
    );
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* ================================
          Page Header
      ================================= */}

      <div className="profile-header">

        <div>
          <p className="profile-eyebrow">
            CROPCARE AI
          </p>

          <h1>My Profile</h1>

          <p className="profile-subtitle">
            Manage your personal information and agricultural
            land details.
          </p>
        </div>

        {/* Top Right Buttons */}

        <div className="profile-header-actions">

          {!isEditing ? (
            <button
              type="button"
              className="profile-edit-btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </>
          )}

          {/* Logout Button */}

          <button
            type="button"
            className="profile-logout-btn"
            onClick={handleLogout}
          >
            ↪ Logout
          </button>

        </div>

      </div>

      {/* ================================
          Personal Information
      ================================= */}

      <section className="profile-card">

        <div className="profile-identity">

          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{profile.name}</h2>
            <p>Farmer</p>
          </div>

        </div>

        <div className="profile-section">

          <div className="profile-section-heading">

            <div>
              <h3>Personal Information</h3>

              <p>
                Your basic personal and contact information.
              </p>
            </div>

          </div>

          <div className="profile-grid">

            <div className="profile-field">

              <label htmlFor="name">
                Full Name
              </label>

              {isEditing ? (
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.name}
                </div>
              )}

            </div>

            <div className="profile-field">

              <label htmlFor="phone">
                Phone Number
              </label>

              {isEditing ? (
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.phone}
                </div>
              )}

            </div>

            <div className="profile-field">

              <label htmlFor="email">
                Email Address
              </label>

              {isEditing ? (
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.email}
                </div>
              )}

            </div>

            <div className="profile-field">

              <label htmlFor="village">
                Village
              </label>

              {isEditing ? (
                <input
                  id="village"
                  type="text"
                  name="village"
                  value={profile.village}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.village}
                </div>
              )}

            </div>

            <div className="profile-field">

              <label htmlFor="district">
                District
              </label>

              {isEditing ? (
                <input
                  id="district"
                  type="text"
                  name="district"
                  value={profile.district}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.district}
                </div>
              )}

            </div>

            <div className="profile-field">

              <label htmlFor="state">
                State
              </label>

              {isEditing ? (
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={profile.state}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="profile-value">
                  {profile.state}
                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* ================================
          Agricultural Information
      ================================= */}

      <section className="profile-section profile-agriculture-section">

        <div className="profile-section-heading">

          <div>

            <h3>
              Agricultural Information
            </h3>

            <p>
              Manage information about your agricultural lands.
            </p>

          </div>

          {isEditing && (
            <button
              type="button"
              className="profile-add-land-btn"
              onClick={handleAddLand}
            >
              + Add New Land
            </button>
          )}

        </div>

        <div className="profile-lands">

          {lands.map((land, index) => (

            <div
              className="profile-land-card"
              key={land.id}
            >

              <div className="profile-land-header">

                <div className="profile-land-title">

                  <div className="profile-land-icon">
                    🌱
                  </div>

                  <div>

                    <h4>
                      Land {index + 1}
                    </h4>

                    <p>
                      {land.location || "Location not added"}
                    </p>

                  </div>

                </div>

                {isEditing && lands.length > 1 && (
                  <button
                    type="button"
                    className="profile-remove-land-btn"
                    onClick={() =>
                      handleRemoveLand(land.id)
                    }
                  >
                    Remove
                  </button>
                )}

              </div>

              <div className="profile-grid">

                <div className="profile-field">

                  <label>
                    Land Location
                  </label>

                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={land.location}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                      placeholder="Example: Avinashi"
                    />
                  ) : (
                    <div className="profile-value">
                      {land.location || "Not provided"}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Land Size
                  </label>

                  {isEditing ? (
                    <input
                      type="text"
                      name="landSize"
                      value={land.landSize}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                      placeholder="Example: 3.5 Acres"
                    />
                  ) : (
                    <div className="profile-value">
                      {land.landSize || "Not provided"}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Land Type
                  </label>

                  {isEditing ? (
                    <select
                      name="landType"
                      value={land.landType}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                    >
                      <option value="Owned">
                        Owned
                      </option>

                      <option value="Leased">
                        Leased
                      </option>

                      <option value="Shared">
                        Shared
                      </option>
                    </select>
                  ) : (
                    <div className="profile-value">
                      {land.landType}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Main Crops
                  </label>

                  {isEditing ? (
                    <input
                      type="text"
                      name="mainCrops"
                      value={land.mainCrops}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                      placeholder="Example: Tomato, Rice"
                    />
                  ) : (
                    <div className="profile-value">
                      {land.mainCrops || "Not provided"}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Irrigation Type
                  </label>

                  {isEditing ? (
                    <select
                      name="irrigationType"
                      value={land.irrigationType}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                    >
                      <option value="Drip Irrigation">
                        Drip Irrigation
                      </option>

                      <option value="Sprinkler Irrigation">
                        Sprinkler Irrigation
                      </option>

                      <option value="Canal Irrigation">
                        Canal Irrigation
                      </option>

                      <option value="Borewell">
                        Borewell
                      </option>

                      <option value="Rainfed">
                        Rainfed
                      </option>
                    </select>
                  ) : (
                    <div className="profile-value">
                      {land.irrigationType}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Farming Type
                  </label>

                  {isEditing ? (
                    <select
                      name="farmingType"
                      value={land.farmingType}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                    >
                      <option value="Conventional Farming">
                        Conventional Farming
                      </option>

                      <option value="Organic Farming">
                        Organic Farming
                      </option>

                      <option value="Natural Farming">
                        Natural Farming
                      </option>

                      <option value="Mixed Farming">
                        Mixed Farming
                      </option>
                    </select>
                  ) : (
                    <div className="profile-value">
                      {land.farmingType}
                    </div>
                  )}

                </div>

                <div className="profile-field">

                  <label>
                    Soil Type
                  </label>

                  {isEditing ? (
                    <select
                      name="soilType"
                      value={land.soilType}
                      onChange={(event) =>
                        handleLandChange(
                          land.id,
                          event
                        )
                      }
                    >
                      <option value="Red Soil">
                        Red Soil
                      </option>

                      <option value="Black Soil">
                        Black Soil
                      </option>

                      <option value="Alluvial Soil">
                        Alluvial Soil
                      </option>

                      <option value="Sandy Soil">
                        Sandy Soil
                      </option>

                      <option value="Clay Soil">
                        Clay Soil
                      </option>

                      <option value="Loamy Soil">
                        Loamy Soil
                      </option>
                    </select>
                  ) : (
                    <div className="profile-value">
                      {land.soilType}
                    </div>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {isEditing && (
          <button
            type="button"
            className="profile-add-land-bottom-btn"
            onClick={handleAddLand}
          >
            + Add Another Land
          </button>
        )}

      </section>

      {/* ================================
          Account Information
      ================================= */}

      <section className="profile-account-card">

        <div className="profile-account-icon">
          🔐
        </div>

        <div>

          <h3>
            Account Information
          </h3>

          <p>
            Your account and authentication details will be
            securely managed when the backend is connected.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Profile;
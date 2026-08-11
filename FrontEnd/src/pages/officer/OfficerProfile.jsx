import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/officer/OfficerProfile.css";

const OfficerProfile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Arun Kumar",
    employeeId: "DO-2026-001",
    phone: "+91 98765 43210",
    email: "officer@cropcare.ai",
    district: "Tiruppur",
    state: "Tamil Nadu",
    designation: "District Agriculture Officer",
    department: "Department of Agriculture",
  });

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
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
    <div className="officer-profile-page">

      {/* ================================
          PAGE HEADER
      ================================= */}

      <div className="officer-profile-header">

        <div>
          <p className="officer-profile-eyebrow">
            CROPCARE AI
          </p>

          <h1>Officer Profile</h1>

          <p className="officer-profile-subtitle">
            Manage your officer profile and department information.
          </p>
        </div>

        {/* Header Actions */}

        <div className="officer-profile-header-actions">

          {!isEditing ? (
            <button
              type="button"
              className="officer-profile-edit-btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <>
              <button
                type="button"
                className="officer-profile-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="officer-profile-save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </>
          )}

          <button
            type="button"
            className="officer-profile-logout-btn"
            onClick={handleLogout}
          >
            ↪ Logout
          </button>

        </div>

      </div>


      {/* ================================
          PROFILE CARD
      ================================= */}

      <section className="officer-profile-card">

        {/* Officer Identity */}

        <div className="officer-profile-identity">

          <div className="officer-profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{profile.name}</h2>

            <p>
              {profile.designation}
            </p>

            <span>
              Employee ID: {profile.employeeId}
            </span>
          </div>

        </div>


        {/* ================================
            PERSONAL INFORMATION
        ================================= */}

        <div className="officer-profile-section">

          <div className="officer-profile-section-heading">

            <div>
              <h3>Personal Information</h3>

              <p>
                Your basic personal and contact information.
              </p>
            </div>

          </div>


          <div className="officer-profile-grid">

            {/* Full Name */}

            <div className="officer-profile-field">

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
                <div className="officer-profile-value">
                  {profile.name}
                </div>
              )}

            </div>


            {/* Employee ID */}

            <div className="officer-profile-field">

              <label htmlFor="employeeId">
                Employee ID
              </label>

              <div className="officer-profile-value officer-profile-readonly">
                {profile.employeeId}
              </div>

            </div>


            {/* Phone */}

            <div className="officer-profile-field">

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
                <div className="officer-profile-value">
                  {profile.phone}
                </div>
              )}

            </div>


            {/* Email */}

            <div className="officer-profile-field">

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
                <div className="officer-profile-value">
                  {profile.email}
                </div>
              )}

            </div>

          </div>

        </div>


        {/* ================================
            OFFICER INFORMATION
        ================================= */}

        <div className="officer-profile-section">

          <div className="officer-profile-section-heading">

            <div>
              <h3>Officer Information</h3>

              <p>
                Your department and administrative details.
              </p>
            </div>

          </div>


          <div className="officer-profile-grid">

            {/* Designation */}

            <div className="officer-profile-field">

              <label htmlFor="designation">
                Designation
              </label>

              {isEditing ? (
                <input
                  id="designation"
                  type="text"
                  name="designation"
                  value={profile.designation}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="officer-profile-value">
                  {profile.designation}
                </div>
              )}

            </div>


            {/* Department */}

            <div className="officer-profile-field">

              <label htmlFor="department">
                Department
              </label>

              {isEditing ? (
                <input
                  id="department"
                  type="text"
                  name="department"
                  value={profile.department}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="officer-profile-value">
                  {profile.department}
                </div>
              )}

            </div>


            {/* District */}

            <div className="officer-profile-field">

              <label htmlFor="district">
                Assigned District
              </label>

              {isEditing ? (
                <select
                  id="district"
                  name="district"
                  value={profile.district}
                  onChange={handleProfileChange}
                >
                  <option value="Tiruppur">
                    Tiruppur
                  </option>

                  <option value="Coimbatore">
                    Coimbatore
                  </option>

                  <option value="Erode">
                    Erode
                  </option>

                  <option value="Salem">
                    Salem
                  </option>

                  <option value="Namakkal">
                    Namakkal
                  </option>
                </select>
              ) : (
                <div className="officer-profile-value">
                  {profile.district}
                </div>
              )}

            </div>


            {/* State */}

            <div className="officer-profile-field">

              <label htmlFor="state">
                State
              </label>

              <div className="officer-profile-value officer-profile-readonly">
                {profile.state}
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          ACCESS INFORMATION
      ================================= */}

      <section className="officer-profile-access-card">

        <div className="officer-profile-access-icon">
          🛡️
        </div>

        <div className="officer-profile-access-content">

          <h3>
            Officer Access
          </h3>

          <p>
            Your account has access to district-level
            agricultural monitoring, farmer management,
            disease monitoring, mandi information,
            government schemes, and reports.
          </p>

          <div className="officer-profile-access-badge">
            District Officer
          </div>

        </div>

      </section>


      {/* ================================
          ACCOUNT INFORMATION
      ================================= */}

      <section className="officer-profile-account-card">

        <div className="officer-profile-account-icon">
          🔐
        </div>

        <div>

          <h3>
            Account Information
          </h3>

          <p>
            Your authentication and account security details
            will be securely managed when the backend is connected.
          </p>

        </div>

      </section>

    </div>
  );
};

export default OfficerProfile;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin/AdminProfile.css";

const AdminProfile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Admin User",
    employeeId: "ADM-2026-001",
    phone: "+91 98765 43210",
    email: "admin@cropcare.ai",
    designation: "System Administrator",
    department: "Department of Agriculture",
    organization: "CropCare AI",
    role: "Super Administrator",
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
    <div className="admin-profile-page">

      {/* =================================
          PAGE HEADER
      ================================== */}

      <div className="admin-profile-header">

        <div>
          <p className="admin-profile-eyebrow">
            CROPCARE AI
          </p>

          <h1>Admin Profile</h1>

          <p className="admin-profile-subtitle">
            Manage your administrator profile and system account information.
          </p>
        </div>

        <div className="admin-profile-header-actions">

          {!isEditing ? (
            <button
              type="button"
              className="admin-profile-edit-btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <>
              <button
                type="button"
                className="admin-profile-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="admin-profile-save-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </>
          )}

          <button
            type="button"
            className="admin-profile-logout-btn"
            onClick={handleLogout}
          >
            ↪ Logout
          </button>

        </div>

      </div>


      {/* =================================
          MAIN PROFILE CARD
      ================================== */}

      <section className="admin-profile-card">

        {/* =================================
            ADMIN IDENTITY
        ================================== */}

        <div className="admin-profile-identity">

          <div className="admin-profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="admin-profile-identity-content">

            <div className="admin-profile-name-row">

              <h2>{profile.name}</h2>

              <span className="admin-profile-status">
                Active
              </span>

            </div>

            <p>
              {profile.designation}
            </p>

            <span>
              Employee ID: {profile.employeeId}
            </span>

          </div>

        </div>


        {/* =================================
            PERSONAL INFORMATION
        ================================== */}

        <div className="admin-profile-section">

          <div className="admin-profile-section-heading">

            <div>
              <h3>Personal Information</h3>

              <p>
                Your basic personal and contact information.
              </p>
            </div>

          </div>

          <div className="admin-profile-grid">

            {/* Full Name */}

            <div className="admin-profile-field">

              <label htmlFor="admin-name">
                Full Name
              </label>

              {isEditing ? (
                <input
                  id="admin-name"
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="admin-profile-value">
                  {profile.name}
                </div>
              )}

            </div>


            {/* Employee ID */}

            <div className="admin-profile-field">

              <label htmlFor="admin-employee-id">
                Employee ID
              </label>

              <div className="admin-profile-value admin-profile-readonly">
                {profile.employeeId}
              </div>

            </div>


            {/* Phone */}

            <div className="admin-profile-field">

              <label htmlFor="admin-phone">
                Phone Number
              </label>

              {isEditing ? (
                <input
                  id="admin-phone"
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="admin-profile-value">
                  {profile.phone}
                </div>
              )}

            </div>


            {/* Email */}

            <div className="admin-profile-field">

              <label htmlFor="admin-email">
                Email Address
              </label>

              {isEditing ? (
                <input
                  id="admin-email"
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="admin-profile-value">
                  {profile.email}
                </div>
              )}

            </div>

          </div>

        </div>


        {/* =================================
            ADMINISTRATION INFORMATION
        ================================== */}

        <div className="admin-profile-section">

          <div className="admin-profile-section-heading">

            <div>
              <h3>Administration Information</h3>

              <p>
                Your administrative role and organizational details.
              </p>
            </div>

          </div>

          <div className="admin-profile-grid">

            {/* Designation */}

            <div className="admin-profile-field">

              <label htmlFor="admin-designation">
                Designation
              </label>

              {isEditing ? (
                <input
                  id="admin-designation"
                  type="text"
                  name="designation"
                  value={profile.designation}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="admin-profile-value">
                  {profile.designation}
                </div>
              )}

            </div>


            {/* Department */}

            <div className="admin-profile-field">

              <label htmlFor="admin-department">
                Department
              </label>

              {isEditing ? (
                <input
                  id="admin-department"
                  type="text"
                  name="department"
                  value={profile.department}
                  onChange={handleProfileChange}
                />
              ) : (
                <div className="admin-profile-value">
                  {profile.department}
                </div>
              )}

            </div>


            {/* Organization */}

            <div className="admin-profile-field">

              <label htmlFor="admin-organization">
                Organization
              </label>

              <div className="admin-profile-value admin-profile-readonly">
                {profile.organization}
              </div>

            </div>


            {/* System Role */}

            <div className="admin-profile-field">

              <label htmlFor="admin-role">
                System Role
              </label>

              <div className="admin-profile-value admin-profile-readonly">
                {profile.role}
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          SYSTEM ACCESS
      ================================== */}

      <section className="admin-profile-access-card">

        <div className="admin-profile-access-icon">
          🛡️
        </div>

        <div className="admin-profile-access-content">

          <div className="admin-profile-access-heading">

            <div>
              <h3>System Access</h3>

              <p>
                Your administrator account has system-wide management privileges.
              </p>
            </div>

            <span className="admin-profile-access-badge">
              Super Administrator
            </span>

          </div>


          <div className="admin-profile-permissions">

            <span>✓ User Management</span>

            <span>✓ Officer Management</span>

            <span>✓ Farmer Management</span>

            <span>✓ Notifications</span>

            <span>✓ Reports &amp; Analytics</span>

            <span>✓ System Settings</span>

          </div>

        </div>

      </section>


      {/* =================================
          ACCOUNT INFORMATION
      ================================== */}

      <section className="admin-profile-account-card">

        <div className="admin-profile-account-icon">
          🔐
        </div>

        <div className="admin-profile-account-content">

          <h3>
            Account Information
          </h3>

          <p>
            Your authentication and account security details
            will be securely managed when the backend is connected.
          </p>

          <div className="admin-profile-account-status">

            <span className="admin-profile-account-dot"></span>

            Account is active and secure

          </div>

        </div>

      </section>

    </div>
  );
};

export default AdminProfile;


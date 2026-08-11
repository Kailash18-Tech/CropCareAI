import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin/AdminSettings.css";

const AdminSettings = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const [dashboardSettings, setDashboardSettings] = useState({
    autoRefresh: true,
    compactLayout: false,
  });

  const handleDashboardChange = (name) => {
    setDashboardSettings((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  return (
    <div className="admin-settings-page">

      {/* Page Header */}
      <div className="admin-settings-header">
        <div>
          <p className="admin-settings-eyebrow">
            CROPCARE AI
          </p>

          <h1>Settings</h1>

          <p className="admin-settings-subtitle">
            Manage your administrator preferences and account settings.
          </p>
        </div>

        <button
          type="button"
          className="admin-settings-save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>


      {/* Language */}

      <section className="admin-settings-card">

        <div className="admin-settings-card-header">
          <div className="admin-settings-icon">
            🌐
          </div>

          <div>
            <h2>Language</h2>

            <p>
              Choose the language used throughout CropCare AI.
            </p>
          </div>
        </div>

        <div className="admin-settings-field">

          <label htmlFor="admin-language">
            Application Language
          </label>

          <select
            id="admin-language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="English">
              English
            </option>

            <option value="Tamil">
              Tamil
            </option>
          </select>

        </div>

      </section>


      {/* Appearance */}

      <section className="admin-settings-card">

        <div className="admin-settings-card-header">
          <div className="admin-settings-icon">
            🎨
          </div>

          <div>
            <h2>Appearance</h2>

            <p>
              Customize how the CropCare AI interface appears.
            </p>
          </div>
        </div>

        <div className="admin-settings-field">

          <label htmlFor="admin-theme">
            Theme
          </label>

          <select
            id="admin-theme"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
          >
            <option value="Light">
              Light
            </option>

            <option value="Dark">
              Dark
            </option>

            <option value="System">
              System Default
            </option>
          </select>

        </div>

      </section>


      {/* Dashboard Preferences */}

      <section className="admin-settings-card">

        <div className="admin-settings-card-header">
          <div className="admin-settings-icon">
            ⚙️
          </div>

          <div>
            <h2>Dashboard Preferences</h2>

            <p>
              Customize how administrator dashboard information is displayed.
            </p>
          </div>
        </div>

        <div className="admin-settings-options">

          <div className="admin-settings-option">

            <div>
              <h3>Dashboard Auto Refresh</h3>

              <p>
                Automatically refresh dashboard information when new data
                becomes available.
              </p>
            </div>

            <button
              type="button"
              className={`admin-settings-toggle ${
                dashboardSettings.autoRefresh ? "active" : ""
              }`}
              onClick={() => handleDashboardChange("autoRefresh")}
              aria-label="Toggle dashboard auto refresh"
            >
              <span></span>
            </button>

          </div>


          <div className="admin-settings-option">

            <div>
              <h3>Compact Layout</h3>

              <p>
                Display administrator dashboard information using a more
                compact layout.
              </p>
            </div>

            <button
              type="button"
              className={`admin-settings-toggle ${
                dashboardSettings.compactLayout ? "active" : ""
              }`}
              onClick={() => handleDashboardChange("compactLayout")}
              aria-label="Toggle compact layout"
            >
              <span></span>
            </button>

          </div>

        </div>

      </section>


      {/* Security */}

      <section className="admin-settings-card">

        <div className="admin-settings-card-header">
          <div className="admin-settings-icon">
            🔒
          </div>

          <div>
            <h2>Security</h2>

            <p>
              Manage your administrator account security.
            </p>
          </div>
        </div>

        <div className="admin-settings-security-row">

          <div>
            <h3>Password</h3>

            <p>
              Change your administrator account password.
            </p>
          </div>

          <button
            type="button"
            className="admin-settings-secondary-btn"
          >
            Change Password
          </button>

        </div>

      </section>


      {/* Account */}

      <section className="admin-settings-card">

        <div className="admin-settings-card-header">
          <div className="admin-settings-icon">
            👤
          </div>

          <div>
            <h2>Account</h2>

            <p>
              Information about your CropCare AI administrator account.
            </p>
          </div>
        </div>

        <div className="admin-settings-account-row">
          <span>
            Account Status
          </span>

          <strong className="admin-settings-status">
            Active
          </strong>
        </div>

        <div className="admin-settings-account-row">
          <span>
            Account Role
          </span>

          <strong>
            Super Administrator
          </strong>
        </div>

      </section>


      {/* Logout */}

      <section className="admin-settings-logout-card">

        <div>
          <h2>Logout</h2>

          <p>
            Sign out of your CropCare AI administrator account on this device.
          </p>
        </div>

        <button
          type="button"
          className="admin-settings-logout-btn"
          onClick={handleLogout}
        >
          ↪ Logout
        </button>

      </section>

    </div>
  );
};

export default AdminSettings;
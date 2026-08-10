import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/farmer/Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    weather: true,
    disease: true,
    mandi: true,
    schemes: true,
  });

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const handleNotificationChange = (name) => {
    setNotifications((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="settings-page">

      {/* Page Header */}
      <div className="settings-header">
        <div>
          <p className="settings-eyebrow">
            CROPCARE AI
          </p>

          <h1>Settings</h1>

          <p className="settings-subtitle">
            Manage your preferences and account settings.
          </p>
        </div>
      </div>

      {/* ================================
          Notifications
      ================================= */}

      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-icon">
            🔔
          </div>

          <div>
            <h2>Notification Preferences</h2>

            <p>
              Choose the alerts and updates you want to
              receive.
            </p>
          </div>
        </div>

        <div className="settings-options">

          <div className="settings-option">
            <div>
              <h3>Weather Alerts</h3>
              <p>
                Receive important weather updates and
                warnings.
              </p>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.weather ? "active" : ""
              }`}
              onClick={() =>
                handleNotificationChange("weather")
              }
              aria-label="Toggle weather alerts"
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <h3>Disease Alerts</h3>
              <p>
                Get alerts about crop disease risks and
                prevention information.
              </p>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.disease ? "active" : ""
              }`}
              onClick={() =>
                handleNotificationChange("disease")
              }
              aria-label="Toggle disease alerts"
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <h3>Mandi Price Alerts</h3>
              <p>
                Receive updates when important crop prices
                change.
              </p>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.mandi ? "active" : ""
              }`}
              onClick={() =>
                handleNotificationChange("mandi")
              }
              aria-label="Toggle mandi price alerts"
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div>
              <h3>Government Scheme Alerts</h3>
              <p>
                Stay informed about new farmer welfare
                schemes and benefits.
              </p>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.schemes ? "active" : ""
              }`}
              onClick={() =>
                handleNotificationChange("schemes")
              }
              aria-label="Toggle government scheme alerts"
            >
              <span></span>
            </button>
          </div>

        </div>

      </section>

      {/* ================================
          Language
      ================================= */}

      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-icon">
            🌐
          </div>

          <div>
            <h2>Language</h2>

            <p>
              Choose the language used throughout CropCare AI.
            </p>
          </div>
        </div>

        <div className="settings-field">

          <label htmlFor="language">
            Application Language
          </label>

          <select
            id="language"
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value)
            }
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

      {/* ================================
          Appearance
      ================================= */}

      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-icon">
            🎨
          </div>

          <div>
            <h2>Appearance</h2>

            <p>
              Customize how the CropCare AI interface
              appears.
            </p>
          </div>
        </div>

        <div className="settings-field">

          <label htmlFor="theme">
            Theme
          </label>

          <select
            id="theme"
            value={theme}
            onChange={(event) =>
              setTheme(event.target.value)
            }
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

      {/* ================================
          Security
      ================================= */}

      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-icon">
            🔒
          </div>

          <div>
            <h2>Security</h2>

            <p>
              Manage your account security.
            </p>
          </div>
        </div>

        <div className="settings-security-row">

          <div>
            <h3>Password</h3>

            <p>
              Change your account password.
            </p>
          </div>

          <button
            type="button"
            className="settings-secondary-btn"
          >
            Change Password
          </button>

        </div>

      </section>

      {/* ================================
          Account
      ================================= */}

      <section className="settings-card">

        <div className="settings-card-header">
          <div className="settings-icon">
            👤
          </div>

          <div>
            <h2>Account</h2>

            <p>
              Information about your CropCare AI account.
            </p>
          </div>
        </div>

        <div className="settings-account-row">

          <span>
            Account Status
          </span>

          <strong className="settings-status">
            Active
          </strong>

        </div>

      </section>

      {/* ================================
          Logout
      ================================= */}

      <section className="settings-logout-card">

        <div>
          <h2>Logout</h2>

          <p>
            Sign out of your CropCare AI account on this
            device.
          </p>
        </div>

        <button
          type="button"
          className="settings-logout-btn"
          onClick={handleLogout}
        >
          ↪ Logout
        </button>

      </section>

    </div>
  );
};

export default Settings;
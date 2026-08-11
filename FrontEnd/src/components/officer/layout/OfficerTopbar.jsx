
import { NavLink, useLocation } from "react-router-dom";

import "../../../styles/officer/OfficerTopbar.css";

const pageTitles = {
  "/officer": "Dashboard",
  "/officer/farmers": "Farmer Management",
  "/officer/disease-reports": "Disease Reports",
  "/officer/soil-reports": "Soil Reports",
  "/officer/mandi": "Mandi Monitoring",
  "/officer/seedlabs": "Seed Labs",
  "/officer/schemes": "Government Schemes",
  "/officer/reports": "Reports",
  "/officer/profile": "Profile",
  "/officer/settings": "Settings",
  "/officer/notifications": "Notifications",
};

export default function OfficerTopbar({ onMobileMenu }) {
  const location = useLocation();

  const pageTitle =
    pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="officer-topbar">

      {/* Mobile menu */}
      <button
        type="button"
        className="officer-hamburger-btn"
        onClick={onMobileMenu}
        aria-label="Open sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Page title */}
      <div className="officer-top-mid">
        <div className="officer-crumbs">
          Officer / <strong>{pageTitle}</strong>
        </div>

        <h1>{pageTitle}</h1>
      </div>

      {/* Right side */}
      <div className="officer-top-right">

        {/* Notifications */}
        <NavLink
          to="/officer/notifications"
          className="officer-icon-chip"
          aria-label="Notifications"
        >
          🔔

          <span className="officer-notification-dot"></span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/officer/profile"
          className="officer-profile-chip"
          aria-label="Open officer profile"
        >
          <div className="officer-profile-avatar">
            O
          </div>

          <div className="officer-profile-info">
            <span className="officer-profile-name">
              Officer
            </span>

            <span className="officer-profile-role">
              Agriculture Officer
            </span>
          </div>
        </NavLink>

      </div>

    </header>
  );
}


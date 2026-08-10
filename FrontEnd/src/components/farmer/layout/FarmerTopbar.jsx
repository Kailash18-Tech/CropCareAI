import { NavLink, useLocation } from "react-router-dom";
import "../../../styles/farmer/FarmerTopbar.css";

const pageTitles = {
  "/farmer": "Dashboard",
  "/farmer/disease": "Disease Detection",
  "/farmer/soil": "Soil & Crop Advice",
  "/farmer/mandi": "Mandi Prices",
  "/farmer/seed-labs": "Seed Labs",
  "/farmer/weather": "Weather",
  "/farmer/schemes": "Government Schemes",
  "/farmer/reports": "Reports",
  "/farmer/profile": "Profile",
  "/farmer/settings": "Settings",
  "/farmer/notifications": "Notifications",
};

export default function FarmerTopbar({ onMobileMenu }) {
  const location = useLocation();

  const pageTitle =
    pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="farmer-topbar">

      {/* Mobile menu */}
      <button
        type="button"
        className="farmer-hamburger-btn"
        onClick={onMobileMenu}
        aria-label="Open sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Page title */}
      <div className="farmer-top-mid">
        <div className="farmer-crumbs">
          Farmer / <strong>{pageTitle}</strong>
        </div>

        <h1>{pageTitle}</h1>
      </div>

      {/* Right side */}
      <div className="farmer-top-right">

        {/* Notifications */}
        <NavLink
          to="/farmer/notifications"
          className="farmer-icon-chip"
          aria-label="Notifications"
        >
          🔔
          <span className="farmer-notification-dot"></span>
        </NavLink>

        {/* Profile */}
        <NavLink
          to="/farmer/profile"
          className="farmer-profile-chip"
          aria-label="Open farmer profile"
        >
          <div className="farmer-profile-avatar">
            M
          </div>

          <div className="farmer-profile-info">
            <span className="farmer-profile-name">
              Murugan K
            </span>

            <span className="farmer-profile-role">
              Farmer
            </span>
          </div>
        </NavLink>

      </div>

    </header>
  );
}
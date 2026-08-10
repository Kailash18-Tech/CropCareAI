import { NavLink } from "react-router-dom";
import "../../../styles/farmer/FarmerSidebar.css";

export default function FarmerSidebar({
  collapsed,
  mobileOpen,
  onToggle,
  onClose,
}) {
  const navItems = [
    {
      label: "Dashboard",
      icon: "🏠",
      to: "/farmer",
    },
    {
      label: "Disease Detection",
      icon: "🩺",
      to: "/farmer/disease",
    },
    {
      label: "Soil & Crop Advice",
      icon: "🌾",
      to: "/farmer/soil",
    },
    {
      label: "Mandi Prices",
      icon: "📈",
      to: "/farmer/mandi",
    },
    {
      label: "Seed Labs",
      icon: "🧪",
      to: "/farmer/seedlabs",
    },
    {
      label: "Weather",
      icon: "☁️",
      to: "/farmer/weather",
    },
    {
      label: "Government Schemes",
      icon: "📋",
      to: "/farmer/schemes",
    },
    {
      label: "Reports",
      icon: "📊",
      to: "/farmer/reports",
    },
  ];

  return (
    <aside
      className={`farmer-sidebar ${
        collapsed ? "collapsed" : ""
      } ${mobileOpen ? "mobile-open" : ""}`}
    >

      {/* =========================
          SIDEBAR TOP
      ========================= */}

      <div className="farmer-sidebar-top">

        <NavLink
          to="/farmer"
          className="farmer-brand"
          onClick={onClose}
        >
          <div className="farmer-brand-mark">
            🌱
          </div>

          <span className="farmer-brand-text">
            CropCare<span>AI</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="farmer-collapse-btn"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "→" : "←"}
        </button>

      </div>


      {/* =========================
          ROLE
      ========================= */}

      <div className="farmer-side-role">
        Farmer Workspace
      </div>


      {/* =========================
          MAIN NAVIGATION
      ========================= */}

      <nav className="farmer-side-nav">

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/farmer"}
            className={({ isActive }) =>
              `farmer-side-link ${
                isActive ? "active" : ""
              }`
            }
            onClick={onClose}
          >
            <span className="farmer-side-icon">
              {item.icon}
            </span>

            <span className="farmer-side-label">
              {item.label}
            </span>
          </NavLink>
        ))}

      </nav>


      {/* =========================
          ACCOUNT NAVIGATION
          PROFILE + SETTINGS
      ========================= */}

      <div className="farmer-side-account">

        <NavLink
          to="/farmer/profile"
          className={({ isActive }) =>
            `farmer-side-link ${
              isActive ? "active" : ""
            }`
          }
          onClick={onClose}
        >
          <span className="farmer-side-icon">
            👤
          </span>

          <span className="farmer-side-label">
            Profile
          </span>
        </NavLink>


        <NavLink
          to="/farmer/settings"
          className={({ isActive }) =>
            `farmer-side-link ${
              isActive ? "active" : ""
            }`
          }
          onClick={onClose}
        >
          <span className="farmer-side-icon">
            ⚙️
          </span>

          <span className="farmer-side-label">
            Settings
          </span>
        </NavLink>

      </div>


      {/* =========================
          SIDEBAR FOOTER
      ========================= */}

      <div className="farmer-side-foot">

        <div className="farmer-side-user">

          <div className="farmer-user-avatar">
            M
          </div>

          <div className="farmer-user-info">
            <strong>Murugan K</strong>
            <span>Farmer</span>
          </div>

        </div>

      </div>

    </aside>
  );
}
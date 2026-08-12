import { NavLink } from "react-router-dom";

import "../../../styles/officer/OfficerSidebar.css";

export default function OfficerSidebar({
collapsed,
mobileOpen,
onToggle,
onClose,
}) {
const navItems = [
{
label: "Dashboard",
icon: "🏠",
to: "/officer",
},
{
label: "Farmer Management",
icon: "👨‍🌾",
to: "/officer/farmers",
},
{
label: "Disease Reports",
icon: "🩺",
to: "/officer/diseasereports",
},
{
label: "Soil Information",
icon: "🌱",
to: "/officer/soilinfo",
},
{
label: "Mandi Monitoring",
icon: "📈",
to: "/officer/mandi",
},
{
label: "Government Schemes",
icon: "📋",
to: "/officer/schemes",
},
{
label: "Send Alert",
icon: "⚠️",
to: "/officer/sendalert",
},
{
label: "Reports",
icon: "📊",
to: "/officer/reports",
},
];

return (
<aside
className={`officer-sidebar ${
        collapsed ? "collapsed" : ""
      } ${mobileOpen ? "mobile-open" : ""}`}
>

  {/* =========================
      SIDEBAR TOP
  ========================= */}

  <div className="officer-sidebar-top">

    <NavLink
      to="/officer"
      className="officer-brand"
      onClick={onClose}
    >
      <div className="officer-brand-mark">
        🌱
      </div>

      <span className="officer-brand-text">
        CropCare<span>AI</span>
      </span>
    </NavLink>

    <button
      type="button"
      className="officer-collapse-btn"
      onClick={onToggle}
      aria-label="Toggle sidebar"
    >
      {collapsed ? "→" : "←"}
    </button>

  </div>


  {/* =========================
      ROLE
  ========================= */}

  <div className="officer-side-role">
    Officer Workspace
  </div>


  {/* =========================
      MAIN NAVIGATION
      NO DROPDOWNS
  ========================= */}

  <nav className="officer-side-nav">

    {navItems.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.to === "/officer"}
        className={({ isActive }) =>
          `officer-side-link ${
            isActive ? "active" : ""
          }`
        }
        onClick={onClose}
      >
        <span className="officer-side-icon">
          {item.icon}
        </span>

        <span className="officer-side-label">
          {item.label}
        </span>
      </NavLink>
    ))}

  </nav>


  {/* =========================
      ACCOUNT NAVIGATION
  ========================= */}

  <div className="officer-side-account">

    <NavLink
      to="/officer/profile"
      className={({ isActive }) =>
        `officer-side-link ${
          isActive ? "active" : ""
        }`
      }
      onClick={onClose}
    >
      <span className="officer-side-icon">
        👤
      </span>

      <span className="officer-side-label">
        Profile
      </span>
    </NavLink>


    <NavLink
      to="/officer/settings"
      className={({ isActive }) =>
        `officer-side-link ${
          isActive ? "active" : ""
        }`
      }
      onClick={onClose}
    >
      <span className="officer-side-icon">
        ⚙️
      </span>

      <span className="officer-side-label">
        Settings
      </span>
    </NavLink>

  </div>


  {/* =========================
      SIDEBAR FOOTER
  ========================= */}

  <div className="officer-side-foot">

    <div className="officer-side-user">

      <div className="officer-user-avatar">
        O
      </div>

      <div className="officer-user-info">
        <strong>Officer</strong>
        <span>Agriculture Officer</span>
      </div>

    </div>

  </div>

</aside>

);
}

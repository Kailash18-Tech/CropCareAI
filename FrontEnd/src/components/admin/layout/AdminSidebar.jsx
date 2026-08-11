import { NavLink } from "react-router-dom";

import "../../../styles/admin/AdminSidebar.css";

export default function AdminSidebar({
  collapsed,
  mobileOpen,
  onToggle,
  onClose,
}) {
  const navItems = [
    {
      label: "Dashboard",
      icon: "🏠",
      to: "/admin",
    },
    {
      label: "Farmer Management",
      icon: "👨‍🌾",
      to: "/admin/farmers",
    },
    {
      label: "Officer Management",
      icon: "👨‍💼",
      to: "/admin/officers",
    },
    {
      label: "Admin Management",
      icon: "🛡️",
      to: "/admin/manage-admins",
    },
    {
      label: "Disease Monitoring",
      icon: "🩺",
      to: "/admin/disease-reports",
    },
    {
      label: "Seed Labs",
      icon: "🧪",
      to: "/admin/seedlabs",
    },
    {
      label: "Mandi Monitoring",
      icon: "📈",
      to: "/admin/mandi",
    },
    {
      label: "Government Schemes",
      icon: "📋",
      to: "/admin/schemes",
    },
    {
      label: "Reports",
      icon: "📊",
      to: "/admin/reports",
    },
    {
      label: "Notifications",
      icon: "🔔",
      to: "/admin/notifications",
    },
  ];

  return (
    <aside
      className={`admin-sidebar ${
        collapsed ? "collapsed" : ""
      } ${mobileOpen ? "mobile-open" : ""}`}
    >
      {/* =========================
          SIDEBAR TOP
      ========================= */}

      <div className="admin-sidebar-top">
        <NavLink
          to="/admin"
          className="admin-brand"
          onClick={onClose}
        >
          <div className="admin-brand-mark">
            🌱
          </div>

          <span className="admin-brand-text">
            CropCare<span>AI</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="admin-collapse-btn"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* =========================
          ROLE
      ========================= */}

      <div className="admin-side-role">
        Admin Workspace
      </div>

      {/* =========================
          MAIN NAVIGATION
      ========================= */}

      <nav className="admin-side-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/admin"}
            className={({ isActive }) =>
              `admin-side-link ${
                isActive ? "active" : ""
              }`
            }
            onClick={onClose}
          >
            <span className="admin-side-icon">
              {item.icon}
            </span>

            <span className="admin-side-label">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* =========================
          ACCOUNT NAVIGATION
          PROFILE + SETTINGS
      ========================= */}

      <div className="admin-side-account">
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `admin-side-link ${
              isActive ? "active" : ""
            }`
          }
          onClick={onClose}
        >
          <span className="admin-side-icon">
            👤
          </span>

          <span className="admin-side-label">
            Profile
          </span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `admin-side-link ${
              isActive ? "active" : ""
            }`
          }
          onClick={onClose}
        >
          <span className="admin-side-icon">
            ⚙️
          </span>

          <span className="admin-side-label">
            Settings
          </span>
        </NavLink>
      </div>

      {/* =========================
          SIDEBAR FOOTER
      ========================= */}

      <div className="admin-side-foot">
        <div className="admin-side-user">
          <div className="admin-user-avatar">
            A
          </div>

          <div className="admin-user-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
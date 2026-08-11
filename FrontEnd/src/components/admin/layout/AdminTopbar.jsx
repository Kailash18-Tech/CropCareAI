import { NavLink, useLocation } from "react-router-dom";
import "../../../styles/admin/AdminTopbar.css";

export default function AdminTopbar({ onMobileMenu }) {
  const location = useLocation();

  const getPageInfo = () => {
    const path = location.pathname;

    if (path === "/admin") {
      return {
        crumb: "Admin",
        title: "Dashboard",
      };
    }

    if (path.includes("/farmers")) {
      return {
        crumb: "Admin / Farmers",
        title: "Farmer Management",
      };
    }

    if (path.includes("/officers")) {
      return {
        crumb: "Admin / Officers",
        title: "Officer Management",
      };
    }

    if (path.includes("/seedlabs")) {
      return {
        crumb: "Admin / Seed Labs",
        title: "Seed Lab Management",
      };
    }

    if (path.includes("/schemes")) {
      return {
        crumb: "Admin / Schemes",
        title: "Scheme Management",
      };
    }

    if (path.includes("/reports")) {
      return {
        crumb: "Admin / Reports",
        title: "Reports & Analytics",
      };
    }

    if (path.includes("/notifications")) {
      return {
        crumb: "Admin / Notifications",
        title: "Notifications",
      };
    }

    if (path.includes("/profile")) {
      return {
        crumb: "Admin / Profile",
        title: "Profile",
      };
    }

    if (path.includes("/settings")) {
      return {
        crumb: "Admin / Settings",
        title: "Settings",
      };
    }

    return {
      crumb: "Admin",
      title: "Administration",
    };
  };

  const { crumb, title } = getPageInfo();

  return (
    <header className="admin-topbar">

      {/* =========================
          MOBILE HAMBURGER
      ========================= */}

      <button
        type="button"
        className="admin-hamburger-btn"
        onClick={onMobileMenu}
        aria-label="Open sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* =========================
          PAGE TITLE
      ========================= */}

      <div className="admin-top-mid">

        <div className="admin-crumbs">
          <strong>{crumb}</strong>
        </div>

        <h1>{title}</h1>

      </div>


      {/* =========================
          TOPBAR RIGHT
      ========================= */}

      <div className="admin-top-right">

        {/* Notifications */}

        <NavLink
          to="/admin/notifications"
          className="admin-icon-chip"
          aria-label="Notifications"
        >
          🔔

          <span className="admin-notification-dot"></span>
        </NavLink>


        {/* Profile */}

        <NavLink
          to="/admin/profile"
          className="admin-profile-chip"
        >

          <div className="admin-profile-avatar">
            A
          </div>

          <div className="admin-profile-info">

            <span className="admin-profile-name">
              Admin
            </span>

            <span className="admin-profile-role">
              Administrator
            </span>

          </div>

        </NavLink>

      </div>

    </header>
  );
}
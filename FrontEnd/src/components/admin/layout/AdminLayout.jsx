import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

import "../../../styles/admin/AdminLayout.css";

export default function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const openMobileSidebar = () => {
    setMobileOpen(true);
  };

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <div
      className={`admin-shell ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* =========================
          MOBILE OVERLAY
      ========================= */}

      <div
        className={`admin-sidebar-scrim ${
          mobileOpen ? "show" : ""
        }`}
        onClick={closeMobileSidebar}
      />

      {/* =========================
          SIDEBAR
      ========================= */}

      <AdminSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileOpen}
        onToggle={toggleSidebar}
        onClose={closeMobileSidebar}
      />

      {/* =========================
          MAIN AREA
      ========================= */}

      <div className="admin-main">

        {/* Topbar */}

        <AdminTopbar
          onMobileMenu={openMobileSidebar}
        />

        {/* Page Content */}

        <main className="admin-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
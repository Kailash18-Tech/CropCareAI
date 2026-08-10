import { useState } from "react";
import { Outlet } from "react-router-dom";
import FarmerSidebar from "./FarmerSidebar";
import FarmerTopbar from "./FarmerTopbar";

import "../../../styles/farmer/FarmerLayout.css";
export default function FarmerLayout() {
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
      className={`farmer-shell ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* Mobile overlay */}
      <div
        className={`farmer-sidebar-scrim ${
          mobileOpen ? "show" : ""
        }`}
        onClick={closeMobileSidebar}
      />

      {/* Sidebar */}
      <FarmerSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileOpen}
        onToggle={toggleSidebar}
        onClose={closeMobileSidebar}
      />

      {/* Main area */}
      <div className="farmer-main">

        {/* Topbar */}
        <FarmerTopbar
          onMobileMenu={openMobileSidebar}
        />

        {/* Page content */}
        <main className="farmer-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
import { useState } from "react";
import { Outlet } from "react-router-dom";

import OfficerSidebar from "./OfficerSidebar";
import OfficerTopbar from "./OfficerTopbar";

import "../../../styles/officer/OfficerLayout.css";

export default function OfficerLayout() {
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
className={`officer-shell ${
        sidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
>

  {/* Mobile overlay */}
  <div
    className={`officer-sidebar-scrim ${
      mobileOpen ? "show" : ""
    }`}
    onClick={closeMobileSidebar}
  />

  {/* Sidebar */}
  <OfficerSidebar
    collapsed={sidebarCollapsed}
    mobileOpen={mobileOpen}
    onToggle={toggleSidebar}
    onClose={closeMobileSidebar}
  />

  {/* Main area */}
  <div className="officer-main">

    {/* Topbar */}
    <OfficerTopbar
      onMobileMenu={openMobileSidebar}
    />

    {/* Page content */}
    <main className="officer-content">
      <Outlet />
    </main>

  </div>
</div>


);
}

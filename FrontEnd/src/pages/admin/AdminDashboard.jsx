
import React from "react";

import AdminStatCard from "../../components/admin/dashboard/AdminStatCard";
import AdminQuickActions from "../../components/admin/dashboard/AdminQuickActions";
import AdminFeatureOverview from "../../components/admin/dashboard/AdminFeatureOverview";
import AdminOverview from "../../components/admin/dashboard/AdminOverview";

import "../../styles/admin/AdminDashboard.css";

export default function AdminDashboard() {
  const stats = [
    {
      icon: "👨‍🌾",
      title: "Total Farmers",
      value: "1,248",
      description: "Registered farmers",
      trend: "+12%",
    },
    {
      icon: "👮",
      title: "Total Officers",
      value: "42",
      description: "Active district officers",
      trend: "+4%",
    },
    {
      icon: "📋",
      title: "Total Schemes",
      value: "36",
      description: "Available government schemes",
      trend: "+3",
    },
    {
      icon: "🩺",
      title: "Total Crop Scans",
      value: "8,642",
      description: "Disease detection scans",
      trend: "+18%",
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* =========================
          DASHBOARD HEADER
      ========================= */}

      <div className="admin-dashboard-header">
        <div>
          <span className="admin-dashboard-eyebrow">
            Admin Workspace
          </span>

          <h1>Admin Dashboard</h1>

          <p>
            Monitor and manage the CropCare AI platform.
          </p>
        </div>
      </div>

      {/* =========================
          STATISTICS
      ========================= */}

      <section className="admin-stats-grid">
        {stats.map((stat) => (
          <AdminStatCard
            key={stat.title}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
          />
        ))}
      </section>

      {/* =========================
          SYSTEM OVERVIEW
      ========================= */}

      <AdminOverview />

      {/* =========================
          QUICK ACTIONS
      ========================= */}

      <AdminQuickActions />

      {/* =========================
          CROPCARE AI FEATURES
      ========================= */}

      <AdminFeatureOverview />

    </div>
  );
}


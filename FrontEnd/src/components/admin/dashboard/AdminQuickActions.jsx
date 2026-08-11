
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminQuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: "👨‍🌾",
      title: "Manage Farmers",
      description: "View and manage registered farmers",
      path: "/admin/farmers",
    },
    {
      icon: "👮",
      title: "Manage Officers",
      description: "View and manage district officers",
      path: "/admin/officers",
    },
    {
      icon: "📋",
      title: "Manage Schemes",
      description: "Manage government schemes",
      path: "/admin/schemes",
    },
    {
      icon: "📊",
      title: "View Reports",
      description: "Check system reports and analytics",
      path: "/admin/reports",
    },
  ];

  return (
    <section className="admin-dashboard-section">
      <div className="admin-section-header">
        <div>
          <h2>Quick Actions</h2>
          <p>
            Access frequently used admin features
          </p>
        </div>
      </div>

      <div className="admin-quick-actions">
        {actions.map((action) => (
          <button
            key={action.path}
            type="button"
            className="admin-quick-action-card"
            onClick={() => navigate(action.path)}
          >
            <div className="admin-quick-action-icon">
              {action.icon}
            </div>

            <div className="admin-quick-action-content">
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </div>

            <span className="admin-quick-action-arrow">
              →
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}


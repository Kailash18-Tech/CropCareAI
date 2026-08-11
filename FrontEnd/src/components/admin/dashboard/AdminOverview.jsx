
import React from "react";

export default function AdminOverview() {
  return (
    <section className="admin-dashboard-section">
      <div className="admin-section-header">
        <div>
          <h2>System Overview</h2>
          <p>
            Quick overview of CropCare AI platform activity
          </p>
        </div>
      </div>

      <div className="admin-overview-card">
        <div className="admin-overview-content">
          <div className="admin-overview-icon">
            🌱
          </div>

          <div>
            <h3>CropCare AI Administration</h3>

            <p>
              Monitor farmers, officers, government schemes,
              crop disease detection, soil analysis, mandi
              prices, seed laboratories, weather information,
              and other platform activities from the admin
              dashboard.
            </p>
          </div>
        </div>

        <div className="admin-overview-status">
          <span className="admin-status-dot"></span>
          System Active
        </div>
      </div>
    </section>
  );
}


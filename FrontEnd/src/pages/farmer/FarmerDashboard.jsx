import React from "react";
import { Link } from "react-router-dom";
import "../../styles/farmer/FarmerDashboard.css";

const stats = [
  {
    icon: "🌾",
    value: "3",
    label: "Registered fields",
    trend: "3 active",
    type: "success",
  },
  {
    icon: "🩺",
    value: "14",
    label: "Total scans done",
    trend: "+2 this week",
    type: "success",
  },
  {
    icon: "🍅",
    value: "₹1,840",
    label: "Tomato price /qtl",
    trend: "▼ 1.1%",
    type: "warning",
  },
  {
    icon: "☁️",
    value: "31°C",
    label: "Blight risk today",
    trend: "Moderate",
    type: "danger",
  },
];

const quickActions = [
  {
    icon: "📷",
    title: "Scan a crop",
    path: "/farmer/disease",
    type: "primary",
  },
  {
    icon: "🧮",
    title: "Soil & crop advice",
    path: "/farmer/soil",
    type: "secondary",
  },
  {
    icon: "🧪",
    title: "Find a seed lab",
    path: "/farmer/seedlabs",
    type: "tertiary",
  },
];

const diagnoses = [
  {
    crop: "Tomato",
    field: "Field 2",
    result: "Leaf blight",
    status: "Reviewed",
    statusType: "success",
  },
  {
    crop: "Chilli",
    field: "Field 1",
    result: "Unclear result",
    status: "Pending officer",
    statusType: "pending",
  },
  {
    crop: "Paddy",
    field: "Field 3",
    result: "Healthy",
    status: "Reviewed",
    statusType: "success",
  },
];

const schemes = [
  {
    icon: "🌱",
    title: "Subsidized Seed Drive",
    deadline: "Deadline: 28 Jul 2026",
    type: "primary",
  },
  {
    icon: "💧",
    title: "Drip Irrigation Grant",
    deadline: "Deadline: 15 Aug 2026",
    type: "tertiary",
  },
];

export default function FarmerDashboard() {
  return (
    <div className="farmer-dashboard">

      {/* =========================
          STATISTICS
      ========================= */}
      <div className="farmer-stat-grid">
        {stats.map((stat) => (
          <div className="farmer-stat-card" key={stat.label}>

            <div className="farmer-stat-top">
              <div className={`farmer-stat-icon ${stat.type}`}>
                {stat.icon}
              </div>

              <span className={`farmer-stat-trend ${stat.type}`}>
                {stat.trend}
              </span>
            </div>

            <div className="farmer-stat-value">
              {stat.value}
            </div>

            <div className="farmer-stat-label">
              {stat.label}
            </div>

          </div>
        ))}
      </div>

      {/* =========================
          QUICK ACTIONS
      ========================= */}
      <div className="farmer-quick-actions">

        {quickActions.map((action) => (
          <Link
            to={action.path}
            className="farmer-quick-card"
            key={action.title}
          >
            <div className={`farmer-quick-icon ${action.type}`}>
              {action.icon}
            </div>

            <span>{action.title}</span>
          </Link>
        ))}

      </div>

      {/* =========================
          MAIN DASHBOARD GRID
      ========================= */}
      <div className="farmer-dashboard-grid">

        {/* LEFT COLUMN */}
        <div className="farmer-dashboard-left">

          {/* Recent Diagnosis */}
          <div className="farmer-card">

            <div className="farmer-card-header">
              <h3>Recent diagnosis</h3>

              <Link to="/farmer/reports">
                View all reports
              </Link>
            </div>

            <div className="farmer-table-wrapper">

              <table className="farmer-table">

                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Field</th>
                    <th>Result</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {diagnoses.map((item) => (
                    <tr key={`${item.crop}-${item.field}`}>

                      <td>{item.crop}</td>

                      <td>{item.field}</td>

                      <td>{item.result}</td>

                      <td>
                        <span
                          className={`farmer-status ${item.statusType}`}
                        >
                          {item.status}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

          </div>

          {/* Mandi Price */}
          <div className="farmer-card">

            <div className="farmer-card-header">
              <h3>Mandi price trend — Tomato</h3>

              <Link to="/farmer/mandi">
                See all crops
              </Link>
            </div>

            <div className="farmer-chart">

              <svg
                viewBox="0 0 560 160"
                preserveAspectRatio="none"
              >
                <polygon
                  points="
                    10,110
                    90,100
                    170,90
                    250,95
                    330,65
                    410,55
                    490,35
                    550,40
                    550,160
                    10,160
                  "
                  className="chart-area"
                />

                <polyline
                  points="
                    10,110
                    90,100
                    170,90
                    250,95
                    330,65
                    410,55
                    490,35
                    550,40
                  "
                  className="chart-line"
                />
              </svg>

            </div>

            <div className="farmer-chart-label">
              Last 7 days
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="farmer-dashboard-right">

          {/* Government Schemes */}
          <div className="farmer-card">

            <div className="farmer-card-header">
              <h3>Government schemes</h3>

              <Link to="/farmer/schemes">
                View all
              </Link>
            </div>

            <div className="farmer-list">

              {schemes.map((scheme) => (
                <Link
                  to="/farmer/schemes"
                  className="farmer-list-item"
                  key={scheme.title}
                >

                  <div className={`farmer-list-icon ${scheme.type}`}>
                    {scheme.icon}
                  </div>

                  <div>
                    <strong>{scheme.title}</strong>
                    <span>{scheme.deadline}</span>
                  </div>

                </Link>
              ))}

            </div>

          </div>

          {/* Notifications */}
          <div className="farmer-card">

            <div className="farmer-card-header">
              <h3>Notifications</h3>
            </div>

            <div className="farmer-list">

              <div className="farmer-list-item">

                <div className="farmer-list-icon danger">
                  ⚠️
                </div>

                <div>
                  <strong>
                    Blight outbreak — Avinashi block
                  </strong>

                  <span>
                    District Officer · today
                  </span>
                </div>

              </div>

              <Link
                to="/farmer/weather"
                className="farmer-list-item"
              >

                <div className="farmer-list-icon tertiary">
                  ☁️
                </div>

                <div>
                  <strong>
                    High humidity expected this week
                  </strong>

                  <span>
                    Weather advisory · yesterday
                  </span>
                </div>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


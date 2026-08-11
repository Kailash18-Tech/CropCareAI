
import React from "react";

const features = [
  {
    icon: "🩺",
    title: "Disease Detection",
    description: "AI-based crop disease detection and diagnosis",
    value: "8,642",
    label: "Total Scans",
  },
  {
    icon: "🌾",
    title: "Soil & Crop Advice",
    description: "Soil analysis and crop recommendations",
    label: "Analyses",
  },
  {
    icon: "📈",
    title: "Mandi Prices",
    description: "Agricultural market price monitoring",
    value: "156",
    label: "Markets",
  },
  {
    icon: "🧪",
    title: "Seed Labs",
    description: "Seed testing laboratory information",
    value: "48",
    label: "Labs",
  },
  {
    icon: "☁️",
    title: "Weather",
    description: "Weather information and agricultural alerts",
    value: "12,486",
    label: "Views",
  },
  {
    icon: "📋",
    title: "Government Schemes",
    description: "Agricultural schemes and farmer benefits",
    value: "24",
    label: "Active Schemes",
  },
  {
    icon: "📊",
    title: "Reports",
    description: "Farmer and agricultural activity reports",
    value: "1,526",
    label: "Reports",
  },
];

export default function AdminFeatureOverview() {
  return (
    <section className="admin-dashboard-section">
      <div className="admin-section-header">
        <div>
          <h2>CropCare AI Features</h2>
          <p>
            Overview of major features and their current usage
          </p>
        </div>
      </div>

      <div className="admin-feature-grid">
        {features.map((feature) => (
          <div
            className="admin-feature-card"
            key={feature.title}
          >
            <div className="admin-feature-card-top">
              <div className="admin-feature-icon">
                {feature.icon}
              </div>

              <div className="admin-feature-info">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>

            <div className="admin-feature-bottom">
              <div className="admin-feature-value">
                {feature.value}
              </div>

              <span className="admin-feature-label">
                {feature.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

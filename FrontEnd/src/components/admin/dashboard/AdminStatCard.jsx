
import React from "react";

export default function AdminStatCard({
  icon,
  title,
  value,
  description,
  trend,
}) {
  return (
    <div className="admin-stat-card">
      <div className="admin-stat-card-top">
        <div className="admin-stat-icon">
          {icon}
        </div>

        {trend && (
          <span className="admin-stat-trend">
            {trend}
          </span>
        )}
      </div>

      <div className="admin-stat-value">
        {value}
      </div>

      <div className="admin-stat-title">
        {title}
      </div>

      {description && (
        <div className="admin-stat-description">
          {description}
        </div>
      )}
    </div>
  );
}


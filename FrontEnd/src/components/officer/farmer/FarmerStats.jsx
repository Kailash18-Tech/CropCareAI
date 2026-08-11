const farmerStats = [
  {
    icon: "👨‍🌾",
    title: "Total Farmers",
    value: "1,248",
    description: "Registered in district",
  },
  {
    icon: "✓",
    title: "Active Farmers",
    value: "1,086",
    description: "Active in last 30 days",
  },
  {
    icon: "🔍",
    title: "Scans – Last 7 Days",
    value: "184",
    description: "Crop scans performed",
  },
  {
    icon: "⚠️",
    title: "At Risk",
    value: "27",
    description: "Require attention",
  },
];

export default function FarmerStats() {
  return (
    <div className="farmer-stats-grid">
      {farmerStats.map((stat) => (
        <div className="farmer-stat-card" key={stat.title}>

          <div className="farmer-stat-icon">
            {stat.icon}
          </div>

          <div className="farmer-stat-content">

            <p className="farmer-stat-title">
              {stat.title}
            </p>

            <h3 className="farmer-stat-value">
              {stat.value}
            </h3>

            <p className="farmer-stat-description">
              {stat.description}
            </p>

          </div>

        </div>
      ))}
    </div>
  );
}
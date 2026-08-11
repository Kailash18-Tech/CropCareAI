const reportStats = [
  {
    icon: "📊",
    title: "Total Scan Reports",
    value: "24",
    description: "Crop scan reports available",
  },
  {
    icon: "🌾",
    title: "Crops Scanned",
    value: "18",
    description: "Different crop scans recorded",
  },
  {
    icon: "📅",
    title: "This Month",
    value: "6",
    description: "Crop scan reports this month",
  },
];

export default function OfficerReportStats() {
  return (
    <div className="officer-report-stats">
      {reportStats.map((stat) => (
        <div
          className="officer-report-stat-card"
          key={stat.title}
        >
          <div className="officer-report-stat-icon">
            {stat.icon}
          </div>

          <div className="officer-report-stat-content">
            <p className="officer-report-stat-title">
              {stat.title}
            </p>

            <h3 className="officer-report-stat-value">
              {stat.value}
            </h3>

            <p className="officer-report-stat-description">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
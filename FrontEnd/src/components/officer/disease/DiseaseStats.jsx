const diseaseStats = [
  {
    icon: "🔍",
    title: "Total Scans",
    value: "1,842",
    description: "Disease scans recorded",
  },
  {
    icon: "⚠️",
    title: "Active Cases",
    value: "126",
    description: "Cases under monitoring",
  },
  {
    icon: "🌿",
    title: "Most Detected Disease",
    value: "Leaf Blight",
    description: "Most frequently detected",
  },
  {
    icon: "📍",
    title: "Hotspot Areas",
    value: "8",
    description: "Areas requiring attention",
  },
];

export default function DiseaseStats() {
  return (
    <div className="disease-stats-grid">
      {diseaseStats.map((stat) => (
        <div
          className="disease-stat-card"
          key={stat.title}
        >
          <div className="disease-stat-icon">
            {stat.icon}
          </div>

          <div className="disease-stat-content">
            <p className="disease-stat-title">
              {stat.title}
            </p>

            <h3 className="disease-stat-value">
              {stat.value}
            </h3>

            <p className="disease-stat-description">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
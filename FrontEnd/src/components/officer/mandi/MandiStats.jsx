export default function MandiStats({
  mandiData = [],
}) {
  const marketsMonitored = new Set(
    mandiData.map((item) => item.mandi)
  ).size;

  const cropsTracked = new Set(
    mandiData.map((item) => item.crop)
  ).size;

  const priceUpdates = mandiData.length;

  const mandiStats = [
    {
      icon: "🏪",
      title: "Markets Monitored",
      value: marketsMonitored,
      description: "Mandis in selected district",
    },
    {
      icon: "🌾",
      title: "Crops Tracked",
      value: cropsTracked,
      description: "Crops with price data",
    },
    {
      icon: "📈",
      title: "Price Updates",
      value: priceUpdates,
      description: "Updates recorded today",
    },
  ];

  return (
    <div className="mandi-stats-grid">
      {mandiStats.map((stat) => (
        <div
          className="mandi-stat-card"
          key={stat.title}
        >
          <div className="mandi-stat-icon">
            {stat.icon}
          </div>

          <div className="mandi-stat-content">
            <p className="mandi-stat-title">
              {stat.title}
            </p>

            <h3 className="mandi-stat-value">
              {stat.value}
            </h3>

            <p className="mandi-stat-description">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
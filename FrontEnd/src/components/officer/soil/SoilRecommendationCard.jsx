const soilRecommendations = [
  {
    id: 1,
    soil: "Alluvial Soil",
    icon: "🌾",
    description:
      "Highly fertile soil with good water availability and nutrient content.",
    crops: [
      "Paddy",
      "Wheat",
      "Sugarcane",
      "Banana",
    ],
  },
  {
    id: 2,
    soil: "Black Soil",
    icon: "🌱",
    description:
      "Moisture-retentive soil that is suitable for crops requiring longer moisture availability.",
    crops: [
      "Cotton",
      "Groundnut",
      "Soybean",
      "Sugarcane",
    ],
  },
  {
    id: 3,
    soil: "Red Soil",
    icon: "🌿",
    description:
      "Well-drained soil commonly suitable for crops adapted to moderate fertility.",
    crops: [
      "Groundnut",
      "Millets",
      "Pulses",
      "Maize",
    ],
  },
  {
    id: 4,
    soil: "Loamy Soil",
    icon: "🌾",
    description:
      "Balanced soil with good drainage, aeration, and nutrient availability.",
    crops: [
      "Vegetables",
      "Paddy",
      "Pulses",
      "Wheat",
    ],
  },
  {
    id: 5,
    soil: "Sandy Soil",
    icon: "🏜️",
    description:
      "Light and well-drained soil suitable for crops that require good drainage.",
    crops: [
      "Groundnut",
      "Watermelon",
      "Coconut",
    ],
  },
  {
    id: 6,
    soil: "Clay Soil",
    icon: "🌱",
    description:
      "Fine-textured soil with high water retention and moisture-holding capacity.",
    crops: [
      "Paddy",
      "Sugarcane",
      "Vegetables",
    ],
  },
];

export default function SoilRecommendationCard() {
  return (
    <section className="soil-recommendations">

      <div className="soil-recommendations-header">
        <div>
          <h2>Recommended Crops by Soil Type</h2>

          <p>
            View crops recommended for different soil conditions.
          </p>
        </div>
      </div>

      <div className="soil-recommendation-grid">

        {soilRecommendations.map((item) => (
          <div
            className="soil-recommendation-card"
            key={item.id}
          >

            {/* Card Header */}
            <div className="soil-recommendation-card-header">

              <div className="soil-recommendation-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.soil}</h3>

                <span>
                  Recommended soil type
                </span>
              </div>

            </div>

            {/* Description */}
            <p className="soil-recommendation-description">
              {item.description}
            </p>

            {/* Crops */}
            <div className="soil-recommended-crops">

              <h4>Recommended Crops</h4>

              <div className="soil-crop-list">

                {item.crops.map((crop) => (
                  <span
                    className="soil-crop-tag"
                    key={crop}
                  >
                    🌱 {crop}
                  </span>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
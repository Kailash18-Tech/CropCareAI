export default function SoilResult({ result }) {
  if (!result) {
    return (
      <div className="soil-result empty">
        <div className="soil-result-icon">🌱</div>

        <div>
          <h3>Soil advice will appear here</h3>
          <p>
            Submit your soil and crop information to see recommendations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="soil-result">
      <div className="soil-result-header">
        <div>
          <span className="soil-result-label">Analysis Result</span>
          <h3>Recommended Farming Advice</h3>
        </div>

        <div className="soil-result-icon">
          🌾
        </div>
      </div>

      <div className="soil-result-summary">
        <div className="soil-result-item">
          <span>Crop</span>
          <strong>{result.crop || "Not provided"}</strong>
        </div>

        <div className="soil-result-item">
          <span>Soil Type</span>
          <strong>{result.soilType || "Not provided"}</strong>
        </div>

        <div className="soil-result-item">
          <span>Soil pH</span>
          <strong>{result.ph || "Not provided"}</strong>
        </div>
      </div>

      <div className="soil-advice-section">
        <h4>🌱 Crop Recommendation</h4>

        <p>
          Based on the entered soil information, this crop appears suitable
          for the selected soil conditions.
        </p>
      </div>

      <div className="soil-advice-section">
        <h4>🧪 Nutrient Advice</h4>

        <ul>
          <li>
            Nitrogen:{" "}
            <strong>{result.nitrogen || "Not provided"}</strong>
          </li>

          <li>
            Phosphorus:{" "}
            <strong>{result.phosphorus || "Not provided"}</strong>
          </li>

          <li>
            Potassium:{" "}
            <strong>{result.potassium || "Not provided"}</strong>
          </li>
        </ul>
      </div>

      <div className="soil-advice-note">
        <strong>Note:</strong> This is a frontend prototype. Actual
        recommendations will be connected to the backend later.
      </div>
    </div>
  );
}
export default function DiseaseResult() {
  return (
    <div className="disease-result-card">

      <div className="disease-section-header">
        <div>
          <h2>Detection result</h2>
          <p>
            Result from your latest crop scan.
          </p>
        </div>

        <span className="disease-result-status">
          Reviewed
        </span>
      </div>

      <div className="disease-result-content">

        <div className="disease-result-image">
          🌿
        </div>

        <div className="disease-result-info">

          <div className="disease-result-item">
            <span>Crop</span>
            <strong>Tomato</strong>
          </div>

          <div className="disease-result-item">
            <span>Detected disease</span>
            <strong>Leaf Blight</strong>
          </div>

          <div className="disease-result-item">
            <span>Confidence</span>
            <strong>94%</strong>
          </div>

          <div className="disease-result-item">
            <span>Severity</span>
            <strong className="disease-severity">
              Moderate
            </strong>
          </div>

        </div>

      </div>

      <div className="disease-recommendation">

        <h3>Recommended action</h3>

        <p>
          Remove heavily affected leaves and maintain proper
          spacing between plants. Monitor the crop regularly
          for further spread.
        </p>

      </div>

    </div>
  );
}
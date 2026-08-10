import { useState } from "react";
import SoilForm from "../../components/farmer/soil/SoilForm";
import SoilResult from "../../components/farmer/soil/SoilResult";
import SoilHistory from "../../components/farmer/soil/SoilHistory";
import "../../styles/farmer/SoilAdvice.css";

export default function SoilAdvice() {
  const [result, setResult] = useState(null);

  const handleSoilSubmit = (formData) => {
    setResult(formData);
  };

  return (
    <div className="soil-advice-page">

      {/* Page Header */}
      <div className="soil-advice-header">
        <div>
          <span className="soil-advice-eyebrow">
            Soil & Crop Advice
          </span>

          <h2>
            Get advice for your soil and crop
          </h2>

          <p>
            Enter your soil test details to view suitable farming
            recommendations.
          </p>
        </div>
      </div>

      {/* Form + Result */}
      <div className="soil-advice-grid">

        {/* Soil Form */}
        <div className="soil-advice-card">
          <SoilForm onSubmit={handleSoilSubmit} />
        </div>

        {/* Result */}
        <div className="soil-advice-card">
          <SoilResult result={result} />
        </div>

      </div>

      {/* History */}
      <div className="soil-history-card">
        <SoilHistory />
      </div>

    </div>
  );
}
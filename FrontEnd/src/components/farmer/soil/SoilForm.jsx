import { useState } from "react";

export default function SoilForm() {
  const [crop, setCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      crop,
      soilType,
      nitrogen,
      phosphorus,
      potassium,
    });
  };

  return (
    <div className="soil-form-card">

      <div className="soil-section-header">
        <div>
          <h2>Soil & Crop Information</h2>
          <p>
            Enter your soil details to get crop recommendations.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="soil-form-grid">

         

          <div className="soil-form-group">
            <label htmlFor="soilType">
              Soil type
            </label>

            <select
              id="soilType"
              value={soilType}
              onChange={(event) => setSoilType(event.target.value)}
            >
              <option value="">
                Select soil type
              </option>
              <option value="loamy">
                Loamy
              </option>
              <option value="clay">
                Clay
              </option>
              <option value="sandy">
                Sandy
              </option>
              <option value="red">
                Red Soil
              </option>
              <option value="black">
                Black Soil
              </option>
            </select>
          </div>

          <div className="soil-form-group">
            <label htmlFor="nitrogen">
              Nitrogen (N)
            </label>

            <input
              id="nitrogen"
              type="number"
              placeholder="Enter N value"
              value={nitrogen}
              onChange={(event) => setNitrogen(event.target.value)}
            />
          </div>

          <div className="soil-form-group">
            <label htmlFor="phosphorus">
              Phosphorus (P)
            </label>

            <input
              id="phosphorus"
              type="number"
              placeholder="Enter P value"
              value={phosphorus}
              onChange={(event) => setPhosphorus(event.target.value)}
            />
          </div>

          <div className="soil-form-group">
            <label htmlFor="potassium">
              Potassium (K)
            </label>

            <input
              id="potassium"
              type="number"
              placeholder="Enter K value"
              value={potassium}
              onChange={(event) => setPotassium(event.target.value)}
            />
          </div>

        </div>

        <button
          type="submit"
          className="soil-advice-btn"
        >
          🌱 Get Crop Advice
        </button>

      </form>

    </div>
  );
}
import React from "react";

const soilHistory = [
  {
    id: 1,
    date: "10 Aug 2026",
    nitrogen: 80,
    phosphorus: 45,
    potassium: 60,
    ph: 6.5,
    suitableCrops: ["Rice", "Tomato", "Chilli"],
  },
  {
    id: 2,
    date: "05 Aug 2026",
    nitrogen: 65,
    phosphorus: 50,
    potassium: 55,
    ph: 6.2,
    suitableCrops: ["Tomato", "Groundnut"],
  },
  {
    id: 3,
    date: "28 Jul 2026",
    nitrogen: 45,
    phosphorus: 35,
    potassium: 40,
    ph: 5.8,
    suitableCrops: ["Groundnut", "Millet"],
  },
];

export default function SoilHistory() {
  return (
    <section className="soil-history-section">

      {/* =========================
          HEADER
      ========================= */}
      <div className="soil-history-header">

        <div>
          <h2>Soil Test History</h2>

          <p>
            View your previous soil analysis and suitable crops.
          </p>
        </div>

      </div>


      {/* =========================
          EMPTY STATE
      ========================= */}
      {soilHistory.length === 0 ? (
        <div className="empty-history">

          <div className="empty-history-icon">
            🌱
          </div>

          <h3>No Soil Tests Yet</h3>

          <p>
            Your previous soil analysis results will appear here.
          </p>

        </div>
      ) : (

        /* =========================
           HISTORY TABLE
        ========================= */
        <div className="soil-history-table-wrapper">

          <table className="soil-history-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Nitrogen</th>
                <th>Phosphorus</th>
                <th>Potassium</th>
                <th>pH</th>
                <th>Suitable Crops</th>
              </tr>
            </thead>

            <tbody>

              {soilHistory.map((test) => (

                <tr key={test.id}>

                  <td>
                    {test.date}
                  </td>

                  <td>
                    {test.nitrogen} kg/ha
                  </td>

                  <td>
                    {test.phosphorus} kg/ha
                  </td>

                  <td>
                    {test.potassium} kg/ha
                  </td>

                  <td>
                    {test.ph}
                  </td>

                  <td>
                    <div className="soil-history-crops">

                      {test.suitableCrops.map((crop) => (
                        <span
                          key={crop}
                          className="soil-crop-tag"
                        >
                          🌱 {crop}
                        </span>
                      ))}

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </section>
  );
}
const scanHistory = [
  {
    crop: "Tomato",
    field: "Field 2",
    result: "Leaf Blight",
    date: "09 Aug 2026",
    status: "Reviewed",
  },
  {
    crop: "Chilli",
    field: "Field 1",
    result: "Unclear Result",
    date: "07 Aug 2026",
    status: "Pending",
  },
  {
    crop: "Paddy",
    field: "Field 3",
    result: "Healthy",
    date: "04 Aug 2026",
    status: "Reviewed",
  },
];

export default function DiseaseHistory() {
  return (
    <div className="disease-history-card">

      <div className="disease-section-header">
        <div>
          <h2>Scan history</h2>
          <p>
            View your previous crop disease scans.
          </p>
        </div>
      </div>

      <div className="disease-history-wrapper">

        <table className="disease-history-table">

          <thead>
            <tr>
              <th>Crop</th>
              <th>Field</th>
              <th>Result</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {scanHistory.map((scan) => (
              <tr
                key={`${scan.crop}-${scan.date}`}
              >
                <td>{scan.crop}</td>
                <td>{scan.field}</td>
                <td>{scan.result}</td>
                <td>{scan.date}</td>

                <td>
                  <span
                    className={`disease-history-status ${
                      scan.status === "Reviewed"
                        ? "reviewed"
                        : "pending"
                    }`}
                  >
                    {scan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
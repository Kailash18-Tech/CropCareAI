export default function DiseaseTable({ diseaseCases }) {
  return (
    <div className="disease-table-section">

      <div className="disease-table-header">

        <div>
          <h2>Disease Cases</h2>

          <p>
            Monitor crop diseases reported by farmers.
          </p>
        </div>

        <span className="disease-case-count">
          {diseaseCases.length} Cases
        </span>

      </div>


      <div className="disease-table-wrapper">

        <table className="disease-table">

          <thead>
            <tr>
              <th>Farmer</th>
              <th>Crop</th>
              <th>Disease</th>
              <th>Village</th>
              <th>Severity</th>
              <th>Date</th>
            </tr>
          </thead>


          <tbody>

            {diseaseCases.length === 0 ? (

              <tr>
                <td
                  colSpan="6"
                  className="disease-no-results-table"
                >
                  No disease cases found.
                </td>
              </tr>

            ) : (

              diseaseCases.map((item) => (

                <tr key={item.id}>

                  <td>
                    <strong className="disease-farmer-name">
                      {item.farmer}
                    </strong>
                  </td>

                  <td>{item.crop}</td>

                  <td>{item.disease}</td>

                  <td>{item.village}</td>

                  <td>
                    <span
                      className={`disease-severity-badge ${item.severity.toLowerCase()}`}
                    >
                      {item.severity}
                    </span>
                  </td>

                  <td>{item.date}</td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
export default function DiseaseCard({ diseaseCases }) {
  return (
    <div className="disease-cards-grid">

      {diseaseCases.length === 0 ? (

        <div className="disease-no-results">
          No disease cases found.
        </div>

      ) : (

        diseaseCases.map((item) => (

          <div
            className="disease-case-card"
            key={item.id}
          >

            <div className="disease-card-header">

              <div>
                <h3>{item.farmer}</h3>

                <p>{item.village}</p>
              </div>

              <span
                className={`disease-severity-badge ${item.severity.toLowerCase()}`}
              >
                {item.severity}
              </span>

            </div>


            <div className="disease-card-details">

              <div className="disease-card-detail">
                <span>Crop</span>
                <strong>{item.crop}</strong>
              </div>


              <div className="disease-card-detail">
                <span>Disease</span>
                <strong>{item.disease}</strong>
              </div>


              <div className="disease-card-detail">
                <span>Date</span>
                <strong>{item.date}</strong>
              </div>

            </div>

          </div>

        ))

      )}

    </div>
  );
}
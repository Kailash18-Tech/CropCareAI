const defaultSchemes = [
  {
    id: 1,
    name: "PM-KISAN",
    category: "Financial Support",
    eligibility: "Small and marginal farmers",
    status: "Active",
  },
  {
    id: 2,
    name: "PM Fasal Bima Yojana",
    category: "Crop Insurance",
    eligibility: "Farmers growing notified crops",
    status: "Active",
  },
  {
    id: 3,
    name: "PM Krishi Sinchai Yojana",
    category: "Irrigation",
    eligibility: "Eligible agricultural farmers",
    status: "Active",
  },
  {
    id: 4,
    name: "Kisan Credit Card",
    category: "Financial Support",
    eligibility: "Eligible farmers",
    status: "Active",
  },
  {
    id: 5,
    name: "Soil Health Card Scheme",
    category: "Soil Management",
    eligibility: "Farmers",
    status: "Active",
  },
];

export default function SchemeTable({ schemes = defaultSchemes }) {
  return (
    <div className="scheme-table-container">

      {/* =====================================================
          TABLE HEADER
          ===================================================== */}

      <div className="scheme-table-header">

        <div>
          <h2>
            Available Government Schemes
          </h2>

          <p>
            Government agricultural schemes currently
            available for farmers.
          </p>
        </div>

        <span className="scheme-count">
          {schemes.length} Schemes
        </span>

      </div>

      {/* =====================================================
          TABLE
          ===================================================== */}

      <div className="scheme-table-wrapper">

        <table className="scheme-table">

          <thead>
            <tr>
              <th>Scheme</th>
              <th>Category</th>
              <th>Eligibility</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {schemes.map((scheme) => (
              <tr key={scheme.id}>

                <td>
                  <strong className="scheme-name">
                    {scheme.name}
                  </strong>
                </td>

                <td>
                  {scheme.category}
                </td>

                <td>
                  {scheme.eligibility}
                </td>

                <td>
                  <span
                    className={`scheme-status ${
                      scheme.status.toLowerCase()
                    }`}
                  >
                    {scheme.status}
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
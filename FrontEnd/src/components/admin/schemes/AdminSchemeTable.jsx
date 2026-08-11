import React from "react";

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

export default function AdminSchemeTable({
  schemes = defaultSchemes,
  onRemove,
}) {
  return (
    <section className="admin-scheme-table-section">

      {/* Table Header */}
      <div className="admin-scheme-table-header">

        <div>
          <h2>
            Available Government Schemes
          </h2>

          <p>
            Government agricultural schemes currently
            available for farmers.
          </p>
        </div>

        <span className="admin-scheme-count">
          {schemes.length} Schemes
        </span>

      </div>

      {/* Table */}
      <div className="admin-scheme-table-wrapper">

        <table className="admin-scheme-table">

          <thead>
            <tr>
              <th>Scheme</th>
              <th>Category</th>
              <th>Eligibility</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {schemes.length > 0 ? (
              schemes.map((scheme) => (
                <tr key={scheme.id}>

                  {/* Scheme */}
                  <td>
                    <strong className="admin-scheme-name">
                      {scheme.name}
                    </strong>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="admin-scheme-category">
                      {scheme.category}
                    </span>
                  </td>

                  {/* Eligibility */}
                  <td>
                    {scheme.eligibility}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`admin-scheme-status ${
                        scheme.status.toLowerCase()
                      }`}
                    >
                      {scheme.status}
                    </span>
                  </td>

                  {/* Remove */}
                  <td>
                    <button
                      type="button"
                      className="admin-scheme-remove-btn"
                      onClick={() => onRemove(scheme.id)}
                    >
                      Remove
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="admin-scheme-empty"
                >
                  No schemes found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}
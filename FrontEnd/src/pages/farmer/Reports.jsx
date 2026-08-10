import React, { useMemo, useState } from "react";
import "../../styles/farmer/Reports.css";

// Temporary frontend data.
// Later this will be replaced with data from the backend.
const DISEASE_REPORTS = [
  {
    id: 1,
    date: "10 Aug 2026",
    crop: "Tomato",
    disease: "Early Blight",
    confidence: 94,
    status: "Completed",
  },
  {
    id: 2,
    date: "08 Aug 2026",
    crop: "Rice",
    disease: "Brown Spot",
    confidence: 89,
    status: "Completed",
  },
  {
    id: 3,
    date: "05 Aug 2026",
    crop: "Chilli",
    disease: "Leaf Curl",
    confidence: 92,
    status: "Completed",
  },
  {
    id: 4,
    date: "02 Aug 2026",
    crop: "Tomato",
    disease: "Healthy",
    confidence: 97,
    status: "Completed",
  },
  {
    id: 5,
    date: "30 Jul 2026",
    crop: "Potato",
    disease: "Late Blight",
    confidence: 91,
    status: "Completed",
  },
];

const Reports = () => {
  const [cropFilter, setCropFilter] = useState("");
  const [diseaseFilter, setDiseaseFilter] = useState("");

  const filteredReports = useMemo(() => {
    return DISEASE_REPORTS.filter((report) => {
      const matchesCrop =
        !cropFilter || report.crop === cropFilter;

      const matchesDisease =
        !diseaseFilter ||
        report.disease === diseaseFilter;

      return matchesCrop && matchesDisease;
    });
  }, [cropFilter, diseaseFilter]);

  const cropOptions = [
    ...new Set(DISEASE_REPORTS.map((report) => report.crop)),
  ];

  const diseaseOptions = [
    ...new Set(
      DISEASE_REPORTS.map((report) => report.disease)
    ),
  ];

  const handleViewReport = (report) => {
    console.log("View report:", report);
  };

  const handleClearFilters = () => {
    setCropFilter("");
    setDiseaseFilter("");
  };

  return (
    <div className="reports-page">

      {/* Page Header */}
      <div className="reports-header">
        <div>
          <p className="reports-eyebrow">
            CROPCARE AI
          </p>

          <h1>Disease Reports</h1>

          <p className="reports-subtitle">
            View your previous crop disease detection
            reports and results.
          </p>
        </div>

        <div className="reports-summary">
          <span>🦠</span>

          <div>
            <strong>{DISEASE_REPORTS.length}</strong>
            <small>Total Reports</small>
          </div>
        </div>
      </div>

      {/* Information Banner */}
      <div className="reports-info-banner">
        <div className="reports-info-icon">
          📋
        </div>

        <div>
          <h2>
            Disease Detection Reports
          </h2>

          <p>
            Review your previous disease detection
            results and monitor your crop health history.
          </p>
        </div>
      </div>

      {/* Filters */}
      <section className="reports-filter-section">

        <div className="reports-filter-header">
          <div>
            <h2>Filter Reports</h2>

            <p>
              Find a specific disease detection report.
            </p>
          </div>

          {(cropFilter || diseaseFilter) && (
            <button
              type="button"
              className="reports-clear-btn"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="reports-filters">

          <div className="reports-filter-group">
            <label htmlFor="crop-filter">
              Crop
            </label>

            <select
              id="crop-filter"
              value={cropFilter}
              onChange={(e) =>
                setCropFilter(e.target.value)
              }
            >
              <option value="">
                All Crops
              </option>

              {cropOptions.map((crop) => (
                <option
                  key={crop}
                  value={crop}
                >
                  {crop}
                </option>
              ))}
            </select>
          </div>

          <div className="reports-filter-group">
            <label htmlFor="disease-filter">
              Disease
            </label>

            <select
              id="disease-filter"
              value={diseaseFilter}
              onChange={(e) =>
                setDiseaseFilter(e.target.value)
              }
            >
              <option value="">
                All Diseases
              </option>

              {diseaseOptions.map((disease) => (
                <option
                  key={disease}
                  value={disease}
                >
                  {disease}
                </option>
              ))}
            </select>
          </div>

        </div>
      </section>

      {/* Reports List */}
      <section className="reports-section">

        <div className="reports-section-header">
          <div>
            <h2>
              Detection History
            </h2>

            <p>
              {filteredReports.length} report
              {filteredReports.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {filteredReports.length > 0 ? (
          <div className="reports-table-wrapper">

            <table className="reports-table">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Crop</th>
                  <th>Detected Disease</th>
                  <th>Confidence</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredReports.map((report) => (
                  <tr key={report.id}>

                    <td>
                      {report.date}
                    </td>

                    <td>
                      <span className="reports-crop">
                        🌱 {report.crop}
                      </span>
                    </td>

                    <td>
                      <strong>
                        {report.disease}
                      </strong>
                    </td>

                    <td>
                      <span className="reports-confidence">
                        {report.confidence}%
                      </span>
                    </td>

                    <td>
                      <span className="reports-status">
                        {report.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="reports-view-btn"
                        onClick={() =>
                          handleViewReport(report)
                        }
                      >
                        View Report
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        ) : (
          <div className="reports-empty">
            <div className="reports-empty-icon">
              🔍
            </div>

            <h3>
              No Reports Found
            </h3>

            <p>
              Try changing the filters to find
              your reports.
            </p>
          </div>
        )}

      </section>

    </div>
  );
};

export default Reports;
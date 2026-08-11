import React from "react";

const defaultReports = [
  {
    id: 1,
    title: "Tomato Leaf Disease Report",
    type: "Disease",
    district: "Coimbatore",
    date: "10 Aug 2026",
    status: "Reviewed",
  },
  {
    id: 2,
    title: "Soil Analysis Report",
    type: "Soil",
    district: "Erode",
    date: "09 Aug 2026",
    status: "Pending",
  },
  {
    id: 3,
    title: "Mandi Price Report",
    type: "Mandi",
    district: "Salem",
    date: "08 Aug 2026",
    status: "Published",
  },
  {
    id: 4,
    title: "Seed Laboratory Report",
    type: "Seed Laboratory",
    district: "Tiruppur",
    date: "07 Aug 2026",
    status: "Reviewed",
  },
  {
    id: 5,
    title: "Farmer Activity Report",
    type: "Farmer Activity",
    district: "Namakkal",
    date: "06 Aug 2026",
    status: "Reviewed",
  },
];

export default function AdminReportTable({
  reports = defaultReports,
  onRemove,
}) {
  return (
    <div className="admin-report-table-section">

      {/* Section Header */}

      <div className="admin-section-header">

        <div>
          <h2>
            System Reports
          </h2>

          <p>
            View and manage reports generated in
            CropCare AI.
          </p>
        </div>

        <span className="admin-report-count">
          {reports.length} Reports
        </span>

      </div>

      {/* Table */}

      <div className="admin-report-table-wrapper">

        <table className="admin-report-table">

          <thead>
            <tr>
              <th>Report</th>
              <th>Type</th>
              <th>District</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {reports.length > 0 ? (
              reports.map((report) => (
                <tr key={report.id}>

                  {/* Report */}

                  <td>
                    <div className="admin-report-name">

                      <div className="admin-report-avatar">
                        📄
                      </div>

                      <span>
                        {report.title}
                      </span>

                    </div>
                  </td>

                  {/* Type */}

                  <td>
                    <span className="admin-report-type">
                      {report.type}
                    </span>
                  </td>

                  {/* District */}

                  <td>
                    <span className="admin-report-district">
                      {report.district}
                    </span>
                  </td>

                  {/* Date */}

                  <td>
                    {report.date}
                  </td>

                  {/* Status */}

                  <td>
                    <span
                      className={`admin-report-status ${report.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {report.status}
                    </span>
                  </td>

                  {/* Remove */}

                  <td>
                    <button
                      type="button"
                      className="admin-report-remove-btn"
                      onClick={() =>
                        onRemove && onRemove(report.id)
                      }
                    >
                      Remove
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="admin-report-empty"
                >
                  No reports found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}
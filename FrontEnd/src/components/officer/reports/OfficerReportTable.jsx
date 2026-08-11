const reports = [
  {
    id: 1,
    crop: "Tomato",
    disease: "Early Blight",
    district: "Tiruppur",
    farmer: "Ramesh",
    date: "11 Aug 2026",
    status: "Generated",
  },
  {
    id: 2,
    crop: "Paddy",
    disease: "Leaf Blast",
    district: "Coimbatore",
    farmer: "Suresh",
    date: "10 Aug 2026",
    status: "Generated",
  },
  {
    id: 3,
    crop: "Chilli",
    disease: "Leaf Curl",
    district: "Erode",
    farmer: "Kumar",
    date: "09 Aug 2026",
    status: "Generated",
  },
  {
    id: 4,
    crop: "Maize",
    disease: "Fall Armyworm",
    district: "Salem",
    farmer: "Murugan",
    date: "08 Aug 2026",
    status: "Generated",
  },
  {
    id: 5,
    crop: "Banana",
    disease: "Sigatoka Disease",
    district: "Namakkal",
    farmer: "Arun",
    date: "07 Aug 2026",
    status: "Generated",
  },
  {
    id: 6,
    crop: "Cotton",
    disease: "Bollworm",
    district: "Erode",
    farmer: "Selvam",
    date: "06 Aug 2026",
    status: "Generated",
  },
];

export default function OfficerReportTable({
  filters = {
    district: "All Districts",
    date: "All Dates",
  },
}) {
  const filteredReports = reports.filter((report) => {

    /* District Filter */
    const districtMatch =
      filters.district === "All Districts" ||
      report.district === filters.district;

    /* Date Filter */
    let dateMatch = true;

    if (filters.date === "Today") {
      dateMatch = report.date === "11 Aug 2026";
    }

    if (filters.date === "This Week") {
      const validDates = [
        "11 Aug 2026",
        "10 Aug 2026",
        "09 Aug 2026",
        "08 Aug 2026",
        "07 Aug 2026",
      ];

      dateMatch = validDates.includes(report.date);
    }

    if (filters.date === "This Month") {
      dateMatch = report.date.includes("Aug 2026");
    }

    if (filters.date === "Last Month") {
      dateMatch = false;
    }

    return districtMatch && dateMatch;
  });

  return (
    <section className="officer-report-table-section">

      {/* Table Header */}
      <div className="officer-report-table-header">
        <div>
          <h2>Crop Scan Reports</h2>

          <p>
            Reports generated from crop disease scans
            submitted by farmers.
          </p>
        </div>

        <span className="officer-report-count">
          {filteredReports.length} Reports
        </span>
      </div>

      {/* Table */}
      <div className="officer-report-table-wrapper">

        <table className="officer-report-table">

          <thead>
            <tr>
              <th>Crop</th>
              <th>Disease Detected</th>
              <th>District</th>
              <th>Farmer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredReports.length > 0 ? (

              filteredReports.map((report) => (

                <tr key={report.id}>

                  <td>
                    <strong className="officer-report-name">
                      {report.crop}
                    </strong>
                  </td>

                  <td>
                    {report.disease}
                  </td>

                  <td>
                    {report.district}
                  </td>

                  <td>
                    {report.farmer}
                  </td>

                  <td>
                    {report.date}
                  </td>

                  <td>
                    <span className="officer-report-status">
                      {report.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="officer-report-download-button"
                      onClick={() =>
                        alert(
                          `Download report for ${report.crop}`
                        )
                      }
                    >
                      ↓ Download
                    </button>
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="7"
                  className="officer-report-empty"
                >
                  No crop scan reports found for the
                  selected filters.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}
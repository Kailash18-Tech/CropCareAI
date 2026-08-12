import React from "react";

const AdminOfficerTable = ({ officers }) => {
  return (
    <section className="manage-officer-table-section">

      {/* Section Header */}
      <div className="manage-officer-section-header">
        <div>
          <h2>District Officers</h2>

          <p>
            View officers registered on the CropCare AI platform.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="manage-officer-table-wrapper">

        <table className="manage-officer-table">

          <thead>
            <tr>
              <th>Officer Name</th>
              <th>Officer ID</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {officers.length > 0 ? (
              officers.map((officer) => (
                <tr key={officer.id}>

                  {/* Officer Name */}
                  <td>
                    <div className="manage-officer-name">

                      <div className="manage-officer-avatar">
                        {officer.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <span>
                        {officer.name}
                      </span>

                    </div>
                  </td>

                  {/* Officer ID */}
                  <td>
                    <span className="manage-officer-id">
                      {officer.officerId}
                    </span>
                  </td>

                  {/* Email */}
                  <td>
                    <span className="manage-officer-email">
                      {officer.email}
                    </span>
                  </td>

                  {/* District */}
                  <td>
                    <span className="manage-officer-district">
                      {officer.district}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`manage-officer-status ${
                        officer.status === "Active"
                          ? "active"
                          : "inactive"
                      }`}
                    >
                      <span className="manage-officer-status-dot"></span>

                      {officer.status}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="manage-officer-empty"
                >
                  No officers found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </section>
  );
};

export default AdminOfficerTable;
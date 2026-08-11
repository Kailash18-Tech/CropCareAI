import React from "react";

export default function AdminSeedLabTable({
  seedLabs,
  onRemove,
}) {
  return (
    <section className="admin-seedlab-table-section">

      {/* Section Header */}
      <div className="admin-section-header">
        <div>
          <h2>Seed Testing Laboratories</h2>

          <p>
            Manage seed testing laboratories registered on CropCare AI.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="admin-seedlab-table-wrapper">

        <table className="admin-seedlab-table">

          <thead>
            <tr>
              <th>Laboratory</th>
              <th>District</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {seedLabs.length > 0 ? (
              seedLabs.map((lab) => (
                <tr key={lab.id}>

                  {/* Laboratory */}
                  <td>
                    <div className="admin-seedlab-name">

                      <div className="admin-seedlab-avatar">
                        🧪
                      </div>

                      <span>
                        {lab.labName}
                      </span>

                    </div>
                  </td>

                  {/* District */}
                  <td>
                    <span className="admin-seedlab-district">
                      {lab.district}
                    </span>
                  </td>

                  {/* Location */}
                  <td>
                    {lab.location}
                  </td>

                  {/* Contact */}
                  <td>
                    {lab.contact}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`admin-seedlab-status ${lab.status.toLowerCase()}`}
                    >
                      {lab.status}
                    </span>
                  </td>

                  {/* Remove */}
                  <td>
                    <button
                      type="button"
                      className="admin-seedlab-remove-btn"
                      onClick={() => onRemove(lab.id)}
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
                  className="admin-seedlab-empty"
                >
                  No seed laboratories found.
                </td>
              </tr>
            )}
          </tbody>

        </table>

      </div>

    </section>
  );
}
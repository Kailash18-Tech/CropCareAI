import React from "react";

const ManageAdminTable = ({
  admins,
  onEdit,
}) => {
  return (
    <div className="manage-admin-table-wrapper">

      <table className="manage-admin-table">

        <thead>
          <tr>
            <th>Admin Name</th>
            <th>Admin ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {admins.length > 0 ? (
            admins.map((admin) => (
              <tr key={admin.id}>

                {/* Admin Name */}
                <td>
                  <div className="manage-admin-name">

                    <div className="manage-admin-avatar">
                      {admin.name.charAt(0).toUpperCase()}
                    </div>

                    <span>
                      {admin.name}
                    </span>

                  </div>
                </td>

                {/* Admin ID */}
                <td>
                  <span className="manage-admin-id">
                    {admin.adminId}
                  </span>
                </td>

                {/* Email */}
                <td>
                  <span className="manage-admin-email">
                    {admin.email}
                  </span>
                </td>

                {/* Role */}
                <td>
                  <span
                    className={`manage-admin-role ${
                      admin.role === "Super Admin"
                        ? "super-admin"
                        : ""
                    }`}
                  >
                    {admin.role}
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`manage-admin-status ${
                      admin.status === "Active"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    <span className="manage-admin-status-dot"></span>

                    {admin.status}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className="manage-admin-actions">

                    <button
                      type="button"
                      className="manage-admin-edit-btn"
                      onClick={() => onEdit(admin)}
                    >
                      Edit
                    </button>

                  </div>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="manage-admin-empty"
              >
                No administrators found.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
};

export default ManageAdminTable;
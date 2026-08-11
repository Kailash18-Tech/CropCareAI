import React from "react";

const ManageAdminFilter = ({ searchTerm, onSearch }) => {
  return (
    <div className="manage-admin-filter">
      <div className="manage-admin-search">
        <span className="manage-admin-search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search admins..."
          value={searchTerm}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default ManageAdminFilter;
import React from "react";

const AdminOfficerFilter = ({
  searchTerm,
  onSearch,
}) => {
  return (
    <div className="manage-officer-filter">

      <div className="manage-officer-search">

        <span className="manage-officer-search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search officers..."
          value={searchTerm}
          onChange={(event) => onSearch(event.target.value)}
        />

      </div>

    </div>
  );
};

export default AdminOfficerFilter;
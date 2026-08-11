export default function FarmerSearch({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  villageFilter,
  setVillageFilter,
}) {
  return (
    <div className="farmer-search-panel">

      <div className="farmer-search-box">
        <span className="farmer-search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search farmer by name, ID or phone..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      <div className="farmer-filter-group">

        <select
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value)
          }
          className="farmer-filter-select"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="At Risk">At Risk</option>
        </select>

        <select
          value={villageFilter}
          onChange={(event) =>
            setVillageFilter(event.target.value)
          }
          className="farmer-filter-select"
        >
          <option value="All">All Villages</option>
          <option value="Avinashi">Avinashi</option>
          <option value="Palladam">Palladam</option>
          <option value="Tiruppur">Tiruppur</option>
          <option value="Sulur">Sulur</option>
        </select>

      </div>

    </div>
  );
}
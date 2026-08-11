import { useState } from "react";

export default function OfficerReportFilters({
  onFilterChange,
}) {
  const [filters, setFilters] = useState({
    district: "All Districts",
    date: "All Dates",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);

    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  return (
    <section className="officer-report-filters">

      {/* Filter Header */}
      <div className="officer-report-filters-header">
        <h2>Report Filters</h2>

        <p>
          Filter crop scan reports by district or date.
        </p>
      </div>

      {/* Filter Grid */}
      <div className="officer-report-filter-grid">

        {/* District */}
        <div className="officer-report-filter-group">
          <label htmlFor="district">
            District
          </label>

          <select
            id="district"
            name="district"
            value={filters.district}
            onChange={handleChange}
          >
            <option value="All Districts">
              All Districts
            </option>

            <option value="Tiruppur">
              Tiruppur
            </option>

            <option value="Coimbatore">
              Coimbatore
            </option>

            <option value="Erode">
              Erode
            </option>

            <option value="Salem">
              Salem
            </option>

            <option value="Namakkal">
              Namakkal
            </option>
          </select>
        </div>

        {/* Date */}
        <div className="officer-report-filter-group">
          <label htmlFor="date">
            Date
          </label>

          <select
            id="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
          >
            <option value="All Dates">
              All Dates
            </option>

            <option value="Today">
              Today
            </option>

            <option value="This Week">
              This Week
            </option>

            <option value="This Month">
              This Month
            </option>

            <option value="Last Month">
              Last Month
            </option>
          </select>
        </div>

      </div>

    </section>
  );
}
import { useState } from "react";

import OfficerReportStats from "../../components/officer/reports/OfficerReportStats";
import OfficerReportFilters from "../../components/officer/reports/OfficerReportFilters";
import OfficerReportTable from "../../components/officer/reports/OfficerReportTable";

import "../../styles/officer/OfficerReports.css";

export default function OfficerReports() {
  const [filters, setFilters] = useState({
    district: "All Districts",
    date: "All Dates",
  });

  return (
    <div className="officer-reports-page">

      {/* Page Header */}
      <div className="officer-reports-header">
        <p className="officer-reports-label">
          Officer Dashboard
        </p>

        <h1>Reports & Analytics</h1>

        <p className="officer-reports-description">
          View reports generated from crop disease scans
          submitted by farmers.
        </p>
      </div>

      {/* Statistics */}
      <section className="officer-reports-section">
        <OfficerReportStats />
      </section>

      {/* Filters */}
      <section className="officer-reports-section">
        <OfficerReportFilters
          onFilterChange={setFilters}
        />
      </section>

      {/* Reports Table */}
      <section className="officer-reports-section">
        <OfficerReportTable
          filters={filters}
        />
      </section>

    </div>
  );
}
import React, { useState } from "react";

import AdminReportFilter from "../../components/admin/AdminReports/AdminReportFilter";
import AdminReportTable from "../../components/admin/AdminReports/AdminReportTable";

import "../../styles/admin/AdminReports.css";

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

export default function AdminReports() {
  /* =====================================================
     REPORT DATA
     ===================================================== */

  const [reports, setReports] = useState(defaultReports);

  /* =====================================================
     FILTER STATE
     ===================================================== */

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  /* =====================================================
     FILTER REPORTS
     ===================================================== */

  const filteredReports = reports.filter((report) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      report.title.toLowerCase().includes(search) ||
      report.type.toLowerCase().includes(search) ||
      report.district.toLowerCase().includes(search);

    const matchesDistrict =
      selectedDistrict === "all" ||
      report.district === selectedDistrict;

    const matchesType =
      selectedType === "all" ||
      report.type === selectedType;

    return (
      matchesSearch &&
      matchesDistrict &&
      matchesType
    );
  });

  /* =====================================================
     REMOVE REPORT
     ===================================================== */

  const handleRemoveReport = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this report?"
    );

    if (!confirmed) {
      return;
    }

    setReports((currentReports) =>
      currentReports.filter(
        (report) => report.id !== id
      )
    );
  };

  /* =====================================================
     PAGE
     ===================================================== */

  return (
    <div className="admin-reports-page">

      {/* Page Header */}

      <div className="admin-reports-page-header">

        <div>
          <h1>
            Reports
          </h1>

          <p>
            View and manage reports generated
            in CropCare AI.
          </p>
        </div>

      </div>

      {/* Filter */}

      <AdminReportFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedDistrict={selectedDistrict}
        onDistrictChange={setSelectedDistrict}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

      {/* Table */}

      <AdminReportTable
        reports={filteredReports}
        onRemove={handleRemoveReport}
      />

    </div>
  );
}
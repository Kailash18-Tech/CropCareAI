import React, { useState } from "react";

import AdminOfficerFilter from "../../components/admin/officer/AdminOfficerFilter";
import AdminOfficerTable from "../../components/admin/officer/AdminOfficerTable";
import AdminOfficerForm from "../../components/admin/officer/AdminOfficerForm";

import "../../styles/admin/OfficerManagement.css";

const initialOfficers = [
  {
    id: 1,
    name: "Arun Kumar",
    officerId: "OFF-2026-001",
    email: "arun@cropcare.ai",
    district: "Coimbatore",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya S",
    officerId: "OFF-2026-002",
    email: "priya@cropcare.ai",
    district: "Erode",
    status: "Active",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    officerId: "OFF-2026-003",
    email: "suresh@cropcare.ai",
    district: "Salem",
    status: "Inactive",
  },
];

const OfficerManagement = () => {
  const [showForm, setShowForm] = useState(false);

  const [officers, setOfficers] = useState(
    initialOfficers
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleAddOfficer = (newOfficer) => {
    const officerWithId = {
      ...newOfficer,

      id: Date.now(),

      officerId: `OFF-2026-${String(
        officers.length + 1
      ).padStart(3, "0")}`,
    };

    setOfficers((prev) => [
      ...prev,
      officerWithId,
    ]);

    setShowForm(false);
  };

  const filteredOfficers = officers.filter((officer) => {
    const search = searchTerm.toLowerCase();

    return (
      officer.name
        .toLowerCase()
        .includes(search) ||

      officer.officerId
        .toLowerCase()
        .includes(search) ||

      officer.email
        .toLowerCase()
        .includes(search) ||

      officer.district
        .toLowerCase()
        .includes(search)
    );
  });

  return (
    <div className="manage-officer-page">

      {showForm ? (

        /* =================================
           ADD OFFICER FORM
        ================================= */

        <AdminOfficerForm
          onAddOfficer={handleAddOfficer}
          onClose={() => setShowForm(false)}
        />

      ) : (

        /* =================================
           OFFICER MANAGEMENT PAGE
        ================================= */

        <>
          {/* PAGE HEADER */}

          <div className="manage-officer-header">

            <div className="manage-officer-title">

              <h1>
                Officer Management
              </h1>

              <p>
                Manage district officer accounts
                across the CropCare AI platform.
              </p>

            </div>


            {/* ADD OFFICER */}

            <button
              type="button"
              className="manage-officer-add-btn"
              onClick={() => setShowForm(true)}
            >
              + Add Officer
            </button>

          </div>


          {/* SEARCH */}

          <AdminOfficerFilter
            searchTerm={searchTerm}
            onSearch={handleSearch}
          />


          {/* OFFICER TABLE */}

          <AdminOfficerTable
            officers={filteredOfficers}
          />
        </>

      )}

    </div>
  );
};

export default OfficerManagement;
import React, { useState } from "react";

export default function AdminOfficerTable({
  selectedDistrict,
}) {
  const [officers, setOfficers] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun.kumar@cropcare.ai",
      phone: "9876543210",
      district: "Coimbatore",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya S",
      email: "priya.s@cropcare.ai",
      phone: "9876543211",
      district: "Erode",
      status: "Active",
    },
    {
      id: 3,
      name: "Ramesh K",
      email: "ramesh.k@cropcare.ai",
      phone: "9876543212",
      district: "Salem",
      status: "Active",
    },
    {
      id: 4,
      name: "Divya M",
      email: "divya.m@cropcare.ai",
      phone: "9876543213",
      district: "Tiruppur",
      status: "Active",
    },
    {
      id: 5,
      name: "Suresh P",
      email: "suresh.p@cropcare.ai",
      phone: "9876543214",
      district: "Namakkal",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Karthik R",
      email: "karthik.r@cropcare.ai",
      phone: "9876543215",
      district: "Karur",
      status: "Active",
    },
    {
      id: 7,
      name: "Meena V",
      email: "meena.v@cropcare.ai",
      phone: "9876543216",
      district: "Madurai",
      status: "Active",
    },
    {
      id: 8,
      name: "Vijay S",
      email: "vijay.s@cropcare.ai",
      phone: "9876543217",
      district: "Thanjavur",
      status: "Active",
    },
  ]);

  /* =========================
     FILTER OFFICERS
  ========================= */

  const filteredOfficers =
    selectedDistrict === "all"
      ? officers
      : officers.filter(
          (officer) =>
            officer.district === selectedDistrict
        );

  /* =========================
     REMOVE OFFICER
  ========================= */

  const handleRemove = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this officer?"
    );

    if (!confirmed) return;

    setOfficers((currentOfficers) =>
      currentOfficers.filter(
        (officer) => officer.id !== id
      )
    );
  };

  return (
    <div className="admin-officer-table-wrapper">

      <table className="admin-officer-table">

        <thead>
          <tr>
            <th>Officer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>District</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredOfficers.length > 0 ? (
            filteredOfficers.map((officer) => (
              <tr key={officer.id}>

                <td>
                  <div className="admin-officer-name">

                    <div className="admin-officer-avatar">
                      {officer.name.charAt(0)}
                    </div>

                    <span>
                      {officer.name}
                    </span>

                  </div>
                </td>

                <td>
                  {officer.email}
                </td>

                <td>
                  {officer.phone}
                </td>

                <td>
                  <span className="admin-officer-district">
                    {officer.district}
                  </span>
                </td>

                <td>
                  <span
                    className={`admin-officer-status ${officer.status.toLowerCase()}`}
                  >
                    {officer.status}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className="admin-officer-remove-btn"
                    onClick={() =>
                      handleRemove(officer.id)
                    }
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
                className="admin-officer-empty"
              >
                No officers found for the selected district.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}
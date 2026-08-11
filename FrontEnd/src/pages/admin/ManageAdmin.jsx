import React, { useState } from "react";
import "../../styles/admin/ManageAdmin.css";

import ManageAdminFilter from "../../components/admin/manageadmin/ManageAdminFilter";
import ManageAdminTable from "../../components/admin/manageadmin/ManageAdminTable";
import ManageAdminForm from "../../components/admin/manageadmin/ManageAdminForm";
import ManageAdminEditForm from "../../components/admin/manageadmin/ManageAdminEditForm";

const initialAdmins = [
  {
    id: 1,
    name: "Karthik Raj",
    adminId: "AD-2026-001",
    email: "karthik@cropcare.ai",
    role: "Super Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Meena S",
    adminId: "AD-2026-002",
    email: "meena@cropcare.ai",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    adminId: "AD-2026-003",
    email: "ravi@cropcare.ai",
    role: "Admin",
    status: "Inactive",
  },
];

const ManageAdmin = () => {
  /* =====================================================
     PAGE STATES
  ===================================================== */

  const [showForm, setShowForm] = useState(false);

  const [editingAdmin, setEditingAdmin] = useState(null);

  const [admins, setAdmins] = useState(initialAdmins);

  const [searchTerm, setSearchTerm] = useState("");

  /* =====================================================
     SEARCH
  ===================================================== */

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  /* =====================================================
     ADD ADMIN
  ===================================================== */

  const handleAddAdmin = (newAdmin) => {
    const nextAdminNumber = admins.length + 1;

    const adminWithId = {
      ...newAdmin,
      id: Date.now(),
      adminId: `AD-2026-${String(nextAdminNumber).padStart(3, "0")}`,
    };

    setAdmins((prev) => [...prev, adminWithId]);

    setShowForm(false);
  };

  /* =====================================================
     EDIT ADMIN
  ===================================================== */

  const handleEdit = (admin) => {
    setEditingAdmin(admin);
  };

  /* =====================================================
     SAVE EDITED ADMIN
  ===================================================== */

  const handleSaveEdit = (updatedAdmin) => {
    setAdmins((currentAdmins) =>
      currentAdmins.map((admin) =>
        admin.id === updatedAdmin.id
          ? updatedAdmin
          : admin
      )
    );

    setEditingAdmin(null);
  };

  /* =====================================================
     TOGGLE ADMIN STATUS
  ===================================================== */

  const handleToggleStatus = (adminId) => {
    setAdmins((currentAdmins) =>
      currentAdmins.map((admin) =>
        admin.id === adminId
          ? {
              ...admin,
              status:
                admin.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : admin
      )
    );
  };

  /* =====================================================
     FILTER ADMINS
  ===================================================== */

  const filteredAdmins = admins.filter((admin) => {
    const search = searchTerm.toLowerCase();

    return (
      admin.name.toLowerCase().includes(search) ||
      admin.adminId.toLowerCase().includes(search) ||
      admin.email.toLowerCase().includes(search) ||
      admin.role.toLowerCase().includes(search)
    );
  });

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="manage-admin-page">

      {/* =================================================
          EDIT ADMIN FORM
      ================================================= */}

      {editingAdmin ? (
        <ManageAdminEditForm
          admin={editingAdmin}
          onSave={handleSaveEdit}
          onClose={() => setEditingAdmin(null)}
        />
      ) : showForm ? (

        /* =================================================
           ADD ADMIN FORM
        ================================================= */

        <ManageAdminForm
          onAddAdmin={handleAddAdmin}
          onClose={() => setShowForm(false)}
        />

      ) : (

        /* =================================================
           MANAGE ADMINS PAGE
        ================================================= */

        <>
          {/* PAGE HEADER */}
          <div className="manage-admin-header">

            <div className="manage-admin-title">

              <h1>
                Manage Admins
              </h1>

              <p>
                Manage administrator accounts and access
                across the CropCare AI platform.
              </p>

            </div>

            <button
              type="button"
              className="manage-admin-add-btn"
              onClick={() => setShowForm(true)}
            >
              + Add Admin
            </button>

          </div>

          {/* SEARCH FILTER */}
          <ManageAdminFilter
            searchTerm={searchTerm}
            onSearch={handleSearch}
          />

          {/* ADMIN TABLE */}
          <ManageAdminTable
            admins={filteredAdmins}
            onEdit={handleEdit}
            onToggleStatus={handleToggleStatus}
          />
        </>
      )}

    </div>
  );
};

export default ManageAdmin;
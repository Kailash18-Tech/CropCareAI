import React, { useState } from "react";

const initialFarmers = [
  {
    id: "F001",
    name: "Murugan K",
    district: "Coimbatore",
    village: "Karamadai",
    contact: "9876543210",
    crops: "Paddy, Tomato",
    status: "Active",
  },
  {
    id: "F002",
    name: "Ravi Kumar",
    district: "Erode",
    village: "Perundurai",
    contact: "9876543211",
    crops: "Turmeric, Banana",
    status: "Active",
  },
  {
    id: "F003",
    name: "Suresh P",
    district: "Salem",
    village: "Attur",
    contact: "9876543212",
    crops: "Mango, Tapioca",
    status: "Active",
  },
  {
    id: "F004",
    name: "Arun M",
    district: "Tiruppur",
    village: "Palladam",
    contact: "9876543213",
    crops: "Coconut, Maize",
    status: "Active",
  },
  {
    id: "F005",
    name: "Kannan R",
    district: "Coimbatore",
    village: "Pollachi",
    contact: "9876543214",
    crops: "Coconut, Banana",
    status: "Active",
  },
  {
    id: "F006",
    name: "Prakash S",
    district: "Madurai",
    village: "Melur",
    contact: "9876543215",
    crops: "Cotton, Groundnut",
    status: "Active",
  },
  {
    id: "F007",
    name: "Senthil K",
    district: "Thanjavur",
    village: "Kumbakonam",
    contact: "9876543216",
    crops: "Paddy, Sugarcane",
    status: "Active",
  },
  {
    id: "F008",
    name: "Mani V",
    district: "Salem",
    village: "Mettur",
    contact: "9876543217",
    crops: "Tapioca, Maize",
    status: "Active",
  },
  {
    id: "F009",
    name: "Ramesh P",
    district: "Erode",
    village: "Gobichettipalayam",
    contact: "9876543218",
    crops: "Turmeric, Sugarcane",
    status: "Active",
  },
  {
    id: "F010",
    name: "Balan T",
    district: "Tiruppur",
    village: "Udumalpet",
    contact: "9876543219",
    crops: "Coconut, Tomato",
    status: "Active",
  },
];

export default function AdminFarmerTable({ selectedDistrict }) {
  const [farmers, setFarmers] = useState(initialFarmers);

  const filteredFarmers =
    selectedDistrict === "All Districts"
      ? farmers
      : farmers.filter(
          (farmer) => farmer.district === selectedDistrict
        );

  const handleRemove = (farmerId) => {
    const farmer = farmers.find(
      (item) => item.id === farmerId
    );

    if (!farmer) return;

    const confirmed = window.confirm(
      `Are you sure you want to remove ${farmer.name}?`
    );

    if (!confirmed) return;

    setFarmers((currentFarmers) =>
      currentFarmers.filter(
        (item) => item.id !== farmerId
      )
    );
  };

  return (
    <div className="admin-farmer-table-wrapper">

      <table className="admin-farmer-table">

        <thead>
          <tr>
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>District</th>
            <th>Village</th>
            <th>Contact</th>
            <th>Crops</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredFarmers.length > 0 ? (
            filteredFarmers.map((farmer) => (
              <tr key={farmer.id}>

                <td>
                  {farmer.id}
                </td>

                <td>
                  <div className="admin-farmer-name">

                    <div className="admin-farmer-avatar">
                      {farmer.name.charAt(0)}
                    </div>

                    <span>
                      {farmer.name}
                    </span>

                  </div>
                </td>

                <td>
                  <span className="admin-farmer-district">
                    {farmer.district}
                  </span>
                </td>

                <td>
                  {farmer.village}
                </td>

                <td>
                  {farmer.contact}
                </td>

                <td>
                  {farmer.crops}
                </td>

                <td>
                  <span
                    className={`admin-farmer-status ${farmer.status.toLowerCase()}`}
                  >
                    {farmer.status}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className="admin-farmer-remove-btn"
                    onClick={() =>
                      handleRemove(farmer.id)
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
                colSpan="8"
                className="admin-farmer-empty"
              >
                No farmers found for this district.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}
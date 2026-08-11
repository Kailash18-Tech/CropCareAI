const defaultFarmers = [
  {
    id: "FMR001",
    name: "Murugan K",
    phone: "98765 43210",
    village: "Avinashi",
    crops: "Tomato, Paddy",
    status: "Active",
    joined: "12 Jun 2026",
  },
  {
    id: "FMR002",
    name: "Ramesh P",
    phone: "98432 15678",
    village: "Palladam",
    crops: "Cotton, Chilli",
    status: "Active",
    joined: "08 Jun 2026",
  },
  {
    id: "FMR003",
    name: "Selvam R",
    phone: "97865 21430",
    village: "Tiruppur",
    crops: "Paddy",
    status: "Pending",
    joined: "09 Aug 2026",
  },
  {
    id: "FMR004",
    name: "Kumar S",
    phone: "96543 82170",
    village: "Sulur",
    crops: "Tomato, Onion",
    status: "At Risk",
    joined: "24 May 2026",
  },
  {
    id: "FMR005",
    name: "Arun M",
    phone: "95678 34120",
    village: "Avinashi",
    crops: "Banana",
    status: "Inactive",
    joined: "15 Apr 2026",
  },
];

export default function FarmerTable({
  farmers = defaultFarmers,
  onView,
}) {
  return (
    <div className="farmer-table-wrapper">

      <table className="farmer-table">

        <thead>
          <tr>
            <th>Farmer</th>
            <th>Village</th>
            <th>Crops</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <tr key={farmer.id}>

                <td>
                  <div className="farmer-table-profile">

                    <div className="farmer-avatar">
                      {farmer.name.charAt(0)}
                    </div>

                    <div className="farmer-table-name">
                      <strong>{farmer.name}</strong>

                      <span>
                        {farmer.id} · {farmer.phone}
                      </span>
                    </div>

                  </div>
                </td>

                <td>
                  {farmer.village}
                </td>

                <td>
                  {farmer.crops}
                </td>

                <td>
                  <span
                    className={`farmer-status ${farmer.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {farmer.status}
                  </span>
                </td>

                <td>
                  {farmer.joined}
                </td>

                <td>
                  <button
                    type="button"
                    className="farmer-view-btn"
                    onClick={() => onView?.(farmer)}
                  >
                    View
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="farmer-table-empty"
              >
                No farmers found.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}
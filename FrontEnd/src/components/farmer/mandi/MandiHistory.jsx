import React from "react";

const historyData = {
  Tomato: [
    {
      id: 1,
      date: "10 Aug 2026",
      price: "₹1,820",
      change: "▼ 0.8%",
      changeType: "down",
    },
    {
      id: 2,
      date: "09 Aug 2026",
      price: "₹1,850",
      change: "▲ 1.1%",
      changeType: "up",
    },
    {
      id: 3,
      date: "08 Aug 2026",
      price: "₹1,830",
      change: "▼ 0.5%",
      changeType: "down",
    },
    {
      id: 4,
      date: "07 Aug 2026",
      price: "₹1,840",
      change: "▲ 0.6%",
      changeType: "up",
    },
  ],

  Paddy: [
    {
      id: 1,
      date: "10 Aug 2026",
      price: "₹2,280",
      change: "▲ 1.9%",
      changeType: "up",
    },
    {
      id: 2,
      date: "09 Aug 2026",
      price: "₹2,240",
      change: "▲ 0.8%",
      changeType: "up",
    },
    {
      id: 3,
      date: "08 Aug 2026",
      price: "₹2,220",
      change: "▼ 0.4%",
      changeType: "down",
    },
  ],

  Cotton: [
    {
      id: 1,
      date: "10 Aug 2026",
      price: "₹7,100",
      change: "▼ 0.7%",
      changeType: "down",
    },
    {
      id: 2,
      date: "09 Aug 2026",
      price: "₹7,150",
      change: "▲ 0.5%",
      changeType: "up",
    },
    {
      id: 3,
      date: "08 Aug 2026",
      price: "₹7,080",
      change: "▼ 0.3%",
      changeType: "down",
    },
  ],

  Chilli: [
    {
      id: 1,
      date: "10 Aug 2026",
      price: "₹8,200",
      change: "▲ 1.8%",
      changeType: "up",
    },
    {
      id: 2,
      date: "09 Aug 2026",
      price: "₹8,050",
      change: "▲ 0.9%",
      changeType: "up",
    },
  ],
};

export default function MandiHistory({
  selectedMarket,
  selectedCrop,
}) {
  const history =
    historyData[selectedCrop] || [];

  return (
    <section className="mandi-card">

      <div className="mandi-card-header">
        <div>
          <h3>Price History</h3>

          <p>
            Historical prices for your selected crop
            and market.
          </p>
        </div>
      </div>

      {/* SELECTED CROP INFO */}
      <div className="mandi-history-selection">

        <div>
          <span>Selected market</span>
          <strong>{selectedMarket}</strong>
        </div>

        <div>
          <span>Selected crop</span>
          <strong>{selectedCrop}</strong>
        </div>

      </div>

      {/* HISTORY TABLE */}
      <div className="mandi-table-wrapper">

        <table className="mandi-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Crop</th>
              <th>Market</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr key={item.id}>

                <td>{item.date}</td>

                <td>
                  <strong>
                    {selectedCrop}
                  </strong>
                </td>

                <td>
                  {selectedMarket}
                </td>

                <td>
                  <strong>
                    {item.price}
                  </strong>

                  <span className="mandi-unit">
                    /qtl
                  </span>
                </td>

                <td>
                  <span
                    className={`mandi-change ${item.changeType}`}
                  >
                    {item.change}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}
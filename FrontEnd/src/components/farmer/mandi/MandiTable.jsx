import React from "react";

const marketData = {
  "Tiruppur Mandi": [
    {
      id: 1,
      crop: "Tomato",
      price: "₹1,820",
      change: "▼ 0.8%",
      changeType: "down",
    },
    {
      id: 2,
      crop: "Paddy",
      price: "₹2,280",
      change: "▲ 1.9%",
      changeType: "up",
    },
    {
      id: 3,
      crop: "Cotton",
      price: "₹7,100",
      change: "▼ 0.7%",
      changeType: "down",
    },
  ],

  "Avinashi Mandi": [
    {
      id: 1,
      crop: "Tomato",
      price: "₹1,840",
      change: "▼ 1.1%",
      changeType: "down",
    },
    {
      id: 2,
      crop: "Paddy",
      price: "₹2,250",
      change: "▲ 2.4%",
      changeType: "up",
    },
    {
      id: 3,
      crop: "Cotton",
      price: "₹7,050",
      change: "▲ 0.6%",
      changeType: "up",
    },
  ],

  "Coimbatore Mandi": [
    {
      id: 1,
      crop: "Tomato",
      price: "₹1,900",
      change: "▲ 1.2%",
      changeType: "up",
    },
    {
      id: 2,
      crop: "Paddy",
      price: "₹2,320",
      change: "▲ 1.5%",
      changeType: "up",
    },
    {
      id: 3,
      crop: "Chilli",
      price: "₹8,200",
      change: "▲ 1.8%",
      changeType: "up",
    },
  ],

  "Erode Mandi": [
    {
      id: 1,
      crop: "Cotton",
      price: "₹7,100",
      change: "▼ 0.7%",
      changeType: "down",
    },
    {
      id: 2,
      crop: "Groundnut",
      price: "₹6,450",
      change: "▲ 1.2%",
      changeType: "up",
    },
    {
      id: 3,
      crop: "Paddy",
      price: "₹2,260",
      change: "▲ 0.9%",
      changeType: "up",
    },
  ],
};

const marketsByLocation = {
  Tiruppur: [
    "Tiruppur Mandi",
    "Avinashi Mandi",
  ],

  Coimbatore: [
    "Coimbatore Mandi",
    "Pollachi Mandi",
  ],

  Erode: [
    "Erode Mandi",
  ],
};

export default function MandiTable({
  location,
  setLocation,
  selectedMarket,
  setSelectedMarket,
  selectedCrop,
  setSelectedCrop,
}) {
  const prices = marketData[selectedMarket] || [];

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;

    setLocation(newLocation);

    const firstMarket =
      marketsByLocation[newLocation][0];

    setSelectedMarket(firstMarket);

    setSelectedCrop(
      marketData[firstMarket][0]?.crop || "Tomato"
    );
  };

  const handleMarketChange = (e) => {
    const newMarket = e.target.value;

    setSelectedMarket(newMarket);

    const firstCrop =
      marketData[newMarket][0]?.crop || "Tomato";

    setSelectedCrop(firstCrop);
  };

  return (
    <section className="mandi-card">

      {/* HEADER */}
      <div className="mandi-card-header">
        <div>
          <h3>Current Mandi Prices</h3>

          <p>
            Latest crop prices from your selected market.
          </p>
        </div>

        <span className="mandi-updated">
          Updated today
        </span>
      </div>

      {/* LOCATION + MARKET */}
      <div className="mandi-selection">

        <div className="mandi-form-group">
          <label htmlFor="location">
            📍 Your Location
          </label>

          <select
            id="location"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="Tiruppur">
              Tiruppur
            </option>

            <option value="Coimbatore">
              Coimbatore
            </option>

            <option value="Erode">
              Erode
            </option>
          </select>
        </div>

        <button
          type="button"
          className="mandi-location-btn"
          onClick={() => setLocation("Tiruppur")}
        >
          📍 Use My Location
        </button>

        <div className="mandi-form-group">
          <label htmlFor="market">
            🏪 Nearby Market
          </label>

          <select
            id="market"
            value={selectedMarket}
            onChange={handleMarketChange}
          >
            {marketsByLocation[location].map(
              (market) => (
                <option
                  key={market}
                  value={market}
                >
                  {market}
                </option>
              )
            )}
          </select>
        </div>

      </div>

      {/* SELECTED MARKET */}
      <div className="mandi-selected-market">
        <div>
          <h4>{selectedMarket}</h4>

          <p>
            Showing current prices for this market.
          </p>
        </div>
      </div>

      {/* PRICE TABLE */}
      <div className="mandi-table-wrapper">

        <table className="mandi-table">

          <thead>
            <tr>
              <th>Crop</th>
              <th>Price</th>
              <th>Change</th>
              <th>History</th>
            </tr>
          </thead>

          <tbody>
            {prices.map((item) => (
              <tr key={item.id}>

                <td>
                  <strong>
                    {item.crop}
                  </strong>
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

                <td>
                  <button
                    type="button"
                    className={`mandi-crop-btn ${
                      selectedCrop === item.crop
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedCrop(item.crop)
                    }
                  >
                    View History
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}
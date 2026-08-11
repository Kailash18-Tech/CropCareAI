const mandiData = {
  Tiruppur: [
    {
      mandi: "Avinashi Mandi",
      crop: "Tomato",
      price: "₹1,840",
      date: "11 Aug 2026",
    },
    {
      mandi: "Avinashi Mandi",
      crop: "Paddy",
      price: "₹2,450",
      date: "11 Aug 2026",
    },
    {
      mandi: "Palladam Mandi",
      crop: "Chilli",
      price: "₹5,200",
      date: "11 Aug 2026",
    },
    {
      mandi: "Sulur Mandi",
      crop: "Maize",
      price: "₹2,180",
      date: "11 Aug 2026",
    },
  ],

  Coimbatore: [
    {
      mandi: "Coimbatore Mandi",
      crop: "Tomato",
      price: "₹1,920",
      date: "11 Aug 2026",
    },
    {
      mandi: "Coimbatore Mandi",
      crop: "Paddy",
      price: "₹2,500",
      date: "11 Aug 2026",
    },
    {
      mandi: "Pollachi Mandi",
      crop: "Coconut",
      price: "₹3,450",
      date: "11 Aug 2026",
    },
  ],

  Erode: [
    {
      mandi: "Erode Mandi",
      crop: "Turmeric",
      price: "₹12,400",
      date: "11 Aug 2026",
    },
    {
      mandi: "Bhavani Mandi",
      crop: "Banana",
      price: "₹2,850",
      date: "11 Aug 2026",
    },
    {
      mandi: "Erode Mandi",
      crop: "Paddy",
      price: "₹2,420",
      date: "11 Aug 2026",
    },
  ],

  Salem: [
    {
      mandi: "Salem Mandi",
      crop: "Tomato",
      price: "₹1,780",
      date: "11 Aug 2026",
    },
    {
      mandi: "Salem Mandi",
      crop: "Maize",
      price: "₹2,100",
      date: "11 Aug 2026",
    },
    {
      mandi: "Attur Mandi",
      crop: "Tapioca",
      price: "₹2,300",
      date: "11 Aug 2026",
    },
  ],

  Namakkal: [
    {
      mandi: "Namakkal Mandi",
      crop: "Paddy",
      price: "₹2,460",
      date: "11 Aug 2026",
    },
    {
      mandi: "Namakkal Mandi",
      crop: "Maize",
      price: "₹2,150",
      date: "11 Aug 2026",
    },
    {
      mandi: "Rasipuram Mandi",
      crop: "Tomato",
      price: "₹1,820",
      date: "11 Aug 2026",
    },
  ],
};

export default function MandiTable({
  selectedDistrict = "Tiruppur",
}) {
  const prices = mandiData[selectedDistrict] || [];

  return (
    <div className="mandi-table-card">

      <div className="mandi-table-header">
        <div>
          <h2>Mandi Prices</h2>

          <p>
            Current crop prices in {selectedDistrict} district.
          </p>
        </div>

        <span className="mandi-price-count">
          {prices.length} Updates
        </span>
      </div>

      <div className="mandi-table-wrapper">

        <table className="mandi-table">

          <thead>
            <tr>
              <th>Mandi</th>
              <th>Crop</th>
              <th>Price / Quintal</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {prices.map((item, index) => (
              <tr key={`${item.mandi}-${item.crop}-${index}`}>
                <td>
                  <strong className="mandi-name">
                    {item.mandi}
                  </strong>
                </td>

                <td>{item.crop}</td>

                <td>
                  <strong className="mandi-price">
                    {item.price}
                  </strong>
                </td>

                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
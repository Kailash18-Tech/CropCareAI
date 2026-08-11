export default function MandiCard({
  mandi,
  crop,
  price,
  date,
}) {
  return (
    <div className="mandi-card">
      <div className="mandi-card-top">
        <div>
          <p className="mandi-card-label">Mandi</p>
          <h3 className="mandi-card-name">
            {mandi}
          </h3>
        </div>

        <span className="mandi-card-crop">
          {crop}
        </span>
      </div>

      <div className="mandi-card-bottom">
        <div>
          <p className="mandi-card-label">
            Price / Quintal
          </p>

          <strong className="mandi-card-price">
            {price}
          </strong>
        </div>

        <div className="mandi-card-date">
          <p className="mandi-card-label">Updated</p>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
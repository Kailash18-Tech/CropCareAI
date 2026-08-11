export default function FarmerCard({
  farmer,
  onView,
}) {
  if (!farmer) {
    return null;
  }

  const statusClass = farmer.status
    .toLowerCase()
    .replace(" ", "-");

  return (
    <div className="farmer-mobile-card">

      <div className="farmer-mobile-card-header">

        <div className="farmer-mobile-profile">

          <div className="farmer-avatar">
            {farmer.name.charAt(0)}
          </div>

          <div className="farmer-mobile-name">

            <strong>
              {farmer.name}
            </strong>

            <span>
              {farmer.id}
            </span>

          </div>

        </div>

        <span
          className={`farmer-status ${statusClass}`}
        >
          {farmer.status}
        </span>

      </div>

      <div className="farmer-mobile-details">

        <div className="farmer-mobile-detail">
          <span>Phone</span>
          <strong>{farmer.phone}</strong>
        </div>

        <div className="farmer-mobile-detail">
          <span>Village</span>
          <strong>{farmer.village}</strong>
        </div>

        <div className="farmer-mobile-detail">
          <span>Crops</span>
          <strong>{farmer.crops}</strong>
        </div>

        <div className="farmer-mobile-detail">
          <span>Joined</span>
          <strong>{farmer.joined}</strong>
        </div>

      </div>

      <button
        type="button"
        className="farmer-card-view-btn"
        onClick={() => onView?.(farmer)}
      >
        View Farmer
        <span>→</span>
      </button>

    </div>
  );
}
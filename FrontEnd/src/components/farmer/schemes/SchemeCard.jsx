import React from "react";

const SchemeCard = ({
  scheme,
  isBookmarked,
  onBookmark,
  onApply,
}) => {
  return (
    <article className="scheme-card">
      <div className="scheme-card-header">
        <div className="scheme-icon">
          {scheme.icon}
        </div>

        <button
          type="button"
          className={`scheme-bookmark-btn ${
            isBookmarked ? "bookmarked" : ""
          }`}
          onClick={() => onBookmark(scheme.id)}
          aria-label={
            isBookmarked
              ? `Remove ${scheme.name} from bookmarks`
              : `Bookmark ${scheme.name}`
          }
          title={
            isBookmarked
              ? "Remove bookmark"
              : "Bookmark scheme"
          }
        >
          {isBookmarked ? "🔖" : "🔖"}
        </button>
      </div>

      <div className="scheme-card-content">
        <span className="scheme-category">
          {scheme.category}
        </span>

        <h3>{scheme.name}</h3>

        <p className="scheme-description">
          {scheme.description}
        </p>

        <div className="scheme-benefit">
          <span className="scheme-benefit-label">
            Benefit
          </span>

          <strong>{scheme.benefit}</strong>
        </div>

        <div className="scheme-eligibility">
          <span>👨‍🌾</span>

          <p>
            <strong>Eligibility:</strong>{" "}
            {scheme.eligibility}
          </p>
        </div>
      </div>

      <div className="scheme-card-footer">
        <button
          type="button"
          className="scheme-apply-btn"
          onClick={() => onApply(scheme)}
        >
          Apply Now
          <span>↗</span>
        </button>
      </div>
    </article>
  );
};

export default SchemeCard;
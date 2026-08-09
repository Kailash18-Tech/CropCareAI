import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="brand">
      <span className="mark">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 21C12 21 5 16.5 5 10.5C5 7 7.5 4.5 11 4.5C11 4.5 11.5 8 15 8C18 8 19 5.5 19 5.5C19 5.5 19.5 8.5 17.5 11.5C16 13.7 12 21 12 21Z"
            fill="#fff"
          />
        </svg>
      </span>

      <span className="brand-txt">
        CropCare<span className="dot">AI</span>
      </span>
    </Link>
  );
}
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder = "Search...", onSearch, defaultValue = "" }) => {
  const [query, setQuery] = useState(defaultValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="cc-searchbar">
      <span className="cc-searchbar-icon">🔍</span>
      <input
        type="text"
        className="cc-searchbar-input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button
          type="button"
          className="cc-searchbar-clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
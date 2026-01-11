import { useState } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [location, setLocation] = useState("");
  const [showLocationInput, setShowLocationInput] = useState(false);

  return (
    <div className="search-wrapper">
      {/* LOCATION BAR */}
      <div
        className="location-bar"
        onClick={() => setShowLocationInput(true)}
      >
        <i className="bi bi-geo-alt-fill location-icon"></i>

        {showLocationInput ? (
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onBlur={() => setShowLocationInput(false)}
            className="location-input"
            autoFocus
          />
        ) : (
          <span className="location-text">
            {location || "Enter your location"}
          </span>
        )}
      </div>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <i className="bi bi-search search-icon"></i>

        <input
          type="text"
          placeholder="Search for food or restaurant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

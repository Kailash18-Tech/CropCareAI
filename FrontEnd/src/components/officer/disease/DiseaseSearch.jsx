export default function DiseaseSearch({
  searchTerm,
  setSearchTerm,
  diseaseFilter,
  setDiseaseFilter,
  villageFilter,
  setVillageFilter,
  severityFilter,
  setSeverityFilter,
}) {
  return (
    <div className="disease-search-section">

      <div className="disease-search-header">

        <div>
          <h2>Search & Filter</h2>

          <p>
            Find and filter disease cases in your district.
          </p>
        </div>

      </div>


      <div className="disease-search-controls">

        {/* Search */}

        <div className="disease-search-input-wrapper">

          <span className="disease-search-icon">
            🔍
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Search farmer, crop or disease..."
            className="disease-search-input"
          />

        </div>


        {/* Disease */}

        <select
          value={diseaseFilter}
          onChange={(event) =>
            setDiseaseFilter(event.target.value)
          }
          className="disease-filter-select"
        >
          <option value="All">All Diseases</option>
          <option value="Leaf Blight">Leaf Blight</option>
          <option value="Rice Blast">Rice Blast</option>
          <option value="Leaf Curl">Leaf Curl</option>
          <option value="Powdery Mildew">
            Powdery Mildew
          </option>
        </select>


        {/* Village */}

        <select
          value={villageFilter}
          onChange={(event) =>
            setVillageFilter(event.target.value)
          }
          className="disease-filter-select"
        >
          <option value="All">All Villages</option>
          <option value="Avinashi">Avinashi</option>
          <option value="Palladam">Palladam</option>
          <option value="Tiruppur">Tiruppur</option>
          <option value="Sulur">Sulur</option>
        </select>


        {/* Severity */}

        <select
          value={severityFilter}
          onChange={(event) =>
            setSeverityFilter(event.target.value)
          }
          className="disease-filter-select"
        >
          <option value="All">All Severity</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>

    </div>
  );
}
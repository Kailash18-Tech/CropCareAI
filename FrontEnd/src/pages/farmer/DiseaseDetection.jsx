import DiseaseUpload from "../../components/farmer/disease/DiseaseUpload";
import DiseaseResult from "../../components/farmer/disease/DiseaseResult";
import DiseaseHistory from "../../components/farmer/disease/DiseaseHistory";
import "../../styles/farmer/DiseaseDetection.css";

export default function DiseaseDetection() {
  return (
    <div className="disease-page">

      {/* Page introduction */}
      <div className="disease-page-intro">
        <div>
          <h2>Crop Disease Detection</h2>
          <p>
            Upload a crop image to identify possible diseases
            and get recommendations.
          </p>
        </div>
      </div>

      {/* Upload */}
      <DiseaseUpload />

      {/* Latest result */}
      <DiseaseResult />

      {/* Previous scans */}
      <DiseaseHistory />

    </div>
  );
}
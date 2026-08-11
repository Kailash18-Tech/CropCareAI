import SoilInfoIntro from "../../components/officer/soil/SoilInfoIntro";
import SoilRecommendationCard from "../../components/officer/soil/SoilRecommendationCard";

import "../../styles/officer/SoilInformation.css";

export default function SoilInformation() {
  return (
    <div className="soil-information-page">

      {/* Page Introduction */}
      <SoilInfoIntro />


      {/* Detailed Soil Recommendations */}
      <SoilRecommendationCard />

    </div>
  );
}
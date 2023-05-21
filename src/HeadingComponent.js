import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CropRecommendation from "./CropRecommendation";
const title = "Krishi Portal";

const HeaderComponent = ({ setfilteredresults, showTeam, setShowTeam, setShowHome }) => {
  const [showPredictions, setShowPredictions] = useState(false);

  const handleHomeClick = () => {
    setShowTeam(false);
    setShowHome(true);
  };

  const handlePredictionsClick = () => {
    setShowPredictions(true);
  };

  return (
    <div id="title" className="title-class" tabIndex="1">
      <h1>{title}</h1>
      <div className="search-bar">
        <SearchBar setfilteredresults={setfilteredresults} />
        <div>
          <button className="Team" onClick={() => setShowTeam(!showTeam)}>
            {showTeam ? "Hide Team" : "Show Team"}
          </button>
        </div>
        <div>
          <button className="Team" onClick={handlePredictionsClick}>
            Predictions
          </button>
        </div>
        {/* <div>
          <button className="Team">Cart</button>
        </div> */}
        {/* <div>
          <button className="Home" onClick={handleHomeClick}>Home</button>
        </div> */}
      </div>
      {showPredictions && <CropRecommendation />}
    </div>
  );
};

export default HeaderComponent;

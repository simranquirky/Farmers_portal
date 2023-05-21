import HeadingComponent from "./HeadingComponent";
import BodyComponent from "./BodyComponent";
import React, { useState } from "react";
import CropRecommendation from "./CropRecommendation";
import ReactDOM from "react-dom/client";
import "./style.css"
const  AppLayout = () => (     <div>
    <CropRecommendation/>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

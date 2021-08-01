
import React from "react";

import "./City.css";

export default function City() {
  let currentWeatherData = {
    city: "Halmstad",
    currentDate: "Sunday 22:36"
  };
  return (
    <div className="cityOverview">
      <h1 id="display-city">{currentWeatherData.city}</h1>
      <span id="current-date">{currentWeatherData.currentDate} </span>
    </div>
  );
}
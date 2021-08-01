
import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div class="row justify-content-around">
        <div className="col-4" id="floatLeft">
          <img
        src={"https://openweathermap.org/img/wn/10d@2x.png"}
        alt="Clear"
        id="icon"
      />
      <br />
      <span id="temperature">{props.currentTemp}</span>
      <span className="units">25°C</span>
    </div>
 <div className="col-4" id="floatRight">
     <ul>
         <li>Sunny</li>
         <li>Humidity: 70%</li>
         <li>Wind: 9 km/h</li>
     </ul>
    </div>
     </div>
      </div>
  );
}
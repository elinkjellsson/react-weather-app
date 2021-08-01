import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
        <span>
          <FormatDate date={props.data.date} />
        </span>

        <div class="row justify-content-around">
        <div className="col-4" id="floatLeft">
          <div className="clearfix">
              <WeatherIcon code={props.data.icon} size={52} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4" id="floatRight">
          <ul>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
  );
}

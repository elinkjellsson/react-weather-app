import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="wrapper">
    <Weather defaultCity="Halmstad"/>

    <hr/>
     <footer>
      <a href="https://github.com/elinkjellsson/react-weather-app" target="_blank" rel="noreferrer" id="open-source-link">Open-source code</a> 
      {" "}by Elin Kjellsson 
      </footer>
      </div>
      </div>
    </div>
  );
}



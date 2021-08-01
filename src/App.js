import React from "react";
import './App.css';
import Form from "./Form";
import City from "./City";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Form/>
    <City/> 
    <CurrentWeather/>

    <hr/>
     <footer>
      <a href="https://github.com/elinkjellsson/react-weather-app" target="_blank" rel="noreferrer">Open-source code {" "}</a> 
      by Elin Kjellsson 
      </footer>
      </div>
    </div>
  );
}



import React, {useState} from "react";
import "./TemperatureSetting.css";

export default function TemperatureSetting (props) {

  let [unit, setUnit] = useState ("celsius");

  function convertToFahrenheit (event) {
    event.preventDefault();
    setUnit ("fahrenheit");
  }

  function convertToCelsius (event) {
    event.preventDefault();
    setUnit ("celsius");
  }

   if (unit === "celsius") {return (
        <div className = "temperatureSetting">
            <span id="currentTemperature">
                {props.temperature}
            </span>
             <span className="weatherUnit">
                ºC              
                  |
                <a href="/" id="fahrenheit" onClick={convertToFahrenheit}>
                    ºF
                 </a>
             </span>
         </div>
    )} else {
      let fahrenheit = (props.temperature*1.8+32);

      return (
    <div className = "temperatureSetting">
    <span id="currentTemperature">
        {Math.round(fahrenheit)}   </span>
     <span className="weatherUnit">
        <a href="/" id="celsius" onClick={convertToCelsius}>
            ºC
         </a>
          |
            ºF
     </span>
    </div>)};
}
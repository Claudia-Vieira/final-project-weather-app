import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import Day from "./Day";
export default function Forecast (props) {


  let [forecastData, setForecastData] = useState (null);

if (props.chosenCity) {
  function displayForecast(response) {
    setForecastData(response.data);
}

  let forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${props.chosenCity}&mode=xml&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
  axios.get(forecastUrl).then(displayForecast);

console.log(forecastData);
    return (
    <div>
        <h4 className="forecast_title">
          The weather at this hour in the next 5 days!
        </h4>
        <div className="row fiveDays">
          <div className="col-1">
            <p>Day</p>
          </div>
          <div className="col-1">
            <p />
          </div>
          <div className="col-3">
            <p>Temperature</p>
          </div>
          <div className="col-4">
            <p>Weather</p>
          </div>
          <div className="col-2">
            <p>Wind</p>
          </div>
        </div>
        <div id="forecast">
            <Day value={1} />
          
            <Day value={2} />
        
            <Day value={3} />
         
            <Day value={4} />
        
            <Day value={5} />
   
        </div>
      </div>)
} else {return (<div>
  <h4 className="forecast_title">
    The weather at this hour in the next 5 days!
  </h4>
  <div className="row fiveDays">
    <div className="col-1">
      <p>Day</p>
    </div>
    <div className="col-1">
      <p />
    </div>
    <div className="col-3">
      <p>Temperature</p>
    </div>
    <div className="col-4">
      <p>Weather</p>
    </div>
    <div className="col-2">
      <p>Wind</p>
    </div>
  </div>
  <div id="forecast">
      <Day value={1} />
    
      <Day value={2} />
  
      <Day value={3} />
   
      <Day value={4} />
  
      <Day value={5} />

  </div>
</div>)}}
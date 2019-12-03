import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon.js"
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function formatHours(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  if (loaded && forecast.city.name === props.chosenCity) {
    return (<div className="row">
      <div className="col-12">
            <h4 className="forecast_title">
              The weather at this hour in the next 24hours!
            </h4>
            </div>
            <div className="WeatherForecast row">
        {forecast.list.slice(0,7).map(function(weather) {
          return (
            
            
            <div className="col">
              {console.log (forecast.list)}
              {formatHours(new Date(weather.dt * 1000))}
              <WeatherIcon code={weather.weather[0].icon} />
              {Math.round(weather.main.temp)}°C
            </div>

         );
        })}
      </div>
      </div>);
  } else {

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.chosenCity}&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
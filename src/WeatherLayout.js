import React from "react";
import TemperatureSetting from "./TemperatureSetting.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./WeatherLayout.css";

export default function CurrentWeather (props) {
    return (  
    <div>
      <div className="row">
      <div className="col-xs-6">
{props.chosenIcon} </div>
        <div className="col-xs-6">
          <div className="row">
            <div className="col-xs-12">
              <h1>
<TemperatureSetting temperature={props.chosenTemperature}/>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-capitalize" id="currentWeather"> {props.chosenDescription}</h2>
            </div>
          </div>
          <div className="row">
            <span id="wind"> <FontAwesomeIcon icon="wind" className="currentWind" />
               {props.chosenWind} km/h</span>
          </div>
        </div>
      </div>
      </div>);
};
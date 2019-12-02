import React from "react";
import TemperatureSetting from "./TemperatureSetting.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CurrentWeather.css";

export default function CurrentWeather (props) {
    return (  
    <div>
      <div className="row">
        <div className="col-xs-6" id="weatherIcon">
          {props.chosenIcon}
        </div>
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
            <div className="col-xs-4">
            <FontAwesomeIcon icon="wind" className="currentWind" />
              <span id="wind"> {props.chosenWind} km/h</span>
            </div>
          </div>
        </div>
      </div>
      </div>);
};
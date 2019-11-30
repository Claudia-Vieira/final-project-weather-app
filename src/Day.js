import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Day.css";
export default function Day(props) {
  return (
    <div className="row">
      <div className="col-1">
        <p id="day_one"> {props.value} </p>
      </div>
      <div className="col-1">
        <p>
        <FontAwesomeIcon icon="dot-circle" id="dot1" />
        </p>
      </div>
      <div className="col-3">
        <p id="temp_one">T Max | T Min</p>
      </div>
      <div className="col-4">
        <div className="row">
          <div className="col-6 weatherIconDays">
            <img src="" alt="" id="icon_one" />
          </div>
          <div className="col-6 weatherDays">
            <p id="weather_one" />
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="row">
          <div className="col-6 weatherIconDays">
            <p id="icon_one">
            <FontAwesomeIcon icon="wind" className="currentWind" />
            </p>
          </div>
          <div className="col-6 weatherDays">
            <p id="wind_one" />
          </div>
        </div>
      </div>
    </div>
  );
}

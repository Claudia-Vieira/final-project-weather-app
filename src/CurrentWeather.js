import React from "react";
import "./CurrentWeather.css";
export default function CurrentWeather () {
    return (  <div>
        <div className="col-xs-6">
          <img src="" alt="" id="weatherIcon" />
        </div>
        <div className="col-xs-6">
          <div className="row">
            <div className="col-xs-12">
              <h1>
                <span id="currentTemperature" />
                <span className="weatherUnit">
                  <a href="#" id="celsius">
                    ºC
                  </a>
                  |
                  <a href="#" id="fahrenheit">
                    ºF
                  </a>
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 id="currentWeather" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <i className="fas fa-wind currentWind" />
              <span id="wind"> </span>
            </div>
          </div>
        </div>
      </div>);
};
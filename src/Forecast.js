import React from "react";
import "./Forecast.css";
import Day from "./Day";
export default function SearchFOrm () {
    return (     <div>
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
          <div className="row">
            <Day value={1} />
          </div>
          <div className="row">
            <Day value={2} />
          </div>
          <div className="row">
            <Day value={3} />
          </div>
          <div className="row">
            <Day value={4} />
          </div>
          <div className="row">
            <Day value={5} />
          </div>
        </div>
      </div>)
};
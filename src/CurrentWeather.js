import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CurrentWeather.css";
export default function CurrentWeather () {
 let [temperature, setTemperature] = useState(null);
function showCurrentWeather (response) {
  setTemperature (Math.round(response.data.main.temp));
};

  let url = `https://api.openweathermap.org/data/2.5/weather?q=Porto&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
  axios.get(url).then(showCurrentWeather);

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
                  {temperature}
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
            <FontAwesomeIcon icon="wind" className="currentWind" />
              <span id="wind"> </span>
            </div>
          </div>
        </div>
      </div>);
};
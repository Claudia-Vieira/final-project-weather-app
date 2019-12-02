import React, {useState} from "react";
import Loader from 'react-loader-spinner';
import TemperatureSetting from "./TemperatureSetting.js";
import DateSetting from "./DateSetting.js";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CurrentWeather.css";

export default function CurrentWeather (props) {

 let [ready, setReady] = useState(null);
let [temperature, setTemperature] = useState(null);
 let [wind, setWind] = useState(null);
 let [description, setDescription] = useState(null);
 let [icon, setIcon] = useState(null);
 let [currentDate, setCurrentDate] = useState(null);


 function showCurrentWeather (response) {
  let imageURL = `https://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`;
  setIcon(<img src={imageURL} alt="weather icon" />);
  setTemperature (Math.round(response.data.main.temp));
  setWind(Math.round(response.data.wind.speed * 3.6));
  setDescription(response.data.weather[0].description);
  setCurrentDate(new Date(response.data.dt));
  setReady(true);
};

  
  if (ready){
    return (  <div>
      <div className="row">
        <div className="col-12 date">
  <DateSetting date={currentDate} />
        </div>
      </div>
        <div className="col-xs-6" id="weatherIcon">
          {icon}
        </div>
        <div className="col-xs-6">
          <div className="row">
            <div className="col-xs-12">
              <h1>
<TemperatureSetting temperature={temperature}/>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-capitalize" id="currentWeather"> {description}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
            <FontAwesomeIcon icon="wind" className="currentWind" />
              <span id="wind"> {wind} km/h</span>
            </div>
          </div>
        </div>
      </div>);
} else {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.chosenCity}&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
  axios.get(url).then(showCurrentWeather);
  return ( <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
          />)
          }
}
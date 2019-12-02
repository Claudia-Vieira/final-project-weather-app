import React, {useState} from "react";
import axios from "axios";
import WeatherLayout from './WeatherLayout.js';
import DateSetting from "./DateSetting.js";
import "./SearchForm.css";
import CityIcon from "./cityIcon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchForm () {

  let [city, setCity] = useState("Porto");
  let [currentCity, setCurrentCity] = useState ("City");
  let [informationReady, setInformationReady] = useState (null);
  let [temperature, setTemperature] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);
  let [submitingDate, setSubmitingDate] = useState(null);
 

  function handleSubmit (event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=011674ac65e3e0ef6d73be0d4fdbae64&units=metric`;
  axios.get(url).then(showInformation);

  }

  function showInformation(response) {
    setCurrentCity (response.data.name);
    setInformationReady(true);
    
    let imageURL = `https://openweathermap.org/img/wn/${
      response.data.weather[0].icon
    }@2x.png`;
    setIcon(<img src={imageURL} alt="weather icon" />);
    setTemperature (Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed * 3.6));
    setDescription(response.data.weather[0].description);
    setSubmitingDate(new Date(response.data.dt*1000));
        };

  function provideCityName (event) {
  setCity (event.target.value);
  }

  if (informationReady) {return ( <div>
      <div className="row">
    <div className="col-xs-6">
      <form id="searchForm" onSubmit={handleSubmit}>
        <img src={CityIcon} alt="cityIcon" className="cityIcon" />
        <input
          type="search"
          placeholder="Enter city"
          id="enterCity"
          autoComplete="off"
          onChange = {provideCityName}
        />
        <button id="searchButton">
        <FontAwesomeIcon icon="search" id="searchIcon"/>
        </button>
      </form>
    </div>
    <div className="col-xs-4">
      <button id="currentLocation">
      <FontAwesomeIcon icon="map-marker-alt" id="mapMarkerIcon"/>
      </button>
    </div>
    <div className="col-12">
      <h5 id="currentCity">{currentCity}</h5>
    </div>
  <div className="col-12 date">
<DateSetting currentDate={submitingDate}/>
        </div>
        </div>
  <div className="row">
  <WeatherLayout chosenCity={currentCity} chosenIcon={icon} chosenTemperature={temperature} chosenDescription={description} chosenWind={wind}/>
</div>
</div>);} else {return ( <div>
      <div className="row">
    <div className="col-xs-6">
      <form id="searchForm" onSubmit={handleSubmit}>
        <img src={CityIcon} alt="cityIcon" className="cityIcon" />
        <input
          type="search"
          placeholder="Enter city"
          id="enterCity"
          autoComplete="off"
          onChange = {provideCityName}
        />
        <button id="searchButton">
        <FontAwesomeIcon icon="search" id="searchIcon"/>
        </button>
      </form>
    </div>
    <div className="col-xs-4">
      <button id="currentLocation">
      <FontAwesomeIcon icon="map-marker-alt" id="mapMarkerIcon"/>
      </button>
    </div>
    <div className="col-12">
      <h5 id="currentCity">{currentCity}</h5>
    </div>
  </div>
  <div className="row"></div> </div>)}
};
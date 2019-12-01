import React, {useState} from "react";
import CurrentWeather from './CurrentWeather.js';
import "./SearchForm.css";
import CityIcon from "./cityIcon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchForm () {

  let [city, setCity] = useState("Porto");

  function handleSubmit (event) {
    event.preventDefault();
  }

  function provideCityName (event) {
  setCity (event.target.value);
  }

    return ( <div>
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
      <h5 id="currentCity">{city}</h5>
    </div>
  </div>
  <div className="row">
  <CurrentWeather chosenCity={city}/>
</div>
</div>);
};
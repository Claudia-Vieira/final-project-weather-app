import React from "react";
import "./SearchForm.css";
import CityIcon from "./cityIcon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchForm () {
    return ( <div className="row">
    <div className="col-xs-6">
      <form id="searchForm">
        <img src={CityIcon} alt="cityIcon" className="cityIcon" />
        <input
          type="search"
          placeholder="Enter city"
          id="enterCity"
          autoComplete="off"
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
      <h5 id="currentCity" />
    </div>
  </div>);
};
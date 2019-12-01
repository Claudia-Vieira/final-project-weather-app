import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchForm from './SearchForm.js';
import CurrentWeather from './CurrentWeather.js';
import Forecast from './Forecast.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faMapMarkerAlt, faWind, faDotCircle);


function App() {
  return (
    <div className="container">
    <div className="weatherapp">
      <div>
        <SearchForm />
      </div>
      <div className="row">
        <div className="col-12">
          <p id="currentDate" />
        </div>
      </div>
      <div className="row">
        <CurrentWeather />
      </div>
      <hr />
      <Forecast />
    </div>
    <small>
      <a
        href="https://github.com/Claudia-Vieira/final-project-weather-app"
        target="_blank"
      >
        Open-source code
      </a>
      , by Cláudia Vieira
    </small>
  </div>
);
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchForm from './SearchForm.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faWind, faDotCircle);


function App() {
  return (
    <div className="container">
    <div className="weatherapp">
      <div>
        <SearchForm />
      </div>
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

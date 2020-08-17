import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

const CountriesListView = () => {
  return (
    <div class="countrylist">
      <h1>Country List</h1>
      {countries.map((country) => (
        <ul class="list-group">
          <li class="list-group-item">
            <Link key={country.name} to={`/countries/${country.cca3}`}>
              {country.name.common}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CountriesListView;

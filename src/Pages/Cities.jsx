import React, { useState } from 'react';
import './Cities.css';
import { citiesData } from '../DATA/data';
import { Link } from 'react-router-dom';
import NavBelow from './Components/NavBelow';


function Cities() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const matchingCities = citiesData.filter(city =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(matchingCities.length);



  return (
    <div className="App">
    <NavBelow />
    <div className="search-container">
        <input
          type="text"
          placeholder="Search by city name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="card-container">
  {matchingCities.map((city) => (
    <Link key={city.id} to={`/city/${city.id}`}>
      <div className="card">
        <img src={city.image} alt={city.cityName} className="card-image" />
        <div className="card-overlay">
          <p className="city-name">{city.cityName}</p>
        </div>
      </div>
    </Link>
  ))}
  {matchingCities.length === 0 && (
    <p>No matching cities found.</p>
  )}
</div>

  </div>
);
}

export default Cities;
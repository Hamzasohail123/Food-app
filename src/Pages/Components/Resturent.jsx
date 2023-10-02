import React, { useState } from 'react';
import { citiesData } from '../../DATA/data'; // Import your city data
import { Link, useParams } from 'react-router-dom';
import './Resturent.css';

const CityRestaurants = () => {
  const [searchResturent, setSearchResturent] = useState('');
  const { cityId } = useParams();
  const selectedCity = citiesData.find(city => city.id === Number(cityId));
  const [filteredRestaurants, setFilteredRestaurants] = useState(selectedCity.restaurants);

  const searchHandler = (event) => {
    setSearchResturent(event.target.value);
     filterRestaurants(event.target.value);
  }

  
  const handleClick = (buttonLabel) => {
    if (buttonLabel === 'All Resturent') {
      setFilteredRestaurants(selectedCity.restaurants);
    } else {
      const filteredByRestaurantName = selectedCity.restaurants.filter(restaurant =>
        restaurant.restaurantName.toLowerCase() === buttonLabel.toLowerCase()
      );
      setFilteredRestaurants(filteredByRestaurantName);
    }
  }
  
  

  const filterRestaurants = (filterText) => {
    const filtered = selectedCity.restaurants.filter(restaurant =>
      restaurant.restaurantName.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }

  return (
    <div>
      <div className='upperContainer'>
        <div className='leftSide'><h1>Check Out {selectedCity.cityName} Restaurants</h1></div>
        <div className='rightSide'><img src={selectedCity.image} alt="City" /></div>
      </div>

      <div className='containerResturent'>
        <input
          type="text"
          placeholder='Search here'
          value={searchResturent}
          onChange={searchHandler}
          className='inputSearch'
        />
      </div>

      <div className='searchButton'>
        <button onClick={() => handleClick('All Resturent')}>All Resturent</button>
        <button onClick={() => handleClick('Delicious Bites')}>Delicious Bites</button>
        <button onClick={() => handleClick('Tasty treats')}>Tasty treats</button>
        <button onClick={() => handleClick('Burger Bizz')}>Burger Bizz</button>
      </div>

      <div className="card-container">
        {filteredRestaurants.map(restaurant => (
          <Link key={restaurant.id} to={`/city/${cityId}/${restaurant.id}/Menue`}>
            <div className="card">
              <img src={restaurant.image} alt={restaurant.restaurantName} className="card-image" />
              <div className="card-overlay">
                <p className="restaurant-name">{restaurant.restaurantName}</p>
              </div>
            </div>
          </Link>
        ))}
        {
          filteredRestaurants.length === 0 && (
            <p>No restaurant found</p>
          )
        }
      </div>
    </div>
  );
};

export default CityRestaurants;

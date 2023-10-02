import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import {citiesData} from '../DATA/data';
import './Menue.css';
import { cartContext } from '../Context/Context';

function Menu() {
  const [searchMenu, setSearchMenu] = useState('');
  const { restaurantId } = useParams();

const Globalstate = useContext(cartContext);
const dispatch = Globalstate.dispatch;
console.log(Globalstate)


  const selectedRestaurant = citiesData
    .map(city => city.restaurants)
    .flat()
    .find(restaurant => restaurant.id === Number(restaurantId));

  if (!selectedRestaurant) {
    return <div className="menu">Restaurant not found</div>;
  }

  // Filter menu items based on the search input
  const filteredMenu = selectedRestaurant.menu.filter(item =>
    item.category.toLowerCase().includes(searchMenu.toLowerCase())
  );

  // Search menu handler
  const searchMenuHandler = event => {
    setSearchMenu(event.target.value);
  };

   // Button click handler
   const handleCategoryButtonClick = category => {
    setSearchMenu(category);
  };



 

  return (
    <>
      <div className="menu">
        <h1 className="menu-title">Menu for {selectedRestaurant.restaurantName}</h1>
  
        <input
          type="text"
          placeholder="Search menu here"
          value={searchMenu}
          onChange={searchMenuHandler}
        />
  
        {/* Buttons for menu categories */}
        <div className="search">
          <div className="menu-buttons">
            <button onClick={() => handleCategoryButtonClick('pasta')}>Pasta</button>
            <button onClick={() => handleCategoryButtonClick('salads')}>Salads</button>
            <button onClick={() => handleCategoryButtonClick('burgers')}>Burgers</button>
            <button onClick={() => handleCategoryButtonClick('pizzas')}>Pizzas</button>
            <button onClick={() => handleCategoryButtonClick('sashimi')}>Sashimi</button>
            <button onClick={() => handleCategoryButtonClick('sushi rolls')}>Sushi Rolls</button>
          </div>
  
          <select
            value={searchMenu}
            onChange={searchMenuHandler}
            className="menu-category-select"
          >
            <option value="">Select Category</option>
            <option value="pasta">Pasta</option>
            <option value="salads">Salads</option>
            <option value="burgers">Burgers</option>
            <option value="sashimi">Sashimi</option>
          </select>
        </div>
  
        <div className="menu-items">
          {filteredMenu.map((item, index) => {
            // Set item.quantity to 1 here
            item.quantity = 1;
  
            return (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.itemName} className="item-image" />
                <div className="item-details">
                  <h3 className="item-name">{item.itemName}</h3>
                  <p className="item-description">{item.description}</p>
                  <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                  <p className="item-category">Category: {item.category}</p>
                  <button className="item-add-to-cart" onClick={() => dispatch({ type: 'add', payload: item })}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )}

export default Menu;
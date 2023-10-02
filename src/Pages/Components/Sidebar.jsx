// import React, { useState } from 'react';
// import './Sidebar.css'

// const Sidebar = ({ applyFilters }) => {
//   const [cuisineFilters, setCuisineFilters] = useState([]);
//   const [priceFilters, setPriceFilters] = useState([]);

//   const handleCuisineChange = (e) => {
//     const cuisineValue = e.target.value;
//     if (cuisineFilters.includes(cuisineValue)) {
//       // Remove cuisine filter if it's already selected
//       setCuisineFilters(cuisineFilters.filter((filter) => filter !== cuisineValue));
//     } else {
//       // Add cuisine filter if it's not selected
//       setCuisineFilters([...cuisineFilters, cuisineValue]);
//     }
//   };

//   const handlePriceChange = (e) => {
//     const priceValue = e.target.value;
//     if (priceFilters.includes(priceValue)) {
//       // Remove price filter if it's already selected
//       setPriceFilters(priceFilters.filter((filter) => filter !== priceValue));
//     } else {
//       // Add price filter if it's not selected
//       setPriceFilters([...priceFilters, priceValue]);
//     }
//   };

//   const applyFiltersHandler = () => {
//     // Pass selected filters to a parent component or function
//     applyFilters({ cuisine: cuisineFilters, price: priceFilters });
//   };

//   return (
//     <div className="filter-sidebar">
//       <h2>Filters</h2>
//       <div className="filter-section">
//         <h3>Cuisine</h3>
//         <ul className="filter-options">
//           <li>
//             <label htmlFor="italian">Italian</label>
//             <input
//               type="checkbox"
//               id="italian"
//               value="italian"
//               checked={cuisineFilters.includes('italian')}
//               onChange={handleCuisineChange}
//             />
//           </li>
//           <li>
//             <label htmlFor="mexican">Mexican</label>
//             <input
//               type="checkbox"
//               id="mexican"
//               value="mexican"
//               checked={cuisineFilters.includes('mexican')}
//               onChange={handleCuisineChange}
//             />
//           </li>
//           {/* Add more cuisine options as needed */}
//         </ul>
//       </div>
//       <div className="filter-section">
//         <h3>Price</h3>
//         <ul className="filter-options">
//           <li>
//             <label htmlFor="price1">Low</label>
//             <input
//               type="checkbox"
//               id="price1"
//               value="price1"
//               checked={priceFilters.includes('price1')}
//               onChange={handlePriceChange}
//             />
//           </li>
//           <li>
//             <label htmlFor="price2">Medium</label>
//             <input
//               type="checkbox"
//               id="price2"
//               value="price2"
//               checked={priceFilters.includes('price2')}
//               onChange={handlePriceChange}
//             />
//           </li>
//           {/* Add more price options as needed */}
//         </ul>
//       </div>
//       <button className="apply-button" onClick={applyFiltersHandler}>Apply Filters</button>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from 'react';
import './Sidebar.css'


const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); // Dropdown selection
  const [selectedPrice, setSelectedPrice] = useState(''); // Price range selection

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search Term:', searchTerm);
    console.log('Selected City:', selectedCity);
    console.log('Selected Price:', selectedPrice);
  };

  return (
    <div className="sidebar-search">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search by restaurant or menu item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="search-options">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {/* Add city options here */}
        </select>
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="">Price Range</option>
          {/* Add price range options here */}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Sidebar;

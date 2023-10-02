import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Resturent from './Pages/Components/Resturent';
import Menue from './Pages/Menue';
import Cart from './Pages/Components/Cart';
import Navbar from './Pages/Components/Navbar';



function App() {
  return (
    
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/City/:cityId" element={<Resturent />} />
        <Route path="/City/:cityId/:restaurantId/Menue" element={<Menue />} />


        {/* Other routes */}
      </Routes>
    </Router>
      

    </>
    
     
  );
}

export default App;

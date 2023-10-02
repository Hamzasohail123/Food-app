import React from 'react';
import './Navbar.css'; 
import {BsCartDash} from 'react-icons/bs'
import NavBelow from './NavBelow';
import Cart from './Cart';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://seeklogo.com/images/F/foodpanda-logo-551BD51321-seeklogo.com.png" alt="Logo" />
      </div>
      <div className="navbar-right">
        <div className="cart-icon">

          <Link to='/Cart'>
        <BsCartDash size={30}  />
        </Link>

        </div>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>      
    </nav>
    </>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import {useNavigate } from 'react-router-dom';

function Navbar() {
  
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/organiser');
    };
  return (
    <nav>
      <img id="nav-logo" src={logo} alt="Logo" />
      <div className="nav-right-button">
      <Link to="/organiser"><button onClick={handleButtonClick}>Create Event</button></Link>
        <Link to="/signin"><button>Connect Wallet</button></Link>
      </div>
    </nav>
  );
}


export default Navbar;



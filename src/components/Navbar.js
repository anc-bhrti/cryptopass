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
      <div className="nav-centre">
        <input className="nav-search" placeholder="Search web3" />
        <i className="nav-pointer fa-solid fa-magnifying-glass fa-lg" style={{ color: "#919191" }}></i>
      </div>
      <div className="nav-right-button">
      <Link to="/organiser"><button onClick={handleButtonClick}>Organiser</button></Link>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </nav>
  );
}


export default Navbar;



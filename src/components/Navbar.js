import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  
  return (
    <nav>
      <img id="nav-logo" src={logo} alt="Logo" />
      <div className="nav-right-button">
        <Link to="/create-event"><button >Create Event</button></Link> {/*onClick={handleButtonClick} */}
        <Link to="/sign-in"><button>Connect Wallet</button></Link>
        <Link to="/user">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"/>
      </svg>
    </button>
  </Link>
      </div>
    </nav>
  );
}


export default Navbar;



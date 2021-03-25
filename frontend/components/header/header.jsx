import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  
  return (
    <div className="nav-bar-container">
      <div className="header-box1">
        <Link to="/" className="header-link"><div className="logo">Trustero To-Do List</div></Link>
      </div>
    </div>
  );
};

export default Header;
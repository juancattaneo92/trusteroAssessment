import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  
  return (
    <div className="header-container">
      <div className="header-box1">
        <Link to="/" className="header-link"><div className="logo">To-do Lists</div></Link>
      </div>
    </div>
  );
};

export default Header;
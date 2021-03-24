import React from 'react';
import { connect } from 'react-redux';
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


const mSTP = (state) => {
  return {
  };
};

const mDTP = dispatch => {
  return {
  }
};

export default connect(mSTP, mDTP)(Header);

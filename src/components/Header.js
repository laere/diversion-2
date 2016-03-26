import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = ({ onChange, onClick }) => {
  return (
    <header>
      <div className="mainHeader">
        <Link to='/'>
          <h1 className='logo'>Diversion</h1>
        </Link>
        <div>
          <button onClick={onClick} className="searchbarBtn">
            <i className="fa fa-search"></i>
          </button>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search..."
              onChange={onChange} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Header;

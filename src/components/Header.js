import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

const Header = ({ onChange }) => {
  return (
    <header>
      <div className="mainHeader">
        <IndexLink to='/'>
          <h1 className='logo'>Diversion</h1>
        </IndexLink>
        <div>
          <Link to='favorites'>
            <input className="favBtn" type="submit" value="Your Favorites"/>
          </Link>
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
  onChange: React.PropTypes.func.isRequired
}

export default Header;

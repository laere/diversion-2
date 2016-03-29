import React, { Component } from 'react';
import { IndexLink } from 'react-router';

const Header = ({ onChange }) => {
  return (
    <header>
      <div className="mainHeader">
        <IndexLink to='/'>
          <h1 className='logo'>Diversion</h1>
        </IndexLink>
        <div>
          <form>
            <button className="searchbarBtn">
              <i className="fa fa-search"></i>
            </button>
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search..."
                onChange={onChange} />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: React.PropTypes.func.isRequired
}

export default Header;

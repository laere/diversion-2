import React, { Component } from 'react';
import { IndexLink } from 'react-router';

const Header = ({ onChange, onSubmit, input }) => {
  return (
    <header>
      <div className="mainHeader">
        <IndexLink to='/'>
          <h1 className='logo'>Diversion</h1>
        </IndexLink>
        <div>
          <form onSubmit={onSubmit}>
            <button className="searchbarBtn">
              <i className="fa fa-search"></i>
            </button>
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={onChange} />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  input: React.PropTypes.object
}

export default Header;

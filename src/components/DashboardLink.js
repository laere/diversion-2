import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DashboardLink = (props) => {

    return (
      <Link
          to={props.type}
          style={{color: '#73797F' }}
          className="DashboardLinkWrapper"
          activeClassName="DashboardLinkWrapper--active"
          activeStyle={{backgroundColor: props.bgColor, color: props.fontColor}} >
        <div className={props.style}>
          <i className={props.icon}></i>
          <div className="dashboardName">{props.type}</div>
        </div>
      </Link>
    );

};

DashboardLink.propTypes = {
    style: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string
}

export default DashboardLink;

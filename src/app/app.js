import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import Header from '../containers/HeaderContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Dashboard />
            <ReactCSSTransitionGroup
              transitionName='appear'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </ReactCSSTransitionGroup>
        </div>
    );
  }
}

import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import Header from '../containers/HeaderContainer';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="homeContainer">
        <MainContent>
          <Heading
            style="homeHeader header"
            header="Home"
          />
          <div className="homeContent">
            <h2>Welcome to Diversion!</h2>
            <p></p>
          </div>
        </MainContent>
      </div>
    );
  }
}

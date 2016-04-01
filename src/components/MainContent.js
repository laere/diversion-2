import React, { Component } from 'react';

export default class MainContent extends Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

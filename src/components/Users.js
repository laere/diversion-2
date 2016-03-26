import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';


export default class Users extends Component {
  render() {

    const { users } = this.props;
    const usersObj = users.data;

    return (
      <MainContent>
        <Heading style="usersHeader header" header="Users"/>
          <div className="channelInfo">
            <div>{usersObj.display_name}</div>
            <img src={usersObj.logo} alt="user logo" />
            <div>{usersObj.bio}</div>
          </div>
      </MainContent>
    );
  };
}

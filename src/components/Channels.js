import React, { Component, PropTypes } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class Channels extends Component {
  render() {
    const { channels } = this.props;
    const channelObj = channels.data;
    return (
      <MainContent>
        <Heading style="channelsHeader header" header="Channels"/>
          <div className="channelInfo">
            <span>{channelObj.game}</span>
            <div>{channelObj.status}</div>
            <div>
              <a href={channelObj.url} target="_blank">
                <img src={channelObj.logo} alt="channel logo" width="400"/>
              </a>
            </div>
            <div>
              <div>{channelObj.viewers} viewers on <strong>{channelObj.name}</strong></div>
              <div>{channelObj.followers} followers</div>
            </div>
          </div>
      </MainContent>
    );
  }
}

Channels.propTypes = {
  channels: PropTypes.object.isRequired,
  game: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  viewers: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  followers:PropTypes.string.isRequired
}

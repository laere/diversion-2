import React, { Component } from 'react';
import Heading from '../components/Heading';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Heading
          style="homeHeader header"
          header="Home"
          />
        <div className="homeContent">
          <h2>Welcome to Diversion!</h2>

          <p><span className="diversionTag">di·ver·sion</span><em>- an activity that diverts the mind from tedious or serious concerns; a recreation or pastime.</em></p>

          <p>Diversion is an app that utilizes the Twitch API. Twitch has become a distraction. Although one could easily blame Twitch for this, it's more of a personal lack of discipline, willpower, and focus.</p>

          <p>Ironically I built this while always keeping one of my favorite twitch streamers on in the background, and although I haven't been as distracted by Twitch presently,
          compared to the past. I thought it would be a cool project, to really focus, and try to create something that keeps pushing my skills to the next level.</p>

        <a href="http://github.com/laere/diversion-2">Click here</a><span>to see the projects source code.</span> <a href="https://twitter.com/zack_bostian">And here</a><span>to follow me on twitter!</span>
        </div>
      </div>
    );
  }
}

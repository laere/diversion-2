import React, { Component, PropTypes } from 'react';
import DashboardLink from '../components/DashboardLink';

export default class Dashboard extends Component  {
    render() {
        return (
            <div className="dashboard">
                <DashboardLink
                    style="dashboardLink streamsLink"
                    type="streams"
                    icon="fa fa-desktop fa-2x"
                    bgColor={'10px solid #09BC8A'}
                    fontColor={'#fff'}
                    />
                <DashboardLink
                    style="dashboardLink gamesLink"
                    type="games"
                    icon="fa fa-gamepad fa-2x"
                    bgColor={'#E84C4C'}
                    fontColor={'#fff'}
                    />
                <DashboardLink
                    style="dashboardLink videosLink"
                    type="videos"
                    icon="fa fa-play fa-2x"
                    bgColor={'#6870B8'}
                    fontColor={'#fff'}
                    />
                <DashboardLink
                    style="dashboardLink channelsLink"
                    type="channels"
                    icon="fa fa-video-camera fa-2x"
                    bgColor={'#E7B03D'}
                    fontColor={'#fff'}
                    />
                <DashboardLink
                    style="dashboardLink usersLink"
                    type="search"
                    icon="fa fa-search fa-2x"
                    bgColor={'#774C60'}
                    fontColor={'#fff'}
                    />
            </div>
        );
    }
}

Dashboard.propTypes = {
    style: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    bgColor: PropTypes.string,
    fontColor: PropTypes.string
}

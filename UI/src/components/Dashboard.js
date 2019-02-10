import React from 'react';
import './bootstrap.css';
import PointsCard from './PointsCard';
import HoursCard from './HoursCard';
import FriendsList from './FriendsList';
import FeaturedOpportunities from './FeaturedOpprtunities';
import ActivityFeed from './ActivityFeed';
import NavBar from './NavBar';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
            <NavBar/>
            <div>Dashboard lol</div>
                </>

        );
    }

}

export default Dashboard;
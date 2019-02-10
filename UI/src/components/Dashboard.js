import React from 'react';
import './bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Dashboard.css'

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
                <div className="background">
            <NavBar/>
            <br/>
                <Container class="m-0 margin-low">
                    <Row>
                        <Col xs={3}>
                            <FriendsList/>
                        </Col>
                        <Col xs={6}>
                            <FeaturedOpportunities/>
                        </Col>
                        <Col xs={3} >
                            <PointsCard/>
                            <br/>
                            <HoursCard/>
                        </Col>
                    </Row>



                </Container>
                </div>

            </>

        );
    }

}

export default Dashboard;
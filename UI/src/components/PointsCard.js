import React from 'react';
import './bootstrap.css';
import './FriendsList.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class PointsCard extends React.Component {
    constructor(props) {
        super(props);
    }




    render () {
        return (
            <>
                <Card className="p-3">
                    <small className="text-muted">
                        You've accumulated...
                    </small>
                    <blockquote className="blockquote mb-0 card-body">
                        <h1>
                            1400 points!
                        </h1>
                        {/*<footer className="blockquote-footer">*/}
                        {/*</footer>*/}
                    </blockquote>
                </Card>
            </>

        );
    }

}

export default PointsCard;
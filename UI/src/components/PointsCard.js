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
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            1400 Points!
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Since May 2018
                            </small>
                        </footer>
                    </blockquote>
                </Card>
            </>

        );
    }

}

export default PointsCard;
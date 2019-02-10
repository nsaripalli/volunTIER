import React from 'react';
import './bootstrap.css';
import './FriendsList.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class HoursCard extends React.Component {
    constructor(props) {
        super(props);
    }




    render () {
        return (
            <>
                <Card className="p-3">
                    <small className="text-muted">
                        You've volunteered for...
                    </small>
                    <blockquote className="blockquote mb-0 card-body">
                        <h1>
                            140 hours!
                        </h1>
                        {/*<footer className="blockquote-footer">*/}
                        {/*</footer>*/}
                    </blockquote>
                </Card>
            </>

        );
    }

}

export default HoursCard;
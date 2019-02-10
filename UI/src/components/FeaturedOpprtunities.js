import React from 'react';
import './bootstrap.css';
import './FriendsList.css'
import Carousel from 'react-bootstrap/Carousel';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


class FeaturedOpportunities extends React.Component {
    constructor(props) {
        super(props);
    }




    render () {
        return (
            <>
                <Card className="text-center">
                    <Card.Header>Featured Activities</Card.Header>
                    <Card.Body>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary btn-block">Attend this event!</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary btn-block">Attend this event!</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary btn-block">Attend this event!</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Card.Body>
                    <Card.Footer > <Button variant="primary btn-block">Find more opportunities!</Button></Card.Footer>
                </Card>
            </>

        );
    }

}

export default FeaturedOpportunities;

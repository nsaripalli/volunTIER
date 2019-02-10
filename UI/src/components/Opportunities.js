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

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';


class Opportunities extends React.Component {
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
                            <Col xs={12}>

                                <CardColumns>
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

                                </CardColumns>

                            </Col>
                        </Row>



                    </Container>
                </div>

            </>

        );
    }

}

export default Opportunities;
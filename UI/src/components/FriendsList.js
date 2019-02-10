import React from 'react';
import './bootstrap.css';
import './FriendsList.css'
import Card from 'react-bootstrap/Card';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text:
                <>
                    <ListGroup.Item>Friends?</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </>
        }

        this.onClickButton1 = this.onClickButton1.bind(this);
        this.onClickButton2 = this.onClickButton2.bind(this);
    }


        onClickButton1() {
            this.setState({
                text:             <>
                    <ListGroup.Item>Friends?</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </>
            });
        }

        onClickButton2()  {
            this.setState({
                text:             <>
                    <ListGroup.Item>AHHHH</ListGroup.Item>
                    <ListGroup.Item>GLOBAL</ListGroup.Item>
                    <ListGroup.Item>oof</ListGroup.Item>
                </>
            });
        }




    render () {
        return (
            <>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#friends">
                            <Nav.Item>
                                <Nav.Link href="#friends" onClick={this.onClickButton1}>Friends</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#global" onClick={this.onClickButton2}>Global</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Rankings</Card.Title>
                        <Card.Text>
                            <ListGroup className="list-group-flush">
                                {this.state.text}
                            </ListGroup>

                        </Card.Text>
                    </Card.Body>
                </Card>


            </>

        );
    }

}

export default Dashboard;
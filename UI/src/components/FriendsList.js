import React from 'react';
import axios from 'axios';
import './bootstrap.css';
import './FriendsList.css'
import Card from 'react-bootstrap/Card';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const API_URL = "http://localhost/8080";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            text:
                <>
                    <ListGroup.Item>Friends?</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </>,
            globalList:[]

        }

        this.onClickButton1 = this.onClickButton1.bind(this);
        this.onClickButton2 = this.onClickButton2.bind(this);
        this.getGlobalLeaderboard = this.getGlobalLeaderboard.bind(this);
    }

    getGlobalLeaderboard(){
        axios.get(API_URL + '/leaderboard/global').then(function (response) {
            this.state.globalList = response;
        })

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
        this.getGlobalLeaderboard()
        const leaderboard = this.state.globalList.map(function(item){
            return <ListGroup.Item> {item.name} </ListGroup.Item>

        });
        return (
            <>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#global">
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
                                {leaderboard}
                            </ListGroup>

                        </Card.Text>
                    </Card.Body>
                </Card>


            </>

        );
    }

}

export default Dashboard;
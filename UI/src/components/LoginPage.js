import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './bootstrap.css';
import './loginpage.css'
import { Link } from 'react-router-dom';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sModalIsOpen: false,
         lModalIsOpen: false,
    }

        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.closeSignUpModal = this.closeSignUpModal.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
    }

    openSignUpModal() {
        this.setState({sModalIsOpen: true});
    }

    closeSignUpModal() {
        this.setState({sModalIsOpen: false});
    }

    openLoginModal() {
        this.setState({lModalIsOpen: true});
    }

    closeLoginModal() {
        this.setState({lModalIsOpen: false});
    }


    render() {

        return <>
            <div className="box-layout">
                <div className="box-layout__box">
                    <img width="200px" src="https://www.logolynx.com/images/logolynx/43/431d9159dca9f1d8e1ab29b5602e5dfd.png"/>
                    <h1 className="box-layout__title">volunTIER</h1>
                    <br/>
                    <p>Be the best volunteer you can be.</p>
                    <hr/>
                    <div className="box-layout__buttons">

                        <Button variant="secondary btn-block" className="box-layout__buttons__button" onClick={this.openSignUpModal}>
                            Sign Up!
                        </Button>


                        <Button variant="primary btn-block" className="box-layout__buttons__button" onClick={this.openLoginModal}>
                            Log in
                        </Button>

                    </div>
                </div>
            </div>
            <div class="modal-container">
                <Modal
                    show={this.state.sModalIsOpen}
                    onHide={this.closeSignUpModal}
                    dialogClassName={"signup-modal"}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            Create Account
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="inner">
                            <Row>

                                    <Col>
                                        <Form.Control placeholder="First name"/>
                                    </Col>

                                    <Col>
                                        <Form.Control placeholder="Last name"/>
                                    </Col>

                            </Row>
                            </div>
                            <div class="inner">
                                <Form.Control type="email" placeholder="Enter email"/>

                            </div>
                            <div className="inner">
                                <Form.Control placeholder="Username"/>
                            </div>
                            <div class="inner">
                                <Form.Control type="password" placeholder="Password"/>
                            </div>
                            <div class="inner">
                                <Form.Control type="password" placeholder="Re-enter Password"/>
                            </div>
                            <div class="inner">
                                <Form.Control placeholder="DOB"/>
                            </div>


                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeSignUpModal}>
                            Close
                        </Button>
                        <Link to="/dashboard">
                        <Button variant="primary">
                            Register
                        </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>


            <div className="modal-container">
            <Modal
                show={this.state.lModalIsOpen}
                onHide={this.closeLoginModal}
                dialogClassName={"login-modal"}>

                <Modal.Header closeButton>
                    <Modal.Title>
                       Log in!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div class="inner">
                            <Form.Control type="email" placeholder="Enter email or username"/>

                        </div>
                        <div class="inner">
                            <Form.Control type="password" placeholder="Password"/>
                        </div>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeLoginModal}>
                        Close
                    </Button>
                    <Link to="/dashboard">
                    <Button variant="primary" onClick={this.closeLoginModal}>
                        Log in
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
            </div>
        </>;
    }
}

export default LoginPage;
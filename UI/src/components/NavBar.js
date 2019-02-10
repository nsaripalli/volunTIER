import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import './navbar.css'


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
          <>
              <Navbar bg="light">
                  <Navbar.Brand href="/dashboard">volunTIER</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <div class="parent">
                              <div className="dashboard">
                                  <Nav.Link href="/dashboard">
                                     Dashboard
                                  </Nav.Link>
                              </div>
                              <div className="find-opp">
                                  <Nav.Link href="/opportunities">
                                          Find Opportunities
                                  </Nav.Link>
                              </div>
                            {/*<div class="activity-feed">*/}
                                {/*<Nav.Link href="/ActivityFeed">*/}
                                    {/*Activity Feed*/}
                                {/*</Nav.Link>*/}
                            {/*</div>*/}

                              <div className="search-bar">
                                  <Form inline>
                                      <FormControl id="bar" type="text" placeholder="Search"
                                                   className="mr-sm-2"/>
                                      <Button variant="outline-success">Search</Button>
                                  </Form>
                              </div>
                          </div>
                      </Nav>

                              <Nav>
                              <div className="profile-dropdown">
                                  <NavDropdown title="Profile" id="dropdown-menu-align-right">
                                      <div className="profile-dropdown-drop">
                                      <NavDropdown.Item href="#action/3.1">View
                                          Account</NavDropdown.Item>
                                      <NavDropdown.Item
                                          href="#action/3.2">Preferences</NavDropdown.Item>
                                      <NavDropdown.Divider/>
                                      <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                                      </div>
                                  </NavDropdown>
                              </div>
                              </Nav>


                  </Navbar.Collapse>
              </Navbar>
          </>
        );
    }
}

export default NavBar;
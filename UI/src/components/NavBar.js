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
          <div>
              <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">volunTIER</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <div class="parent">
                              <div className="find-opp">
                                  <Nav.Link>
                                      <Link to='/'>
                                          Find Opportunities
                                      </Link>

                                  </Nav.Link>
                              </div>
                            <div class="activity-feed">
                                <Nav.Link><Link to='/dashboard'>
                                    Activity Feed
                                </Link></Nav.Link>
                            </div>

                              <div className="search-bar">
                                  <Form inline>
                                      <FormControl id="bar" type="text" placeholder="Search"
                                                   className="mr-sm-2"/>
                                      <Button variant="outline-success">Search</Button>
                                  </Form>
                              </div>
                              <div className="profile-dropdown">
                                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="#action/3.1">View
                                          Account</NavDropdown.Item>
                                      <NavDropdown.Item
                                          href="#action/3.2">Preferences</NavDropdown.Item>
                                      <NavDropdown.Divider/>
                                      <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                                  </NavDropdown>
                              </div>
                          </div>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        );
    }
}

export default NavBar;
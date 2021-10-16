import React from "react";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                src="logo192.png"
                width="30"
                height="30"
                className="brand"
                alt="logo"
            />   Property Viewer
            </Navbar.Brand>
            <Navbar.Toggle 
                aria-controls="basic-navbar-nav"    
            />
            <Navbar.Collapse 
                id="basic-navbar-nav"
            >
            <Nav className="me-auto"
            >
                <Nav.Link 
                    href="#home">Home
                </Nav.Link>
                <NavDropdown 
                    title="View" 
                    id="basic-nav-dropdown">
                    <NavDropdown.Item 
                        href="#action/3.1"
                        >Latest
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                        href="#action/3.2"
                        >My Favorites
                    </NavDropdown.Item>
                    <NavDropdown.Item 
                    href="#action/3.3"
                        >Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item 
                        href="#action/3.4"
                        >Submit Viewing Request
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="login"
                    href="#home">Login
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar;
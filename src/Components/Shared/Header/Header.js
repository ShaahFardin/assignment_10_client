import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/courses">Courses</Nav.Link>
                <Nav.Link href="#deets">FAQ</Nav.Link>
                <Nav.Link href="#deets">Blog</Nav.Link>
                <NavDropdown title="Theme" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Device theme</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Black
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                   Light
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                 
                </NavDropdown>
                <Nav.Link href="#deets">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;
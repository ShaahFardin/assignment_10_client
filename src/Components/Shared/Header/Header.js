import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                to="/courses"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                Courses
              </Link>
              <Link
                to="/blog"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                FAQ
              </Link>
              <Link
                to="/faq"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                Blog
              </Link>
              <NavDropdown
                title="Theme"
                id="collasible-nav-dropdown"
                className=" text-white me-3 "
              >
                <NavDropdown.Item href="#action/3.1">
                  Device theme
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Black</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Light</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Link
                to="/login"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                {user?.photoURL ? (
                  <Image style={{height:'30px'}} roundedCircle src={user?.photoURL }></Image>
                ) : (
                  <FaUser></FaUser>
                )}
    
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

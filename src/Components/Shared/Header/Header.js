import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaMedapps, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../../LeftSideNav/LeftSideNav";
import "./Header.css";

const Header = () => {
  const { user, logout, blackTheme, lightTheme } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <FaMedapps className="me-2"></FaMedapps>
            TeachMe
          </Navbar.Brand>
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
                to="/faq"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                FAQ
              </Link>
              <Link
                to="/blog"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                Blog
              </Link>
              <NavDropdown title="Theme" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" onClick={lightTheme}>
                  Light
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={blackTheme}>
                  Dark
                </NavDropdown.Item>
              </NavDropdown>

              <Link className="mt-2 text-white me-3 text-decoration-none">
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Link
                      onClick={handleLogOut}
                      className="mt- text-white ms-3 text-decoration-none"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="mt-2 text-white  text-decoration-none"
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                )}
              </Link>
              <Link
                to="/userDetails"
                className="mt-2 text-white me-3 text-decoration-none"
              >
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
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

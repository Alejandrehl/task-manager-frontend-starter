import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Task Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {isAuthenticated && (
          <Nav>
            <Nav.Link eventKey={2} onClick={logout}>
              Salir
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

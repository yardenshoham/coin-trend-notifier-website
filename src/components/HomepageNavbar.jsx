import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const HomepageNavbar = () => {
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ marginBottom: "30px" }}
      >
        <Container style={{ maxWidth: "1020px", margin: "auto" }}>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="90px"
              className="d-inline-block align-top"
              alt="logo"
              style={{ marginLeft: "20px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Nav>
            <Nav className="mr-sm-2" variant="dark">
              <Nav.Link href="#account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default HomepageNavbar;

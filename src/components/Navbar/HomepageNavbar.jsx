import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

export default function HomepageNavbar(props) {
  const history = useHistory();

  const changepage = (pageName) => {
    history.push(`/${pageName}`);
  };

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
              style={{ marginLeft: "15px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => changepage("")}>Home</Nav.Link>
              <Nav.Link onClick={() => changepage("about")}>About</Nav.Link>
            </Nav>
            <Nav className="mr-sm-2" variant="dark">
              <Nav.Item
                style={{ color: "rgba(255,255,255,.5)" }}
                onClick={() => props.onAccountWindowChange()}
              >
                Account
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

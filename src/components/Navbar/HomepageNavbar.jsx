import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import AccountWindow from "./AccountWindow";

export default function HomepageNavbar(props) {
  const [accountWindow, setAccountWindow] = useState(false);

  const handleAccountWindowChange = () => {
    setAccountWindow(!accountWindow);
  };

  const history = useHistory();

  const changepage = (pageName) => {
    history.push(`/coin-trend-notifier-website/${pageName}`);
  };

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ marginBottom: "30px", position: "relative" }}
      >
        <Container style={{ maxWidth: "1020px", margin: "auto" }}>
          <Navbar.Brand href="/coin-trend-notifier-website">
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
              <Nav.Link
                onClick={() => {
                  if (accountWindow) handleAccountWindowChange();
                  changepage("");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  if (accountWindow) handleAccountWindowChange();
                  changepage("about");
                }}
              >
                About
              </Nav.Link>
            </Nav>
            <Nav
              className="mr-sm-2"
              variant="dark"
              style={{ position: "relative" }}
            >
              <Nav.Link
                style={{ color: "rgba(255,255,255,.5)" }}
                onClick={() => handleAccountWindowChange()}
              >
                Account
              </Nav.Link>
              <AccountWindow
                visible={accountWindow}
                onAccountWindowChange={handleAccountWindowChange}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const HomepageNavbar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2" variant="dark">
          <Nav.Link href="#account">Account</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default HomepageNavbar;

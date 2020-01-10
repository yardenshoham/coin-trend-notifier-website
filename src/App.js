import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow from "./components/Arrow";

class App extends Component {
  render() {
    return (
      <div className="NotRegister">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="mr-sm-2" variant="dark">
            <Nav.Link href="#account">Account</Nav.Link>
          </Nav>
        </Navbar>
        <div style={{ position: "relative", top: "50px" }}>
          <Arrow color={"green"} angle={45} />
        </div>
      </div>
    );
  }
}

export default App;

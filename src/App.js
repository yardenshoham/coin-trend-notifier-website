import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
    </div>
  );
}

export default App;

{
  /* <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}

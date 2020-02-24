import React, { Component } from "react";
import HomepageNavbar from "./components/HomepageNavbar";
import TrendsContainer from "./components/TrendsContainer";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  state = {
    loggedIn: false
  };

  changeLoggedIn() {
    this.setState({ loggedIn: true });
  }

  handleLogin = event => {
    // prevent page from refreshing
    event.preventDefault();

    // check connectivity
    // console.log(systemConnector.check_servers_availablity());
    // login
    // error handling
    // save token in localStorage
    console.log("token saved");
    // change state to loggedIn=true;
    this.changeLoggedIn();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="RegisterBody">
          <HomepageNavbar />
          <div
            style={{
              position: "relative",
              maxWidth: "960px",
              margin: "auto"
            }}
            className="HomepageBody"
          >
            <TrendsContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="NotRegisterBody">
          <HomepageNavbar />
          <Container fluid className="HomepageBody">
            <Row>
              <Col
                style={{
                  border: "1px solid gray",
                  padding: "50px",
                  position: "relative",
                  top: "10%",
                  margin: "auto",
                  boxShadow: "0px -3px 13px -2px"
                }}
                md={5}
                xs={10}
              >
                <LoginForm onLogin={this.handleLogin} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

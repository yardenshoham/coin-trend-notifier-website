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

  handleLoggedInChange = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
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
                  boxShadow: "0px 0px 10px -2px",
                  borderRadius: "1%"
                }}
                md={5}
                xs={10}
              >
                <LoginForm onLogin={this.handleLoggedInChange} />
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    }
  }
}

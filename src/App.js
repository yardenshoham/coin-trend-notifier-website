import React, { Component } from "react";
import HomepageNavbar from "./components/HomepageNavbar";
import TrendsContainer from "./components/TrendsContainer";
import LoginForm from "./components/LoginForm";
import AccountWindow from "./components/AccountWindow";
import SignupForm from "./components/SignupForm";
import Preferences from "./components/Preferences";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  state = {
    loggedIn: false,
    accountWindow: false,
    pageToDisplay: "loginForm"
  };

  handlePageToDisplay = pageName => {
    this.setState({ pageToDisplay: pageName });
  };

  handleLoggedInChange = () => {
    this.setState({ pageToDisplay: "trendsContainer" });
    this.setState({ loggedIn: true });
  };

  handleAccountWindow = () => {
    this.setState({ accountWindow: !this.state.accountWindow });
  };

  whatDoDisplay = () => {
    switch (this.state.pageToDisplay) {
      case "loginForm":
        return (
          <React.Fragment>
            <HomepageNavbar onAccountWindowChange={this.handleAccountWindow} />
            <AccountWindow
              visible={this.state.accountWindow}
              onPageToDisplayChange={this.handlePageToDisplay}
              isSignedIn={this.state.loggedIn}
            />
            <Container fluid className="HomepageBody">
              <Row>
                <Col
                  style={{
                    border: "1px solid gray",
                    padding: "50px",
                    position: "relative",
                    top: "10%",
                    margin: "auto",
                    boxShadow: "0px 0px 8px -2px",
                    borderRadius: "1%"
                  }}
                  md={5}
                  xs={10}
                >
                  <LoginForm onPageToDisplayChange={this.handlePageToDisplay} />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        );
      case "trendsContainer":
        return (
          <React.Fragment>
            <HomepageNavbar onAccountWindowChange={this.handleAccountWindow} />
            <AccountWindow
              visible={this.state.accountWindow}
              onPageToDisplayChange={this.handlePageToDisplay}
              isSignedIn={this.state.loggedIn}
            />
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
      case "signupForm":
        return (
          <React.Fragment>
            <HomepageNavbar onAccountWindowChange={this.handleAccountWindow} />
            <AccountWindow
              visible={this.state.accountWindow}
              onPageToDisplayChange={this.handlePageToDisplay}
              isSignedIn={this.state.loggedIn}
            />
            <Container fluid className="HomepageBody">
              <Row>
                <Col
                  style={{
                    border: "1px solid gray",
                    padding: "50px",
                    position: "relative",
                    top: "10%",
                    margin: "auto",
                    boxShadow: "0px 0px 8px -2px",
                    borderRadius: "1%"
                  }}
                  md={5}
                  xs={10}
                >
                  <SignupForm
                    onPageToDisplayChange={this.handlePageToDisplay}
                  />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        );
      case "settings":
        return <React.Fragment></React.Fragment>;
      case "preferences":
        return (
          <React.Fragment>
            <HomepageNavbar onAccountWindowChange={this.handleAccountWindow} />
            <AccountWindow
              visible={this.state.accountWindow}
              onPageToDisplayChange={this.handlePageToDisplay}
              isSignedIn={this.state.loggedIn}
            />
            <Container fluid className="HomepageBody">
              <Row>
                <Col
                  style={{
                    border: "1px solid gray",
                    padding: "50px",
                    position: "relative",
                    top: "10%",
                    margin: "auto",
                    boxShadow: "0px 0px 8px -2px",
                    borderRadius: "1%"
                  }}
                  md={8}
                  xs={10}
                >
                  <Preferences />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        );
      case "about":
        return <React.Fragment></React.Fragment>;
      default:
        return <div>ERROR</div>;
    }
  };

  render() {
    return this.whatDoDisplay();
  }
}

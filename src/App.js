import React, { useState } from "react";
import HomepageNavbar from "./components/Navbar/HomepageNavbar";
import TrendsContainer from "./components/Trends/TrendsContainer";
import LoginForm from "./components/Login/LoginForm";
import AccountWindow from "./components/Navbar/AccountWindow";
import SignupForm from "./components/Signup/SignupForm";
import Preferences from "./components/Preferences/Preferences";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  const [accountWindow, setAccountWindow] = useState(false);

  // const history = useHistory();

  const handleAccountWindow = () => {
    setAccountWindow(!accountWindow);
  };

  const whatDoDisplay = () => {
    return (
      <Router>
        <div>
          <HomepageNavbar onAccountWindowChange={handleAccountWindow} />
          <AccountWindow visible={accountWindow} />

          <Switch>
            <Route path="/coin-trend-notifier-website/login">
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
                      borderRadius: "1%",
                    }}
                    md={5}
                    xs={10}
                  >
                    <LoginForm />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path="/coin-trend-notifier-website/trends">
              <div
                style={{
                  position: "relative",
                  maxWidth: "960px",
                  margin: "auto",
                }}
                className="HomepageBody"
              >
                <TrendsContainer />
              </div>
            </Route>
            <Route path="/coin-trend-notifier-website/signup">
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
                      borderRadius: "1%",
                    }}
                    md={5}
                    xs={10}
                  >
                    <SignupForm />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path="/coin-trend-notifier-website/settings">
              <React.Fragment></React.Fragment>
            </Route>
            <Route path="/coin-trend-notifier-website/preferences">
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
                      borderRadius: "1%",
                    }}
                    md={8}
                    xs={10}
                  >
                    <Preferences />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path="/coin-trend-notifier-website/about">
              <React.Fragment></React.Fragment>
            </Route>
            <Route path="/coin-trend-notifier-website/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };

  return whatDoDisplay();
}

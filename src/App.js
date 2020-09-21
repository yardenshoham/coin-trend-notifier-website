import React, { useState } from "react";
import HomepageNavbar from "./components/Navbar/HomepageNavbar";
import AboutPage from "./components/About/AboutPage";
import TrendsContainer from "./components/Trends/TrendsContainer";
import Trend from "./components/Trends/Trend";
import LoginForm from "./components/Login/LoginForm";
import SettingsPage from "./components/Settings/ChangeSettings/SettingsPage";
import ChangePasswordForm from "./components/Settings/ChangePassword/ChangePasswordForm";
import SignupForm from "./components/Signup/SignupForm";
import Preferences from "./components/Preferences/Preferences";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as usersConnector from "./connectors/usersConnector";

export default function App(props) {
  const app = "/coin-trend-notifier-website/";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
  };

  const login = async (email, pass) => {
    setIsLoggedIn(false);
    await usersConnector.loginUser(email, pass);
  };

  const whatDoDisplay = () => {
    return (
      <Router>
        <div>
          <HomepageNavbar onLogout={logout} />

          <Switch>
            <Route path={app + "trends/:id"} component={Trend} />
            <Route path={app + "login"}>
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
                    <LoginForm onLogin={login} />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path={app + "trends"}>
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
            <Route path={app + "signup"}>
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
            <Route path={app + "settings/pass"}>
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
                    <ChangePasswordForm />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path={app + "settings"}>
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
                    <SettingsPage />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path={app + "preferences"}>
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
            <Route path={app + "about"}>
              <AboutPage />
            </Route>
            <Route path={app + ""}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };

  return whatDoDisplay();
}

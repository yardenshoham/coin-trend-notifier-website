import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import * as usersConnector from "../connectors/usersConnector";

const styleMargin = "m-3";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    alertLimit: "0",
    signup: false,
    error: ""
  };

  handleErrorChange = () => {
    this.setState({
      error: "User does not exist or Password does not match. Try again."
    });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePhoneNumberChange = e => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleAlertLimitChange = e => {
    this.setState({ alertLimit: e.target.value });
  };

  handleLogin = async event => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      // login
      let res = await usersConnector.loginUser(
        this.state.email,
        this.state.password
      );
      // save token in localStorage
      localStorage.setItem("jwt", res.jwt);
      console.log("token saved");

      // change state to loggedIn=true;
      this.props.onLogin();
    } catch (e) {
      // error handling
      this.handleErrorChange();
      console.log(e.message);
    }
  };

  handleChangeSignup = () => {
    this.setState({ signup: !this.state.signup });
  };

  handleSignup = async event => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      let res = await usersConnector.createNewUser(
        this.state.email,
        this.state.password,
        this.state.username,
        this.state.phoneNumber,
        parseInt(this.state.alertLimit)
      );
      console.log(res);
    } catch (e) {
      //error handling
      console.log(e.message);
    }
  };

  render() {
    if (this.state.signup) {
      return (
        <React.Fragment>
          <Form onSubmit={this.handleSignup}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username"
                onChange={this.handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phoneNumber"
                placeholder="Such as: +972501234567"
                onChange={this.handlePhoneNumberChange}
              />
            </Form.Group>
            <Form.Group controlId="formAlertLimitNumber">
              <Form.Label>Alert Limit</Form.Label>
              <Form.Control
                type="alertLimit"
                placeholder="AlertLimit"
                onChange={this.handleAlertLimitChange}
              />
            </Form.Group>
            <Container>
              <Row className="justify-content-md-center">
                <Col style={{ textAlign: "center" }} className={styleMargin}>
                  <Button
                    onClick={this.handleSignup}
                    variant="primary"
                    size="lg"
                    active
                    type="submit"
                    style={{ position: "relative", margin: "auto" }}
                  >
                    Signup
                  </Button>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col
                  md={5}
                  xs={10}
                  style={{ textAlign: "center" }}
                  className={styleMargin}
                >
                  <Button
                    onClick={this.handleChangeSignup}
                    variant="outline-primary"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Form onSubmit={this.handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
            </Form.Group>
            {/*need to add functionality for next 3 buttons: */}
            <Container>
              <Row className="justify-content-md-center">
                <Col style={{ textAlign: "center" }} className={styleMargin}>
                  <Button
                    variant="primary"
                    size="lg"
                    active
                    type="submit"
                    style={{ position: "relative", margin: "auto" }}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
              {this.state.error !== "" && (
                <Row className="justify-content-md-center">
                  <Col
                    md={11}
                    xs={10}
                    style={{ textAlign: "center" }}
                    className={styleMargin}
                  >
                    {this.state.error}
                  </Col>
                </Row>
              )}
              <Row className="justify-content-md-center">
                <Col
                  md={5}
                  xs={10}
                  style={{ textAlign: "center" }}
                  className={styleMargin}
                >
                  <Button
                    onClick={this.handleChangeSignup}
                    variant="outline-primary"
                  >
                    Click here for Signup
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </React.Fragment>
      );
    }
  }
}

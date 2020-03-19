import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import * as usersConnector from "../connectors/usersConnector";

class SignupForm extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    alertLimit: "0",
    signup: false,
    error: ""
  };

  styleMargin = "m-3";

  handleSignup = async event => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      await usersConnector.createNewUser(
        this.state.email,
        this.state.password,
        this.state.username,
        this.state.phoneNumber,
        parseInt(this.state.alertLimit)
      );
      this.changeToLogin();
    } catch (e) {
      //error handling
      console.log(e.message);
    }
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

  changeToLogin = () => {
    this.props.onPageToDisplayChange("loginForm");
  };

  render() {
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
              <Col style={{ textAlign: "center" }} className={this.styleMargin}>
                <Button
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
                className={this.styleMargin}
              >
                <Button onClick={this.changeToLogin} variant="outline-primary">
                  Cancel
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignupForm;

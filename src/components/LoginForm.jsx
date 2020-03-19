import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import * as usersConnector from "../connectors/usersConnector";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  styleMargin = "m-3";

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

      // succesfully logged in;
      this.props.onPageToDisplayChange("trendsContainer");
    } catch (e) {
      // error handling
      this.handleErrorChange();
      console.log(e.message);
    }
  };

  changePageToSignup = () => {
    this.props.onPageToDisplayChange("signupForm");
  };

  render() {
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
              <Col style={{ textAlign: "center" }} className={this.styleMargin}>
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
                  className={this.styleMargin}
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
                className={this.styleMargin}
              >
                <Button
                  onClick={this.changePageToSignup}
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

import React from "react";
import { Form } from "react-bootstrap";
import * as usersConnector from "../../connectors/usersConnector";
import SignupFormButtons from "./SignupFormButtons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignupForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alertLimit, setAlertLimit] = useState("0");
  const [error, setError] = useState("");

  const history = useHistory();
  const changeToLogin = () => {
    history.push("/login");
  };
  const handleSignup = async (event) => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      await usersConnector.createNewUser(
        email,
        password,
        username,
        phoneNumber,
        parseInt(alertLimit)
      );
      changeToLogin();
    } catch (e) {
      //error handling
      setError("Error");
      console.log(e.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAlertLimitChange = (e) => {
    setAlertLimit(e.target.value);
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phoneNumber"
            placeholder="Such as: +972501234567"
            onChange={handlePhoneNumberChange}
          />
        </Form.Group>
        <Form.Group controlId="formAlertLimitNumber">
          <Form.Label>Alert Limit</Form.Label>
          <Form.Control
            type="alertLimit"
            placeholder="AlertLimit"
            onChange={handleAlertLimitChange}
          />
        </Form.Group>
        <SignupFormButtons error={error} />
      </Form>
    </React.Fragment>
  );
}

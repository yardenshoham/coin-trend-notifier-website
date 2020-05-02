import React from "react";
import { Form } from "react-bootstrap";
import * as usersConnector from "../../connectors/usersConnector";
import LoginFormButtons from "./LoginFormButtons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleErrorChange = () => {
    setError("User does not exist or Password does not match. Try again.");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      // login
      await usersConnector.loginUser(email, password);

      // succesfully logged in
    } catch (e) {
      // error handling
      handleErrorChange();
      console.log(e.message);
    }
  };

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push("/coin-trend-notifier-website/trends");
    }
  });

  return (
    <React.Fragment>
      <Form onSubmit={handleLogin}>
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
        <LoginFormButtons error={error} />
      </Form>
    </React.Fragment>
  );
}

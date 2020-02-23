import React from "react";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formLogin">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username/Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/*need to add functionality for next 3 buttons: */}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <br />
        <a style={{ margin: "0px 75px 0px 15px" }}>Forgotten your password?</a>
        <a>Click here for Signup</a>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;

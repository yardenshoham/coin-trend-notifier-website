import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function LoginFormButtons(props) {
  const styleMargin = "m-3";
  const history = useHistory();

  const changePageToSignup = () => {
    history.push("/signup");
  };

  return (
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
      {props.error !== "" && (
        <Row className="justify-content-md-center">
          <Col
            md={11}
            xs={10}
            style={{ textAlign: "center" }}
            className={styleMargin}
          >
            {props.error}
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
          <Button onClick={changePageToSignup} variant="outline-primary">
            Click here for Signup
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function SignupFormButtons(props) {
  const history = useHistory();
  const styleMargin = "m-3";
  let changeToLogin = () => {
    history.push("/login");
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
            Signup
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
          <Button onClick={changeToLogin} variant="outline-primary">
            Cancel
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

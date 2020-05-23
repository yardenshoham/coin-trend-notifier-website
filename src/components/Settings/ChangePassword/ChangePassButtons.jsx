import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function ChangePassButtons(props) {
  const styleMargin = "m-3";

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
            Change Password
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
          md={6}
          xs={10}
          style={{ textAlign: "center" }}
          className={styleMargin}
        >
          <Button onClick={props.backToSettings} variant="outline-primary">
            Back To Settings
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

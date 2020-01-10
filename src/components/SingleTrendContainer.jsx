import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BorderedBox from "./BordredBox";

const SingleTrendContainer = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <BorderedBox />
          </Col>
          <Col>
            <BorderedBox />
          </Col>
          <Col>
            <BorderedBox />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SingleTrendContainer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import BorderedBox from "./BordredBox";
import { Component } from "react";

class SingleTrendContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid="true" style={{ padding: "5px" }}>
          <Row noGutters="true">
            <Col>
              {/* <BorderedBox /> */}
              <h1>{this.props.base + "/" + this.props.quote}</h1>
            </Col>
            <Col>
              {/* <BorderedBox /> */}
              <h1>{this.props.type}</h1>
            </Col>
            <Col>
              {/* <BorderedBox /> */}
              <h1>{this.props.chance}</h1>
            </Col>
            <Col>
              {/* <BorderedBox /> */}
              <h1>{this.props.url}</h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SingleTrendContainer;

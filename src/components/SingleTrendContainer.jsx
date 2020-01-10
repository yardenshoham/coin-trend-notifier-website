import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import BorderedBox from "./BordredBox";
import { Component } from "react";
import Arrow from "./Arrow";

class SingleTrendContainer extends Component {
  verticalCenterStyle = {
    position: "relative",
    top: "36px"
  };
  borderStyle = {
    padding: "5px",
    border: "1px solid black",
    textAlign: "center"
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid="true" style={this.borderStyle}>
          <Row noGutters="true">
            <Col>
              <h1 style={this.verticalCenterStyle}>
                {this.props.base + "/" + this.props.quote}
              </h1>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <h1>
                {this.props.type === "up" ? (
                  <Arrow color="green" />
                ) : (
                  <Arrow color="red" />
                )}
              </h1>
            </Col>
            <Col>
              <h1 style={this.verticalCenterStyle}>{this.props.chance}</h1>
            </Col>
            <Col>
              <h1 style={this.verticalCenterStyle}>{this.props.url}</h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SingleTrendContainer;

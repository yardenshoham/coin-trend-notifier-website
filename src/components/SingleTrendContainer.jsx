import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
// import BorderedBox from "./BordredBox";
import { Component } from "react";
import Arrow from "./Arrow";
import "bootstrap/dist/css/bootstrap.min.css";

class SingleTrendContainer extends Component {
  verticalCenterStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center"
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
                <Badge
                  variant={this.props.type === "up" ? "success" : "danger"}
                >
                  {this.props.base + "/" + this.props.quote}
                </Badge>
              </h1>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <h1>
                {this.props.type === "up" ? (
                  <Arrow color="green" />
                ) : (
                  <Arrow color="red" />
                )}
              </h1>
            </Col>
            <Col>
              <h1 style={this.verticalCenterStyle}>
                <Badge
                  variant={this.props.type === "up" ? "success" : "danger"}
                >
                  {this.props.chance + "%"}
                </Badge>
              </h1>
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

import React from "react";
import { Container, Row, Col, Badge, Card } from "react-bootstrap";
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
  verticalCenterMarginzStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    width: "0px"
  };
  borderStyle = {
    padding: "5px",
    textAlign: "center"
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <Container fluid="true" style={this.borderStyle}>
            <Row noGutters="true">
              <Col xs={1}>
                <h3 style={this.verticalCenterMarginzStyle}>
                  {this.props.indx}
                </h3>
              </Col>
              <Col>
                <h3 style={this.verticalCenterStyle}>
                  <Badge
                    variant={this.props.type === "up" ? "success" : "danger"}
                  >
                    {this.props.base + "/" + this.props.quote}
                  </Badge>
                </h3>
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <h3>
                  {this.props.type === "up" ? (
                    <Arrow color="green" />
                  ) : (
                    <Arrow color="red" />
                  )}
                </h3>
              </Col>
              <Col>
                <h3 style={this.verticalCenterStyle}>
                  <Badge
                    variant={this.props.type === "up" ? "success" : "danger"}
                  >
                    {this.props.chance + "%"}
                  </Badge>
                </h3>
              </Col>
              <Col>
                <h3 style={this.verticalCenterStyle}>{this.props.url}</h3>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default SingleTrendContainer;

import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SingleTrendContainer from "./SingleTrendContainer";

class TrendsContainer extends Component {
  state = {
    allTrends: [
      { base: "BTC", quote: "USDT", type: "up", chance: 30, url: "#href" },
      { base: "ETH", quote: "USDT", type: "up", chance: 30, url: "#href" },
      { base: "TRX", quote: "USDT", type: "down", chance: 30, url: "#href" },
      { base: "ETH", quote: "BTC", type: "up", chance: 30, url: "#href" },
      { base: "TRX", quote: "BTC", type: "down", chance: 30, url: "#href" }
    ]
  };
  verticalCenterStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center"
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
                <h4 style={this.verticalCenterStyle}>#</h4>
              </Col>
              <Col>
                <h4 style={this.verticalCenterStyle}>Asset</h4>
              </Col>
              <Col>
                <h4 style={this.verticalCenterStyle}>Expected to</h4>
              </Col>
              <Col>
                <h4 style={this.verticalCenterStyle}>Possibilty</h4>
              </Col>
              <Col>
                <h4 style={this.verticalCenterStyle}>More info</h4>
              </Col>
            </Row>
          </Container>
        </Card>
        {this.state.allTrends.map((trend, index) => {
          return (
            <SingleTrendContainer
              indx={index + 1}
              key={"STD" + index}
              base={trend.base}
              quote={trend.quote}
              type={trend.type}
              chance={trend.chance}
              url={trend.url}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default TrendsContainer;

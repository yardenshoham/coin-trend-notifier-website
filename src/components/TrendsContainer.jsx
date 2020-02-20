import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    border: "1px solid black",
    textAlign: "center"
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid="true" style={this.borderStyle}>
          <Row noGutters="true">
            <Col>
              <h3 style={this.verticalCenterStyle}>Asset</h3>
            </Col>
            <Col>
              <h3 style={this.verticalCenterStyle}>Expected to</h3>
            </Col>
            <Col>
              <h3 style={this.verticalCenterStyle}>Possibilty</h3>
            </Col>
            <Col>
              <h3 style={this.verticalCenterStyle}>...</h3>
            </Col>
          </Row>
        </Container>
        {this.state.allTrends.map((trend, index) => {
          return (
            <SingleTrendContainer
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

import React, { Component } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import SingleTrendContainer from "./SingleTrendContainer";
import * as eventConnector from "../../connectors/eventConnector";

class TrendsContainer extends Component {
  state = {
    allTrends: [],
    amount: 100, // default
    fetched: false,
  };
  verticalCenterStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    color: "lightslategrey",
  };
  borderStyle = {
    padding: "5px",
    textAlign: "center",
  };

  handleAllTrends = async () => {
    let { data: res } = await eventConnector.getEvents(this.state.amount);
    //need to load the allTrends in the state from the res
    this.setState({
      allTrends: res.map((event) => {
        return {
          base: event.baseAssetName,
          quote: event.quoteAssetName,
          type: event.probability > 0 ? "up" : "down",
          chance: Math.round(event.probability * 100),
          url: "/coin-trend-notifier-website/trends/" + event._id,
          firedAt: event.firedAt,
          id: event._id,
        };
      }),
    });
    console.log(this.state.fetched);
    this.setState({ fetched: !this.state.fetched });
  };

  componentDidMount() {
    try {
      this.handleAllTrends();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return !this.state.fetched ? (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      </React.Fragment>
    ) : (
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
                <h4 style={this.verticalCenterStyle}>Probability</h4>
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
              firedAt={trend.firedAt}
              id={trend.id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default TrendsContainer;

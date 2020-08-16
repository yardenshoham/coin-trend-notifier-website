import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Jumbotron } from "react-bootstrap";
import * as eventConnector from "../../connectors/eventConnector";

export default function Trend(props) {
  const [probability, setProbability] = useState("");
  const [firedAt, setFiredAt] = useState("");
  const [baseAsset, setBaseAsset] = useState("");
  const [quoteAsset, setQuoteAsset] = useState("");

  const msToDateTime = (ms) => {
    let dateTime = new Date(ms);
    return {
      date: `${dateTime.getDate()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`,
      time: `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`,
    };
  };

  const probToProb = (prob) => {
    return {
      type: prob < 0 ? 0 : 1,
      probability: (Math.abs(prob) * 100).toPrecision(4) + "%",
    };
  };

  useEffect(() => {
    async function fetchData() {
      const { data: res } = await eventConnector.getEventByID(
        props.match.params.id
      );
      setProbability(res.probability);
      setFiredAt(res.firedAt);
      setBaseAsset(res.baseAssetName);
      setQuoteAsset(res.quoteAssetName);
    }
    fetchData();
  }, [props]);

  return (
    <React.Fragment>
      <Container
        fluid
        className="HomepageBody"
        style={{
          border: "1px solid gray",
          padding: "50px",
          position: "relative",
          top: "10%",
          margin: "auto",
          boxShadow: "0px 0px 8px -2px",
          borderRadius: "1%",
          width: "80%",
        }}
      >
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Jumbotron style={{ padding: "5%" }}>
              <h1>
                ID: <Badge variant="secondary">{props.match.params.id}</Badge>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Asset:</h1>
          </Col>
          <Col>
            <h1>
              <Badge variant="secondary">{baseAsset + "/" + quoteAsset}</Badge>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Probability:</h1>
          </Col>
          <Col>
            <h1>
              <Badge
                variant={
                  probToProb(probability).type === 0 ? "danger" : "success"
                }
              >
                {probToProb(probability).probability}
              </Badge>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Date:</h1>
          </Col>
          <Col>
            <h1>
              <Badge variant="secondary">{msToDateTime(firedAt).date}</Badge>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Time:</h1>
          </Col>
          <Col>
            <h1>
              <Badge variant="secondary">{msToDateTime(firedAt).time}</Badge>
            </h1>
          </Col>
        </Row>
        {/* maybe add here the value when fired and the current value */}
      </Container>
    </React.Fragment>
  );
}

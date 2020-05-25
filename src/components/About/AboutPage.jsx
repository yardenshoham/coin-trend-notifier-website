import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutPage(props) {
  return (
    <React.Fragment>
      <Container fluid className="HomepageBody">
        <Row>
          <Col
            style={{
              border: "1px solid gray",
              padding: "50px",
              position: "relative",
              top: "10%",
              margin: "auto",
              boxShadow: "0px 0px 8px -2px",
              borderRadius: "1%",
            }}
            md={5}
            xs={10}
          >
            <Card className="text-center">
              <Card.Header>About Us</Card.Header>
              <Card.Body>
                <Card.Title>Coin Trend Notifier</Card.Title>
                <Card.Text>
                  Our services are for crypto traders who seek good calculated
                  information to help them trade the cryptcurrency market.
                </Card.Text>
                <Card.Title>How we do it</Card.Title>
                <Card.Text>
                  We are using an algorithm we developed along with NLP (Natural
                  Language Processing) to analyze tweets from Twitter.
                </Card.Text>
                <Card.Text>
                  We are all these information and connect in a way that gives
                  the exact calculated weight to each parameter.
                </Card.Text>
                <Card.Title>How much does it cost</Card.Title>
                <Card.Text>
                  After many meetings in the hot air of Tel Aviv Israel we
                  decided to give this service to you with an amazing price of
                  1,000,000 nothing =).
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                By Aviel Vaknin and Yarden Shoham
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

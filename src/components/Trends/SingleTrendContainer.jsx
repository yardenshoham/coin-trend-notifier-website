import React from "react";
import { Container, Row, Col, Badge, Card, Button } from "react-bootstrap";
import Arrow from "./Arrow";
import { useHistory } from "react-router-dom";

export default function SingleTrendContainer(props) {
  const history = useHistory();
  const verticalCenterStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
  };
  const verticalCenterMarginzStyle = {
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    width: "0px",
    color: "lightslategrey",
  };
  const borderStyle = {
    padding: "5px",
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <Card>
        <Container fluid="true" style={borderStyle}>
          <Row noGutters="true">
            <Col xs={1}>
              <h3 style={verticalCenterMarginzStyle}>{props.indx}</h3>
            </Col>
            <Col>
              <h3 style={verticalCenterStyle}>
                <Badge variant={props.type === "up" ? "success" : "danger"}>
                  {props.base + "/" + props.quote}
                </Badge>
              </h3>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3>
                {props.type === "up" ? (
                  <Arrow color="green" />
                ) : (
                  <Arrow color="red" />
                )}
              </h3>
            </Col>
            <Col>
              <h3 style={verticalCenterStyle}>
                <Badge variant={props.type === "up" ? "success" : "danger"}>
                  {props.chance + "%"}
                </Badge>
              </h3>
            </Col>
            <Col>
              <Button
                style={verticalCenterStyle}
                variant="info"
                href={`/coin-trend-notifier-website/trends/${props.id}`}
              >
                Click for more
              </Button>
            </Col>
          </Row>
        </Container>
      </Card>
    </React.Fragment>
  );
}

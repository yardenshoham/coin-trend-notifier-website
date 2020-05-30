import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function AccountWindow(props) {
  const history = useHistory();
  const isComputer = useMediaQuery({ query: "(min-device-width: 1224px)" });

  return (
    <React.Fragment>
      <ListGroup
        id="AccountWindow"
        style={
          isComputer
            ? {
                width: "250%",
                right: "-39px",
                top: "52px",
                position: "absolute",
                display: props.visible ? "block" : "none",
                zIndex: "1",
              }
            : {
                width: "100%",
                top: "52px",
                position: "absolute",
                display: props.visible ? "block" : "none",
                zIndex: "1",
              }
        }
      >
        <ListGroup.Item
          style={{
            backgroundColor: "#343a40",
            color: "rgba(255,255,255,.5)",
          }}
        >
          Hi{" "}
          {localStorage.getItem("username")
            ? localStorage.getItem("username")
            : "Guest"}
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "#343a40",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <Link
            onClick={props.onAccountWindowChange}
            to="/coin-trend-notifier-website/preferences"
          >
            My Preferences
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "#343a40",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <Link
            onClick={props.onAccountWindowChange}
            to="/coin-trend-notifier-website/settings"
          >
            Account Settings
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "#343a40",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <Button
            variant="outline-danger"
            size="sm"
            style={{ color: "rgba(255,255,255,.5)" }}
            onClick={() => {
              localStorage.setItem("jwt", "");
              props.onAccountWindowChange();
              history.push("/coin-trend-notifier-website/home");
            }}
          >
            Logout
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
}

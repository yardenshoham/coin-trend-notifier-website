import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function AccountWindow(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      <ListGroup
        id="AccountWindow"
        style={{
          top: "80px",
          width: "18%",
          position: "absolute",
          right: "3px",
          display: props.visible ? "block" : "none",
          zIndex: "1",
        }}
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
          <Link to="/coin-trend-notifier-website/preferences">
            My Preferences
          </Link>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "#343a40",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <Link to="/coin-trend-notifier-website/settings">
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

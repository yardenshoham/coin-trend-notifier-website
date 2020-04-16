import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class AccountWindow extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ListGroup
          style={{
            top: "7%",
            width: "18%",
            position: "absolute",
            right: "3px",
            display: this.props.visible ? "block" : "none",
            zIndex: "1",
          }}
        >
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "white",
            }}
          >
            Hi {localStorage.getItem("jwt") ? "Username" : "Guest"}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "rgba(255,255,255,.5)",
            }}
          >
            <Link to="/preferences">My Preferences</Link>
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "rgba(255,255,255,.5)",
            }}
          >
            <Link to="/settings">Account Settings</Link>
          </ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default AccountWindow;

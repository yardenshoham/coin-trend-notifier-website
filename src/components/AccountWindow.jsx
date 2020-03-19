import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class AccountWindow extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ListGroup
          style={{
            top: "10%",
            width: "18%",
            position: "absolute",
            right: "3px",
            display: this.props.visible ? "block" : "none"
          }}
        >
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "white"
            }}
          >
            Hi {"Username"}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "rgba(255,255,255,.5)"
            }}
            action
            href="#My preferences"
          >
            My Preferences
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "rgba(255,255,255,.5)"
            }}
            action
            href="#Account Settiings"
          >
            Account Settings
          </ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default AccountWindow;

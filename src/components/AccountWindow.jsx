import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

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
            zIndex: "1"
          }}
        >
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "white"
            }}
          >
            Hi {this.props.isSignedIn === true ? "Username" : "Guest"}
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              backgroundColor: "#343a40",
              color: "rgba(255,255,255,.5)"
            }}
            action
            onClick={() => this.props.onPageToDisplayChange("preferences")}
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
            onClick={() => this.props.onPageToDisplayChange("settings")}
          >
            Account Settings
          </ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default AccountWindow;

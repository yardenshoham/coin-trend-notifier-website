import React, { Component } from "react";
import * as PreferencesConnector from "../connectors/preferenceConnector";

class Preferences extends Component {
  state = {
    userPreferences: []
  };

  componentDidMount = async () => {
    let userPreferences = await PreferencesConnector.getPreferences();
    //deal with if empty
    console.log(userPreferences);
    this.setState({ userPreferences });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hi again, {"username"}</h1>
        <span>In this page you can edit your preferred coins.</span>
        <span>
          You will get notifications on the crypto coins that are shown here.
        </span>
      </React.Fragment>
    );
  }
}

export default Preferences;

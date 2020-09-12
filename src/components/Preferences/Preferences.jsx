import React, { Component } from "react";
import * as PreferencesConnector from "../../connectors/preferenceConnector";
import { Form, Button, ButtonToolbar } from "react-bootstrap";
import Preference from "./Preference";

class Preferences extends Component {
  state = {
    userPreferences: [],
    editing: [],
    baseCoins: ["BTC", "ETH", "TRX", "USDT"],
    quoteCoins: ["BTC", "ETH", "TRX", "USDT"],
    error: "",
  };

  handleErrorChange = (newError) => {
    this.setState({ error: newError });
    setTimeout(() => {
      this.setState({ error: "" });
    }, 5000);
  };

  handleNewUserPreferences = () => {
    this.setState({
      userPrefences: this.state.userPreferences.push({
        probability: "Probability",
        baseAssetName: "Base Coin",
        quoteAssetName: "Quote Coin",
      }),
      editing: [...this.state.editing, true],
    });
  };

  handleRemovePreference = async (idx) => {
    if (
      this.state.userPreferences[idx].baseAssetName === "Base Coin" ||
      this.state.userPreferences[idx].quoteAssetName === "Quote Coin" ||
      this.state.userPreferences[idx].probability === "Probability"
    )
      this.refreshData();
    let tempUserPreferences = this.state.userPreferences;
    await PreferencesConnector.deletePreference({
      baseAssetName: tempUserPreferences[idx].baseAssetName,
      quoteAssetName: tempUserPreferences[idx].quoteAssetName,
    });

    this.refreshData();
  };

  refreshData = async () => {
    let userPreferences = await PreferencesConnector.getPreferences();
    let editing = [];
    for (let i = 0; i < userPreferences.data.length; i++) {
      editing.push(false);
    }
    this.setState({ userPreferences: userPreferences.data, editing });
  };

  handleEditingChange = (idx, saveMode) => {
    let temp = this.state.editing;
    temp[idx] = saveMode;
    this.setState({ editing: temp });
  };

  componentDidMount = async () => {
    await this.refreshData();
  };

  render() {
    let preferences;
    try {
      preferences = this.state.userPreferences.map((preference, idx) => {
        return (
          <Preference
            key={"preference_" + idx}
            index={idx}
            preference={preference}
            editing={this.state.editing[idx]}
            onRemovePreference={this.handleRemovePreference}
            baseCoins={this.state.baseCoins}
            quoteCoins={this.state.quoteCoins}
            refresh={this.refreshData}
            onEditChange={this.handleEditingChange}
            onError={this.handleErrorChange}
          />
        );
      });
    } catch (error) {
      preferences = null;
    }

    return (
      <React.Fragment>
        <h1>
          Hi,{" "}
          {localStorage.getItem("username")
            ? localStorage.getItem("username")
            : "Guest"}
        </h1>
        <span>In this page you can edit your preferred coins.</span>
        <br />
        <span>
          You will get notifications on the crypto coins that are shown here.
        </span>
        <br />
        <br />
        <Form onSubmit={this.handleSaveChanges}>
          {preferences}
          <br />
          <div id="error-container" style={{ textAlign: "center" }}>
            <span>{this.state.error}</span>
          </div>
          <ButtonToolbar className="justify-content-center">
            <Button
              variant="outline-primary"
              onClick={this.handleNewUserPreferences}
            >
              Add New Preference
            </Button>
          </ButtonToolbar>
        </Form>
      </React.Fragment>
    );
  }
}

export default Preferences;

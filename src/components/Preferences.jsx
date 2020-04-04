import React, { Component } from "react";
import * as PreferencesConnector from "../connectors/preferenceConnector";
import { Col, Card, Form, Button, ButtonToolbar } from "react-bootstrap";

class Preferences extends Component {
  state = {
    userPreferences: [],
    editing: [],
    baseCoins: ["BTC", "ETH", "TRX", "USDT"],
    quoteCoins: ["BTC", "ETH", "TRX", "USDT"],
  };

  handlePreferenceChanges = (type, idx, event) => {
    let tempUserPreferences = this.state.userPreferences;
    if (type === "base") {
      tempUserPreferences[idx].baseAssetName = event.target.value;
      this.setState({ userPreferences: tempUserPreferences });
    } else if (type === "quote") {
      tempUserPreferences[idx].quoteAssetName = event.target.value;
      this.setState({ userPreferences: tempUserPreferences });
    } else if (type === "prob") {
      tempUserPreferences[idx].probability = event.target.value;
      this.setState({ userPreferences: tempUserPreferences });
    }
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

  handleEditPreference = async (idx) => {
    let tempEditing = this.state.editing;
    tempEditing[idx] = !tempEditing[idx]; //change current to true
    if (!tempEditing[idx]) {
      //if current is false
      // check that only valid inputs are in
      if (
        this.state.userPreferences[idx].baseAssetName === "Base Coin" ||
        this.state.userPreferences[idx].quoteAssetName === "Quote Coin" ||
        this.state.userPreferences[idx].probability === "Probability"
      ) {
        tempEditing[idx] = !tempEditing[idx]; //if invalids then change to true
        //make some error that saying that there are invalid inputs
        console.log("preferenced could not be saved");
      }

      if (!tempEditing[idx]) {
        // save this preference in the server
        await PreferencesConnector.setPreference(
          parseFloat(this.state.userPreferences[idx].probability),
          this.state.userPreferences[idx].baseAssetName,
          this.state.userPreferences[idx].quoteAssetName
        );

        // refresh the data
        this.refreshData();
        console.log("preference saved");
      }
    }

    this.setState({ editing: tempEditing });
  };

  handleRemovePreference = async (idx) => {
    if (
      this.state.userPreferences[idx].baseAssetName === "Base Coin" ||
      this.state.userPreferences[idx].quoteAssetName === "Quote Coin" ||
      this.state.userPreferences[idx].probability === "Probability"
    )
      this.refreshData();
    let tempUserPreferences = this.state.userPreferences;
    console.log(typeof idx);
    await PreferencesConnector.deletePreference({
      baseAssetName: tempUserPreferences[idx].baseAssetName,
      quoteAssetName: tempUserPreferences[idx].quoteAssetName,
    });

    this.refreshData();
  };

  refreshData = async () => {
    let userPreferences = await PreferencesConnector.getPreferences();
    //deal with if empty
    let editing = [];
    for (let i = 0; i < userPreferences.data.length; i++) {
      editing.push(false);
    }
    this.setState({ userPreferences: userPreferences.data, editing });
  };

  componentDidMount = async () => {
    await this.refreshData();
  };

  calculateProbabilities = () => {
    let probs = [];
    for (let i = -100; i <= 100; i += 10) {
      probs.push(i / 100);
    }
    return probs;
  };

  render() {
    let cards;
    try {
      cards = this.state.userPreferences.map((preference, idx) => {
        return (
          <Card>
            <Form.Row>
              <Col xs={1}>
                <Button
                  variant="outline-danger"
                  onClick={() => this.handleRemovePreference(idx)}
                >
                  x
                </Button>
              </Col>
              <Col xs={1.2}>
                <Button
                  id={"preference_" + idx}
                  variant="outline-info"
                  onClick={() => this.handleEditPreference(idx)}
                >
                  {this.state.editing[idx] === false ? "Edit" : "Save"}
                </Button>
              </Col>
              <Col>
                <Form.Control
                  disabled={!this.state.editing[idx]}
                  as="select"
                  onChange={(e) => this.handlePreferenceChanges("base", idx, e)}
                >
                  <option>Base Coin</option>
                  {this.state.baseCoins.map((coin) => {
                    if (coin === preference.baseAssetName)
                      return (
                        <option value={coin} selected>
                          {coin}
                        </option>
                      );
                    return <option value={coin}>{coin}</option>;
                  })}
                </Form.Control>
              </Col>
              <Col style={{ textAlign: "center" }} xs={1}>
                {"/"}
              </Col>
              <Col>
                <Form.Control
                  disabled={!this.state.editing[idx]}
                  as="select"
                  onChange={(e) =>
                    this.handlePreferenceChanges("quote", idx, e)
                  }
                >
                  <option>Quote Coin</option>
                  {this.state.quoteCoins.map((coin) => {
                    if (coin === preference.quoteAssetName) {
                      return (
                        <option value={coin} selected>
                          {coin}
                        </option>
                      );
                    }
                    return <option value={coin}>{coin}</option>;
                  })}
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  disabled={!this.state.editing[idx]}
                  as="select"
                  onChange={(e) => this.handlePreferenceChanges("prob", idx, e)}
                >
                  <option>Probability</option>
                  {this.calculateProbabilities().map((num) => {
                    if (num === preference.probability)
                      return (
                        <option value={num} selected>
                          {num}
                        </option>
                      );
                    return <option value={num}>{num}</option>;
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
          </Card>
        );
      });
    } catch (error) {
      cards = null;
    }

    return (
      <React.Fragment>
        <h1>Hi, {"Username"}</h1>
        <span>In this page you can edit your preferred coins.</span>
        <br />
        <span>
          You will get notifications on the crypto coins that are shown here.
        </span>
        <br />
        <br />
        <Form onSubmit={this.handleSaveChanges}>
          {cards}
          <br />
          <ButtonToolbar className="justify-content-center">
            {/* <Button type="submit">Save Changes</Button>{" "} */}
            <Button
              variant="outline-primary"
              onClick={this.handleNewUserPreferences}
            >
              Add New Preference
            </Button>
          </ButtonToolbar>
          {}
        </Form>
      </React.Fragment>
    );
  }
}

export default Preferences;

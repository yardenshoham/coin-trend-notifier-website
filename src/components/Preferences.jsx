import React, { Component } from "react";
import * as PreferencesConnector from "../connectors/preferenceConnector";
import { Col, Card, Form, Button, ButtonToolbar } from "react-bootstrap";

class Preferences extends Component {
  state = {
    userPreferences: [
      {
        probability: 25,
        baseAssetName: "BTC",
        quoteAssetName: "USDT"
      },
      {
        probability: 10,
        baseAssetName: "ETH",
        quoteAssetName: "BTC"
      }
    ],
    baseCoins: ["BTC", "ETH", "TRX", "USDT"],
    quoteCoins: ["BTC", "ETH", "TRX", "USDT"],
    newProbabilities: []
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

  handleNewProbabilities = () => {
    this.setState({
      userPrefences: this.state.userPreferences.push({
        probability: "probability",
        baseAssetName: "Base Coin",
        quoteAssetName: "Quote Coin"
      })
    });
  };

  handleSaveChanges = () => {};

  componentDidMount = async () => {
    // let userPreferences = await PreferencesConnector.getPreferences();
    // //deal with if empty
    // console.log(userPreferences);
    // this.setState({ userPreferences });
  };

  calculateProbabilities = () => {
    let probs = [];
    for (let i = 0; i < 101; i += 5) {
      probs.push(i);
    }
    return probs;
  };

  render() {
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
          {this.state.userPreferences.map((preference, idx) => {
            return (
              <Card>
                <Form.Row>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={e =>
                        this.handlePreferenceChanges("base", idx, e)
                      }
                    >
                      <option>Base Coin</option>
                      {this.state.baseCoins.map(coin => {
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
                      as="select"
                      onChange={e =>
                        this.handlePreferenceChanges("quote", idx, e)
                      }
                    >
                      <option>Quote Coin</option>
                      {this.state.quoteCoins.map(coin => {
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
                      as="select"
                      onChange={e =>
                        this.handlePreferenceChanges("base", idx, e)
                      }
                    >
                      <option>Probability</option>
                      {this.calculateProbabilities().map(num => {
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
          })}
          <br />
          <ButtonToolbar className="justify-content-between">
            <Button type="submit">Save Changes</Button>{" "}
            <Button
              variant="outline-primary"
              onClick={this.handleNewProbabilities}
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

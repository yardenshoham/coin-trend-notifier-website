import React, { Component } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
import * as PreferencesConnector from "../../connectors/preferenceConnector";

class Preference extends Component {
  state = {
    preference: {},
    edit: true,
    originalValues: {},
  };

  calculateProbabilities = () => {
    let probs = [];
    for (let i = 10; i <= 90; i += 10) {
      probs.push(i);
    }
    return probs;
  };

  handleEditPreference = async (idx) => {
    let tempEditing = this.state.edit;
    tempEditing = !tempEditing;

    if (!tempEditing) {
      // if in Save mode
      // check that only valid inputs are in
      if (
        this.state.preference.baseAssetName === "Base Coin" ||
        this.state.preference.quoteAssetName === "Quote Coin" ||
        this.state.preference.probability === "Probability"
      ) {
        tempEditing = !tempEditing; //if invalids then change to true
        //make some error that saying that there are invalid inputs
        this.props.onEditChange(idx, tempEditing);
        console.log("preferenced could not be saved");
      }
      if (!tempEditing) {
        if (
          this.state.originalValues.baseAssetName === "Base Coin" &&
          this.state.originalValues.quoteAssetName === "Quote Coin" &&
          this.state.originalValues.probability === "Probability"
        ) {
          // if its a new preference then save it
          await PreferencesConnector.setPreference(
            parseFloat(this.state.preference.probability) / 100,
            this.state.preference.baseAssetName,
            this.state.preference.quoteAssetName
          );
        } else {
          // editing an already-exist preference
          if (
            this.state.preference.baseAssetName !==
              this.state.originalValues.baseAssetName ||
            this.state.preference.quoteAssetName !==
              this.state.originalValues.quoteAssetName
          ) {
            // if different from original
            // delete the original preference
            await PreferencesConnector.deletePreference({
              baseAssetName: this.state.originalValues.baseAssetName,
              quoteAssetName: this.state.originalValues.quoteAssetName,
            });

            // add the edited preference to the db
            await PreferencesConnector.setPreference(
              parseFloat(this.state.preference.probability) / 100,
              this.state.preference.baseAssetName,
              this.state.preference.quoteAssetName
            );
          } else {
            // same as original
            if (
              this.state.preference.probability !==
              this.state.originalValues.probability
            ) {
              // if probability changed then save changes in db
              await PreferencesConnector.setPreference(
                parseFloat(this.state.preference.probability) / 100,
                this.state.preference.baseAssetName,
                this.state.preference.quoteAssetName
              );
            }
          }
        }

        // refresh the data
        this.props.refresh();
        console.log("preference saved");
      }
    }
    this.props.onEditChange(idx, tempEditing);
    this.setState({ edit: tempEditing });
  };

  handlePreferenceChanges = (type, idx, event) => {
    let tempUserPreferences = this.state.preference;
    if (type === "base") {
      tempUserPreferences.baseAssetName = event.target.value;
    } else if (type === "quote") {
      tempUserPreferences.quoteAssetName = event.target.value;
    } else if (type === "prob") {
      tempUserPreferences.probability = event.target.value;
    }
    this.setState({ preference: tempUserPreferences });
  };

  componentDidMount = () => {
    const originalValues = Object.assign({}, this.props.preference);
    const preference = Object.assign({}, this.props.preference);
    const edit = this.props.editing;
    this.setState({
      edit,
      preference,
      originalValues,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <Form.Row>
            <Col xs={1}>
              <Button
                variant="outline-danger"
                onClick={() => this.props.onRemovePreference(this.props.index)}
              >
                x
              </Button>
            </Col>
            <Col xs={1.2}>
              <Button
                id={"preference_" + this.props.index}
                variant="outline-info"
                onClick={() => this.handleEditPreference(this.props.index)}
              >
                {this.state.edit === false ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col>
              <Form.Control
                defaultValue={this.props.preference.baseAssetName}
                disabled={!this.state.edit}
                as="select"
                onChange={(e) =>
                  this.handlePreferenceChanges("base", this.props.index, e)
                }
              >
                <option>Base Coin</option>
                {this.props.baseCoins.map((coin) => {
                  return (
                    <option key={"option_" + coin} value={coin}>
                      {coin}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
            <Col style={{ textAlign: "center" }} xs={1}>
              {"/"}
            </Col>
            <Col>
              <Form.Control
                disabled={!this.state.edit}
                as="select"
                onChange={(e) =>
                  this.handlePreferenceChanges("quote", this.props.index, e)
                }
                defaultValue={this.props.preference.quoteAssetName}
              >
                <option>Quote Coin</option>
                {this.props.quoteCoins.map((coin) => {
                  return (
                    <option key={"option_" + coin} value={coin}>
                      {coin}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                defaultValue={
                  this.props.preference.probability === "Probability"
                    ? "Probability"
                    : this.props.preference.probability * 100
                }
                disabled={!this.state.edit}
                as="select"
                onChange={(e) =>
                  this.handlePreferenceChanges("prob", this.props.index, e)
                }
              >
                <option>Probability</option>
                {this.calculateProbabilities().map((n) => {
                  let num = parseInt(n);
                  return (
                    <option key={"option_" + num} value={num}>
                      {num}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
          </Form.Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default Preference;

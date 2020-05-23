import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ChangePassButtons from "./ChangePassButtons";
import { useHistory } from "react-router-dom";
import * as usersConnector from "../../../connectors/usersConnector";

export default function ChangePasswordForm(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handlePasswordChange = async (event) => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      if (newPass1 !== newPass2) {
        setTimeout(() => {
          setError("");
        }, 3000);
        throw Error("New Passwords Won't Match");
      }
      if (newPass2.length < 6) {
        setTimeout(() => {
          setError("");
        }, 3000);
        throw Error("Password must be over 6 characters");
      }
      await usersConnector.changeUserPassword(oldPassword, newPass1);
      // update the page with new data
    } catch (e) {
      //error handling
      if (e.message.includes("422")) {
        setError("This is not your old password");
        return;
      }
      setError(e.message);
    }
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPass1Change = (e) => {
    setNewPass1(e.target.value);
  };

  const handleNewPass2Change = (e) => {
    setNewPass2(e.target.value);
  };

  const chageToSettings = () => {
    history.push("/coin-trend-notifier-website/settings");
  };

  return (
    <React.Fragment>
      <Form onSubmit={handlePasswordChange}>
        <Form.Group controlId="formOldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Old Password"
            onChange={handleOldPasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formNewPass1">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter New Password"
            onChange={handleNewPass1Change}
          />
        </Form.Group>
        <Form.Group controlId="formNewPass2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter New Password Again"
            onChange={handleNewPass2Change}
          />
        </Form.Group>
        <ChangePassButtons error={error} backToSettings={chageToSettings} />
      </Form>
    </React.Fragment>
  );
}

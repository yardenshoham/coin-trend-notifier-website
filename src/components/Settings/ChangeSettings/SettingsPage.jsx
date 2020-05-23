import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import * as usersConnector from "../../../connectors/usersConnector";
import SettingsPageButtons from "./SettingsPageButtons";
import { useHistory } from "react-router-dom";
// import logo from "./refresh.png";

export default function SettingsPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [alertLimit, setAlertLimit] = useState("0");
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const alertRef = useRef(null);
  const history = useHistory();

  const handleUpdateUser = async (event) => {
    // prevent page from refreshing
    event.preventDefault();
    try {
      await usersConnector.updateUser(
        email,
        username,
        // phoneNumber,
        parseInt(alertLimit) * 60
      );
      // update the page with new data
    } catch (e) {
      //error handling
      setError("Error");
      console.log(e.message);
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.value === "") getAndSetUser();
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    if (e.target.value === "") getAndSetUser();
    setUsername(e.target.value);
  };

  // const handlePhoneNumberChange = (e) => {
  // if (e.target.value === "") getAndSetUser();
  //   setPhoneNumber(e.target.value);
  // };

  const handleAlertLimitChange = (e) => {
    if (e.target.value === "") getAndSetUser();
    setAlertLimit(e.target.value);
  };

  const clearContent = () => {
    emailRef.current.value = "";
    usernameRef.current.value = "";
    alertRef.current.value = 0;
  };

  const getAndSetUser = async () => {
    clearContent();
    let user = (await usersConnector.getUser()).data;
    setEmail(user.email);
    setUsername(user.username);
    setAlertLimit(user.alertLimit / 60);
  };

  const changeToPasswordChange = () => {
    history.push("/coin-trend-notifier-website/settings/pass");
  };

  useEffect(() => {
    getAndSetUser();
  }, []);

  return (
    <React.Fragment>
      <Form onSubmit={handleUpdateUser}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            ref={usernameRef}
            placeholder={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            pattern={""}
            placeholder="Such as: +972501234567"
            onChange={handlePhoneNumberChange}
          />
        </Form.Group> */}
        <Form.Group controlId="formAlertLimitNumber">
          <Form.Label>Alert Limit</Form.Label>
          <Form.Control
            type="number"
            ref={alertRef}
            min={0}
            value={alertLimit}
            onChange={handleAlertLimitChange}
          />
        </Form.Group>
        <div style={{ textAlign: "center" }} className={"m-3"}>
          <Button onClick={changeToPasswordChange} variant="outline-danger">
            Change Password
          </Button>
        </div>
        <SettingsPageButtons error={error} refresh={getAndSetUser} />
      </Form>
    </React.Fragment>
  );
}

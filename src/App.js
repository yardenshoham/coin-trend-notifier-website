import React, { Component } from "react";
import HomepageNavbar from "./components/HomepageNavbar";
import TrendsContainer from "./components/TrendsContainer";
import LoginForm from "./components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    if (localStorage.getItem("jwt")) {
      return (
        <div className="RegisterBody">
          <HomepageNavbar />
          <div
            style={{
              position: "relative",
              maxWidth: "960px",
              margin: "auto"
            }}
            className="HomepageBody"
          >
            <TrendsContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="NotRegisterBody">
          <HomepageNavbar />
          <div
            style={{
              border: "1px solid gray",
              padding: "50px",
              position: "relative",
              top: "100px",
              maxWidth: "540px",
              margin: "auto"
            }}
            className="HomepageBody"
          >
            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

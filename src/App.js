import React, { Component } from "react";
import HomepageNavbar from "./components/HomepageNavbar";
import TrendsContainer from "./components/TrendsContainer";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="NotRegister">
        <HomepageNavbar />
        <div
          style={{
            position: "relative",
            margin: "30px",
            maxWidth: "960px",
            margin: "auto"
          }}
          className="HomepageBody"
        >
          <TrendsContainer />
        </div>
        {/* <div style={{ position: "relative", top: "50px" }}>
          <Arrow color={"green"} angle={45} />
        </div> */}
      </div>
    );
  }
}

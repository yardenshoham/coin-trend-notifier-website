import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  useEffect(() => {
    console.log("history is: " + props.history);
    if (localStorage.getItem("jwt")) {
      history.push("/coin-trend-notifier-website/trends");
    } else {
      history.push("/coin-trend-notifier-website/login");
    }
  });

  return <React.Fragment />;
}

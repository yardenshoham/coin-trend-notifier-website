import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push("/trends");
    } else {
      history.push("/login");
    }
  });

  return <React.Fragment />;
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ angle, color, ...rest }) => {
  const compAngle = color === "green" ? angle : angle + 90;
  return (
    <FontAwesomeIcon
      icon={faLongArrowAltUp}
      size="6x"
      style={{
        color: color,
        transform: "rotate(" + compAngle + "deg)",
        marginLeft:
          (color === "green" ? angle * 2 : (90 - angle) * 2) / 90 + "rem"
      }}
      {...rest}
    />
  );
};

export default Arrow;

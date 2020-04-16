import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ color, ...rest }) => {
  var angle = 45;
  const compAngle = color === "green" ? angle : angle + 90;
  return (
    <FontAwesomeIcon
      icon={faLongArrowAltUp}
      size="2x"
      style={{
        color: color,
        transform: "rotate(" + compAngle + "deg)",
        marginLeft:
          (color === "green" ? angle * 2 : (90 - angle) * 2) / 90 + "rem",
      }}
      {...rest}
    />
  );
};

export default Arrow;

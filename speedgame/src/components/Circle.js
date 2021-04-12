import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className={`circle ${props.color} ${props.active ? " active" : ""}`}
      //or you could do this:
      // <div className="circle" style={{ backgroundColor: props.color } onClick={props.click}}>
      onClick={props.click}
      style={{ pointerEvents: props.disabled ? "auto" : "none" }}
    ></div>
  );
};

export default Circle;

import React from "react";

const BoxCard = (props) => {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.title}</p>
      <button onClick={props.clickMe}>click here!</button>
    </div>
  );
};
const clickMe = () => {
  console.log("clicked");
};

export default BoxCard;

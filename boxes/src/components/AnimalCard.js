import React from "react";
import "./animal.css";

const AnimalCard = (props) => {
  return (
    <div className="animalcard">
      <h1>{props.name}</h1>
      <img
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt={props.name}
      />
      <button onClick={props.clickMe}>click here!</button>
    </div>
  );
};

export default AnimalCard;

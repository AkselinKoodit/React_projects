import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const endGame = (score) => {
  if (score < 5) {
    return "Pathetic!";
  } else if (score < 10) {
    return "You can do better.";
  } else if (score < 15) {
    return "Not bad at all!";
  } else if (score < 20) {
    return "Awesome!";
  } else {
    return "YOU MUST BE THE CHOSEN ONE!!";
  }
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameover">
        <h2>Game over</h2>
        <p>Your score was: {props.score} </p>
        <p>{endGame(props.score)}</p>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};

export default GameOver;

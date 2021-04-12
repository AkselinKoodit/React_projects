import React, { Component } from "react";
import Circle from "./components/Circle";
import GameOver from "./components/GameOver";

import "./App.css";

import bgsound from "./assets/sounds/guerrillaRadio.mp3";
import gameoversound from "./assets/sounds/mistake.wav";
import clicksound from "./assets/sounds/ballBlib.wav";

let gameStartSound = new Audio(bgsound); //Music from https://downloads.khinsider.com/ Rage Against the Machine - Guerrilla Radio
let gameEnd = new Audio(gameoversound);
let clickSound = new Audio(clicksound);

console.log("Random number between 1-4:" + getRandomInt(1, 4));
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "brown" },
      { id: 3, color: "orange" },
      { id: 4, color: "blue" },
    ],
    showGameOver: false,
    rounds: 0,
    gameStart: false,
    disableStop: true,
    clicked: false,
    gameStop: true,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }
    if (this.state.clicked === false) {
      clickSound.play();
      this.setState({
        score: this.state.score + 1,
        rounds: 0,
        clicked: true,
      });
    }
  };

  targetCircle = () => {
    if (this.state.rounds >= 3) {
      this.endHandler();
      return;
    }
    let nextTarget = undefined;

    do {
      nextTarget = getRandomInt(1, 4);
    } while (nextTarget === this.state.current);

    this.setState({
      current: nextTarget,
      rounds: this.state.rounds + 1,
      clicked: false,
    });
    console.log("round: " + this.state.rounds);
    this.pace *= 0.95;
    this.timer = setTimeout(this.targetCircle, this.pace);

    console.log("Target is: " + this.state.current);
  };

  startHandler = () => {
    gameStartSound.play();
    this.targetCircle();
    this.setState({
      gameStart: true,
      gameStop: false,
    });
  };
  endHandler = () => {
    gameStartSound.pause();
    gameEnd.play();
    clearTimeout(this.timer);

    this.setState({
      showGameOver: true,
    });
  };

  render() {
    const circlesList = this.state.circles.map((circle) => {
      return (
        <Circle
          id={circle.id}
          key={circle.id}
          color={circle.color}
          click={() => this.clickHandler(circle.id)}
          active={this.state.current === circle.id}
          disabled={this.state.gameStart}
        />
      );
    });
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <div className="controls">
          <button onClick={this.startHandler} disabled={this.state.gameStart}>
            Start
          </button>
          <button onClick={this.endHandler} disabled={this.state.gameStop}>
            Stop
          </button>
        </div>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;

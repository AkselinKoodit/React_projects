import React, { Component } from "react";
import Circle from "./components/Circle";

import "./App.css";

let scores = 0;

class App extends Component {
  state = {
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "brown" },
      { id: 3, color: "orange" },
      { id: 4, color: "blue" },
    ],
  };
  clickHandler = (circle) => {
    scores++;
    console.log(`You clicked ${circle} and you score is ${scores}`);

    document.getElementsByClassName("score").dangerouslySetInnerHTML = {
      _html: `You clicked ${circle} and you score is ${scores}`,
    };
  };
  render() {
    const circlesList = this.state.circles.map((circle) => {
      return (
        <Circle
          id={circle.id}
          key={circle.id}
          color={circle.color}
          clickMe={this.clickHandler.bind(this, circle.color)}
        />
      );
    });
    return (
      <div>
        <h1>Speedtest</h1>
        <p className="score">Score: </p>
        <div className="circles">{circlesList}</div>
        <div className="controls">
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;

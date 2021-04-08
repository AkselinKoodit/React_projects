import React, { Component } from "react";
import Circle from "./components/Circle";

import "./App.css";

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
    alert("Hi there! I'm " + circle);
  };
  render() {
    const circlesList = this.state.circles.map((circle) => {
      return <Circle id={circle.id} key={circle.id} color={circle.color} />;
    });
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Score: </p>
        <div className="circles">{circlesList}</div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;

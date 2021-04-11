import React, { Component } from "react";
import Circle from "./components/Circle";

import "./App.css";

class App extends Component {
  state = {
    show: true,
  };
  clickHandler = () => {
    console.log("clicked a circle ");
    console.log(`your score is ${this.state.score}`);
    this.setState({
      score: this.state.score + 1,
    });
  };
  state = {
    score: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "brown" },
      { id: 3, color: "orange" },
      { id: 4, color: "blue" },
    ],
  };

  render() {
    const circlesList = this.state.circles.map((circle) => {
      return <Circle id={circle.id} key={circle.id} color={circle.color} />;
    });
    return (
      <div>
        <h1>Speedtest</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles" onClick={this.clickHandler}>
          {circlesList}
        </div>
        <div className="controls">
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;

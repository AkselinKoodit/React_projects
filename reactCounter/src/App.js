import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {
    counter: 0,
  };
  addHandler = () => {
    console.log("clicked add");
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeHandler = () => {
    console.log("clicked remove");
    if (this.state.counter === 0) {
      return;
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  clearHandler = () => {
    console.log("Clicked clear");
    this.setState({
      counter: (this.state.counter = 0),
    });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;
    return (
      <div>
        <Header />
        <div>
          <h1 className={circleClass}>{this.state.counter}</h1>
          <button onClick={this.addHandler}>Add</button>
          <button onClick={this.removeHandler}>Remove</button>
          <button onClick={this.clearHandler}>Clear</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

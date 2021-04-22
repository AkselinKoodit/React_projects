import React, { Component } from "react";

import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Notes from "./components/Notes";

class App extends Component {
  state = {
    inputdata: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
    notes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3006/notes")
      .then((response) => response.json())
      .then((tiedot) => this.setState({ notes: tiedot }));
  }

  changeHandler = (e) => {
    this.setState({
      inputdata: { ...this.state.inputdata, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    this.setState({ showPopup: true });
    e.preventDefault();
  };

  postDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputdata),
    };
    fetch("http://localhost:3006/notes", requestOptions);
    alert("You info was posted", window.location.reload());
  };

  render() {
    // const props = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   phonenumber: this.state.phonenumber,
    //   message: this.state.message,
    //   role: this.state.role,
    // };
    return (
      <div>
        <Form fill={this.changeHandler} submit={this.popupHandler} />
        <View {...this.state.inputdata} />
        <Notes notes={this.state.notes} />
        {this.state.showPopup && (
          <Popup {...this.state.inputdata} submit={this.postDataHandler} />
        )}
      </div>
    );
  }
}

export default App;

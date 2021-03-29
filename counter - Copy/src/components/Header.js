import React from "react";

class Header extends React.Component {
  state = {
    CurrentTime: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="Header">
        <h1>Welcome to my counter app</h1>
        <p>Current Date and Time: {this.state.myCurrent}</p>
      </div>
    );
  }
}

export default Header;

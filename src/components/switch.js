import React, { Component } from "react";

class Switch extends Component {
  render() {
    return (
      <button onClick={this.props.onSwitch} className="d-block mx-auto">
        Switch to {this.props.text ? "Editor" : "Viewer"}
      </button>
    );
  }
}

export default Switch;

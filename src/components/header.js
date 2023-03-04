import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title } = this.props;
    return <h1 className="text-center m-4 fw-bold">Card {title ? "Viewer" : "Editor"}</h1>;
  }
}

export default Header;

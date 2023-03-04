import React, { Component } from "react";
import "./styles.css";
import Header from "./components/header";
import Form from "./components/form";
import Switch from "./components/switch";
import Card from "./components/card/card";

class App extends Component {
  state = {
    switch: false,
    front: "",
    back: "",
    cardArray: []
  };
  render() {
    return (
      <div className="App">
        {/* header-title */}
        <Header title={this.state.switch} />
        {/* view changer */}
        {this.state.switch ? (
          <Card onDisplay={this.state.cardArray} />
        ) : (
          <Form
            onInput={this.updateResponse}
            onfront={this.state.front}
            onback={this.state.back}
            onSubmit={this.updateTable}
            updateCard={this.state.cardArray}
            onDelete={this.deleteTable}
          />
        )}
        {/* Switch Button */}
        <Switch text={this.state.switch} onSwitch={this.switchCard} />
      </div>
    );
  }

  // Switch state
  switchCard = () => {
    this.setState((state) => ({
      switch: !state.switch
    }));
  };

  // update
  updateResponse = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // onSubmit
  updateTable = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      cardArray: [
        ...state.cardArray,
        { frontArray: state.front, backArray: state.back }
      ],
      front: "",
      back: ""
    }));
  };

  // onDelete
  deleteTable = (data) => {
    this.setState((state) => {
      const cardArray = [...state.cardArray];
      cardArray.splice(data.target.dataset.index, 1);
      return { cardArray };
    });
  };
}

export default App;

import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {
    view: true,
    cardChange: 0
  };
  render() {
    return (
      <div>
        <div
          onClick={this.onChangeView}
          className="card w-75 mx-auto mb-4 fw-bold fs-1 d-flex align-items-center justify-content-center"
        >
          <p>{this.displayCard()}</p>
        </div>
        <button onClick={this.onChangeCard} className="d-block mx-auto mb-2">
          New Card
        </button>
        <hr />
      </div>
    );
  }

  displayCard = () => {
    const cardLength = this.props.onDisplay.length;
    let cardChange = this.state.cardChange;
    let viewedCard = this.props.onDisplay[cardChange];
    let presentCard = cardChange <= cardLength ? viewedCard : "";
    return typeof presentCard === typeof {}
      ? this.state.view
        ? presentCard.frontArray
        : presentCard.backArray
      : "No card to display";
  };

  onChangeView = () => {
    this.setState((state) => ({
      view: !state.view
    }));
  };

  onChangeCard = () => {
    this.setState((state) => ({
      cardChange: state.cardChange + 1
    }));
  };
}

export default Card;

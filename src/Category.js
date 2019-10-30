import React from "react";
import "./Flashcard.css";
import "./button.css";

// var data = require("./data.json");

class Deck extends React.Component {
  render() {
    return (
      <div
        className="Deck"
        id={"Deck_" + this.props.deckID}
        onClick={this.props.onClick}
      >
        {this.props.deckID}
      </div>
    );
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: ""
    };
  }

  renderDeck(i) {
    return <Deck deckID={i} onClick={() => this.sendData(i)} />;
  }

  sendData = i => {
    this.props.parentCallback(i);
  };

  render() {
    return (
      <div className="Category">
        {["Animal", "Fruit", "Color"].map(str => this.renderDeck(str))}
      </div>
    );
  }
}

export default Category;

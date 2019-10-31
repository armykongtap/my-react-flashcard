import React from "react";
import "./Flashcard.css";
import "./button.css";
var data = require("./data.json");

class Card extends React.Component {

  sendData = x => {
    this.props.parentCallback(x);
  };

  render() {
    return this.props.wordList === null ? (
      <div></div>
    ) :
      this.props.status !== "Card" ?
        (
          <div className={this.props.status} onClick={this.props.onClick} onTransitionEnd={() => this.sendData(this.props.status)}>
            {this.props.wordList[this.props.currentPage]}
          </div>
        ) : (
          <div className={this.props.status} onClick={this.props.onClick}>
            {this.props.wordList[this.props.currentPage]}
          </div>
        );
  }
}

class CardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Card",
      currentCard: 0,
      currentPage: 0,
      deckID: this.props.deckID,
    };
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  getWordList(wordID) {
    return this.props.deckID === null ? null : data[this.props.deckID][wordID];
  }

  renderCard(wordID) {
    return this.getWordList(wordID) === null ? null : (
      <Card
        status={this.state.status}
        wordList={this.getWordList(wordID)}
        currentPage={this.state.currentPage}
        onClick={this.changePage}
        parentCallback={this.callbackFunction}
      />
    );
  }

  nextCard() {
    this.setState({ status: "Card Card-left-out", });
  }

  nextCardState() {
    if (this.state.currentCard + 1 < data[this.props.deckID].length) {
      this.setState({ currentCard: this.state.currentCard + 1, currentPage: 0 });
    } else {
      this.setState({ currentCard: 0, currentPage: 0 });
    }
  }

  prevCard() {
    this.setState({ status: "Card Card-right-out", });
  }

  prevCardState() {

    if (this.state.currentCard - 1 >= 0) {
      this.setState({ currentCard: this.state.currentCard - 1, currentPage: 0 });
    } else {
      this.setState({ currentCard: data[this.props.deckID].length - 1, currentPage: 0 });
    }
  }

  changePage() {
    this.setState({ status: "Card Card-flip", });
  }

  changePageState() {
    if (this.state.currentPage + 1 < data[this.props.deckID][this.state.currentCard].length) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else {
      this.setState({ currentPage: 0 });
    }
  }

  componentDidUpdate() {
    if (this.state.deckID !== this.props.deckID) {
      this.setState({
        currentCard: 0,
        currentPage: 0,
        deckID: this.props.deckID,
      });
    }
  }

  callbackFunction = childData => {
    switch (childData) {
      case "Card Card-flip":
        this.changePageState();
        this.setState({ status: "Card", });
        break;

      case "Card Card-left-out":
        this.nextCardState();
        this.setState({ status: "Card Card-right-in", });
        break;

      case "Card Card-right-in":
        this.setState({ status: "Card", });
        break;

      case "Card Card-right-out":
        this.prevCardState();
        this.setState({ status: "Card Card-left-in", });
        break;

      case "Card Card-left-in":
        this.setState({ status: "Card", });
        break;

      default:
        this.setState({ status: "Card", });
        break;
    }
  };

  render() {

    return (
      <div>
        <div className="Card-Deck">
          {this.renderCard(this.state.currentCard)}
        </div>

        <div className={"btnGroup"}>
          <button className={"btn btn-change"} onClick={this.prevCard}>Back</button>
          <button className={"btn btn-change"} onClick={this.nextCard}>Next</button>
        </div>
      </div>
    );
  }
}

export default CardDeck;

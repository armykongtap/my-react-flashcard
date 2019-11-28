import React from "react";
import "./Home.css";
import Category from "./Category";
import CardDeck from "./CardDeck";
import WordAdd from "./WordAdd";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "Animal",
      currentUserID: this.props.currentUserID
    };
  }

  callbackFunction = childData => {
    this.setState({ deckID: childData });
  };

  render() {
    return (
      <div className={"Home"}>
        <Category
          deckID={this.state.deckID}
          parentCallback={this.callbackFunction}
        />
        <CardDeck
          deckID={this.state.deckID}
          currentUserID={this.state.currentUserID}
        />
        <WordAdd currentUserID={this.state.currentUserID} />
      </div>
    );
  }
}

export default Home;

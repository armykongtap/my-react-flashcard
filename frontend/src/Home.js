import React from "react";
import "./Home.css";
import Category from "./Category";
import CardDeck from "./CardDeck";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckID: "Animal"
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
        <CardDeck deckID={this.state.deckID} />
      </div>
    );
  }
}

export default Home;

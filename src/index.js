import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Category from "./Category";
import CardDeck from "./CardDeck";
import * as serviceWorker from "./serviceWorker";

class MainPage extends React.Component {
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
      <div className={"MainPage"}>
        <Category
          deckID={this.state.deckID}
          parentCallback={this.callbackFunction}
        />
        <CardDeck deckID={this.state.deckID} />
      </div>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById("root"));

serviceWorker.unregister();

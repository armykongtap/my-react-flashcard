import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: "GUEST"
    };
  }

  callbackFunction = childData => {
    this.setState({ currentUserID: childData });
  };

  render() {
    return (
      <Router>
        <div>
          <div>{this.state.currentUserID}</div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/register">Register</Link>
          </div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login parentCallback={this.callbackFunction} />
            </Route>
            <Route path="/logout">
              <Logout parentCallback={this.callbackFunction} />
            </Route>
            <Route path="/">
              <Home currentUserID={this.state.currentUserID} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

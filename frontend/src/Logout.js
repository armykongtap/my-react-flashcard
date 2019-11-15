import React from "react";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendData = i => {
    this.props.parentCallback(i);
  };

  handleSubmit(event) {
    event.preventDefault();
    // fetch("http://127.0.0.1:8000/login/")
    //   .then(response => response.json())
    //   .then(data => this.setState({}));
    this.sendData("222");
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Logout" />
      </form>
    );
  }
}

export default Logout;

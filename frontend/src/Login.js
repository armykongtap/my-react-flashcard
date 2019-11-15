import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  sendData = i => {
    this.props.parentCallback(i);
  };

  handleSubmit(event) {
    event.preventDefault();
    // fetch("http://127.0.0.1:8000/login/")
    //   .then(response => response.json())
    //   .then(data => this.setState({}));
    this.sendData('555');
    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username :
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
          <br />
          Password :
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;

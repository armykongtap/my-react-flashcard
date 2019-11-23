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

  async handleSubmit(event) {
    let response;
    event.preventDefault();
    try {
      response = await fetch("http://localhost:8000/auth/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
      response.json().then(x => this.sendData(x));
      if (response.status === 201) {
        this.setState({ message: "Login Sucess" });
      } else {
        this.setState({ message: "Try again" });
      }
    } catch (err) {
      console.error(err);
    }
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

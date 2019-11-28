import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", message: "" };

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

  async handleSubmit(event) {
    let response;
    event.preventDefault();
    try {
      response = await fetch("http://localhost:8000/auth/register/", {
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
      console.log(response.status);
      if (response.status === 201) {
        this.setState({ message: "Register Sucess" });
      } else {
        this.setState({ message: "Try again" });
      }
    } catch (err) {
      console.error(err);
    }

    try {
      let url =
        "http://localhost:8000/words/initialise/" + this.state.username + "/1/";
      fetch(url)
    } catch (err) {
      console.error(err);
    }

    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <div>
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
          <input type="submit" value="Register" />
        </form>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default Register;

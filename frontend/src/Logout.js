import React from "react";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendData = i => {
    this.props.parentCallback(i);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.sendData("GUEST");
    this.setState({ message: "Logout Sucess" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Logout" />
        </form>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default Logout;

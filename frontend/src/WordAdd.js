import React from "react";

class WordAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "", en: "", th: "", ch: "", message: "" };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeEn = this.handleChangeEn.bind(this);
    this.handleChangeTh = this.handleChangeTh.bind(this);
    this.handleChangeCh = this.handleChangeCh.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }
  handleChangeEn(event) {
    this.setState({ en: event.target.value });
  }
  handleChangeTh(event) {
    this.setState({ th: event.target.value });
  }
  handleChangeCh(event) {
    this.setState({ ch: event.target.value });
  }

  async handleSubmit(event) {
    let response;
    event.preventDefault();
    try {
      response = await fetch("http://localhost:8000/words/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: this.props.currentUserID,
          category: this.state.category,
          en: this.state.en,
          th: this.state.th,
          ch: this.state.ch
        })
      });
      console.log(response.status);
      if (response.status === 201) {
        this.setState({ message: "Add Sucess" });
      } else {
        this.setState({ message: "Try again" });
      }
    } catch (err) {
      console.error(err);
    }
    this.setState({ category: "", en: "", th: "", ch: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Category :
            <input
              type="text"
              value={this.state.category}
              onChange={this.handleChangeCategory}
            />
            <br />
            English :
            <input
              type="text"
              value={this.state.en}
              onChange={this.handleChangeEn}
            />
            <br />
            Thai :
            <input
              type="text"
              value={this.state.th}
              onChange={this.handleChangeTh}
            />
            <br />
            Chinese :
            <input
              type="text"
              value={this.state.ch}
              onChange={this.handleChangeCh}
            />
          </label>
          <br />
          <input type="submit" value="Add" />
        </form>
        <div>{this.state.message}</div>
      </div>
    );
  }
}
export default WordAdd;

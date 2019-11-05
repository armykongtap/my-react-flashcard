import React, { Component } from "react";

const API = "http://localhost:8000/users/?format=json";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ results: data.results, isLoading: false }));
  }
  render() {
    const { results, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
        {results.map(res => (
          <li key={res.username}>
            <a href={res.url}>{res.username}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Api;

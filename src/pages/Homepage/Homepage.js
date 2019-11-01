import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Search from "../../components/Search/Search";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: "",
      query: "",
      error: ""
    };

    this.controller = new AbortController();
    this.signal = this.controller.signal;
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const signal = this.signal;

    trackPromise(
      fetch(`https://www.omdbapi.com/?s=${this.state.query}&apikey=251e77f3`, {
        signal
      })
        .then(response => response.json())
        .then(data => {
          if(data.Error){
            this.setState({error: data.Error})
          }
          this.setState({ movies: data.Search });
        })
        .catch(error => console.log(error.message))
    );
  };

  render() {
    return (
      <Fragment>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <LoadingIndicator />
        <MovieGrid
          favs={this.props.favs}
          handleFavButtonClicked={this.props.handleFavButtonClicked}
          movies={this.state.movies}
        />
      </Fragment>
    );
  }
}

export default Homepage;

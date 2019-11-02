import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import MovieGrid from "../../components/MovieGrid";
import Search from "../../components/Search";
import LoadingIndicator from "../../components/LoadingIndicator";

class Homepage extends Component {
  state = {
    movies: "",
    query: "",
    error: ""
  };

  controller = new AbortController();
  signal = this.controller.signal;

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
          if (data.Error) {
            this.setState({ error: data.Error });
          }
          this.setState({ movies: data.Search });
        })
        .catch(error => console.log(error.message))
    );
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { handleFavButtonClicked, favs } = this.props;
    const { movies } = this.state;

    return (
      <Fragment>
        <Search handleChange={handleChange} handleSubmit={handleSubmit} />
        <LoadingIndicator />
        <MovieGrid
          loadingIndicatorOff={true}
          favs={favs}
          handleFavButtonClicked={handleFavButtonClicked}
          movies={movies}
        />
      </Fragment>
    );
  }
}

export default Homepage;

import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

class Favspage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.props.favs.forEach(id => {
      trackPromise(
        fetch(`https://omdbapi.com/?apikey=251e77f3&i=${id}`)
          .then(response => response.json())
          .then(data =>
            this.setState(state => {
              const moviesArray = state.movies.concat(data);
              return {
                movies: moviesArray
              };
            })
          )
      );
    });
  }

  render() {
    return (
      <Fragment>
        <MovieGrid
          favs={this.props.favs}
          handleFavButttonClicked={this.props.handleFavButttonClicked}
          movies={this.state.movies}
        />
      </Fragment>
    );
  }
}

export default Favspage;

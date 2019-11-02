import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../../components/LoadingIndicator";

import "./MovieInfo.sass";

class MovieInfo extends Component {
  state = {
    movie: ""
  };

  controller = new AbortController();
  signal = this.controller.signal;
  id = this.props.match.params.id;

  componentWillUnmount() {
    this.controller.abort();
  }

  componentDidMount() {
    const signal = this.signal;
    const id = this.id;

    trackPromise(
      fetch(`https://omdbapi.com/?apikey=251e77f3&i=${id}&plot=full`, {
        signal
      })
        .then(response => response.json())
        .then(data =>
          this.setState({ movie: data }, () => {
            if (this.state.movie.Response === "False") {
              this.props.history.replace("/");
            }
          })
        )
    );
  }

  render() {
    const { movie } = this.state;
    const {
      Poster,
      Title,
      Plot,
      Genre,
      Released,
      Actors,
      imdbRating,
      Runtime
    } = movie;
    const { favs, handleFavButtonClicked } = this.props;
    const id = this.id;

    return (
      <Fragment>
        <LoadingIndicator />
        {movie ? (
          <div className="movie-info">
            <div className="img-wrapper">
              {Poster === "N/A" ? (
                <span className="no-img">Image not found</span>
              ) : (
                <img className="img" src={`${Poster}`} alt={Title} />
              )}
            </div>
            <h2 className="title">{Title}</h2>
            <div className="info">
              <span className="released">{Released}</span>
              <span className="runtime">{Runtime}</span>
              <span>{imdbRating} / 10</span>
            </div>
            <span className="genre">{Genre}</span>
            <span className="actors">{Actors}</span>
            <p className="plot">{Plot}</p>

            <button
              aria-label="Add to favourites"
              className="fav-btn"
              value={id}
              onClick={handleFavButtonClicked}
              type="button"
            >
              <span aira-hidden="true" className={`${favs.includes(id) ? 'fas' : 'far'} fa-heart`} ></span>
            </button>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default MovieInfo;

import React, { Component, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "../../components/LoadingIndicator";
import FavBtn from "../../components/FavBtn";
import ErrorMessage from "../../components/ErrorMessage";
import getMovie, { PLOT_LENGTH } from "../../api/getMovie";
import "./MovieInfo.sass";

class MovieInfo extends Component {
  state = {
    movie: "",
    error: ""
  };

  controller = new AbortController();
  signal = this.controller.signal;
  id = this.props.match.params.id;

  componentWillUnmount() {
    this.controller.abort();
  }

  async componentDidMount() {
    try {
      const movie = await trackPromise(
        getMovie({ id: this.id, signal: this.signal, plot: PLOT_LENGTH.FULL })
      );

      if (movie.Response === "False") {
        this.props.history.replace("/");
      } else {
        this.setState({ movie, error: "" });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { movie, error } = this.state;
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
        <ErrorMessage errorMessage={error} />
        {movie && (
          <div className="movie-info">
            <div className="img-wrapper">
              {Poster === "N/A" ? (
                <span className="no-img">Image not found</span>
              ) : (
                <img className="img" src={Poster} alt={Title} />
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

            <FavBtn
              isFav={favs.includes(id)}
              handleFavButtonClicked={handleFavButtonClicked}
              id={id}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default MovieInfo;

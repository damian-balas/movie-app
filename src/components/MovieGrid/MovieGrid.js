import React, { Component } from 'react'

import MovieItem from '../MovieItem/MovieItem'

import './MovieGrid.sass'

class MovieGrid extends Component {

  render(){
    return(
      <div className="movie-grid">
        {
          this.props.movies ? this.props.movies.map(({imdbID, Title, Poster })=> <MovieItem key={`${imdbID}_${Math.floor(Math.random()*1000)}`} id={imdbID} Title={Title} Poster={Poster} favs={this.props.favs} handleFavButttonClicked={this.props.handleFavButttonClicked}/>) : null
        }
      </div>
    )
  }
}

export default MovieGrid
import React, { Component } from 'react'

import './MovieInfo.sass'

class MovieInfo extends Component {
  constructor(props){
    super(props)

    this.state = {
      movie: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id 

    fetch(`http://omdbapi.com/?apikey=251e77f3&i=${id}&plot=full`)
    .then(response => response.json())
    .then(data => this.setState({movie: data}, () => {
      if(this.state.movie.Response === "False") {
        this.props.history.replace('/')
      }
    }));
  }
  

  render(){

    const {Poster, Title, Plot, Genre, Released, Actors, imdbRating, Runtime} = this.state.movie

    return(
      <div className="movie-info">
          <div className="img-wrapper">
            <img className='img' src={`${Poster}`} alt={`${Title} Poster`}/>
          </div>
          <h2 className='title'>{Title}</h2>
          <div className='info'>
            <span className='released'>{Released}</span>
            <span className="runtime">{Runtime}</span>
            <span>{imdbRating} / 10</span>
          </div>
          <span className='genre'>{Genre}</span>
          <span className='actors'>{Actors}</span>
          <p className='plot'>
            {Plot}
          </p>
          
          <button aria-label="Add to favourites" className='fav-btn' value={this.props.match.params.id} onClick={this.props.handleFavButttonClicked}>{this.props.favs.includes(this.props.match.params.id ) ? <span aira-hidden='true' className="fas fa-heart"></span> : <span aira-hidden='true' className="far fa-heart"></span>}</button>
      </div>
    )
  }
}

export default MovieInfo
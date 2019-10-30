import React, { Component, Fragment } from "react";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

class Favspage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // const promises = this.props.favs.map(id => fetch(`http://omdbapi.com/?apikey=251e77f3&i=${id}`).then(response => response.json()))
    // const data = await Promise.all(promises)

    // this.setState((state)=>{
    //   const moviesArray = state.movies.concat(data)
    //   return({
    //     movies: moviesArray
    //   })
    // })

    this.props.favs.forEach(id => {
      fetch(`http://omdbapi.com/?apikey=251e77f3&i=${id}`)
        .then(response => response.json())
        .then(data =>
          this.setState(state => {
            const moviesArray = state.movies.concat(data);
            return {
              movies: moviesArray
            };
          })
        );
    });
    console.log(this.props)
  }

  render() {
    return (
      <Fragment>
        {this.state.movies.length > 0 ? (
          <MovieGrid
            favs={this.props.favs}
            handleFavButttonClicked={this.props.handleFavButttonClicked}
            movies={this.state.movies}
          />
        ) : (
          <h1
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "36px"
            }}
          >
            ADD MOVIES TO FAVOURITES FIRST...
          </h1>
        )}
      </Fragment>
    );
  }
}

export default Favspage;

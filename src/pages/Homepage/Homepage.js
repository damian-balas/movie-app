import React, { Fragment } from 'react'

import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Search from '../../components/Search/Search'

const Homepage = (props) => (
  <Fragment>
    <Search handleClearMovies={props.handleClearMovies} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
    <MovieGrid favs={props.favs} handleFavButttonClicked={props.handleFavButttonClicked} movies={props.movies}/>
  </Fragment>
)

export default Homepage
import React, { Fragment } from 'react'

import MovieGrid from '../../components/MovieGrid/MovieGrid'
import Spinner from '../../components/Spinner/Spinner'
import Search from '../../components/Search/Search'

const Homepage = (props) => (
  <Fragment>
    <Search handleClearMovies={props.handleClearMovies} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
    {props.isLoading ? <Spinner /> : <MovieGrid favs={props.favs} handleFavButttonClicked={props.handleFavButttonClicked} movies={props.movies}/>}
  </Fragment>
)

export default Homepage
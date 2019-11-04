import React from 'react'

import {ReactComponent as NoMatchImg} from '../../assets/NoMatch.svg'
import './NoMatch.sass'

const NoMatch = () => (
  <div className="no-match">
    <h2 className='page-not-found'>Page not found</h2>
    <NoMatchImg className='no-match-img' />
  </div>
)

export default NoMatch
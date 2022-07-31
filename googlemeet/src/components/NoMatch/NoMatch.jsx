import React from 'react'
import Header from '../Navbar/Header'
import "./NoMatch.scss"
import {Link} from "react-router-dom"
function NoMatch() {
  return (
    <div className='no-match'>
      <Header/>
      <div className='no-match-cantainer'>
      <h2>Invalid video calling </h2>
      <div className='action-btn'>
        <Link className="btn green" to="/">
          Return to Home Screen
        </Link>
      </div>
      </div>
    </div>
  )
}

export default NoMatch
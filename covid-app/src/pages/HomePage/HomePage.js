import React from 'react'
import './HomePageCss.css'
import { Link } from 'react-router-dom'

function HomePage(props){
  
  return(
    <div id="home-container">
    <div className="b-label-title">title</div>
    <div className="b-updated-lable">update box</div>
    <div className="b-tweet-label">tweet</div>
    <div className="b-info-updater">info box</div>
    <div className="b-tweet-container">tweet container</div>
    <div className="b-us-map">
      <Link to="/state-page">map</Link>
      </div>
    </div>
  )
}

export default HomePage

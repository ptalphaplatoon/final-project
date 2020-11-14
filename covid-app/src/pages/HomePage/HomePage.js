import React from 'react'
import './HomePageCss.css'

function HomePage(props){
  
  return(
    <div id="home-container">
      <nav className="navBar">
        <div className="sub-nav-title"></div>
        <div className="sub-nav-home-button"></div>
        <div className="sub-nav-login-button"></div>
        <div className="sub-nav-signup-button"></div>
      </nav>
    <div className="b-label-title"></div>
    <div className="b-updated-lable"></div>
    <div className="b-tweet-label"></div>
    <div className="b-info-updater"></div>
    <div className="b-tweet-container"></div>
    <div className="b-us-map"></div>
    </div>
  )
}

export default HomePage
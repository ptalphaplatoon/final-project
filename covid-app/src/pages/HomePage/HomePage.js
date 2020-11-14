import React from 'react'
import './HomePageCss.css'

function HomePage(props){
  
  return(
    <div id="home-container">
      {/* <nav className="navBar">
        <div className="sub-nav-title">sub-nav-title</div>
        <div className="sub-nav-home-button">home</div>
        <div className="sub-nav-login-button">login</div>
        <div className="sub-nav-signup-button">signup</div>
      </nav> */}
    <div className="b-label-title">title</div>
    <div className="b-updated-lable">update box</div>
    <div className="b-tweet-label">tweet</div>
    <div className="b-info-updater">info box</div>
    <div className="b-tweet-container">tweet container</div>
    <div className="b-us-map">map</div>
    </div>
  )
}

export default HomePage
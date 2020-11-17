import React from 'react'
import './HomePageCss.css'

import Map from '../../components/Map/Map.js'

function HomePage(props){

// Name passed from the State clicked on
const setStateName = props.setSName
const chart = props.chart

  return(
    <div id="home-container">
    <div className="b-label-title">title</div>
    <div className="b-updated-lable">update box</div>
    <div className="b-tweet-label">tweet</div>
    <div className="b-info-updater">info box</div>
    <div className="b-tweet-container">tweet container</div>
    <div className="b-us-map">
      <Map map={chart} setSName={setStateName}/>
      </div>
    </div>
  )
}

export default HomePage

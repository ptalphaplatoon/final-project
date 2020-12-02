import React from 'react';
import './HomePageCss.css'
import { Timeline } from 'react-twitter-widgets'
import Map from '../../components/Map/Map.js'

function HomePage(props){

    // Name passed from the State clicked on
    const setStateName = props.setSName
    const chart = props.chart

    const infoBox = props.currentUSValues.map(function (values, index) {
        return(<div key={index} >Positive Cases: {values.positive} Deaths: {values.death}</div>)
    })

    const lastUpdateBox = props.currentUSValues.map(function (values, index) {
        return(<div key={index} >Last Updated: {values.lastModified}</div>)
    })

    const currentStateInfNums = props.currentStateValues.map(function (values) {
        var text = {"id":"US-" + values.state, 
                    "value": values.positive
                    }
        return text
    })

    return(
        <div id="home-container">
        <div className="b-label-title">title</div>
        <div className="b-updated-lable">{lastUpdateBox}</div>
        
        <div className="b-info-updater">{infoBox}</div>
        <div className="b-tweet-container">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'CDCgov'
                }}
                options={{
                    height: '800'
                }}
            />
        </div>
        <div className="b-us-map">
            <Map map={chart} setSName={setStateName} currentstateInfNums={currentStateInfNums}/>
        </div>
        </div>
        
    )
}

export default HomePage
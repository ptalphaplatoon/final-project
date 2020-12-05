import React from 'react';
import './HomePageCss.css'
import { Timeline } from 'react-twitter-widgets'
import Map from '../../components/Map/Map.js'
import HomePageChart from '../../components/Charts/HomePageChart.js'

function HomePage(props){

    // Name passed from the State clicked on
    const setStateName = props.setSName
    const chart = props.chart

    const infoBox = props.currentUSValues.map(function (values, index) {
        return(<div key={index} >Key Numbers
                <div>Positive Cases: {values.positive} +{values.positiveIncrease}</div>
                <div>Deaths: {values.death} +{values.deathIncrease}</div>
                <div>Hospitalized: {values.hospitalizedCurrently} +{values.hospitalizedIncrease}</div>
                <div>Total Tests: {values.totalTestResults} +{values.totalTestResultsIncrease}</div>
            </div>)
    })

    const lastUpdateBox = props.currentUSValues.map(function (values, index) {
        return(<div key={index} >Last Updated: {values.lastModified}</div>)
    })

    const currentStateInfNums = props.currentStateValues.map(function (values) {
        var text = {"id":"US-" + values.state, 
                    "value": values.positive,
                    "deaths": values.death,
                    "hospitalizedCurrently": values.hospitalizedCurrently,
                    "hospitalizedCumulative": values.hospitalizedCumulative,
                    "totalTests": values.totalTestResults,
                    "positiveIncrease": values.positiveIncrease,
                    "deathIncrease": values.deathIncrease,
                    "hospitalizedIncrease": values.hospitalizedIncrease,
                    "totalTestResultsIncrease": values.totalTestResultsIncrease
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
                <div className="home-page-line-chart"><HomePageChart historicUSValues = {props.historicUSValues}/></div>
                <Map map={chart} setSName={setStateName} currentstateInfNums={currentStateInfNums}/>  
            </div>
        </div>
    )
}

export default HomePage

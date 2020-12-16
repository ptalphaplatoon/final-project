import React, { Fragment, useState, useEffect } from "react";
import "./HomePageCss.css";
import { Timeline } from "react-twitter-widgets";
import Map from "../../components/Map/Map.js";
import HomePageChart from "../../components/Charts/HomePageChart.js";
import stateAbbr from '../../data/stateAbbr.json'
import { CardBody, Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fetchStateCensusPopulations} from './../../API/CensusDataAPI';

function HomePage(props) {
  // Name passed from the State clicked on
  const setStateName = props.setSName;
  const chart = props.chart;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
  };
  const formatNumber = (number) => {
    var nf = new Intl.NumberFormat();
    return nf.format(number);
  };
  const infoBox = props.currentUSValues.map(function (values, index) {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-premium-dark border-0 text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Positive Cases
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.positive)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.positiveIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-midnight-bloom text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Deaths
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.death)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.deathIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-plum-plate text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Hospitalized
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.hospitalizedCumulative)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.hospitalizedCurrently)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="position-relative px-5 py-3">
          <Card className="card-box bg-vicious-stance text-light mb-5">
            <CardBody className="b-info-card">
              <div className="d-flex align-items-start">
                <div className="font-weight-bold">
                  <small className="text-white-50 d-block mb-1 text-uppercase">
                    Total Tests
                  </small>
                  <span className="font-size-xxl mt-1">
                    {formatNumber(values.totalTestResults)}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <FontAwesomeIcon
                  icon={["fas", "arrow-up"]}
                  className="text-success mr-1"
                />
                <span className="text-success pr-1">
                  {formatNumber(values.totalTestResultsIncrease)}
                </span>
                <span className="text-white-50">today</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  });

  const lastUpdateBox = props.currentUSValues.map(function (values, index) {
    return (
      <div key={index}>Last Updated: {formatDate(values.lastModified)}</div>
    );
  });

  const [stateCensusPopulations, setStateCensusPopulations]=useState([])
  useEffect(()=>{
    async function getStateCensusPopulations() {
        const data = await fetchStateCensusPopulations()
        setStateCensusPopulations(data)
    }
    getStateCensusPopulations()
  },[])

  const perCapita = () => { 
    let arrStateVals = []
    for(let index in stateCensusPopulations) {
        for(let stateValue in stateAbbr) {
            if(stateCensusPopulations[index][0] === stateValue) {
                arrStateVals.push({
                    stateAbbr: stateAbbr[stateValue],
                    value: stateCensusPopulations[index][1] / 100000
                })
            }
        }
    }
    return arrStateVals
  }

//   const stateLast7DaysData = props.historicStateVakklues.map(function(item) {
//         for(let index in props.historicStateValues){
//             let csv = props.historicStateValues[index]
//             var text = {
//                 id: "US-" + csv.state,
//                 value: csv.positive,
//                 deaths: csv.death,
//             };
//     }
//     console.log('text', text)
//     return text
//   })

// console.log(stateLast7DaysData)

  const perCapitaValuesOfStates = perCapita()

  const currentStateInfNums = perCapitaValuesOfStates.map(function(item) {
    
    for(let index in props.currentStateValues){
        let csv = props.currentStateValues[index]
        let currentState = csv.state

      if (currentState === item.stateAbbr) {
        let totalCases = csv.positive
        let totalDeaths = csv.death
        let totalTests = csv.totalTestResults
        let valueBy100K = (parseFloat(csv.positive) / parseFloat(item.value)).toFixed(1)
        let deathsBy100K = (parseFloat(csv.death) / parseFloat(item.value)).toFixed(1)
        let hospitalizedCurrentlyBy100K = (parseFloat(csv.hospitalizedCurrently) / parseFloat(item.value)).toFixed(1)
        let totalTestsBy100K = (parseFloat(csv.totalTestResults) / parseFloat(item.value)).toFixed(1)

        var text = {
            id: "US-" + csv.state,
            value: valueBy100K,
            deaths: deathsBy100K,
            hospitalizedCurrently: hospitalizedCurrentlyBy100K,
            totalTests100K: totalTestsBy100K,
            positiveIncrease: csv.positiveIncrease,
            deathIncrease: csv.deathIncrease,
            hospitalizedIncrease: csv.hospitalizedIncrease,
            totalTestResultsIncrease: csv.totalTestResultsIncrease,
            totalCases: totalCases,
            totalDeath: totalDeaths,
            totalTestResults: totalTests
          };
      }
    }
    return text
  })

// console.log(currentStateInfNumsNEW)

  // XXXXXXXXXXXXXX

//   const currentStateInfNums = props.currentStateValues.map(function (values) {
//     var text = {
//       id: "US-" + values.state,
//       value: values.positive,
//       deaths: values.death,
//       hospitalizedCurrently: values.hospitalizedCurrently,
//       hospitalizedCumulative: values.hospitalizedCumulative,
//       totalTests: values.totalTestResults,
//       positiveIncrease: values.positiveIncrease,
//       deathIncrease: values.deathIncrease,
//       hospitalizedIncrease: values.hospitalizedIncrease,
//       totalTestResultsIncrease: values.totalTestResultsIncrease,
//     };
//     return text;
//   });

  return (
    <div id="home-container">
      <div className="b-label-title">
        <div className="app-page-title--first">
          <div className="app-page-title--heading">
            <h1>National COVID-19 Information</h1>
            <div className="app-page-title--description">
              Traveling soon? Get informed with national and state information.
            </div>
          </div>
        </div>
      </div>
      <div className="b-updated-lable">
        <div className="app-page-title--description text-right">
          {lastUpdateBox}
        </div>
      </div>

      <div className="b-info-updater">{infoBox}</div>

      <div className="b-tweet-container">
        <Fragment>
          <Card className="card-box mb-5">
            <CardBody>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "CDCgov",
                }}
                options={{
                  height: "1000",
                }}
              />
            </CardBody>
          </Card>
        </Fragment>
      </div>

      <div className="b-us-map">
        <Fragment>
          <Card className="card-box mb-5 p-3 text-center">
            <div className="my-3">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Hot Spot Map: Total Cases per 100K people
              </h6>
              <p className="text-black-50 mb-0">
                Zoom and click on a state for more information.
              </p>
              <Map
                map={chart}
                setSName={setStateName}
                currentStateInfNums={currentStateInfNums}
              />
            </div>
          </Card>
        </Fragment>
        <Fragment>
          <Card className="card-box mb-5 p-3 text-center historic-values-card">
            <div className="my-3">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Historic Values Last 60 Days
              </h6>
              <div className="home-page-line-chart">
                <HomePageChart historicUSValues={props.historicUSValues} />
              </div>
            </div>
          </Card>
        </Fragment>
      </div>
    </div>
  );
}

export default HomePage;

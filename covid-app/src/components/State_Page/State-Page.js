import React, {Fragment, useState} from 'react';
import './State-PageCss.css'
import Container from '../Comments/Container.js'
import { Timeline } from 'react-twitter-widgets'
import stateTwitters from '../../data/stateTwitters.json'
import stateAbbr from '../../data/stateAbbr.json'
import {fetchSingleStateMetaData} from '../../API/InfectionsAPI'; 
import StatePageChart from "../../components/Charts/StatePageChart.js";
import {fetchHistoricSingleStateValues} from '../../API/InfectionsAPI'; 

import {
  CardBody,
  Card,
} from 'reactstrap';

function State_Page(props){
  const STATENAME = props.sName
  let stateName = sessionStorage.getItem('stateName')

  const triggerText = 'Add Comment';
  const twitterHandle = stateTwitters[stateName]

  const [singleStateMetaData, setSingleStateMetaData]=useState([])

  // Get saved data from sessionStorage
  const abbrState = stateAbbr[stateName]

  React.useEffect(() => {
        async function getSingleStateMetaData() {
        const data = await fetchSingleStateMetaData(abbrState)
        setSingleStateMetaData(data)
    } 
    getSingleStateMetaData()
  },[abbrState])

  const [historicSingleStateValues, setHistoricSingleStateValues]=useState([])
  React.useEffect(() => {
    async function getHistoricSingleStateValues() {
        const data = await fetchHistoricSingleStateValues(abbrState)
        data.splice(60)
        data.reverse()
        setHistoricSingleStateValues(data)
    }
    getHistoricSingleStateValues()
  },[abbrState])

  const statesCovid19HealthWebsite = <a href={singleStateMetaData.covid19Site} target="_blank" rel="noreferrer">Visit State Website</a>
  
  return (
    <div id="StatePage-container">
      <div className="a-api_feed_container">
        <Fragment>
          <Card className="card-box mb-5">
            <div className="card-header pr-2">
              <div className="text-uppercase card-header--title">
                Insight from Locals
              </div>
              <div className="card-header--actions"></div>
            </div>
            <CardBody>
              <div className="table-responsive-md">
                Nothing to show - Be the first to add a comment!
              </div>
            </CardBody>
            <div className="card-footer d-flex justify-content-between">
              <div className="a-api_add_feed_button">
                <Container triggerText={triggerText} />
              </div>
            </div>
          </Card>
        </Fragment>
      </div>
      <div className="a-state_info_container">
        <Fragment>
          <Card className="card-box mb-5">
            <div className="card-header d-block">
              <span className="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">
                {STATENAME} Health Department
              </span>
              <div className="text-center">{statesCovid19HealthWebsite}</div>
            </div>
            <CardBody>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: twitterHandle,
                }}
                options={{
                  height: "800",
                }}
              />
            </CardBody>
          </Card>
        </Fragment>
      </div>
      <div>
        <Fragment>
            <Card className="card-box mb-5 p-3 text-center">
                <div className="my-3">
                <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                    Historic Values Last 60 Days
                </h6>
                <div className="state-page-line-chart">
                    <StatePageChart historicSingleStateValues={historicSingleStateValues} />
                </div>
                </div>
            </Card>
            </Fragment>
      </div>
    </div>
  );
}

export default State_Page

import React, {Fragment, useState} from 'react';
import './State-PageCss.css'
import Container from '../Comments/Container.js'
import { Timeline } from 'react-twitter-widgets'
import stateTwitters from '../../data/stateTwitters.json'
import stateAbbr from '../../data/stateAbbr.json'
import {fetchSingleStateMetaData} from '../../API/InfectionsAPI'; 
import { postsGetAll } from '../api/CovidAppApi.js'

import {
  CardBody,
  Card,
} from 'reactstrap';

function State_Page(props){
  // const STATENAME = props.sName
  const stateName = sessionStorage.getItem('stateName')
  

  const triggerText = 'Add Comment';
  const twitterHandle = stateTwitters[stateName]

  const [singleStateMetaData, setSingleStateMetaData]=useState([])
  const [statePosts,setStatePosts] = useState([])
  const [stateChange,setStateChange] = useState(1)

  // Get saved data from sessionStorage
  const abbrState = stateAbbr[stateName]

  React.useEffect(() => {
        async function getSingleStateMetaData() {
        const data = await fetchSingleStateMetaData(abbrState)
        setSingleStateMetaData(data)
    } 
    getSingleStateMetaData()
  },[abbrState])

  const statesCovid19HealthWebsite = <a href={singleStateMetaData.covid19Site} target="_blank" rel="noreferrer">Visit State Website</a>

  //needed to allow useEffect enough time to read in all comments before the re-render is called when a comment is added
  const delay = ms => new Promise(res => setTimeout(res, ms));

  // Get StatePosts
  React.useEffect(() => {
    async function getPosts(){
      await delay(200)
      setStatePosts(await postsGetAll())
    }
    getPosts()
    
  }, [stateChange])
  console.log(stateChange)
  console.log(statePosts)

  //read in all comments
  const displayComments =()=>{
    let postData = []
    console.log(statePosts)
    if (statePosts){
      for (let post in statePosts){
        if(statePosts[post].title === stateName){
          postData.unshift(
            statePosts[post].description,
            <hr/>
          )
        }
      }
    }
    if (postData.length < 1){
      postData = ['Nothing to show - Be the first to add a comment!']
    }
    
      return(postData)
  }

  const showAddComment = () =>{
    if (localStorage.token){
      return <Container triggerText={triggerText} setStateChange={setStateChange} stateChange={stateChange}/>
    }
  }

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
                {displayComments()}
                
              </div>
            </CardBody>
            <div className="card-footer d-flex justify-content-between">
              <div className="a-api_add_feed_button">
                {showAddComment()}
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
                {stateName} Health Department
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
    </div>
  );
}

export default State_Page

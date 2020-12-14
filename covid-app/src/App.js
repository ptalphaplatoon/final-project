import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css'

import StatePage from './components/StatePage/StatePage.js'
import HomePage from './pages/HomePage/HomePage.js'

import Comments from './components/Comments/Comments.js'
import LoginSignUp from './components/Authentication/LoginSignUp'
import UserProfile from './components/UserProfile/UserProfile.js'

import {fetchCurrentUSValues, fetchCurrentStateValues, fetchHistoricUSValues, fetchHistoricStateValues} from './API/InfectionsAPI'; 

import { postsGetAll } from './components/api/CovidAppApi.js'

import './assets/base.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
library.add(
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
);
library.add(
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
);
library.add(
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
);

function App(props) {
    //Create State to store State name. setStateName is passed to the map and stateName is passed to State-Page
  
  const [stateName,setStateName]=useState('')
  const [currentUSValues, setCurrentUSValues]=useState([])
  const [currentStateValues, setCurrentStateValues]=useState([])
  const [historicUSValues, setHistoricUSValues]=useState([])
  const [historicStateValues, setHistoricStateValues]=useState([])
  const [allPost,setAllPost] = useState([])


  React.useEffect(() => {
    async function getCurrentUSValues() {
      const data = await fetchCurrentUSValues()
      setCurrentUSValues(data)
    }
    getCurrentUSValues()
  }, [])

  React.useEffect(() => {
      async function getHistoricUSValues() {
          const data = await fetchHistoricUSValues()
          data.splice(60)
          data.reverse()
          setHistoricUSValues(data)
      }
      getHistoricUSValues()
  },[])

  React.useEffect(() => {
    async function getHistoricStateValues() {
        const data = await fetchHistoricStateValues()
        data.splice(7)
        setHistoricStateValues(data)
    }
    getHistoricStateValues()
},[])

  React.useEffect(() => {
      async function getCurrentStateValues() {
        const data = await fetchCurrentStateValues()
        setCurrentStateValues(data)
      }
      getCurrentStateValues()
  },[])

  React.useEffect(()=>{
    async function getPosts(){ 
      setAllPost( await postsGetAll())
    }
    getPosts()
  },[])
  


  const renderStatePage = (props) => {
    return (
      <StatePage sName={stateName} />
    )
  }

  const renderHomePage =(props)=>{
    return(
      <HomePage setSName={setStateName} currentUSValues={currentUSValues} currentStateValues={currentStateValues} historicUSValues={historicUSValues}/>
    )
  }

  const renderComments = (props) =>{
    return(
      <Comments postsFromAppState={allPost}/>
    )
  }

  return (
    <div id={'app-container'}>

      <div className="nav-bar">
        <LoginSignUp />

      </div>

      <div className={"body-container"}>
        <Switch>
          <Route exact path="/" render={renderHomePage} />
          <Route exact path="/state-page" render={renderStatePage} />
          <Route exact path="/add-comments" render={renderComments} />
          <Route exact path="/user-profile" component={UserProfile} />
        </Switch>
      </div>

    </div>



  );
}

export default App;
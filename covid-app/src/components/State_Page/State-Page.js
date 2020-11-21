import React from 'react'
import './State-PageCss.css'
import Container from '../Comments/Container.js'
import { Timeline } from 'react-twitter-widgets'
import stateTwitters from '../../data/stateTwitters.json'

function State_Page(props){
  const STATENAME = props.sName
  
  const triggerText = 'Open form';
  const twitterHandle = stateTwitters[STATENAME]




  return(
    <div id="StatePage-container">
      <div className="a-api_feed_title">PUBLIC COMMENT</div>
      <div className="a-api_feed_container"></div>
      <div className="a-api_add_feed_button">
      <Container triggerText={triggerText} />
        {/* <Link to="/add-comments">Add Comment</Link> */}
      </div>
      <div className="a-state_name_container">{STATENAME} Health Department Tweets</div>
      <div className="a-state_info_container">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterHandle
          }}
          options={{
            height: '800'
        }}
      />
      
        
      </div>
    </div>

  )
}

export default State_Page

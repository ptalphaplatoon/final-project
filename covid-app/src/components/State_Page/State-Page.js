import React from 'react'
import './State-PageCss.css'
import Container from '../Comments/Container.js'


function State_Page(props){
  const STATENAME = props.sName
  
  const triggerText = 'Open form';




  return(
    <div id="StatePage-container">
      <div className="a-api_feed_title">PUBLIC COMMENT</div>
      <div className="a-api_feed_container"></div>
      <div className="a-api_add_feed_button">
      <Container triggerText={triggerText} />
        {/* <Link to="/add-comments">Add Comment</Link> */}
      </div>
      <div className="a-state_name_container">{STATENAME}</div>
      <div className="a-state_info_container"></div>
    </div>

  )
}

export default State_Page

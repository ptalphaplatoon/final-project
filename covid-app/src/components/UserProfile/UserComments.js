import React from 'react'
import './UserComments.css'
import Container from '../Comments/Container.js'
import DeletePost from './DeletePost.js'

function UserComments (props){
  const {title, description, postID, setUpdateState, updateState, triggerText, token} = props
  
  return(
    <div className="container">
      <div className="usercomments-reply">
      <div className="usercommnets-title">{title}</div>
      <div className="usercomments-description">{description}</div>
      <div className="usercomments-edit">
        <Container triggerText={triggerText} editPost={postID} setStateChange={setUpdateState} stateChange={updateState}destination='userProfile'/>
      </div>
      <div className="usercomments-delete">
        <DeletePost userToken={token} deletePostID={postID} setStateChange={setUpdateState} stateChange={updateState}/>
      </div>
      </div>
    </div>
  )
}

export default UserComments
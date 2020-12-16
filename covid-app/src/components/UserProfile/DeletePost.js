import React from 'react'
import {deleteCommentByID} from '../api/CovidAppApi.js'

function DeletePost(props){
  const postID = props.deletePostID
  const token = props.userToken


  const deleteMe =()=>{
    deleteCommentByID(token,postID)
    let value = props.stateChange + 1
    props.setStateChange(value)
    
  } 
  
  return(
    <div onClick={deleteMe}>
      DELETE
    </div>
  )
}

export default DeletePost
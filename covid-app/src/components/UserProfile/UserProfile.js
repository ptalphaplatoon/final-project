
import { postsGetAll } from '../api/CovidAppApi'
import React, { useState } from 'react'
// import Container from '../Comments/Container.js'
// import DeletePost from './DeletePost.js'
// import {Table} from 'reactstrap'
import UserComment from './UserComments.js'
import './UserProfile.css'

export const UserProfile = (props) => {
  const [posts, setPosts] = useState(null)
  const [updateState,setUpdateState] = useState(1)
  let author = localStorage.getItem('username')
  let token = localStorage.getItem('token')
  let triggerText = ' EDIT '

  //needed to allow useEffect enough time to read in all comments before the re-render is called when a comment is edited
  const delay = ms => new Promise(res => setTimeout(res, ms));

  React.useEffect(() => {
    async function getPosts() {
      await delay(200)
      setPosts(await postsGetAll())
    }
    getPosts()

  }, [updateState])



  const displayPostsByAuthor = () => {
    let postData = []

    if (posts) {
      for (let post in posts) {
        if (posts[post].user === author) {
          postData.unshift(
            <UserComment title={posts[post].title} description={posts[post].description} postID={posts[post].id} token={token} triggerText={triggerText} setUpdateState={setUpdateState} updateState={updateState}/>
              
          )
        }
      }
    }
    if (postData.length < 1) {
      
        postData = [
          <div className="userprofile-nocomments">
            <h4>All comments you post will show here. You currently have no comments.</h4>
          </div>
            ]
      
    }


    return (postData)

    }

  return (
    <div className="userprofile-background">
      <h1 className="userprofile">All comments from author: {author}</h1>
      
        {displayPostsByAuthor()}
      
    </div>
  )

}
export default UserProfile;

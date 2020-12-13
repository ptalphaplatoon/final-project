
import { postsGetAll } from '../api/CovidAppApi'
import React, { useState } from 'react'
import Container from '../Comments/Container.js'
import DeletePost from './DeletePost.js'
import {Table} from 'reactstrap'
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
            
              <Table className="userprofile-table">
                <thead>
                  <tr>
                    <th><h3>{posts[post].title}</h3></th>
                    </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td>{posts[post].description}</td>
                  </tr>
                  <tr>
                    <th>
                      <Container triggerText={triggerText} editPost={posts[post].id} setStateChange={setUpdateState} stateChange={updateState}destination='userProfile'/>
                      <DeletePost userToken={token} deletePostID={posts[post].id} setStateChange={setUpdateState} stateChange={updateState}/>
                    </th>
                  </tr>
                </tbody>
              </Table>

          )
        }
      }
    }
    if (postData.length < 1) {
      postData = ['All comments you post will show here. You currently have no comments.']
    }


    return (postData)

    }

  return (
    <div>
      <h1 className="userprofile">All comments from author: {author}</h1>
      
        {displayPostsByAuthor()}
      
    </div>
  )

}
export default UserProfile;

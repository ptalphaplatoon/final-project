
import { getPostsByAuthor } from '../api/CovidAppApi'
import React, { useState, useEffect } from 'react'

export const UserProfile = (props) => {
  const [posts, setPosts] = useState(null)

  console.log("user profile compnent is called")

  let token = localStorage.getItem('token')
  let author =


    useEffect(() => {
      getPostsByAuthor(token, "aika").then(d => setPosts(d))
    }, [token])

  return (
    <div>
      <h1>All Posts from author</h1>
      <ul>
        {posts && posts.map(item =>
          <li key={item.pk}>
            <h1>{item.title}</h1>
          </li>)}
      </ul>
    </div>
  )

}
export default UserProfile;

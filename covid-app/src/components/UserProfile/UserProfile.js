
import { getPostsByAuthor } from '../api/CovidAppApi'
import React, { useState, useEffect } from 'react'

export const UserProfile = (props) => {
  const [posts, setPosts] = useState(null)

  console.log("user profile compnent is called")

  let token = localStorage.getItem('token')
  let author = localStorage.getItem('username')


  useEffect(() => {
    getPostsByAuthor(token, author).then(d => setPosts(d))
  }, [token])

  return (
    <div>
      <h1>All Posts from author: {author}</h1>
      <ul>
        {posts && posts.map(item =>
          <li key={item.pk}>
            <h1>Post Title: {item.title}</h1>
            <h2>Post Description {item.description}</h2>
          </li>)}
      </ul>
    </div>
  )

}
export default UserProfile;

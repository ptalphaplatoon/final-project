
import { postsGetAll } from '../api/CovidAppApi'
import React, { useState } from 'react'

export const UserProfile = (props) => {
  const [posts, setPosts] = useState(null)
  let author = localStorage.getItem('username')


  // useEffect(() => {
  //   getPostsByAuthor(token, author).then(d => setPosts(d))
  // }, [token, author])


  React.useEffect(() => {
    async function getPosts() {
      // await delay(200)
      setPosts(await postsGetAll())
    }
    getPosts()

  }, [])



  const displayPostsByAuthor = () => {
    let postData = []

    if (posts) {
      for (let post in posts) {
        if (posts[post].user === author) {
          postData.unshift(
            posts[post].description,
            <hr key={posts[post].id} />
          )
        }
      }
    }
    if (postData.length < 1) {
      postData = ['Nothing to show - Be the first to add a comment!']
    }

    return (postData)
  }

  return (
    <div>
      <h1>All comments from author: {author}</h1>
      {displayPostsByAuthor()}
    </div>
  )

}
export default UserProfile;

// const BASE_URL = 'http://localhost:8000/covid/';
const BASE_URL = 'https://pt-alpha-final-project.herokuapp.com/';


export const postsGetAll = () => {
  return fetch(`${BASE_URL}covid/posts/`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    }
  })
    .then((response) => response.json())
}

export const editPost = (token, postID) => {
  return fetch(`${BASE_URL}covid/posts/${postID}/`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": "JWT " + token
    }
  })
    .then((response) => response.json())
}

//Delete Comment
export const deleteCommentByID = async (token,postID) => {
  await fetch(`${BASE_URL}covid/posts/${postID}/`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "JWT " + token
    },
    method: 'DELETE'
  })
}

//Update Comment
export const patchPost = async (post,token,postID) => {
  await fetch(`${BASE_URL}covid/posts/${postID}/`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "JWT " + token
    },
    method: 'PATCH',
    body: JSON.stringify(post)
  })
}

export const getCurrentUser = (token) => {
  return fetch(`${BASE_URL}current_user/`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": "JWT " + token
    }
  })
    .then((response) => {
      return response.json
    })
    
}

//Save data to django
export const writeData = async (post,token) => {
  await fetch(`${BASE_URL}covid/posts/`, { 
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "JWT " + token
    },
    method: 'POST',
    body: JSON.stringify(post)
  })
}


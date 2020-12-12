// const BASE_URL = 'http://localhost:8000/covid/';
const BASE_URL = 'https://pt-alpha-final-project.herokuapp.com/';


export const postsGetAll = () => {
  return fetch(`${BASE_URL}posts`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
    }
  })
    .then((response) => response.json())
}

export const getPostsByAuthor = (token, author) => {
  return fetch(`${BASE_URL}posts?filter={"where":{"author":"${author}"}}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": "JWT " + token
    }
  })
    .then((response) => response.json())
}

//Save data to django
export const writeData = async (post,token) => {
  await fetch(`${BASE_URL}posts/`, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "JWT " + token
    },
    method: 'POST',
    body: JSON.stringify(post)
  })
}






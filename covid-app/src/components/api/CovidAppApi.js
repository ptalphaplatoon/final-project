const BASE_URL = 'http://localhost:8000/covid/';
//const BASE_URL = 'https://pt-alpha-final-project.herokuapp.com/';


export const postsGetAll = (token) => {
  return fetch(`${BASE_URL}posts`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": "JWT " + token
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







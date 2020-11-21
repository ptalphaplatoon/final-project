const BASE_URL = 'http://localhost:8000/covid/';


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








import axios from 'axios'

const API_END = 'http://localhost:3333'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export function getData (table) {
  return axios(
    {
      method:'GET',
      url: `${API_END}/${table}`
    }
  ).then(response => response.data.data)
}

export function getDataById (table, id) {
  return axios(
    {
      method:'GET',
      url: `${API_END}/${table}/${id}`
    }
  ).then(response => response.data.data)
}

export async function getAccount (username, password) {
  return await axios(
    {
      method: 'POST',
      url: 'http://127.0.0.1:3333/login',
      headers: { ...JSON_HEADER },
      data: JSON.stringify({
        username: username,
        password: password 
      })
    }
  ).then(response => response)
}
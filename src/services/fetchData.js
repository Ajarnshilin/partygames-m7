
import axios from 'axios'

const API_END = 'http://localhost:3333'

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
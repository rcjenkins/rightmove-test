import axios from 'axios';
const API_URL = 'http://localhost:4000/api/properties';

export async function getProperties(filters) {

  let queryParams = filters.map((filter)=> {
    if(filter.value){
    return `${filter.key}=${filter.value}`
    }
    return null
  })

  let query = ""
  if(queryParams.length !== 0){
    query = '?'+queryParams.join('&')
  }

  try {
    const { data } = await axios.get(`${API_URL}${query}`);
    return data;
  } catch (err) {
    throw err;
  }
}

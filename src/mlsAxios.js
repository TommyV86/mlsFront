import axios from 'axios';

const mlsAxios = axios.create({
  baseURL: `http://localhost:8080/`
})

mlsAxios.interceptors.request.use((request) => {
  return request
})

export default mlsAxios
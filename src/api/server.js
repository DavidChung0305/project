import axios from "axios"; 

const instance = axios.create(
  { baseURL: '/mock',
   timeout: 5000
}) 

instance.interceptors.request.use((config) => { 
  return config 
}) 

instance.interceptors.response.use((res) => { return res.data }, (err) => { return console.error(err) }); 

export default instance
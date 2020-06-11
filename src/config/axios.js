import axios from 'axios';

const api = axios.create({
    baseURL: process.env.GATSBY_API_URL,
    timeout: 20000
})

export default api;
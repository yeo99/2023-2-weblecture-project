import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: process.env.API_URL,
})

export default axiosInstance;
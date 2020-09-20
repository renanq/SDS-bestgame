import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sds1-renanq.herokuapp.com'
});

export default api;
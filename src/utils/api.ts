import axios from 'axios';

export const unAuthApi = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
});

export const authApi = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {
        'Authorization': `Token ${localStorage.getItem("token")}`
    }
});
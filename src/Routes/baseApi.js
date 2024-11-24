import axios from 'axios'
import AuthService from '../Utils/auth.utils';
const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": 'application/json'
    }
})

api.interceptors.request.use((config) => {
    const token = AuthService.getToken();
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config
})

export default api;
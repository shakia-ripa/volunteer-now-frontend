import { jwtDecode } from "jwt-decode";
import api from "../Routes/baseApi";




const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    console.log("After login", response);
    if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken)
    }
    return response.data;
}

const logOut = () => {
    localStorage.removeItem("accessToken");
}

const getCurrentUser = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        const decodedUser = jwtDecode(token);
        return decodedUser;
    }
    return null;
}

const getToken = () =>{
    return localStorage.getItem('accessToken')
}


const AuthService = { login, logOut, getCurrentUser, getToken };
export default AuthService;
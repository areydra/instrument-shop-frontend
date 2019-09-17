import axios from 'axios'

export const login = user => {
    return {
        type : 'LOGIN',
        payload : axios.post('http://localhost:5000/api/auth/login', user)
    }
}

export const register = user => {
    return {
        type: 'REGISTER',
        payload: axios.post('http://localhost:5000/api/auth/register', user)
    }
}
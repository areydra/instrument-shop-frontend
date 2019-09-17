import axios from 'axios'

export const getProducts = () => {
    return {
        type : 'GET_PRODUCTS',
        payload : axios.get('http://localhost:5000/api/products')
    }
}
import axios from 'axios'

export const getCategories = () => {
    return {
        type : 'GET_CATEGORIES',
        payload : axios.get('http://localhost:5000/api/categories')
    }
}
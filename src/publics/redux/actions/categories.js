import axios from 'axios'

export const getCategories = () => {
    return{
        type : 'GET_CATEGORIES',
        payload : axios.get('http://localhost:8000/api/categories')
    }
}

export const getCategoryDetail = id => {
    return {
        type: 'GET_CATEGORY_DETAIL',
        payload: axios.get(`http://localhost:8000/api/categories/${id}`)
    }
}

export const postCategory = newCategory => {
    return{
        type: 'POST_CATEGORY',
        payload: axios.post('http://localhost:8000/api/categories', newCategory)
    }
}
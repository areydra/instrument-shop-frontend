import axios from 'axios'

export const getCategories = () => {
    return {
        type : 'GET_CATEGORIES',
        payload : axios.get('http://localhost:5000/api/categories')
    }
}

export const getCategoriesPaginate = (offset, limit) => {
    return {
        type: 'GET_CATEGORIES_PAGINATE',
        payload: axios.get(`http://localhost:5000/api/categories/page/${offset}/${limit}`)
    }
}
export const postCategory = (category) => {
    return {
        type: 'POST_CATEGORY',
        payload: axios.post('http://localhost:5000/api/categories', category)
    }
}

export const patchCategory = (id, category) => {
    return {
        type: 'PATCH_CATEGORY',
        payload: axios.patch(`http://localhost:5000/api/categories/${id}`, category)
    }
}

export const deleteCategory = id => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(`http://localhost:5000/api/categories/${id}`)
    }
}
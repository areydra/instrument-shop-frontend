import axios from 'axios'
import localStorage from 'local-storage'

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
        payload: axios.post('http://localhost:5000/api/categories', category, {
            headers: {
                'x-auth-token': localStorage.get('token')
            }
        })
    }
}

export const patchCategory = (id, category) => {
    return {
        type: 'PATCH_CATEGORY',
        payload: axios.patch(`http://localhost:5000/api/categories/${id}`, category, {
            headers: {
                'x-auth-token': localStorage.get('token')
            }
        })
    }
}

export const deleteCategory = id => {
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(`http://localhost:5000/api/categories/${id}`, {
            headers: {
                'x-auth-token': localStorage.get('token')
            }
        })
    }
}
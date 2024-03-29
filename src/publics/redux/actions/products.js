import axios from 'axios'
import localStorage from 'local-storage'

export const getProducts = (offset, limit) => {
    return {
        type : 'GET_PRODUCTS',
        payload : axios.get(`https://instrument-shop-backend.herokuapp.com/api/products/${offset}/${limit}`)
    }
}

export const getAllProducts = () => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios.get(`https://instrument-shop-backend.herokuapp.com/api/products`)
    }
}

export const getProductsByCategory = (category, offset, limit) => {
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios.get(`https://instrument-shop-backend.herokuapp.com/api/products/category/${category}/${offset}/${limit}`)
    }
}

export const getProductDetails = product => {
    return {
        type: 'GET_PRODUCT_DETAILS',
        payload: axios.get(`https://instrument-shop-backend.herokuapp.com/api/products/${product}`)
    }
}

export const getSearchProducts = (product, offset, limit) => {
    return {
        type: 'GET_SEARCH_PRODUCTS',
        payload: axios.get(`https://instrument-shop-backend.herokuapp.com/api/products/search/${product}/${offset}/${limit}`)
    }
}

export const postProduct = product => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`https://instrument-shop-backend.herokuapp.com/api/products`, product, {
            headers: {
                'x-auth-token' : localStorage.get('token')
            }
        })
    }
}

export const patchProduct = (id, product) => {
    return {
        type: 'PATCH_PRODUCT',
        payload: axios.patch(`https://instrument-shop-backend.herokuapp.com/api/products/${id}`, product, {
            headers: {
                'x-auth-token': localStorage.get('token')
            }
        })
    }
}

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`https://instrument-shop-backend.herokuapp.com/api/products/${id}`, {
            headers: {
                'x-auth-token': localStorage.get('token')
            }
        })
    }
}
import axios from 'axios'

export const getProducts = (offset, limit) => {
    return {
        type : 'GET_PRODUCTS',
        payload : axios.get(`http://localhost:5000/api/products/${offset}/${limit}`)
    }
}

export const getAllProducts = () => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios.get(`http://localhost:5000/api/products`)
    }
}

export const getProductsByCategory = (category, offset, limit) => {
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios.get(`http://localhost:5000/api/products/category/${category}/${offset}/${limit}`)
    }
}

export const getProductDetails = product => {
    return {
        type: 'GET_PRODUCT_DETAILS',
        payload: axios.get(`http://localhost:5000/api/products/${product}`)
    }
}

export const getSearchProducts = (product, offset, limit) => {
    return {
        type: 'GET_SEARCH_PRODUCTS',
        payload: axios.get(`http://localhost:5000/api/products/search/${product}/${offset}/${limit}`)
    }
}

export const postProduct = product => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`http://localhost:5000/api/products`, product)
    }
}

export const patchProduct = (id, product) => {
    return {
        type: 'PATCH_PRODUCT',
        payload: axios.patch(`http://localhost:5000/api/products/${id}`, product)
    }
}

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`http://localhost:5000/api/products/${id}`)
    }
}
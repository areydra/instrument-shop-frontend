import axios from 'axios'

export const getProducts = (offset, limit) => {
    return {
        type : 'GET_PRODUCTS',
        payload : axios.get(`http://localhost:5000/api/products/${offset}/${limit}`)
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
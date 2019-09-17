import axios from 'axios'

export const getProducts = () => {
    return {
        type : 'GET_PRODUCTS',
        payload : axios.get('http://localhost:5000/api/products')
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
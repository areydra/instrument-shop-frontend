import axios from 'axios'

export const getRequestProducts = () => {
    return {
        type: 'GET_REQUEST_PRODUCTS',
        payload: axios.get(`http://localhost:5000/api/request-products`)
    }
}

export const getRequestProductsPaginate = (offset, limit) => {
    return {
        type: 'GET_REQUEST_PRODUCTS_PAGINATE',
        payload: axios.get(`http://localhost:5000/api/request-products/page/${offset}/${limit}`)
    }
}

export const postRequestProduct = request => {
    return {
        type: 'POST_REQUEST_PRODUCT',
        payload: axios.post(`http://localhost:5000/api/request-products`, request)
    }
}

export const deleteRequestProduct = id => {
    return {
        type: 'DELETE_REQUEST_PRODUCT',
        payload: axios.delete(`http://localhost:5000/api/request-products/${id}`)
    }
}

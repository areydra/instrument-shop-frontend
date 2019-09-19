import axios from 'axios'

export const postRequestProduct = request => {
    return {
        type: 'POST_REQUEST_PRODUCT',
        payload: axios.post(`http://localhost:5000/api/request-products`, request)
    }
}

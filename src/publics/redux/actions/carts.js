import axios from 'axios'

export const getCartsByUser = id_user => {
    return {
        type: 'GET_CARTS_BY_USER',
        payload: axios.get(`http://localhost:5000/api/carts/user/${id_user}`)
    }
}

export const getCartDetails = (id_user, id_product) => {
    return {
        type: 'GET_CART_DETAILS',
        payload: axios.get(`http://localhost:5000/api/carts/details/${id_user}/${id_product}`)
    }
}

export const postCart = product => {
    return {
        type : 'POST_CART',
        payload : axios.post(`http://localhost:5000/api/carts`, product)
    }
}

export const patchCarts = (id,product) => {
    return {
        type: 'PATCH_CARTS',
        payload: axios.patch(`http://localhost:5000/api/carts/${id}`, product)
    }
}

export const deleteCart = id => {
    return {
        type : 'DELETE_CART',
        payload : axios.delete(`http://localhost:5000/api/carts/${id}`)
    }
}

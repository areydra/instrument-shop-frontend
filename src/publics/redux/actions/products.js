import axios from 'axios'

export const getProducts = category => {
    return{
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios.get(`http://localhost:8000/api/products/category/${category}`)
    }
}

export const getProductDetails = name => {
    return {
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios.get(`http://localhost:8000/api/products/${name}`)
    }
}

export const postProduct = product => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`http://localhost:8000/api/products`, product)
    }
}

export const deleteProduct = (id, nameCategory) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`http://localhost:8000/api/products/${id}`).then(
            window.location = `/products/category/${nameCategory}`
        )
    }
}
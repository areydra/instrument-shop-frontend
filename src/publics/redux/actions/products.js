import axios from 'axios'

export const getProductsByCategory = category => {
    return{
        type: 'GET_PRODUCTS_BY_CATEGORY',
        payload: axios.get(`http://localhost:8000/api/products/category/${category}`)
    }
}

export const getAllProducts = () => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios.get(`http://localhost:8000/api/products`)
    }
}

export const getProductsPaginate = (offset, limit) => {
    return {
        type: 'GET_PRODUCTS_PAGINATE',
        payload: axios.get(`http://localhost:8000/api/products/page/${offset}/${limit}`)
    }
}

export const searchProducts = name => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: axios.get(`http://localhost:8000/api/products/search/${name}`)
    }
}

export const getProductsByBranchs = id_product => {
    return {
        type: 'GET_PRODUCTS_BY_BRANCHS',
        payload: axios.get(`http://localhost:8000/api/products/branchs/qty/${id_product}`)
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

export const postProductsBranchs = (data) => {
    return {
        type: 'POST_PRODUCTS_BRANCHS',
        payload: axios.post(`http://localhost:8000/api/products-branchs/qty`, data).then(
            )
        }
    }

export const deleteProduct = (id, nameCategory) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`http://localhost:8000/api/products/${id}`).then(
            window.location = `/products/category/${nameCategory}/page/1`
        )
    }
}
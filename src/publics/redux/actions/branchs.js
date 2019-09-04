import axios from 'axios'

export const getBranchs = () => {
    return{
        type: 'GET_BRANCHS',
        payload: axios.get('http://localhost:8000/api/branchs')
    }
}

export const getBranchsByProduct = id => {
    return {
        type: 'GET_BRANCHS_BY_PRODUCT',
        payload: axios.get(`http://localhost:8000/api/products-branchs/qty/${id}`)
    }
}
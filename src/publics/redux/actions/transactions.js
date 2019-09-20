import axios from 'axios'

export const getTransactions = (z) => {
    return {
        type: 'GET_TRANSACTIONS',
        payload: axios.get(`http://localhost:5000/api/transactions`)
    }
}

export const getTransactionsPaginate = (offset, limit) => {
    return {
        type: 'GET_TRANSACTIONS_PAGINATE',
        payload: axios.get(`http://localhost:5000/api/transactions/page/${offset}/${limit}`)
    }
}

export const getTransactionsByUser = id_user => {
    return {
        type: 'GET_TRANSACTIONS_BY_USER',
        payload: axios.get(`http://localhost:5000/api/transactions/user/${id_user}`)
    }
}

export const postTransaction = product => {
    return {
        type: 'POST_TRANSACTION',
        payload: axios.post(`http://localhost:5000/api/transactions`, product)
    }
}
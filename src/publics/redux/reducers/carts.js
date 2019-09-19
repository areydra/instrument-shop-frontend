const initialState = {
    carts: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const carts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARTS_BY_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_CARTS_BY_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_CARTS_BY_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                carts: action.payload.data.responses
            }

        case 'GET_CART_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_CART_DETAILS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_CART_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                carts: action.payload.data.responses
            }

        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'POST_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                carts: action.payload.data.responses
            }

        case 'PATCH_CARTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'PATCH_CARTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'PATCH_CARTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                carts: action.payload.data.responses
            }

        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'DELETE_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                carts: action.payload.data.data
            }

        default:
            return state
    }
}

export default carts
const initialState = {
    requestProducts: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const requestProducts = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_REQUEST_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'POST_REQUEST_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'POST_REQUEST_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                requestProducts: action.payload.data.responses
            }

        default:
            return state
    }
}

export default requestProducts
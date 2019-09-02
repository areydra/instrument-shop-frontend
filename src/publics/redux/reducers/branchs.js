const initialState = {
    branchs : [],
    isLoading: false,
    isRejected : false,
    isFulfilled: false
}

const branchs = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BRANCHS_PENDING':
                return {
                    ...state,
                    isLoading: true,
                    isRejected: false,
                    isFulfilled: false
                }
    
        case 'GET_BRANCHS_REJECTED':
                return {
                    ...state,
                    isLoading: false,
                    isRejected: true
                }

        case 'GET_BRANCHS_FULFILLED':
                return {
                    ...state,
                    isLoading: true,
                    isFulfilled: true,
                    branchs: action.payload.data.response
                }

        default:
            return state
    }
}

export default branchs
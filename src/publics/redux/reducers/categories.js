const initialState = {
    categories : [],
    isLoading : false,
    isRejected : false,
    isFulfilled : false
}

const categories = (state = initialState, action) => {
    switch (action.type) {

        // ============================================================
        //                    GET DATA CATEGORY
        // ============================================================
        case 'GET_CATEGORIES_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categories: action.payload.data.response
            }

        // ============================================================
        //                    POST DATA CATEGORY
        // ============================================================
        case 'POST_CATEGORY_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    
        case 'POST_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'POST_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                // categories: {...categories,...action.payload.data.data}
            }            

        // ============================================================
        //                    POST DATA CATEGORY
        // ============================================================
        case 'GET_CATEGORY_DETAIL_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    
        case 'GET_CATEGORY_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_CATEGORY_DETAIL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                categories: action.payload.data.response
            }            

        default:
            return state
    }
}

export default categories
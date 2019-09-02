    const initialState = {
    products : [],
    isLoading : false,
    isFulfilled : false,
    isRejected : false,
    nameCategory: ''
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_BY_CATEGORY_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'GET_PRODUCTS_BY_CATEGORY_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'GET_PRODUCTS_BY_CATEGORY_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                products: action.payload.data.response
            }

        case 'GET_PRODUCTS_BY_BRANCHS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'GET_PRODUCTS_BY_BRANCHS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'GET_PRODUCTS_BY_BRANCHS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                products: action.payload.data.response
            }

        case 'GET_PRODUCT_DETAILS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'GET_PRODUCT_DETAILS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'GET_PRODUCT_DETAILS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                products: action.payload.data.response
            }

        case 'DELETE_PRODUCT_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'DELETE_PRODUCT_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'DELETE_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                // products: action.payload.data.response
            }


        case 'POST_PRODUCT_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'POST_PRODUCT_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'POST_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                // products: action.payload.data.response
            }

        case 'POST_PRODUCTS_BRANCHS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }    

        case 'POST_PRODUCTS_BRANCHS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }

        case 'POST_PRODUCTS_BRANCHS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                // products: action.payload.data.response
            }


        default:
            return state
    }
}

export default products
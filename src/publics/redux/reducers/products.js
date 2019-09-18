const initialState = {
    products : [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const products = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_PENDING' :
            return{
                ...state,
                isLoading : true,
                isRejected : false,
                isFulfilled : false
            }
        case 'GET_PRODUCTS_REJECTED' :
            return{
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'GET_PRODUCTS_FULFILLED' :
            return{
                ...state,
                isLoading : false,
                isFulfilled : true,
                products : action.payload.data.responses
            }

        case 'GET_PRODUCTS_BY_CATEGORY_PENDING' :
            return{
                ...state,
                isLoading : true,
                isRejected : false,
                isFulfilled : false
            }
        case 'GET_PRODUCTS_BY_CATEGORY_REJECTED' :
            return{
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'GET_PRODUCTS_BY_CATEGORY_FULFILLED' :
            return{
                ...state,
                isLoading : false,
                isFulfilled : true,
                products : action.payload.data.responses
            }

        case 'GET_PRODUCT_DETAILS_PENDING' :
            return{
                ...state,
                isLoading : true,
                isRejected : false,
                isFulfilled : false
            }
        case 'GET_PRODUCT_DETAILS_REJECTED' :
            return{
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'GET_PRODUCT_DETAILS_FULFILLED' :
            return{
                ...state,
                isLoading : false,
                isFulfilled : true,
                products : action.payload.data.responses
            }

        case 'GET_SEARCH_PRODUCTS_PENDING' :
            return{
                ...state,
                isLoading : true,
                isRejected : false,
                isFulfilled : false
            }
        case 'GET_SEARCH_PRODUCTS_REJECTED' :
            return{
                ...state,
                isLoading : false,
                isRejected : true
            }
        case 'GET_SEARCH_PRODUCTS_FULFILLED' :
            return{
                ...state,
                isLoading : false,
                isFulfilled : true,
                products : action.payload.data.responses
            }

        default: 
            return state
    }
}

export default products
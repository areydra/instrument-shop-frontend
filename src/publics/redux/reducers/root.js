import { combineReducers } from 'redux'

import auth from './auth'
import products from './products'
import categories from './categories'

const reducers = combineReducers({
    auth,
    products,
    categories
})

export default reducers
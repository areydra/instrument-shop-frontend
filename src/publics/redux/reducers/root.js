import { combineReducers } from 'redux'

import auth from './auth'
import carts from './carts'
import products from './products'
import wishlists from './wishlists'
import categories from './categories'

const reducers = combineReducers({
    auth,
    carts,
    products,
    wishlists,
    categories
})

export default reducers
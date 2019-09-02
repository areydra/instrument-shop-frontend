import {combineReducers} from 'redux'
import products from './products'
import categories from './categories'
import branchs from './branchs'

const reducers = combineReducers({
    products,
    branchs,
    categories
})

export default reducers
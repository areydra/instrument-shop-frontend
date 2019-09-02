import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import reducers from './reducers/root'

const logger = createLogger() //membuat logger agar setiap ada perubahan tampil di console log
const store = createStore(
    reducers, //membuat store dari reducers root
    applyMiddleware(logger, promiseMiddleware) //menambahkan middleware logger dan promiseMiddlewar agar setiap store/reducers dipanggil akan menampilkan logger
) 

export default store 
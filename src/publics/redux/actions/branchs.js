import axios from 'axios'

export const getBranchs = () => {
    return{
        type: 'GET_BRANCHS',
        payload: axios.get('http://localhost:8000/api/branchs')
    }
}
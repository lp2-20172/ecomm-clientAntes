import axios from 'axios'

export const USER_LIST = "USER_LIST"

const getList = (q='') => {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/users?q='+q)
            .then((r) => {
                dispatch({
                    "type": USER_LIST,
                    list: r.data
                })
            })
    }
}

export { getList }
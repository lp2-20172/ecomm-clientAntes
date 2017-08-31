import { USER_LIST } from '../actions/userAction'
const initialState ={
    list:[]
}

const userReducers = (state=initialState, action) => {
    switch(action.type) {
        case USER_LIST: return {
            ...state,
            list:action.list
        }
        default: return state
    }
}

export default userReducers
import { INCREMENT, DECREMENT } from '../actions/counterAction'
const initialState ={
    n:0
}

const counter = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: return {
            ...state,
            n: action.n+1
        }
        case DECREMENT: return {
            ...state,
            n: action.n-1
        }
        default: return state
    }
}

export default counter
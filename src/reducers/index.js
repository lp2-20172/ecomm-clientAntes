import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import user from './userReducer'


var reducers = combineReducers({
    counter: counterReducer,
    user: user,

});

export default reducers;
import {combineReducers} from 'redux'

import counterReducer from './counterReducer'


var reducers = combineReducers({
    counter: counterReducer,

});

export default reducers;
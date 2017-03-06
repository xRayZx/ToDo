import combineReducers from 'redux';
import todosReducer from './todos_reducer.js';

const rootReducer = combineReducers(todosReducer);

export default rootReducer;

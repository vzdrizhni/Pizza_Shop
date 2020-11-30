import { combineReducers } from 'redux';
import pizzasReducer from './pizzas.reducer'

const reducer = combineReducers({ pizzas: pizzasReducer });

export default reducer;
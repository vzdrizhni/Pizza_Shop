import { combineReducers } from 'redux';
import pizzasReducer from './pizzas.reducer'
import numberOfPizzasReducer from './numberOfPizzas.reducer'

const reducer = combineReducers({ pizzas: pizzasReducer, number: numberOfPizzasReducer});

export default reducer;
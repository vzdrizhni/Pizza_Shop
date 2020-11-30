import {
    combineReducers
} from 'redux';
import pizzasReducer from './pizzas.reducer'
import numberOfPizzasReducer from './numberOfPizzas.reducer'
import addToCartReducer from './addToCartReducer'
import clearFieldReducer from './clearFieldReducer'

const reducer = combineReducers({
    pizzas: pizzasReducer,
    number: numberOfPizzasReducer,
    cart: addToCartReducer,
    clearField: clearFieldReducer
});

export default reducer;
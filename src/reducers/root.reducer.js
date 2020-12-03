import {
    combineReducers
} from 'redux';
import pizzasReducer from './pizzas.reducer'
import numberOfPizzasReducer from './numberOfPizzas.reducer'
import addToCartReducer from './addToCartReducer'
import clearFieldReducer from './clearFieldReducer'
import priceReducer from './priceReducer'

const reducer = combineReducers({
    pizzas: pizzasReducer,
    number: numberOfPizzasReducer,
    cart: addToCartReducer,
    clearField: clearFieldReducer,
    price: priceReducer
});

export default reducer;
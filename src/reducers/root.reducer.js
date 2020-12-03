import {
    combineReducers
} from 'redux';
import pizzasReducer from './pizzas.reducer'
import addToCartReducer from './addToCartReducer'
import priceReducer from './priceReducer'

const reducer = combineReducers({
    pizzas: pizzasReducer,
    cart: addToCartReducer,
    price: priceReducer
});

export default reducer;
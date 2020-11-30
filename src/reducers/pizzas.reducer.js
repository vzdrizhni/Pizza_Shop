import { pizzasList } from '../data/PizzaList'

const pizzasReducer = (state = pizzasList.pizzas, action) => {
    switch (action.type) {
        case 'GETPIZZAS':
            return [...state];
        default:
            return state;
    }
};

export default pizzasReducer;
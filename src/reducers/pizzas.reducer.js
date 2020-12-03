import { pizzasList } from '../data/PizzaList'
import produce from "immer"

const pizzasReducer = (state = pizzasList.pizzas, action) => {
    switch (action.type) {
        case 'GETPIZZAS':
            return [...state];
        case 'CHANGECURRENCY':
            if(action.value === '2') {
                return produce(state, draft => {
                    draft.map(item => {
                        return (
                            item.currency = '\u20A0',
                            item.price *= 0.8
                            )
                    })
                })
            } else {
                return produce(state, draft => {
                    draft.map(item => {
                        return item.currency = '\u0024',
                        item.price *= 1.25
                    })
                })
            }
        default:
            return state;
    }
};

export default pizzasReducer;
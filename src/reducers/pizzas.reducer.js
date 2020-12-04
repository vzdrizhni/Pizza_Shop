import {pizzasList} from '../data/PizzaList'
import produce from "immer"

const pizzasReducer = (state = pizzasList.pizzas, action) => {
  let index;
  if (action.value) {
    index = state.findIndex(obj => {
      return obj.title === action.value.title
        ? true
        : false
    })
  }
  switch (action.type) {
    case 'GETPIZZAS':
      return [...state];
    case 'CHANGECURRENCY':
      if (action.value === '2') {
        return produce(state, draft => {
          draft.map(item => {
            return (item.currency = '\u20A0', item.price *= 0.8)
          })
        })
      } else {
        return produce(state, draft => {
          draft.map(item => {
            return (item.currency = '\u0024',
            item.price *= 1.25)
          })
        })
      }
    case 'INCREASEPIZZAS':
      return produce(state, draft => {
        draft[index].number += 1
      });
    case 'DECREASEPIZZAS':
      return produce(state, draft => {
        draft[index].number -= 1
      });
    case 'CLEAR':
      return produce(state, draft => {
        draft[index].number = 0
      });
    default:
      return state;
  }
};

export default pizzasReducer;
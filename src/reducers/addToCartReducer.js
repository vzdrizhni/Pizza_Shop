import produce from "immer"

const addToCartReducer = (state = [], action) => {

  let index;
  if(action.value) {
      index = state.findIndex(obj => {
        return obj.title === action.value.title ? true : false
      }
    )
  }

  switch (action.type) {
    case 'ADDTOCART':
      if (state.some((pizza, index) => pizza.title === action.value.title)) {
        return produce(state, draft => {draft[index].number += action.value.number});
      } else {
        return [...state, action.value];
      }
      case 'DECREASE':
        return produce(state, draft => {
          draft[index].number -= 1
        })
      case 'INCREASE':
        return produce(state, draft => {
          draft[index].number += 1
        })
      case 'REMOVE':
        return produce(state, draft => {
          draft.splice(index, 1)
        })
      case 'CLEARSTATE':
        return []
      default:
        return state;
  }
};

export default addToCartReducer
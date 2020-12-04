import produce from "immer"

const addToCartReducer = (state = [], action) => {

  let index;
  if (action.value) {
    index = state.findIndex(obj => {
      return obj.title === action.value.title
        ? true
        : false
    })
  }

  switch (action.type) {
    case 'ADDTOCART':
      if (state.some((pizza, index) => pizza.title === action.value.title)) {
        return produce(state, draft => {
          draft[index].number += action.value.number
        });
      } else {
        return [
          ...state,
          action.value
        ];
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
      return produce(state, draft => draft = [])
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
            return item.currency = '\u0024',
            item.price *= 1.25
          })
        })
      }
    default:
      return state;
  }
};

export default addToCartReducer
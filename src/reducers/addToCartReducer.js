const addToCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADDTOCART':
        // console.log(action.value);
        if(state.some((pizza, index) => {
          console.log(pizza);
          return pizza.title === action.value.title ? state[index].number += action.value.number : undefined;
        })){
          console.log(state);
        } else{
          return [...state, action.value];
        }
      default:
        return state;
      }
};

export default addToCartReducer
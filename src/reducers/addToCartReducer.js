const addToCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADDTOCART':
        console.log(action.value);
        // if(state.some(pizza => pizza.title === action.value.title)){
        //   return [...{...state, ...action.value}]
        // } else{
        //   return [...state, action.value];
        // }
        return [...state, action.value]
      default:
        return state;
    }
};

export default addToCartReducer
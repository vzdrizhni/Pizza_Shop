const addToCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADDTOCART':
        console.log(action);
        return [...state, action.value];
      default:
        return state;
    }
};

export default addToCartReducer
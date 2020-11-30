import AddToCart from "../components/AddToCart/AddToCart";

const addToCartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADDTOCART':
        console.log(action);
        return [...state, action];
      default:
        return state;
    }
};

export default addToCartReducer
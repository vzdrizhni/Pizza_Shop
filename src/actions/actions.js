export const getPizzas = () => ({ type: 'GETPIZZAS' });
export const getNumberOfPizzas = (value) => ({ type: 'COUNTPIZZAS', value});
export const addToCartAction = (value) => ({ type: 'ADDTOCART', value});
export const clearField = (value) => ({ type: 'CLEAR', value});


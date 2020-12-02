export const getPizzas = () => ({ type: 'GETPIZZAS' });
export const getNumberOfPizzas = (value) => ({ type: 'COUNTPIZZAS', value});
export const addToCartAction = (value) => ({ type: 'ADDTOCART', value});
export const clearField = (value) => ({ type: 'CLEAR', value});
export const changeNumber = (value) => ({ type: 'DECREASE', value});
export const increaseNumber = (value) => ({ type: 'INCREASE', value});
export const remove = (value) => ({ type: 'REMOVE', value});
export const clearState = () => ({ type: 'CLEARSTATE'});


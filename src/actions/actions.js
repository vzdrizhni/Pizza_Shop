export const getPizzas = () => ({ type: 'GETPIZZAS' });
export const increaseNumberOfPizzas = (value) => ({ type: 'INCREASEPIZZAS', value});
export const decreaseNumberOfPizzas = (value) => ({ type: 'DECREASEPIZZAS', value});
export const addToCartAction = (value) => ({ type: 'ADDTOCART', value});
export const clearField = (value) => ({ type: 'CLEAR', value});
export const changeNumber = (value) => ({ type: 'DECREASE', value});
export const increaseNumber = (value) => ({ type: 'INCREASE', value});
export const remove = (value) => ({ type: 'REMOVE', value});
export const clearthestate = () => ({ type: 'CLEARSTATE'});
export const changeCurrency = (value) => ({ type: 'CHANGECURRENCY', value});
export const priceCarrier = (value) => ({ type: 'DELIVER', value});


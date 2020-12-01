const numberOfPizzasReducer = (state = 0, action) => {
    switch (action.type) {
      case 'COUNTPIZZAS':
        return {...action.value};
      default:
        return state;
    }
};

export default numberOfPizzasReducer;
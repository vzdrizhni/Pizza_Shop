const numberOfPizzasReducer = (state = 0, action) => {
    switch (action.type) {
      case 'COUNTPIZZAS':
        console.log(action);
        return {...action};
      default:
        return state;
    }
};

export default numberOfPizzasReducer;
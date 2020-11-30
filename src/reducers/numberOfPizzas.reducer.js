const numberOfPizzasReducer = (state = 0, action) => {
    switch (action.type) {
      case 'COUNTPIZZAS':
        // action.value.number += 1;
        console.log({...action.value});
        return {...action.value};
      default:
        return state;
    }
};

export default numberOfPizzasReducer;
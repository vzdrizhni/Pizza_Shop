const priceReducer = (state = 0, action) => {
    switch (action.type) {
      case 'DELIVER':
        return action.value;
      default:
        return state;
    }
};

export default priceReducer;
const clearFieldReducer = (state = 0, action) => {
    switch (action.type) {
      case 'CLEAR':
        return {...action};
      default:
        return state;
    }
};

export default clearFieldReducer
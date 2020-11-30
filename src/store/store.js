import { createStore } from 'redux';
import reducer from '../reducers/root.reducer'

const store = createStore(reducer);

export default store;
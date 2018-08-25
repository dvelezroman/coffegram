import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../Reducers/index';


const miMiddleware = store => next => (action) => {
  console.log('Se ejecuta el middleware');
  next(action);
}

const store = createStore(RootReducer, applyMiddleware(miMiddleware));

export default store;
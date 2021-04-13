import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // redux-immutable-state-invariant will alert us whenever we mutate the state
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

import { combineReducers, createStore } from 'redux';
import { myReducer } from '../reducers';

const rootReducer = combineReducers({
  data: myReducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

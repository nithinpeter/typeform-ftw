import { createStore } from 'redux';
import { app } from './reducer';
const store = createStore(
  app,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

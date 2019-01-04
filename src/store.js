import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/root';

const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(
  thunk,
));
const persistor = persistStore(store);

export { store, persistor };
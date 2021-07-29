import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'rootStore',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export interface StoreState {

}

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}

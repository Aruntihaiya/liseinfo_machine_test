import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { pokemonReducer } from './reducers/pokemonReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  pokemon: pokemonReducer,  // Combine reducers here if you have more
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };

import storage from 'redux-persist/lib/storage'; 
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './userSlice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user', 'isAuthenticated', 'accessToken' ],
};



const persistedUserReducer = persistReducer(persistConfig, userReducer);


const store = configureStore({
  reducer: {
    user: persistedUserReducer,

  },
});

const persistor = persistStore(store);

export { store, persistor };
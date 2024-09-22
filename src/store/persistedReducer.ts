import { combineReducers } from '@reduxjs/toolkit';
import { commonSlice } from 'common/commonSlice';
import { authSlice } from 'pages/Auth/store/AuthSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
  blacklist: [''],
};

export const rootReducer = combineReducers({
  common: commonSlice.reducer,
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

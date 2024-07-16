import loginReducer from "./loginRedux";
import doubtReducer from './doubtRedux'
import {persistStore,persistReducer} from 'redux-persist'
// rootReducer.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
const persistConfig={key:"root",storage}

const rootReducer = combineReducers({
  user: loginReducer, 
  doubts: doubtReducer,// Add other reducers here if you have them
});
const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({reducer:persistedReducer})
export let persistor=persistStore(store);



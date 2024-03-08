import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import loginReducer from './slices/loginSlice';
import breadcrumbReducer from './slices/breadcrumbSlice';
import employeeReducer from './slices/employeeSlice';
import salaryComponentReducer from './slices/salaryComponentSlice';
import basicReducer from './slices/basicSlices';
import divisionReducer from './slices/divisionSlices';



const isClient = typeof window !== "undefined";

import { combineReducers } from "redux";

const persistConfig ={
    key : "root",
    // storage :AsyncStorage
     storage 
}

const reducer = combineReducers({
    // put all your reducers here!
    loginReducer :  loginReducer,
    breadcrumbReducer : breadcrumbReducer,
    employeeReducer : employeeReducer,
    salaryComponentReducer : salaryComponentReducer,
    basicReducer : basicReducer,
    divisionReducer : divisionReducer
    
});



const persistedReducer =  persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 

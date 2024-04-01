import { configureStore } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import loginReducer from './slices/loginSlice';
import breadcrumbReducer from './slices/breadcrumbSlice';
import employeeReducer from './slices/employeeSlice';
import salaryComponentReducer from './slices/salaryComponentSlice';
import basicReducer from './slices/basicSlices';
import divisionReducer from './slices/divisionSlices';
import masterReducer from './slices/masterSlices';
import departmentReducer from './slices/departmentSlice';
import designationReducer from './slices/designationSlice';
import locationReducer from './slices/locationSlice';
import bankReducer from './slices/bankSlice';
import employementReducer from './slices/employementSlice';



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
    divisionReducer : divisionReducer,
    masterReducer : masterReducer,
    departmentReducer : departmentReducer,
    designationReducer : designationReducer,
    locationReducer : locationReducer,
    bankReducer : bankReducer,
    employementReducer : employementReducer
    
});



const persistedReducer =  persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 
